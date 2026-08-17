"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Will my customers actually use it, or will it sit there?",
    a: "The honest answer is that it depends on where you put it and whether anyone says a word. A card in a drawer does nothing. A card on the counter that a staff member slides forward while saying \"if you've got ten seconds\" is a different thing entirely. That's why every order comes with a short placement guide: the spots that get tapped and the ones that don't. We're a new company and we're not going to quote you a tap rate we haven't measured.",
  },
  {
    q: "Does it work on iPhone and Android?",
    a: "Android phones have NFC on by default and read the card by holding it near the top of the phone. iPhone XS, XR, 11 and newer read it the same way with the screen on, no app and no setting to change. Older iPhones need one extra step, and for those, and for any phone that won't cooperate, there's a printed QR code on every card as a backup.",
  },
  {
    q: "Isn't this just a QR code with extra steps?",
    a: "It's a QR code with the steps removed. A QR needs the camera opened, aimed, focused, and a banner tapped, and it fails when the code is bent, dim, or scratched. NFC needs the phone held near the card. It also doesn't depend on the customer knowing what to do with their camera. The QR is still there as a fallback, it's just not the main path.",
  },
  {
    q: "Why $19.99 when Amazon sells them for $8?",
    a: "Because a card that fails costs you the moment you were saving it for. The $8 listings fail in a handful of documented ways: dead chips, print peeling, blank cards shipped, links you can't change without a yearly fee, three-week shipping, and sellers who stop replying. Ours includes custom design, a backup QR, a link you can reprogram for free, chip replacement for as long as you own it, 48-hour delivery, and a phone number that reaches a person in Sammamish.",
  },
  {
    q: "Is there a monthly fee or a subscription?",
    a: "No. You pay once. There is no account, no dashboard, no plan, and no fee to keep the link working or to change where it points later.",
  },
  {
    q: "Can I change where the card points after I buy it?",
    a: "Yes, any time, free. If you move locations or rebrand and your Google listing changes, you update the destination instead of buying new cards.",
  },
  {
    q: "What if the chip stops working?",
    a: "Tell us and we send a replacement. Free, for as long as you own it. No warranty window.",
  },
  {
    q: "Do I have to pay extra for the custom design?",
    a: "No. Send us your logo and we design the card around it, your colors and your name. It's included on every product, including a single $19.99 card.",
  },
  {
    q: "Can I just buy an NFC tag and program it myself?",
    a: "You can, and if you're comfortable doing it you should try it. A blank tag and a free app will get you a working sticker. What you won't get is a designed card that looks like part of your business, a backup QR, or anyone to call when it stops reading. Some owners are fine with that trade. If you're not, that's what you're paying us for.",
  },
  {
    q: "Is asking for reviews against Google's rules?",
    a: "No. Google allows you to ask customers for honest reviews, including at your business with a device or a card. What's prohibited is offering something in exchange, and screening customers so only the happy ones reach Google. A ZapTap card does neither.",
  },
  {
    q: "How do I pay, and how long does shipping take?",
    a: "Add what you want to the cart and check out by text. We confirm your design, take payment, and ship free, delivered in 48 hours. If you're in Bellevue, Redmond, Kirkland, Issaquah or Sammamish, we can hand it to you instead.",
  },
  {
    q: "What if I don't like it?",
    a: "Put it on your counter for 30 days. If your review count didn't move more than it did the month before, send us the two screenshots and we refund you in full. Keep the cards.",
  },
  {
    q: "Will it interfere with my card reader or POS?",
    a: "No. The chip is passive, it does nothing until a phone is held right against it, and it doesn't transmit on its own. Keep it a few inches from the card reader so a customer's phone doesn't wake up the wrong thing and you're fine.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <p className="eyebrow text-neutral-500">Questions</p>
        <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          Straight answers
        </h2>

        <div className="mt-12 border-t border-neutral-200">
          {faqs.map((f, i) => (
            <div key={f.q} className="border-b border-neutral-200">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-lg font-semibold text-ink">{f.q}</span>
                <span className="mt-1 shrink-0 text-xl leading-none text-neutral-400">
                  {open === i ? "\u2212" : "+"}
                </span>
              </button>
              {open === i && (
                <p className="max-w-2xl pb-7 text-base leading-relaxed text-neutral-700">
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
