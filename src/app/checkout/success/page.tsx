"use client";

import { Suspense, useEffect, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { fbTrack } from "@/lib/fpixel";

function SuccessContent() {
  const { clear } = useCart();
  const cleared = useRef(false);
  const tracked = useRef(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Ref guard avoids clearing twice under React's dev-mode double-render.
    if (cleared.current) return;
    cleared.current = true;
    clear();
  }, [clear]);

  useEffect(() => {
    if (tracked.current) return;
    const sessionId = searchParams.get("session_id");
    if (!sessionId) return;
    tracked.current = true;

    // Verify with Stripe (via our own API route) before firing Purchase,
    // so the event only fires for real, confirmed payments.
    fetch(`/api/checkout/verify-session?session_id=${encodeURIComponent(sessionId)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.paid) {
          fbTrack("Purchase", {
            value: data.amount_total,
            currency: data.currency,
            content_type: "product",
          });
        }
      })
      .catch(() => {
        // Silently skip tracking if verification fails; the customer still
        // sees their confirmation page regardless.
      });
  }, [searchParams]);

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

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={null}>
      <SuccessContent />
    </Suspense>
  );
}
