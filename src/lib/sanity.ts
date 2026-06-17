import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, isSanityConfigured } from '@/sanity/env';
import type { Product } from './types';
import { seedProducts } from './seed';

export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset,
  apiVersion,
  useCdn: true,
});

/** Shared image projection: resolves asset url, dimensions, lqip and alt. */
const imageProjection = `
  "url": asset.asset->url,
  "width": asset.asset->metadata.dimensions.width,
  "height": asset.asset->metadata.dimensions.height,
  "lqip": asset.asset->metadata.lqip,
  alt,
  isPrimary
`;

const productProjection = `
  _id,
  name,
  "slug": slug.current,
  family,
  tagline,
  description,
  "images": coalesce(images[]{ ${imageProjection} }, []),
  "notes": {
    "top": coalesce(notes.top, []),
    "heart": coalesce(notes.heart, []),
    "base": coalesce(notes.base, [])
  },
  "pricing": {
    "basePrice": pricing.basePrice,
    "discountPercent": coalesce(pricing.discountPercent, 0)
  },
  "sizes": coalesce(sizes[]{ volume, concentration }, []),
  "badges": coalesce(badges, []),
  "rating": coalesce(rating, 4.8),
  "reviewCount": coalesce(reviewCount, 0),
  longevity
`;

const ALL_PRODUCTS_QUERY = `*[_type == "product" && published != false] | order(_createdAt asc) {
  ${productProjection}
}`;

const PRODUCT_BY_SLUG_QUERY = `*[_type == "product" && slug.current == $slug && published != false][0] {
  ${productProjection}
}`;

const SLUGS_QUERY = `*[_type == "product" && published != false && defined(slug.current)].slug.current`;

export async function getAllProducts(): Promise<Product[]> {
  if (!isSanityConfigured) return seedProducts;
  try {
    const products = await client.fetch<Product[]>(
      ALL_PRODUCTS_QUERY,
      {},
      { next: { revalidate: 60 } }
    );
    return products && products.length > 0 ? products : seedProducts;
  } catch {
    return seedProducts;
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (!isSanityConfigured) {
    return seedProducts.find((p) => p.slug === slug) ?? null;
  }
  try {
    const product = await client.fetch<Product | null>(
      PRODUCT_BY_SLUG_QUERY,
      { slug },
      { next: { revalidate: 60 } }
    );
    return product ?? seedProducts.find((p) => p.slug === slug) ?? null;
  } catch {
    return seedProducts.find((p) => p.slug === slug) ?? null;
  }
}

export async function getAllSlugs(): Promise<string[]> {
  if (!isSanityConfigured) return seedProducts.map((p) => p.slug);
  try {
    const slugs = await client.fetch<string[]>(SLUGS_QUERY, {}, { next: { revalidate: 60 } });
    return slugs && slugs.length > 0 ? slugs : seedProducts.map((p) => p.slug);
  } catch {
    return seedProducts.map((p) => p.slug);
  }
}
