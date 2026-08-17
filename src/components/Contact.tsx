import { EMAIL, PHONE_DISPLAY, smsLink } from "@/lib/sms";

export default function Contact() {
  return (
    <section id="contact" className="border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow text-neutral-500">Before you order</p>

        <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
          Ask first. You&apos;ll get a person, not a form.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
          Tell us what your business does and we&apos;ll tell you which product
          fits and where to put it. If it&apos;s not a fit for you, we&apos;ll say
          that too.
        </p>

        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-700">
          We&apos;re in Sammamish. If you&apos;re in Bellevue, Redmond, Kirkland or
          Issaquah, we&apos;ll drive over, set it on your counter and tap it with
          our own phone so you can watch it work before you decide.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:max-w-3xl">
          <a
            href={smsLink("Hi ZapTap - I have a question before I order:")}
            className="rounded-2xl border border-neutral-200 p-6 transition hover:border-ink"
          >
            <p className="font-display text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Text us
            </p>
            <p className="mt-2 font-display text-lg font-bold text-ink">{PHONE_DISPLAY}</p>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="rounded-2xl border border-neutral-200 p-6 transition hover:border-ink"
          >
            <p className="font-display text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Email
            </p>
            <p className="mt-2 font-display text-lg font-bold text-ink">{EMAIL}</p>
          </a>
        </div>
      </div>
    </section>
  );
}
