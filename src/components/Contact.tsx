export function Contact() {
  return (
    <section id="contact" className="border-b border-line bg-paper-dim">
      <div className="container-page py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="eyebrow mb-4">Contact</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
              Questions before you order?
            </h2>
            <p className="mt-4 text-graphite leading-relaxed max-w-md">
              Reach out or give us a call — we&apos;ll help you pick the right
              product for your business.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="tel:+14256528532"
              className="flex items-center gap-4 rounded-2xl border border-line bg-paper p-5 hover:border-ink transition-colors"
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-ink text-zap-yellow shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1L6.6 10.8z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <div>
                <p className="text-xs text-graphite font-medium">Phone</p>
                <p className="font-display font-semibold">+1 425 652 8532</p>
              </div>
            </a>

            <a
              href="mailto:zaptapcard@gmail.com"
              className="flex items-center gap-4 rounded-2xl border border-line bg-paper p-5 hover:border-ink transition-colors"
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-ink text-zap-yellow shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M3 5h18v14H3V5z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M3 6l9 7 9-7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <div>
                <p className="text-xs text-graphite font-medium">Email</p>
                <p className="font-display font-semibold">zaptapcard@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
