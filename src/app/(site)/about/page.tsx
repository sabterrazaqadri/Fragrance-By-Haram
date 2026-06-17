import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'The House',
  description:
    'Fragrances by Haram is a small-batch luxury perfume house crafted in Pakistan, built around longevity and character.',
};

const pillars = [
  {
    title: 'Small-Batch',
    body: 'Every fragrance is composed and bottled in small batches for freshness and quality control — never mass-produced.',
  },
  {
    title: 'Built for Longevity',
    body: 'We work at Eau de Parfum concentration so a single application carries a 10–12 hour trail.',
  },
  {
    title: 'Made in Pakistan',
    body: 'Designed and crafted locally, with nationwide Cash on Delivery and an easy 7-day exchange.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-cream">
      <div className="container-x py-20 lg:py-28">
        <SectionHeading
          eyebrow="The House"
          heading="A house built on longevity."
          sub="Fragrances by Haram is a small-batch perfume house. We compose Eau de Parfum that lingers — scents made to be remembered, not just noticed."
          as="h1"
        />

        <div className="mx-auto mt-16 grid max-w-4xl gap-10 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="border-t border-gold/30 pt-5">
              <h2 className="font-serif text-2xl text-dark">{p.title}</h2>
              <p className="mt-3 font-sans text-sm leading-relaxed text-ink-soft">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-5 border border-gold/20 bg-panel px-6 py-14 text-center">
          <p className="eyebrow">Discover the collection</p>
          <h2 className="font-serif text-3xl text-dark sm:text-4xl">
            Find your signature scent.
          </h2>
          <Button href="/products" variant="primary">
            Explore the Collection
          </Button>
        </div>
      </div>
    </div>
  );
}
