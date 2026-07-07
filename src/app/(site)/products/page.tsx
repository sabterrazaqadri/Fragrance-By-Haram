import type { Metadata } from 'next';
import { getAllProducts } from '@/lib/sanity';
import { CollectionGrid } from '@/components/CollectionGrid';
import { SectionHeading } from '@/components/SectionHeading';
import { SITE_URL, absoluteUrl } from '@/lib/site';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'The Signature Collection — Long-Lasting Perfumes',
  description:
    'Browse the full Fragrances by Haram collection — small-batch luxury Eau de Parfum, long-lasting and crafted in Pakistan. Free delivery & Cash on Delivery nationwide.',
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'The Signature Collection · Fragrances by Haram',
    description:
      'Small-batch luxury Eau de Parfum, long-lasting and crafted in Pakistan.',
    url: '/products',
    type: 'website',
  },
};

export default async function ProductsPage() {
  const products = await getAllProducts();

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'The Signature Collection',
        url: absoluteUrl('/products'),
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Collection',
            item: absoluteUrl('/products'),
          },
        ],
      },
      {
        '@type': 'ItemList',
        name: 'Fragrances by Haram — Signature Collection',
        numberOfItems: products.length,
        itemListElement: products.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: p.name,
          url: absoluteUrl(`/products/${p.slug}`),
        })),
      },
    ],
  };

  return (
    <div className="bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
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
