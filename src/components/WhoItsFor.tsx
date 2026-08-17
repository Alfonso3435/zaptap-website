import { smsLink } from "@/lib/sms";

const segments = [
  { trade: "Restaurants & cafes", moment: "When you drop the check. Card on the table, one per section." },
  { trade: "Dental & medical offices", moment: "At the front desk, while they're booking the next visit." },
  { trade: "HVAC, plumbing, electrical", moment: "Standing at the truck with the job done. Card in the tech's pocket." },
  { trade: "Salons & barbershops", moment: "The chair spins around and they see the mirror." },
  { trade: "Auto shops", moment: "When you hand the keys back." },
  { trade: "Med spas & chiropractors", moment: "At checkout, while they still feel the difference." },
];

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="border-b border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow text-neutral-500">Where the window opens</p>

        <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
          Every business has one moment. Find yours and put the card there.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-700">
          The window isn&apos;t the same time of day for everybody. It&apos;s the
          second right after the work is visibly done. Here&apos;s where it lands
          in most trades:
        </p>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
          {segments.map((s) => (
            <div key={s.trade} className="bg-white p-7">
              <p className="font-display text-lg font-bold text-ink">{s.trade}</p>
              <p className="mt-3 text-base leading-relaxed text-neutral-700">{s.moment}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-base leading-relaxed text-neutral-600">
          Not on this list, or your customers never come to you?{" "}
          <a
            href={smsLink("Hi ZapTap - my business is: ... Does the card make sense for what I do?")}
            className="font-semibold text-ink underline underline-offset-4"
          >
            Message us what you do
          </a>{" "}
          and we&apos;ll tell you straight whether this fits. If it doesn&apos;t,
          we&apos;ll say so.
        </p>
      </div>
    </section>
  );
}
