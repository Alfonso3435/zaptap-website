import { products, bundles } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductCatalog() {
  return (
    <section id="products" className="border-b border-line">
      <div className="container-page py-16 lg:py-24">
        <div className="max-w-xl mb-12">
          <p className="eyebrow mb-4">Catalog</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Products
          </h2>
          <p className="mt-4 text-graphite leading-relaxed">
            Everything custom-branded with your business logo. Choose the
            product, the quantity, and what you&apos;ll use it for — reviews,
            social media, or surveys.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16">
          <div className="max-w-xl mb-8">
            <p className="eyebrow mb-4">Bundles</p>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
              Bundles built for your business
            </h3>
            <p className="mt-3 text-graphite leading-relaxed">
              Combos designed to cover your whole location at once, for a
              better price than buying each piece separately.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {bundles.map((bundle) => (
              <ProductCard key={bundle.id} product={bundle} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
