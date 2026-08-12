"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import type { Destination } from "@/types";
import { destinationLabels } from "@/types";
import { useCart } from "@/context/CartContext";
import { BoltIcon } from "./BoltIcon";

const destinations: Destination[] = ["google", "social", "survey"];

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [destination, setDestination] = useState<Destination>("google");
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      productId: product.id,
      name: product.name,
      unitPrice: product.price,
      quantity,
      destination,
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  };

  return (
    <div className="flex flex-col rounded-2xl border border-line bg-paper overflow-hidden h-full">
      <div className="relative aspect-[4/3] bg-paper-dim flex items-center justify-center">
        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-graphite/50">
            <BoltIcon size={28} />
            <span className="text-xs font-medium">Image coming soon</span>
          </div>
        )}
        {product.badge && (
          <span className="absolute top-3 left-3 rounded-full bg-zap-yellow text-ink text-xs font-bold px-3 py-1">
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-lg">{product.name}</h3>
        <p className="mt-1.5 text-sm text-graphite leading-relaxed">
          {product.tagline}
        </p>

        {product.includes && (
          <ul className="mt-3 space-y-1.5">
            {product.includes.map((inc) => (
              <li key={inc} className="text-sm text-ink/80 flex gap-2">
                <span className="text-zap-yellow-deep">•</span>
                {inc}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex items-baseline gap-2">
          <span className="font-display text-2xl font-bold">
            ${product.price.toFixed(2)}
          </span>
          {product.compareAtPrice && (
            <span className="text-graphite line-through text-sm">
              ${product.compareAtPrice.toFixed(2)}
            </span>
          )}
          <span className="text-graphite text-xs">/ {product.unitLabel}</span>
        </div>

        <div className="mt-5">
          <label className="text-xs font-semibold text-graphite uppercase tracking-wide">
            This card is for
          </label>
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            {destinations.map((d) => (
              <button
                key={d}
                onClick={() => setDestination(d)}
                className={`rounded-lg border px-2 py-2 text-xs font-medium transition-colors ${
                  destination === d
                    ? "border-ink bg-ink text-paper"
                    : "border-line text-ink/70 hover:border-ink/40"
                }`}
              >
                {destinationLabels[d]}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="inline-flex items-center border border-line rounded-full">
            <button
              aria-label="Decrease quantity"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-9 h-9 flex items-center justify-center text-lg"
            >
              −
            </button>
            <span className="w-8 text-center font-medium">{quantity}</span>
            <button
              aria-label="Increase quantity"
              onClick={() => setQuantity((q) => q + 1)}
              className="w-9 h-9 flex items-center justify-center text-lg"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAdd}
            className={`flex-1 inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm px-4 py-2.5 transition-colors ${
              justAdded
                ? "bg-zap-yellow text-ink"
                : "bg-ink text-paper hover:bg-zap-yellow hover:text-ink"
            }`}
          >
            {justAdded ? "Added ✓" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
