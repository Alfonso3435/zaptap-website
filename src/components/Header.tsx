"use client";

import { useState } from "react";
import Link from "next/link";
import { LogoCompact } from "./Logo";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#products", label: "Products" },
  { href: "#why-zaptap", label: "Why ZapTap" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const { totalItems, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="container-page flex items-center justify-between h-16">
        <Link href="/" className="shrink-0">
          <LogoCompact />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={openCart}
            aria-label="Open cart"
            className="relative inline-flex items-center justify-center w-10 h-10 rounded-full border border-line hover:border-ink transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center min-w-[20px] h-5 px-1 rounded-full bg-zap-yellow text-ink text-[11px] font-bold border border-ink">
                {totalItems}
              </span>
            )}
          </button>

          <a
            href="#products"
            className="hidden sm:inline-flex items-center rounded-full bg-ink text-paper text-sm font-semibold px-5 py-2.5 hover:bg-zap-yellow hover:text-ink transition-colors"
          >
            Shop products
          </a>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-line bg-paper">
          <nav className="container-page flex flex-col py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 text-sm font-medium text-ink/80"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
