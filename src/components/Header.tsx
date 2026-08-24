"use client";

import Link from "next/link";
import { useState } from "react";
import { LogoCompact } from "./Logo";
import { useCart } from "@/context/CartContext";

const links = [
  { href: "/#demo", label: "See it work" },
  { href: "/#products", label: "Cards" },
  { href: "/#guarantee", label: "Guarantee" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  const { count, openCart } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <LogoCompact />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-neutral-600 transition hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={openCart}
            className="relative rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-ink transition hover:border-ink"
          >
            Cart
            {count > 0 && (
              <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-ink px-1.5 text-xs font-bold text-white">
                {count}
              </span>
            )}
          </button>

          <Link
            href="/#products"
            className="hidden rounded-full bg-ink px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800 sm:block"
          >
            See the cards
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
            className="rounded-full border border-neutral-300 p-2 md:hidden"
          >
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="mt-1 block h-0.5 w-5 bg-ink" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-neutral-200 px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-base font-medium text-neutral-700"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
