const oldWay = [
  "Asking the customer verbally to leave a review — the moment passes and it's forgotten.",
  "Sending a link by text or email — most people ignore it or delete it.",
  "A generic QR code — the customer has to open the camera, focus, wait, and sometimes it still doesn't scan.",
];

const newWay = [
  "The customer just holds their phone near the card. No camera, no typing.",
  "Works even if a QR code would be blurry, bent, or poorly lit — an NFC chip doesn't depend on the camera focusing correctly.",
  "Every card includes a backup QR code too, so no customer is ever left unable to leave a review.",
];

export function ProblemSolution() {
  return (
    <section className="border-b border-line">
      <div className="container-page py-16 lg:py-24">
        <div className="max-w-xl mb-14">
          <p className="eyebrow mb-4">The real problem</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Asking for a review isn&apos;t the same as getting one.
          </h2>
          <p className="mt-4 text-graphite leading-relaxed">
            Most happy customers never leave a review — not because they
            don&apos;t want to, but because the process has too much friction.
            ZapTap removes that friction with a single tap.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-line p-8">
            <h3 className="font-display font-semibold text-lg text-graphite">
              The old way
            </h3>
            <ul className="mt-5 space-y-4">
              {oldWay.map((item) => (
                <li key={item} className="flex gap-3 text-graphite">
                  <span className="shrink-0 mt-1 text-graphite/60">✕</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-ink p-8 bg-ink text-paper relative">
            <span className="absolute -top-3 left-8 rounded-full bg-zap-yellow text-ink text-xs font-bold px-3 py-1">
              With ZapTap
            </span>
            <h3 className="font-display font-semibold text-lg">
              One tap, done
            </h3>
            <ul className="mt-5 space-y-4">
              {newWay.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="shrink-0 mt-1 text-zap-yellow">✓</span>
                  <span className="leading-relaxed text-paper/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
