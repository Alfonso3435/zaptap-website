import ProductCard from "./ProductCard";
import CustomOrder from "./CustomOrder";
import { bundles, products } from "@/data/products";

export default function ProductCatalog() {
  return (
    <section id="products" className="border-b border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow text-neutral-500">The cards</p>

        <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
          Cover every place the window opens.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
          Everything is designed around your logo and colors, free. One payment.
          Free shipping, delivered in 48 hours.
        </p>

        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-700">
          It&apos;s bought once, so the question isn&apos;t what it costs a month.
          One extra service call covers the whole system. One extra table covers a
          card.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <h3 className="mt-20 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
          Bundles
        </h3>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-700">
          One touchpoint catches one moment. Most businesses have three or four.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {bundles.map((b) => (
            <ProductCard key={b.id} product={b} />
          ))}
        </div>

        <CustomOrder />
      </div>
    </section>
  );
}
