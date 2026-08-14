"use client";

import { useState } from "react";

export default function ReviewDebt() {
  const [customers, setCustomers] = useState(400);
  const [reviews, setReviews] = useState(6);
  const uncollected = Math.max(customers - reviews, 0);

  return (
    <section id="review-debt" className="border-b border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow text-neutral-500">Review debt</p>

        <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
          You&apos;re not short on reviews. You&apos;re short on collected ones.
        </h2>

        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <div className="max-w-xl space-y-4 text-lg leading-relaxed text-neutral-700">
            <p>
              Think about last month. Not your worst customers, your good ones.
              The ones who said thanks and meant it, who&apos;d tell a friend if
              a friend asked.
            </p>
            <p>
              You already did that work. You already earned those reviews. Then
              the customer walked out and the invoice never got sent.
            </p>
            <p>
              That&apos;s not a reputation problem. It&apos;s an accounts
              receivable problem. You&apos;re carrying a balance of goodwill you
              never collected, and it doesn&apos;t roll over. Last month&apos;s
              is gone.
            </p>
            <p className="font-semibold text-ink">
              You don&apos;t need to be better. You need to collect.
            </p>
          </div>

          <div className="rounded-2xl border border-ink bg-white p-8">
            <p className="font-display text-lg font-bold text-ink">Do your own math</p>

            <label className="mt-7 block text-sm font-medium text-neutral-700">
              Customers you served last month
              <input
                type="number"
                min={0}
                value={customers}
                onChange={(e) => setCustomers(Math.max(0, Number(e.target.value) || 0))}
                className="mt-2 w-full rounded-lg border border-neutral-300 px-4 py-3 font-display text-xl font-semibold text-ink focus:border-ink focus:outline-none"
              />
            </label>

            <label className="mt-5 block text-sm font-medium text-neutral-700">
              Google reviews you got last month
              <input
                type="number"
                min={0}
                value={reviews}
                onChange={(e) => setReviews(Math.max(0, Number(e.target.value) || 0))}
                className="mt-2 w-full rounded-lg border border-neutral-300 px-4 py-3 font-display text-xl font-semibold text-ink focus:border-ink focus:outline-none"
              />
            </label>

            <div className="mt-8 border-t border-neutral-200 pt-6">
              <p className="font-display text-5xl font-bold tracking-tight text-ink">
                {uncollected.toLocaleString()}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                customers walked out without leaving one. You didn&apos;t fail to
                earn them. You never got the chance to ask at the one moment they
                would have said yes.
              </p>
              <p className="mt-4 text-xs leading-relaxed text-neutral-400">
                This is your own arithmetic, not a projection. No card gets every
                customer to tap. But every one of these was a customer you had
                already earned.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
