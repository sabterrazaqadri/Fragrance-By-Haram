import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProductBySlug, getAllProducts, getAllSlugs } from '@/lib/sanity';
import {
  currentPrice,
  primaryImage,
  type Product,
  type ProductImage,
} from '@/lib/types';
import { ProductPurchasePanel } from '@/components/ProductPurchasePanel';
import { FragrancePyramid } from '@/components/FragrancePyramid';
import { RelatedProducts } from '@/components/RelatedProducts';
import { Rating } from '@/components/Rating';
import { TruckIcon, ShieldIcon, ExchangeIcon } from '@/components/icons';
import { SITE_URL, SITE_NAME, absoluteUrl } from '@/lib/site';

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  if (!product) return { title: 'Fragrance not found' };

  const img = primaryImage(product);
  const price = currentPrice(product);
  const canonical = `/products/${product.slug}`;
  const title = `${product.name} — ${product.family ?? 'Eau de Parfum'}`;
  const description =
    product.description ||
    `${product.name} — ${product.family ?? 'luxury Eau de Parfum'} by Fragrances by Haram. Long-lasting, small-batch, PKR ${price.toLocaleString('en-PK')}. Free delivery & Cash on Delivery across Pakistan.`;
  const ogImage = img?.url
    ? [{ url: img.url, alt: img.alt || product.name, width: img.width ?? 800, height: img.height ?? 1000 }]
    : undefined;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${product.name} · Fragrances by Haram`,
      description,
      type: 'website',
      url: canonical,
      ...(ogImage ? { images: ogImage } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} · Fragrances by Haram`,
      description,
      ...(img?.url ? { images: [img.url] } : {}),
    },
  };
}

const trust = [
  { Icon: TruckIcon, label: 'Free delivery + Cash on Delivery' },
  { Icon: ShieldIcon, label: '100% authentic, small-batch' },
  { Icon: ExchangeIcon, label: '7-day exchange' },
];

function ProductJsonLd({ product }: { product: Product }) {
  const img = primaryImage(product);
  const price = currentPrice(product);
  const productUrl = absoluteUrl(`/products/${product.slug}`);
  const imageUrl = img?.url
    ? img.url.startsWith('http')
      ? img.url
      : absoluteUrl(img.url)
    : undefined;

  // priceValidUntil ~ 1 year out (Google recommends a future date for offers).
  const validUntil = new Date();
  validUntil.setFullYear(validUntil.getFullYear() + 1);

  const graph = [
    {
      '@type': 'Product',
      '@id': `${productUrl}#product`,
      name: product.name,
      description: product.description ?? undefined,
      image: imageUrl ? [imageUrl] : undefined,
      sku: product.slug,
      mpn: product.slug,
      category: product.family ?? 'Eau de Parfum',
      brand: { '@type': 'Brand', name: SITE_NAME },
      ...(product.reviewCount > 0
        ? {
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: product.rating,
              reviewCount: product.reviewCount,
              bestRating: 5,
              worstRating: 1,
            },
          }
        : {}),
      offers: {
        '@type': 'Offer',
        priceCurrency: 'PKR',
        price: String(price),
        priceValidUntil: validUntil.toISOString().slice(0, 10),
        availability: 'https://schema.org/InStock',
        itemCondition: 'https://schema.org/NewCondition',
        url: productUrl,
        seller: { '@id': `${SITE_URL}/#organization` },
        shippingDetails: {
          '@type': 'OfferShippingDetails',
          shippingRate: {
            '@type': 'MonetaryAmount',
            value: '0',
            currency: 'PKR',
          },
          shippingDestination: {
            '@type': 'DefinedRegion',
            addressCountry: 'PK',
          },
          deliveryTime: {
            '@type': 'ShippingDeliveryTime',
            handlingTime: {
              '@type': 'QuantitativeValue',
              minValue: 0,
              maxValue: 1,
              unitCode: 'DAY',
            },
            transitTime: {
              '@type': 'QuantitativeValue',
              minValue: 1,
              maxValue: 4,
              unitCode: 'DAY',
            },
          },
        },
        hasMerchantReturnPolicy: {
          '@type': 'MerchantReturnPolicy',
          applicableCountry: 'PK',
          returnPolicyCategory:
            'https://schema.org/MerchantReturnFiniteReturnWindow',
          merchantReturnDays: 7,
          returnMethod: 'https://schema.org/ReturnByMail',
          returnFees: 'https://schema.org/FreeReturn',
        },
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Collection',
          item: absoluteUrl('/products'),
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: product.name,
          item: productUrl,
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
      }}
    />
  );
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);
  if (!product) notFound();

  const all = await getAllProducts();
  const related = all.filter((p) => p.slug !== product.slug);

  const img = primaryImage(product);
  const gallery = product.images.length > 1
    ? product.images.filter((i): i is ProductImage & { url: string } => i.url !== null)
    : [];
  const price = currentPrice(product);
  const hasDiscount = product.pricing.discountPercent > 0;
  const cornerTag = [
    product.badges.includes('new') ? 'New' : null,
    product.longevity ? 'Long Lasting' : null,
  ]
    .filter(Boolean)
    .join(' · ');

  return (
    <>
      <ProductJsonLd product={product} />

      <div className="bg-cream">
        {/* Breadcrumb */}
        <div className="container-x pt-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.14em] text-smoke">
              <li>
                <Link href="/" className="transition-colors hover:text-gold-deep">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/products" className="transition-colors hover:text-gold-deep">
                  Collection
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-ink-soft">{product.name}</li>
            </ol>
          </nav>
        </div>

        {/* Main */}
        <div className="container-x grid gap-10 py-12 lg:grid-cols-2 lg:gap-16 lg:py-16">
          {/* Images */}
          <div>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-panel">
              {img?.url && (
                <Image
                  src={img.url}
                  alt={img.alt || product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized={img.url.endsWith('.svg')}
                  placeholder={img.lqip ? 'blur' : 'empty'}
                  blurDataURL={img.lqip || undefined}
                  className="object-cover"
                />
              )}
              {cornerTag && (
                <span className="absolute left-4 top-4 bg-dark px-3 py-1.5 font-sans text-[10px] uppercase tracking-[0.18em] text-ivory">
                  {cornerTag}
                </span>
              )}
            </div>
            {gallery.length > 0 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {gallery.slice(0, 4).map((g, i) => (
                  <div key={i} className="relative aspect-square overflow-hidden bg-panel">
                    <Image
                      src={g.url}
                      alt={g.alt || `${product.name} view ${i + 1}`}
                      fill
                      sizes="120px"
                      unoptimized={g.url.endsWith('.svg')}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <p className="eyebrow">
              {[product.family, product.tagline].filter(Boolean).join(' · ')}
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-dark sm:text-5xl">
              {product.name}
            </h1>

            <div className="mt-4">
              <Rating rating={product.rating} reviewCount={product.reviewCount} />
            </div>

            {/* Price */}
            <div className="mt-6 flex items-center gap-3">
              <span className="font-serif text-3xl font-semibold text-gold-deep">
                PKR {price.toLocaleString('en-PK')}
              </span>
              {hasDiscount && (
                <>
                  <span className="font-sans text-base text-smoke line-through">
                    {product.pricing.basePrice.toLocaleString('en-PK')}
                  </span>
                  <span className="bg-gold-deep px-2.5 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-ivory">
                    Save {product.pricing.discountPercent}%
                  </span>
                </>
              )}
            </div>

            {product.description && (
              <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-ink-soft">
                {product.description}
              </p>
            )}

            <div className="my-8 hairline" />

            <ProductPurchasePanel product={product} />

            {/* Trust */}
            <ul className="mt-9 flex flex-col gap-3">
              {trust.map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <Icon className="h-5 w-5 shrink-0 text-gold" />
                  <span className="font-sans text-sm text-ink-soft">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <FragrancePyramid notes={product.notes} />

      <RelatedProducts products={related} />
    </>
  );
}
