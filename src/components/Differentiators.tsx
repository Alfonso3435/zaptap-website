const items = [
  {
    title: "Genuinely custom design",
    description:
      "Every card is designed with your business's logo and colors — not a generic template with your name pasted on top.",
  },
  {
    title: "One card, three purposes",
    description:
      "The same card can point to Google reviews, your social media, or a survey — you decide what your business needs at each touchpoint.",
  },
  {
    title: "No minimum order",
    description:
      "Need just one card to try it out? That's fine. You don't have to buy a batch of 100 to get started.",
  },
];

export function Differentiators() {
  return (
    <section id="why-zaptap" className="border-b border-line bg-ink text-paper">
      <div className="container-page py-16 lg:py-24">
        <div className="max-w-xl mb-14">
          <p className="font-display text-xs font-semibold tracking-[0.14em] uppercase text-zap-yellow mb-4">
            Why ZapTap
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Built for your business, not the generic catalog.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={item.title} className="border-t border-paper/20 pt-6">
              <span className="font-display text-zap-yellow text-sm font-semibold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display font-semibold text-lg mt-3">
                {item.title}
              </h3>
              <p className="mt-2 text-paper/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
