const pillars = [
  {
    title: "It has to sit where the moment happens",
    body: "A card in a drawer does nothing. That's why ZapTap comes as cards for the staff, a plate for the counter, and a stand for the table, so the ask is already there when the window opens. Nobody has to remember anything.",
  },
  {
    title: "It has to work every single time",
    body: "A dead chip doesn't just fail, it burns the one moment you had. So every ZapTap ships with a printed backup QR code, a link you can change whenever you want, and free chip replacement for as long as you own it.",
  },
  {
    title: "It has to look like it belongs to you",
    body: "A blank plastic card reads as a solicitation. A card with your logo and your colors reads as part of your business, and customers treat it that way. The custom design is included, not a $30 add-on.",
  },
];

export default function ZeroStepCapture() {
  return (
    <section id="how-it-works" className="border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow text-neutral-500">Zero-step capture</p>

        <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
          One step. Hold the phone near the card.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-700">
          No camera. No app. No typing. No searching for your business and hoping
          they pick the right listing. The phone touches the card and your Google
          review page is open. That&apos;s the entire process, and it fits inside
          the ninety seconds with room to spare.
        </p>

        {/*
          TODO(Poncho): replace with the real 10-second demo.
          Phone, card, Google opening. This is the single highest-leverage asset
          on the page and it does more for this section than any paragraph.
        */}
        <div className="mt-12 flex aspect-video w-full items-center justify-center rounded-2xl border-2 border-dashed border-neutral-300 bg-neutral-50">
          <div className="px-6 text-center">
            <p className="font-display text-lg font-semibold text-neutral-500">Demo video</p>
            <p className="mt-2 text-sm text-neutral-400">
              Ten seconds: a phone touches the card, Google opens.
            </p>
          </div>
        </div>

        <h3 className="mt-20 max-w-3xl font-display text-2xl font-bold leading-tight tracking-tight text-ink md:text-3xl">
          Three things that are part of how it works, not features on a list
        </h3>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="border-t-2 border-ink pt-6">
              <h4 className="font-display text-lg font-bold leading-snug text-ink">
                {p.title}
              </h4>
              <p className="mt-4 text-base leading-relaxed text-neutral-700">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
