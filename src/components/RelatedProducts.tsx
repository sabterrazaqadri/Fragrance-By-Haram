import type { Product } from '@/lib/types';
import { ProductCard } from './ProductCard';
import { SectionHeading } from './SectionHeading';

export function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null;
  return (
    <section className="bg-cream">
      <div className="container-x py-20 lg:py-28">
        <SectionHeading
          eyebrow="The House"
          heading="You may also love"
          as="h2"
        />
        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
