import type { Product } from './types';
import { currentPrice } from './types';

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923268954283';
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://fragrancesbyharam.store';

export interface BuyNowParams {
  product: Pick<Product, 'name' | 'slug' | 'pricing'>;
  size: string;
  qty?: number;
}

function productUrl(slug: string): string {
  const base = SITE_URL.replace(/\/$/, '');
  return `${base}/products/${slug}`;
}

export function buildWhatsAppMessage({ product, size, qty = 1 }: BuyNowParams): string {
  const price = currentPrice(product as Product);
  const lines = [
    'Assalam o Alaikum! Mujhe ye perfume chahiye:',
    '',
    `🪻 ${product.name} (${size})`,
    `💰 PKR ${price.toLocaleString('en-PK')}`,
  ];
  if (qty > 1) {
    lines.push(`🔢 Quantity: ${qty}`);
  }
  lines.push(`🔗 ${productUrl(product.slug)}`);
  lines.push('');
  lines.push('Cash on Delivery confirm karein, shukria.');
  return lines.join('\n');
}

export function buildWhatsAppUrl(params: BuyNowParams): string {
  const message = buildWhatsAppMessage(params);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Generic "message us" link with no product context. */
export function whatsAppContactUrl(text?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
