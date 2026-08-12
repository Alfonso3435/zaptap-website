"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I need to download an app to use the card?",
    a: "No. Neither you nor your customers need any app. The customer's phone just needs NFC turned on (it's on by default on most modern phones) and they hold it near the card.",
  },
  {
    q: "Does it work with iPhone and Android?",
    a: "Yes, it works with both. Every card also includes a backup QR code in case a phone doesn't have NFC enabled.",
  },
  {
    q: "Is there a monthly fee or subscription?",
    a: "No. You pay once for the card, plate, or display. No monthly fees, no hidden charges.",
  },
  {
    q: "Can I order just one card, or do I have to buy in bulk?",
    a: "You can order as little as one card. We don't have a minimum order — you can always add more later.",
  },
  {
    q: "Can I change where the card points after I buy it?",
    a: "Yes, just contact us and we can reprogram your card's destination (Google, social media, or survey) without needing to buy a new one.",
  },
  {
    q: "How long does shipping take?",
    a: "Shipping is free and arrives in under 48 hours.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-line">
      <div className="container-page py-16 lg:py-24">
        <div className="max-w-xl mb-12">
          <p className="eyebrow mb-4">Frequently asked questions</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            FAQ
          </h2>
        </div>

        <div className="max-w-3xl divide-y divide-line border-t border-b border-line">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold">{item.q}</span>
                  <span
                    className={`shrink-0 font-display text-xl transition-transform ${
                      isOpen ? "rotate-45 text-zap-yellow-deep" : "text-graphite"
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 text-graphite leading-relaxed max-w-2xl">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
