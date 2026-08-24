import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import ProductCatalog from "@/components/ProductCatalog";
import WhyNotCheap from "@/components/WhyNotCheap";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { smsLink } from "@/lib/sms";

export const metadata: Metadata = {
  title: "Custom Google review cards — NFC, one-time payment | ZapTap",
  description:
    "Custom-branded NFC Google review cards from $19.99. Free design, backup QR, reprogrammable link, free chip replacement, free shipping. No subscription.",
};

/**
 * SOLUTION AWARE page, for search traffic on "google review card",
 * "nfc review card", "tap to review card".
 *
 * These readers already know the category exists and are comparing sellers.
 * They do NOT need the 90-Second Window argument. They need specs, price,
 * differentiation and guarantee, fast. Do not paste the homepage argument here.
 */
export default function GoogleReviewCardPage() {
  const specs: [string, string][] = [
    ["Price", "From $19.99, one time"],
    ["Custom design", "Included, no minimum"],
    ["Delivery", "Free shipping"],
    ["If it fails", "Free chip replacement"],
  ];

  return (
    <>
      <Header />
      <main>
        <section className="border-b border-neutral-200">
          <div className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:pt-20">
            <p className="eyebrow text-neutral-500">Custom NFC review cards</p>

            <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
              Google review cards with your logo. $19.99, one payment, no
              subscription.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-neutral-700">
              The customer holds their phone near the card and your Google review
              page opens. Custom design included. Backup QR printed on every card.
              Change where it points any time, free. If a chip ever stops reading,
              we replace it.
            </p>

            <dl className="mt-10 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-6 border-t border-neutral-200 pt-8 lg:grid-cols-4">
              {specs.map(([k, v]) => (
                <div key={k}>
                  <dt className="font-display text-xs font-semibold uppercase tracking-widest text-neutral-500">
                    {k}
                  </dt>
                  <dd className="mt-2 font-display text-base font-semibold text-ink">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#products"
                className="rounded-full bg-ink px-7 py-3.5 text-base font-semibold text-white transition hover:bg-neutral-800"
              >
                Get my custom cards
              </Link>
              <a
                href={smsLink("Hi ZapTap - here's my logo, can you mock up my card?")}
                className="rounded-full border border-neutral-300 px-7 py-3.5 text-base font-semibold text-ink transition hover:border-ink"
              >
                Send your logo for a free mockup
              </a>
            </div>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-neutral-600">
              Made and supported from Sammamish, Washington. If you&apos;re on the
              Eastside, we&apos;ll bring it to your counter and set it up.
            </p>
          </div>
        </section>

        <ProductCatalog />
        <WhyNotCheap />
        <Guarantee />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
