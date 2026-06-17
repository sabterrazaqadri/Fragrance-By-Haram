export type Badge = 'bestseller' | 'new' | 'sale';

export interface ProductImage {
  url: string | null;
  alt: string | null;
  isPrimary?: boolean;
  width?: number;
  height?: number;
  lqip?: string | null;
}

export interface ProductSize {
  volume: string;
  concentration: string;
}

export interface ProductNotes {
  top: string[];
  heart: string[];
  base: string[];
}

export interface ProductPricing {
  basePrice: number;
  discountPercent: number;
}

export interface Product {
  _id: string;
  name: string;
  slug: string;
  family: string | null;
  tagline: string | null;
  description: string | null;
  images: ProductImage[];
  notes: ProductNotes;
  pricing: ProductPricing;
  sizes: ProductSize[];
  badges: Badge[];
  rating: number;
  reviewCount: number;
  longevity: number | null;
}

/** Derived current price after discount. */
export function currentPrice(p: Product): number {
  const { basePrice, discountPercent } = p.pricing;
  if (!discountPercent) return basePrice;
  return Math.round(basePrice * (1 - discountPercent / 100));
}

/** Local placeholder shown until a real image is uploaded in Studio. */
export const PLACEHOLDER_IMAGE: ProductImage = {
  url: '/placeholder-bottle.svg',
  alt: 'Fragrance bottle',
  isPrimary: true,
  width: 800,
  height: 1000,
  lqip: null,
};

export function primaryImage(p: Product): ProductImage {
  const valid = p.images.filter((i) => i.url);
  return valid.find((i) => i.isPrimary) ?? valid[0] ?? PLACEHOLDER_IMAGE;
}

export function defaultSize(p: Product): ProductSize {
  return p.sizes[0] ?? { volume: '50 ML', concentration: 'Eau de Parfum' };
}
