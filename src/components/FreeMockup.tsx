import { EMAIL, waLink } from "@/lib/whatsapp";

export default function FreeMockup() {
  return (
    <section id="free-mockup" className="border-b border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="eyebrow text-neutral-500">Not ready to buy</p>

            <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
              Send us your logo. We&apos;ll design your card and send it back free.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-700">
              No charge, no commitment, no follow-up calls. Send your logo and what
              your business is called, and we&apos;ll send back an image of your
              actual card: your colors, your name, your layout. If you like it, you
              order. If you don&apos;t, you keep the file.
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-600">
              It&apos;s the fastest way to find out whether &quot;custom
              design&quot; means what we say it means.
            </p>
          </div>

          <div className="rounded-2xl border border-ink bg-white p-8">
            <p className="font-display text-lg font-bold text-ink">Send it here</p>

            <a
              href={waLink("Hi ZapTap - here's my logo, can you mock up my card? My business is:")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block rounded-full bg-ink px-7 py-3.5 text-center text-base font-semibold text-white transition hover:bg-neutral-800"
            >
              Send my logo on WhatsApp
            </a>

            <a
              href={`mailto:${EMAIL}?subject=Free%20card%20mockup`}
              className="mt-3 block rounded-full border border-neutral-300 px-7 py-3.5 text-center text-base font-semibold text-ink transition hover:border-ink"
            >
              Email my logo
            </a>

            <p className="mt-5 text-sm leading-relaxed text-neutral-500">
              Usually back to you the same day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
