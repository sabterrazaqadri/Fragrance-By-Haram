import type { Metadata } from 'next';
import { getAllProducts } from '@/lib/sanity';
import { CollectionGrid } from '@/components/CollectionGrid';
import { SectionHeading } from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'The Signature Collection',
  description:
    'Browse the full Fragrances by Haram collection — small-batch luxury Eau de Parfum, long-lasting and crafted in Pakistan.',
};

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <div className="bg-cream">
      <div className="container-x py-20 lg:py-28">
        <SectionHeading
          eyebrow="The Signature Collection"
          heading="The Signature Collection"
          sub="Every fragrance in the house — composed for longevity and made to be worn close."
          as="h1"
        />
        <div className="mt-14">
          <CollectionGrid products={products} />
        </div>
      </div>
    </div>
  );
}
