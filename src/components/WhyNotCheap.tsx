const failures = [
  {
    fails: "The chip stops working after a week or two. You tap and nothing happens.",
    fix: "Free chip replacement for as long as you own it. If it stops reading, we send a new one.",
  },
  {
    fails: "The print peels or the sticker lifts, and after a month it looks like junk on your counter.",
    fix: "Printed and finished properly, not a label stuck on blank plastic.",
  },
  {
    fails: "Blank cards arrive. The seller stops answering messages.",
    fix: "A phone number that reaches a person in Sammamish. On the Eastside we'll bring it to you.",
  },
  {
    fails: "You can't change where the link points, or you can but there's a yearly fee buried in the listing to do it.",
    fix: "Change the destination whenever you want. One payment, no subscription, no fee to reprogram.",
  },
  {
    fails: "It ships from overseas and takes three weeks.",
    fix: "Delivered in 48 hours, free shipping.",
  },
  {
    fails: "Generic card, no logo, or a logo upcharge at checkout.",
    fix: "Custom design with your logo and colors, included. No minimum order.",
  },
];

export default function WhyNotCheap() {
  return (
    <section id="why-zaptap" className="border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow text-neutral-500">The $8 card question</p>

        <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
          A card that fails is worse than no card at all.
        </h2>

        <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-neutral-700">
          <p>
            Fair question. There are cheaper cards. We&apos;d rather tell you
            exactly what happens with them than pretend they don&apos;t exist.
          </p>
          <p>
            Read the 1-star reviews on those listings and the same handful of
            complaints come up over and over. They matter more here than they
            would on most products, because when the chip doesn&apos;t read you
            don&apos;t just lose an $8 card. You lose the ninety seconds you were
            saving it for. The customer is standing there, phone out, and nothing
            happens. That window doesn&apos;t reopen.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-neutral-200">
          <div className="hidden grid-cols-2 gap-8 border-b border-neutral-200 bg-neutral-50 px-8 py-4 font-display text-xs font-semibold uppercase tracking-widest text-neutral-500 md:grid">
            <span>What the cheap ones do</span>
            <span>What we do about it</span>
          </div>

          {failures.map((f) => (
            <div
              key={f.fails}
              className="grid gap-4 border-b border-neutral-200 px-8 py-6 last:border-0 md:grid-cols-2 md:gap-8"
            >
              <p className="text-base leading-relaxed text-neutral-500">{f.fails}</p>
              <p className="text-base font-medium leading-relaxed text-ink">{f.fix}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-neutral-500">
          Complaints above are the recurring themes in 1-star reviews on low-cost
          NFC review cards sold on Amazon and Etsy, 2023-2026.
        </p>

      </div>
    </section>
  );
}
