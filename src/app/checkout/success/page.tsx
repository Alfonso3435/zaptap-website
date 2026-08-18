"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CheckoutSuccessPage() {
  const { clear } = useCart();
  const cleared = useRef(false);

  useEffect(() => {
    // Ref guard avoids clearing twice under React's dev-mode double-render.
    if (cleared.current) return;
    cleared.current = true;
    clear();
  }, [clear]);

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow text-neutral-500">Payment received</p>

      <h1 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
        You&apos;re in. We&apos;ll text you shortly.
      </h1>

      <p className="mt-6 max-w-md text-lg leading-relaxed text-neutral-700">
        We have your order and your phone number. Expect a text from us to
        confirm the details and ask for your logo — usually within a few
        hours during business hours.
      </p>

      <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-500">
        No logo ready yet? No problem, we&apos;ll wait for it. Nothing ships
        until your design is approved.
      </p>

      <Link
        href="/"
        className="mt-10 rounded-full bg-ink px-7 py-3.5 text-base font-semibold text-white transition hover:bg-neutral-800"
      >
        Back to ZapTap
      </Link>
    </main>
  );
}
