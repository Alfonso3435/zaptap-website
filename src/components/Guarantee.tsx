export default function Guarantee() {
  return (
    <section id="guarantee" className="border-b border-neutral-200 bg-zap">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow text-neutral-700">What happens if it doesn&apos;t work</p>

        <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
          Put it on your counter for 30 days. If you don&apos;t get more reviews
          than you did the 30 days before, keep the cards and we&apos;ll refund
          you.
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="border-t-2 border-ink pt-6">
            <h3 className="font-display text-xl font-bold text-ink">
              30-day review guarantee
            </h3>
            <p className="mt-4 text-base leading-relaxed text-neutral-800">
              Screenshot your review count the day it arrives. Screenshot it 30
              days later. If the number didn&apos;t move more than it did the month
              before, send us the two screenshots and we refund you in full. You
              keep the cards. We&apos;re not asking you to ship anything back.
            </p>
          </div>

          <div className="border-t-2 border-ink pt-6">
            <h3 className="font-display text-xl font-bold text-ink">
              Chip replacement, for as long as you own it
            </h3>
            <p className="mt-4 text-base leading-relaxed text-neutral-800">
              If a chip ever stops reading, tell us and we send a new one. No
              charge, no argument, no warranty window to check. It&apos;s the most
              common complaint about cheap cards, so we took it off the table.
            </p>
          </div>
        </div>

        <p className="mt-10 max-w-2xl text-base leading-relaxed text-neutral-800">
          You can also just buy one card for $19.99 and try it for a week before
          you order for the whole floor. There&apos;s no minimum and nothing to
          cancel.
        </p>
      </div>
    </section>
  );
}
