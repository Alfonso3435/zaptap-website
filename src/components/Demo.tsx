export default function Demo() {
  return (
    <section id="demo" className="border-b border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="eyebrow text-neutral-500">See it work</p>

        <h2 className="mt-6 font-display text-2xl font-bold leading-tight tracking-tight text-ink md:text-3xl">
          Ten seconds. That&apos;s the whole product.
        </h2>

        <video
          className="mt-8 aspect-video w-full rounded-2xl border border-neutral-200 bg-neutral-100 object-cover"
          src="/video/demo.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls
          aria-label="A phone touches a ZapTap card and the Google review page opens, in ten seconds"
        />

        <p className="mt-5 text-base leading-relaxed text-neutral-700">
          No camera. No app. No typing. The phone touches the card and your
          Google review page is open.
        </p>
      </div>
    </section>
  );
}
