/**
 * Single source of truth for site-wide SEO / brand metadata.
 * Everything (metadata, sitemap, robots, JSON-LD) reads from here so the
 * canonical domain and brand facts never drift between files.
 */

/** Canonical production origin — no trailing slash. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://fragrancesbyharam.store'
).replace(/\/$/, '');

export const SITE_NAME = 'Fragrances by Haram';

export const SITE_TAGLINE = 'Luxury Long-Lasting Eau de Parfum';

export const SITE_DESCRIPTION =
  'Fragrances by Haram — small-batch luxury Eau de Parfum crafted in Pakistan. Long-lasting perfumes with complimentary nationwide delivery and Cash on Delivery. Shop the signature collection.';

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923268954283';

/** E.164 phone for structured data (contactPoint / telephone). */
export const CONTACT_PHONE = `+${WHATSAPP_NUMBER}`;

export const CONTACT_EMAIL = 'hello@fragrancesbyharam.com';

/** Google Search Console verification token (set in env when available). */
export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined;

/** Public social / brand profiles for `sameAs` — improves entity/brand ranking. */
export const SOCIAL_PROFILES: string[] = [
  // Add real profile URLs as they go live, e.g.:
  // 'https://www.instagram.com/fragrancesbyharam',
  // 'https://www.facebook.com/fragrancesbyharam',
  // 'https://www.tiktok.com/@fragrancesbyharam',
].filter(Boolean);

/** High-value keywords the store should rank for. */
export const SITE_KEYWORDS = [
  'Fragrances by Haram',
  'fragrancesbyharam',
  'perfume Pakistan',
  'long lasting perfume',
  'luxury perfume Pakistan',
  'Eau de Parfum',
  'best perfume for men',
  'best perfume for women',
  'attar',
  'niche fragrance Pakistan',
  'buy perfume online Pakistan',
  'cash on delivery perfume',
  'Shaikh-e-Haram',
];

/** Absolute URL helper. Pass a path like `/products/foo`. */
export function absoluteUrl(path = '/'): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
