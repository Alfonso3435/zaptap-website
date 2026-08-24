"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { DESTINATION_LABELS } from "@/types";
import { fbTrack } from "@/lib/fpixel";

export default function CartDrawer() {
  const { items, total, isOpen, closeCart, setQuantity, remove, clear } = useCart();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  async function handleCheckout() {
    setError(null);
    setIsRedirecting(true);

    // Shared event ID: same value goes to the browser Pixel call below AND
    // to the server (which uses it for the matching Conversions API call in
    // /api/checkout). Meta deduplicates on this ID instead of counting the
    // conversion twice.
    const eventId =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `ic_${Date.now()}_${Math.random().toString(36).slice(2)}`;

    fbTrack(
      "InitiateCheckout",
      {
        value: total,
        currency: "USD",
        num_items: items.reduce((n, i) => n + i.quantity, 0),
      },
      eventId
    );

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            productId: i.productId,
            quantity: i.quantity,
            destination: i.destination,
          })),
          eventId,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "Something went wrong.");
      }
      window.location.href = data.url;
    } catch {
      setError("Couldn't start checkout. Try again in a moment.");
      setIsRedirecting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={closeCart}
        aria-hidden
      />

      <aside
        role="dialog"
        aria-label="Cart"
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-xl"
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-5">
          <h2 className="font-display text-lg font-bold text-ink">Your order</h2>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="rounded-full border border-neutral-300 px-3 py-1 text-sm"
          >
            Close
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div>
              <p className="text-base text-neutral-700">Nothing in here yet.</p>
              <button
                onClick={closeCart}
                className="mt-4 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white"
              >
                See the cards
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li
                  key={`${item.productId}-${item.destination}`}
                  className="border-b border-neutral-200 pb-6"
                >
                  <div className="flex justify-between gap-4">
                    <div>
                      <p className="font-display font-bold text-ink">{item.name}</p>
                      <p className="mt-1 text-xs text-neutral-500">
                        Points to {DESTINATION_LABELS[item.destination]}
                      </p>
                    </div>
                    <p className="font-display font-bold text-ink">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex items-center rounded-full border border-neutral-300">
                      <button
                        onClick={() =>
                          setQuantity(item.productId, item.destination, item.quantity - 1)
                        }
                        aria-label="Decrease quantity"
                        className="px-3 py-1.5 text-lg leading-none text-neutral-600"
                      >
                        &minus;
                      </button>
                      <span className="min-w-6 text-center text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          setQuantity(item.productId, item.destination, item.quantity + 1)
                        }
                        aria-label="Increase quantity"
                        className="px-3 py-1.5 text-lg leading-none text-neutral-600"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => remove(item.productId, item.destination)}
                      className="text-sm text-neutral-500 underline underline-offset-4"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-neutral-200 px-6 py-6">
            <div className="flex justify-between">
              <span className="text-base text-neutral-700">Total</span>
              <span className="font-display text-2xl font-bold text-ink">
                ${total.toFixed(2)}
              </span>
            </div>

            <p className="mt-2 text-xs leading-relaxed text-neutral-500">
              Free shipping. Free custom design. One payment, no subscription.
            </p>

            <button
              onClick={handleCheckout}
              disabled={isRedirecting}
              className="mt-5 block w-full rounded-full bg-ink px-6 py-3.5 text-center text-base font-semibold text-white transition hover:bg-neutral-800 disabled:opacity-60"
            >
              {isRedirecting ? "Redirecting to payment..." : "Pay now"}
            </button>

            {error && (
              <p className="mt-3 text-center text-xs font-medium text-red-600">
                {error}
              </p>
            )}

            <p className="mt-3 text-xs leading-relaxed text-neutral-500">
              You&apos;ll enter your phone number and Google review link on the
              next screen. We&apos;ll text you to confirm your design and get
              your logo — nothing ships until you approve it.
            </p>

            <button
              onClick={clear}
              className="mt-4 w-full text-sm text-neutral-500 underline underline-offset-4"
            >
              Empty the cart
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
