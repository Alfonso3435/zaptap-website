"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { destinationLabels } from "@/types";

const PHONE_NUMBER = "+14256528532";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } =
    useCart();
  const [phone, setPhone] = useState("");

  const buildOrderMessage = () => {
    const lines = items.map(
      (i) =>
        `- ${i.quantity}x ${i.name} (${destinationLabels[i.destination]}) $${(
          i.unitPrice * i.quantity
        ).toFixed(2)}`
    );
    const body = [
      "Hi ZapTap, I'd like to place this order:",
      ...lines,
      `Total: $${totalPrice.toFixed(2)}`,
      phone ? `My number for order updates: ${phone}` : "",
    ]
      .filter(Boolean)
      .join(" ");
    return encodeURIComponent(body);
  };

  const checkoutHref = `sms:${PHONE_NUMBER}?&body=${buildOrderMessage()}`;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-ink/40 z-50"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-paper z-50 shadow-2xl transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-line">
          <h2 className="font-display font-semibold text-lg flex items-center gap-2">
            <CartGlyph /> Your cart
          </h2>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="w-8 h-8 flex items-center justify-center text-graphite hover:text-ink"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-3 py-16">
              <span className="w-16 h-16 rounded-full bg-paper-dim flex items-center justify-center">
                <CartGlyph size={22} />
              </span>
              <p className="font-display font-semibold">
                You haven&apos;t added anything yet
              </p>
              <p className="text-sm text-graphite max-w-[220px]">
                Pick a product and tell us what you&apos;ll use it for.
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.lineId}
                  className="rounded-xl border border-line p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-display font-semibold text-sm">
                        {item.name}
                      </p>
                      <p className="text-xs text-graphite mt-0.5">
                        {destinationLabels[item.destination]}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.lineId)}
                      aria-label={`Remove ${item.name}`}
                      className="text-graphite hover:text-ink shrink-0"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="inline-flex items-center border border-line rounded-full">
                      <button
                        onClick={() =>
                          updateQuantity(item.lineId, item.quantity - 1)
                        }
                        className="w-7 h-7 flex items-center justify-center text-sm"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="w-7 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.lineId, item.quantity + 1)
                        }
                        className="w-7 h-7 flex items-center justify-center text-sm"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-display font-semibold text-sm">
                      ${(item.unitPrice * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-line px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-graphite text-sm">Total</span>
              <span className="font-display text-2xl font-bold">
                ${totalPrice.toFixed(2)} <span className="text-sm font-normal text-graphite">USD</span>
              </span>
            </div>

            <div>
              <label htmlFor="cart-phone" className="text-xs font-semibold text-graphite">
                Phone number for order updates
              </label>
              <input
                id="cart-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="10-digit number"
                className="mt-1.5 w-full rounded-lg border border-line px-3.5 py-2.5 text-sm focus:border-ink outline-none"
              />
            </div>

            <a
              href={checkoutHref}
              className="flex items-center justify-center rounded-full bg-zap-yellow text-ink font-semibold py-3.5 hover:bg-zap-yellow-deep transition-colors"
            >
              Send order by text message
            </a>
            <p className="text-[11px] text-graphite text-center leading-relaxed">
              Free shipping · Delivered in under 48 hours
            </p>
          </div>
        )}
      </aside>
    </>
  );
}

function CartGlyph({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 8H6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="21" r="1.4" fill="currentColor" />
      <circle cx="18" cy="21" r="1.4" fill="currentColor" />
    </svg>
  );
}
