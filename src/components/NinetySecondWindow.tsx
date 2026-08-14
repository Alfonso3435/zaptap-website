const methods = [
  {
    method: "Asking them out loud",
    timing: "Inside the window",
    steps: "7+ steps, later",
    why: "They say sure. Then they unlock their phone at home, open Google, search your name, pick the right listing, scroll, find the button. They don't. And your staff has to remember to ask every time, on a busy day.",
  },
  {
    method: "A QR code on the receipt or counter",
    timing: "Inside the window",
    steps: "5-8 steps",
    why: "Notice it. Pull out the phone. Unlock. Open the camera. Aim. Wait for focus. Tap the banner. Most people quit somewhere in the middle, and a bent or dim code doesn't scan at all.",
  },
  {
    method: "A text or email afterward",
    timing: "Hours after it closed",
    steps: "3-4 steps",
    why: "The steps are few. The timing is wrong. By the time it lands they're back at work and the feeling is gone.",
  },
  {
    method: "Review software, $300-900/mo",
    timing: "Hours after it closed",
    steps: "3-4 steps",
    why: "It automates the late ask. Expensive automation of the wrong moment.",
  },
  {
    method: "A link on the receipt or a business card",
    timing: "Read outside the window",
    steps: "7+ steps",
    why: "It leaves the building in a pocket and gets read never.",
  },
];

export default function NinetySecondWindow() {
  return (
    <section id="the-window" className="border-b border-neutral-800 bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow text-zap">Why every method failed</p>

        <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
          Willingness has a shelf life. About ninety seconds.
        </h2>

        <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-neutral-300">
          <p>
            The moment right after good work is the moment they want to say
            something. They&apos;re still at your counter. Still in the chair.
            Still looking at the finished job.
          </p>
          <p>
            Then they pay. They chat. They pick up their keys. They walk out.
            They get in the car. And it&apos;s gone. Not refused, just gone.
          </p>
          <p className="font-semibold text-white">
            You never had a motivation problem. You had a timing problem and a
            step-count problem.
          </p>
          <p>
            Every method you&apos;ve tried either asked after the window closed,
            or asked inside it and then demanded more steps than ninety seconds
            can survive. That&apos;s a structural failure. It isn&apos;t you, it
            isn&apos;t your staff, and it isn&apos;t your customers.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-neutral-800">
          <div className="hidden grid-cols-[1.2fr_1fr_0.8fr_2fr] gap-6 border-b border-neutral-800 bg-neutral-900 px-7 py-4 font-display text-xs font-semibold uppercase tracking-widest text-neutral-400 lg:grid">
            <span>Method</span>
            <span>When it asks</span>
            <span>Steps</span>
            <span>Why it loses the window</span>
          </div>

          {methods.map((m) => (
            <div
              key={m.method}
              className="grid gap-2 border-b border-neutral-800 px-7 py-6 lg:grid-cols-[1.2fr_1fr_0.8fr_2fr] lg:gap-6"
            >
              <span className="font-semibold text-white">{m.method}</span>
              <span className="text-sm text-neutral-400">{m.timing}</span>
              <span className="text-sm text-neutral-400">{m.steps}</span>
              <span className="text-sm leading-relaxed text-neutral-400">{m.why}</span>
            </div>
          ))}

          <div className="grid gap-2 bg-zap px-7 py-6 text-ink lg:grid-cols-[1.2fr_1fr_0.8fr_2fr] lg:gap-6">
            <span className="font-display font-bold">ZapTap</span>
            <span className="text-sm font-semibold">Inside the window</span>
            <span className="text-sm font-semibold">1 step</span>
            <span className="text-sm font-semibold leading-relaxed">
              Hold the phone near the card. The review page is already open.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
