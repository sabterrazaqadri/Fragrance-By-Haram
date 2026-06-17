'use client';

import { buildWhatsAppUrl } from '@/lib/whatsapp';
import type { Product } from '@/lib/types';

interface BuyNowButtonProps {
  product: Pick<Product, 'name' | 'slug' | 'pricing'>;
  size: string;
  qty?: number;
  variant?: 'primary' | 'compact';
  className?: string;
}

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
    <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.09 3.2 5.07 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.5a9.4 9.4 0 01-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 01-1.44-5.01c0-5.2 4.24-9.43 9.45-9.43a9.4 9.4 0 016.67 2.77 9.36 9.36 0 012.76 6.67c0 5.2-4.24 9.43-9.46 9.43z" />
  </svg>
);

export function BuyNowButton({
  product,
  size,
  qty = 1,
  variant = 'primary',
  className = '',
}: BuyNowButtonProps) {
  const handleClick = () => {
    const url = buildWhatsAppUrl({ product, size, qty });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const styles =
    variant === 'compact'
      ? 'w-full px-4 py-2.5 text-[11px]'
      : 'w-full px-7 py-4 text-xs';

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Buy ${product.name} on WhatsApp`}
      className={`inline-flex items-center justify-center gap-2 bg-gold font-sans font-medium uppercase tracking-[0.18em] text-espresso shadow-sm transition-all duration-300 ease-smooth hover:bg-gold-deep hover:text-ivory hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${styles} ${className}`}
    >
      <WhatsAppIcon />
      Buy Now
    </button>
  );
}
