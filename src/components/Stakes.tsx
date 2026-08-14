const stats = [
  { figure: "97%", label: "of people read reviews before choosing a local business", source: "BrightLocal, 2026" },
  { figure: "41%", label: "read them every single time", source: "BrightLocal, 2026" },
  { figure: "93%", label: "won't consider a business rated under 3 stars", source: "Whitespark" },
  { figure: "6", label: "review sites the average customer checks", source: "BrightLocal, 2026" },
];

export default function Stakes() {
  return (
    <section id="stakes" className="border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow text-neutral-500">What&apos;s actually at stake</p>

        <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
          It isn&apos;t your star rating. It&apos;s whether you show up at all.
        </h2>

        <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-neutral-700">
          <p>
            Most owners watch the rating. 4.2. 4.3. Trying to crack 4.5. But the
            rating is what people see <em>after</em> they find you.
          </p>
          <p>
            Businesses with a steady stream of new reviews tend to show up better
            in local search. So a 4.9 with 40 old reviews can sit below a 4.5
            with 400 recent ones, because one is on the map and the other
            isn&apos;t.
          </p>
          <p className="font-semibold text-ink">
            Reviews aren&apos;t a scoreboard. They&apos;re a distribution channel.
          </p>
        </div>

        <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.figure} className="bg-white p-7">
              <dt className="font-display text-4xl font-bold tracking-tight text-ink">
                {s.figure}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-neutral-700">
                {s.label}
                <span className="mt-2 block text-xs text-neutral-400">
                  {s.source} — independent research
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
