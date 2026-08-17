import { smsLink } from "@/lib/sms";

export default function CustomOrder() {
  return (
    <div className="mt-12 grid gap-6 rounded-2xl border-2 border-dashed border-zap-dark bg-white p-8 md:grid-cols-[1.5fr_1fr] md:items-center">
      <div>
        <h3 className="font-display text-xl font-bold text-ink">
          Multiple locations, or something we don&apos;t list?
        </h3>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-neutral-700">
          More cards than the bundles cover, a different material, one design per
          location. Tell us what you need and we&apos;ll quote it. No minimum
          order.
        </p>
      </div>
      <a
        href={smsLink("Hi ZapTap - I need a custom quote. Here's what I'm looking for:")}
        className="rounded-full bg-ink px-6 py-3.5 text-center text-base font-semibold text-white transition hover:bg-neutral-800"
      >
        Get a quote by text
      </a>
    </div>
  );
}
