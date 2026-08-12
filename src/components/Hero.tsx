import { BoltIcon } from "./BoltIcon";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <div>
          <p className="eyebrow mb-5">Custom NFC cards</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] font-semibold tracking-tight text-ink">
            One tap.
            <br />
            One review.
            <br />
            <span className="text-zap-yellow-deep">That fast.</span>
          </h1>
          <p className="mt-6 text-lg text-graphite max-w-md leading-relaxed">
            NFC cards and plates custom-branded with your business logo. Your
            customers tap their phone and instantly leave a Google review,
            follow you on social media, or answer a survey. No apps, no
            minimum order.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-paper font-semibold px-7 py-3.5 hover:bg-zap-yellow hover:text-ink transition-colors"
            >
              Shop products
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 font-semibold px-7 py-3.5 hover:border-ink transition-colors"
            >
              How it works
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-ink/70">
            <span className="inline-flex items-center gap-2">
              <Dot /> 100% custom design
            </span>
            <span className="inline-flex items-center gap-2">
              <Dot /> No minimum order
            </span>
            <span className="inline-flex items-center gap-2">
              <Dot /> Free shipping · 48 hours
            </span>
          </div>
        </div>

        <TapVisual />
      </div>
    </section>
  );
}

function Dot() {
  return <span className="w-1.5 h-1.5 rounded-full bg-zap-yellow-deep" />;
}

function TapVisual() {
  return (
    <div className="relative flex items-center justify-center h-[340px] sm:h-[420px]">
      {/* concentric ripple rings, the brand's signature motif */}
      <span
        className="ripple-ring w-40 h-40"
        style={{ animationDelay: "0s" }}
        aria-hidden="true"
      />
      <span
        className="ripple-ring w-40 h-40"
        style={{ animationDelay: "0.9s" }}
        aria-hidden="true"
      />
      <span
        className="ripple-ring w-40 h-40"
        style={{ animationDelay: "1.8s" }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex items-center justify-center w-40 h-40 rounded-full bg-ink shadow-xl">
        <BoltIcon size={64} className="text-zap-yellow bolt-flicker" />
      </div>

      {/* orbiting labels representing the three destinations */}
      <span className="absolute top-4 left-2 sm:left-8 rounded-full bg-paper border border-line px-3.5 py-1.5 text-xs font-semibold shadow-sm">
        Google Reviews
      </span>
      <span className="absolute bottom-10 right-0 sm:right-4 rounded-full bg-paper border border-line px-3.5 py-1.5 text-xs font-semibold shadow-sm">
        Social media
      </span>
      <span className="absolute bottom-0 left-6 sm:left-16 rounded-full bg-paper border border-line px-3.5 py-1.5 text-xs font-semibold shadow-sm">
        Surveys
      </span>
    </div>
  );
}
