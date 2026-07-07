import type { Metadata } from 'next';
import { getAllProducts } from '@/lib/sanity';
import { HeroSection } from '@/components/HeroSection';
import { ValuesBar } from '@/components/ValuesBar';
import { FeaturedGrid } from '@/components/FeaturedGrid';
import { EditorialBand } from '@/components/EditorialBand';
import { ClosingCTA } from '@/components/ClosingCTA';
import { SITE_NAME, SITE_TAGLINE } from '@/lib/site';

export const metadata: Metadata = {
  title: `${SITE_NAME} · ${SITE_TAGLINE} in Pakistan`,
  alternates: { canonical: '/' },
};

const faqs = [
  {
    q: 'Are Fragrances by Haram perfumes long-lasting?',
    a: 'Yes. Every scent is composed at Eau de Parfum concentration, so a single application typically carries a 10–12 hour trail on the skin.',
  },
  {
    q: 'Do you offer Cash on Delivery in Pakistan?',
    a: 'Yes. We offer Cash on Delivery nationwide across Pakistan with complimentary delivery. Orders are confirmed on WhatsApp.',
  },
  {
    q: 'How do I order a perfume from Fragrances by Haram?',
    a: 'Choose your fragrance and size, then tap “Buy Now” to confirm your order on WhatsApp. You pay Cash on Delivery when your parcel arrives.',
  },
  {
    q: 'Are the fragrances original and authentic?',
    a: 'Every fragrance is 100% authentic and made in small batches for freshness and quality control — never mass-produced.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default async function HomePage() {
  const products = await getAllProducts();
  const signature =
    products.find((p) => p.slug === 'khansa-e-amir') ?? products[0];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection product={signature} />
      <ValuesBar />
      <FeaturedGrid products={products} />
      <EditorialBand product={signature} />

      {/* FAQ — visible content backing the FAQPage structured data */}
      <section className="border-t border-gold/15 bg-panel" aria-labelledby="faq-heading">
        <div className="container-x py-20 lg:py-24">
          <p className="eyebrow text-center">Before you order</p>
          <h2
            id="faq-heading"
            className="mt-4 text-center font-serif text-3xl text-dark sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-gold/20">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl text-dark">
                  {f.q}
                  <span className="text-gold-deep transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-ink-soft">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
