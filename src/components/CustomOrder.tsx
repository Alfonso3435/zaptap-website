const PHONE_NUMBER = "+14256528532";

export function CustomOrder() {
  const message = encodeURIComponent(
    "Hi ZapTap, I'd like a quote for a custom order for my business."
  );
  const href = `sms:${PHONE_NUMBER}?&body=${message}`;

  return (
    <div className="container-page py-10 lg:py-14 border-b border-line">
      <div className="rounded-2xl border-2 border-dashed border-zap-yellow-deep bg-paper-dim p-7 sm:p-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h3 className="font-display font-semibold text-lg">
            Custom orders
          </h3>
          <p className="mt-1.5 text-graphite max-w-md leading-relaxed">
            Need more cards, a different material, or something out of the
            ordinary? We&apos;ll quote it for you — no minimum order.
          </p>
        </div>
        <a
          href={href}
          className="shrink-0 inline-flex items-center gap-2 rounded-full bg-ink text-paper font-semibold px-6 py-3 hover:bg-zap-yellow hover:text-ink transition-colors whitespace-nowrap"
        >
          Text us for a quote
        </a>
      </div>
    </div>
  );
}
