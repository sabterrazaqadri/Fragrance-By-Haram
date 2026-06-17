import type { Product } from '@/lib/types';
import { ProductCard } from './ProductCard';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';

export function FeaturedGrid({ products }: { products: Product[] }) {
  return (
    <section className="bg-cream">
      <div className="container-x py-20 lg:py-28">
        <SectionHeading
          eyebrow="The Signature Collection"
          heading="Four scents, one house."
          sub="Each composition is built around longevity and a singular character — chosen to become someone's signature."
        />

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button href="/products" variant="ghost">
            View the full collection →
          </Button>
        </div>
      </div>
    </section>
  );
}
