const points = [
  {
    title: "It's the first impression, before the first visit",
    description:
      "Before calling or walking into your business, people search your Google profile. Reviews are the first thing they see — they decide whether they pick you or the business next door.",
  },
  {
    title: "A review doesn't expire",
    description:
      "Unlike a paid ad, a review stays published and keeps working for your business months or years after the customer wrote it.",
  },
  {
    title: "More recent reviews, better visibility",
    description:
      "Businesses with a steady stream of reviews tend to show up better in local search results — it's not just the rating that matters, it's how often new ones come in.",
  },
  {
    title: "Digital reputation is already part of deciding where to buy",
    description:
      "More customers compare ratings before choosing a local service, from a restaurant to a plumber. Not having active reviews means being left out of that comparison entirely.",
  },
];

export function Reputation() {
  return (
    <section className="border-b border-line bg-paper-dim">
      <div className="container-page py-16 lg:py-24">
        <div className="max-w-xl mb-14">
          <p className="eyebrow mb-4">Why it matters</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Your digital reputation is already working — with or without you.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
          {points.map((point) => (
            <div key={point.title}>
              <h3 className="font-display font-semibold text-lg">
                {point.title}
              </h3>
              <p className="mt-2 text-graphite leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
