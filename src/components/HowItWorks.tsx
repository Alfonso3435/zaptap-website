const steps = [
  {
    title: "Show the card",
    description:
      "The business displays the ZapTap card, plate, or display where customers will see it: the counter, the table, or handed directly to the customer.",
  },
  {
    title: "The customer taps their phone",
    description:
      "No apps, no downloads. It works with NFC on iPhone and Android — they just hold their phone near the card.",
  },
  {
    title: "They leave feedback instantly",
    description:
      "The phone opens the chosen destination right away: a Google review, a social media profile, or a survey. All in seconds.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-line bg-paper-dim">
      <div className="container-page py-16 lg:py-24">
        <div className="max-w-xl mb-14">
          <p className="eyebrow mb-4">How it works</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            From a tap to a review, no extra steps.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <ol className="space-y-10">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span className="font-display shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-ink text-zap-yellow font-semibold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-lg">{step.title}</h3>
                  <p className="mt-1.5 text-graphite leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* Video placeholder — to be replaced with the real demo video */}
          <div className="relative aspect-video w-full rounded-2xl border border-line bg-ink flex items-center justify-center overflow-hidden">
            <div className="text-center px-6">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-zap-yellow mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M8 5v14l11-7-11-7z" fill="#0b0b0c" />
                </svg>
              </span>
              <p className="text-paper/80 text-sm">
                Demo video — coming soon
              </p>
              <p className="text-paper/40 text-xs mt-1">
                A clip showing the tap in action goes here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
