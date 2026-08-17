import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100">
      <Image
        src="/images/hero.png"
        alt="A phone held near a ZapTap card on a counter, with the Google review page opening on screen"
        fill
        priority
        sizes="(min-width: 1024px) 45vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}
