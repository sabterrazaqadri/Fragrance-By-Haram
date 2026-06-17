import { getAllProducts } from '@/lib/sanity';
import { HeroSection } from '@/components/HeroSection';
import { ValuesBar } from '@/components/ValuesBar';
import { FeaturedGrid } from '@/components/FeaturedGrid';
import { EditorialBand } from '@/components/EditorialBand';
import { ClosingCTA } from '@/components/ClosingCTA';

export default async function HomePage() {
  const products = await getAllProducts();
  const signature =
    products.find((p) => p.slug === 'khansa-e-amir') ?? products[0];

  return (
    <>
      <HeroSection product={signature} />
      <ValuesBar />
      <FeaturedGrid products={products} />
      <EditorialBand product={signature} />
      <ClosingCTA />
    </>
  );
}
