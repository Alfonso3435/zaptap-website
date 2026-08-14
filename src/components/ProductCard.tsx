"use client";

import { useState } from "react";
import ZapMark from "./ZapMark";
import { useCart } from "@/context/CartContext";
import { DISCOUNT_REASON } from "@/data/products";
import type { Destination, Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [destination, setDestination] = useState<Destination>(product.defaultDestination);

  const otherDestinations = product.destinations.filter((d) => d !== "google");

  return (
    <div className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition hover:border-ink">
      {product.badge && (
        <span className="mb-4 self-start rounded-full bg-zap px-3 py-1 font-display text-xs font-bold text-ink">
          {product.badge}
        </span>
      )}

      {/*
        TODO(Poncho): replace this placeholder with a real photo at product.image.
        Card in a hand, on a counter, next to a phone. Until then this is a brand
        block rather than a sign that says the product does not exist yet.
      */}
      <div className="flex aspect-4/3 items-center justify-center rounded-xl bg-neutral-100">
        <ZapMark className="h-12 w-12 text-neutral-400" />
      </div>

      <h3 className="mt-6 font-display text-xl font-bold text-ink">{product.name}</h3>
      <p className="mt-1 text-sm text-neutral-500">{product.subtitle}</p>
      <p className="mt-4 text-base leading-relaxed text-neutral-700">{product.description}</p>

      {product.includes && (
        <ul className="mt-4 space-y-1.5 text-sm text-neutral-700">
          {product.includes.map((line) => (
            <li key={line} className="flex gap-2">
              <span className="text-zap-dark">&bull;</span>
              {line}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex flex-wrap items-baseline gap-x-3">
        <span className="font-display text-3xl font-bold text-ink">
          ${product.price.toFixed(2)}
        </span>
        {product.compareAt && (
          <span className="text-base text-neutral-400 line-through">
            ${product.compareAt.toFixed(2)}
          </span>
        )}
        <span className="text-sm text-neutral-500">/ {product.unit}</span>
      </div>

      {product.compareAt && (
        <p className="mt-1.5 text-xs font-medium text-neutral-500">{DISCOUNT_REASON}</p>
      )}

      {/*
        Google is the default and the only destination shown as a control.
        Social and the internal feedback form are a footnote on purpose:
        three equal-weight buttons can read as review gating, and that is a
        policy risk for the customer's Google profile, not just ours.
      */}
      <p className="mt-5 text-xs leading-relaxed text-neutral-500">
        Points to your Google review page.{" "}
        {otherDestinations.length > 0 && (
          <>
            It can also point to your social profile or an internal feedback form
            for staff and events, and you can change it any time.
          </>
        )}
      </p>

      {otherDestinations.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {product.destinations.map((d) => (
            <button
              key={d}
              onClick={() => setDestination(d)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                destination === d
                  ? "border-ink bg-ink text-white"
                  : "border-neutral-300 text-neutral-600 hover:border-ink"
              }`}
            >
              {d === "google" ? "Google reviews" : d === "social" ? "Social" : "Feedback form"}
            </button>
          ))}
        </div>
      )}

      <div className="mt-6 flex items-center gap-3 border-t border-neutral-200 pt-5">
        <div className="flex items-center rounded-full border border-neutral-300">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            className="px-3.5 py-2 text-lg leading-none text-neutral-600"
          >
            &minus;
          </button>
          <span className="min-w-6 text-center text-sm font-semibold">{qty}</span>
          <button
            onClick={() => setQty((q) => q + 1)}
            aria-label="Increase quantity"
            className="px-3.5 py-2 text-lg leading-none text-neutral-600"
          >
            +
          </button>
        </div>

        <button
          onClick={() => add(product, qty, destination)}
          className="flex-1 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
        >
          Get my custom cards
        </button>
      </div>
    </div>
  );
}
