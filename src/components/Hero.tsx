import Link from "next/link";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-14 md:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow text-neutral-500">The 90-second window</p>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]">
              Your happy customers meant to leave you a review.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-neutral-700">
              Almost none of them did. It wasn&apos;t your service. It was a
              90-second window that closed before they got to their car.
            </p>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-neutral-700">
              ZapTap is a card with your logo on it that sits where that window
              opens. The customer holds their phone near it. Your Google review
              page is already open. No app. No camera. No typing.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#products"
                className="rounded-full bg-ink px-7 py-3.5 text-base font-semibold text-white transition hover:bg-neutral-800"
              >
                See the cards
              </Link>
              <Link
                href="#how-it-works"
                className="rounded-full border border-neutral-300 px-7 py-3.5 text-base font-semibold text-ink transition hover:border-ink"
              >
                Watch the 10-second demo
              </Link>
            </div>
          </div>

          <HeroVisual />
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-x-8 gap-y-3 border-t border-neutral-200 pt-8 text-sm text-neutral-600 sm:grid-cols-2 lg:grid-cols-4">
          <li>One payment. No subscription.</li>
          <li>Free custom design.</li>
          <li>Free shipping, delivered in 48 hours.</li>
          <li>30 days to prove it or your money back.</li>
        </ul>
      </div>
    </section>
  );
}
