import type { Product } from './types';

/**
 * Local fallback catalogue. Used only when no Sanity project is configured
 * (or Sanity returns no products) so the storefront is always viewable.
 * Once Sanity is wired with real products, these are replaced automatically.
 */
const placeholder = (tone: string) => ({
  url: `/placeholder-bottle.svg`,
  alt: tone,
  isPrimary: true,
  width: 800,
  height: 1000,
  lqip: null,
});

export const seedProducts: Product[] = [
  {
    _id: 'seed-close-with-you',
    name: 'Close With You',
    slug: 'close-with-you',
    family: 'Aquatic Floral',
    tagline: 'Romantic · Unisex',
    description:
      'A luminous aquatic floral that opens crisp and dries down soft and intimate — made to be worn close.',
    images: [placeholder('Close With You bottle')],
    notes: { top: [], heart: [], base: [] },
    pricing: { basePrice: 2650, discountPercent: 0 },
    sizes: [{ volume: '50 ML', concentration: 'Eau de Parfum' }],
    badges: ['bestseller'],
    rating: 4.8,
    reviewCount: 0,
    longevity: null,
  },
  {
    _id: 'seed-arzoo-e-haram',
    name: 'Arzoo-e-Haram',
    slug: 'arzoo-e-haram',
    family: 'Fruity Gourmand',
    tagline: 'Fresh & Sweet',
    description:
      'A playful fruity gourmand — bright fruits folded into a sweet, addictive base for everyday wear.',
    images: [placeholder('Arzoo-e-Haram bottle')],
    notes: { top: [], heart: [], base: [] },
    pricing: { basePrice: 2450, discountPercent: 0 },
    sizes: [{ volume: '50 ML', concentration: 'Eau de Parfum' }],
    badges: ['sale'],
    rating: 4.8,
    reviewCount: 0,
    longevity: null,
  },
  {
    _id: 'seed-khansa-e-amir',
    name: 'Khansa-e-Amir',
    slug: 'khansa-e-amir',
    family: 'Spicy Oud',
    tagline: 'Bold',
    description:
      'A bold spicy oud with depth and presence — a confident signature for evenings and occasions.',
    images: [placeholder('Khansa-e-Amir bottle')],
    notes: { top: [], heart: [], base: [] },
    pricing: { basePrice: 2850, discountPercent: 0 },
    sizes: [{ volume: '50 ML', concentration: 'Eau de Parfum' }],
    badges: [],
    rating: 4.8,
    reviewCount: 0,
    longevity: null,
  },
  {
    _id: 'seed-shaikh-e-haram',
    name: 'Shaikh-e-Haram',
    slug: 'shaikh-e-haram',
    family: 'Aromatic Fougère',
    tagline: 'For Him',
    description:
      'The house signature — a fresh aromatic fougère with a lavender heart and a warm woody-musky trail that lasts all day.',
    images: [placeholder('Shaikh-e-Haram bottle')],
    notes: {
      top: ['Lemon', 'Bergamot', 'Mint'],
      heart: ['Lavender', 'Cardamom', 'Geranium'],
      base: ['Sandalwood', 'Cedarwood', 'Musk', 'Patchouli'],
    },
    pricing: { basePrice: 2499, discountPercent: 22 },
    sizes: [
      { volume: '50 ML', concentration: 'Eau de Parfum' },
      { volume: '100 ML', concentration: 'Eau de Parfum' },
    ],
    badges: ['new'],
    rating: 4.9,
    reviewCount: 212,
    longevity: 12,
  },
];
