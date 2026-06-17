'use client';

import { useState } from 'react';
import type { Product } from '@/lib/types';
import { defaultSize } from '@/lib/types';
import { SizeSelector } from './SizeSelector';
import { QuantityStepper } from './QuantityStepper';
import { BuyNowButton } from './BuyNowButton';
import { whatsAppContactUrl } from '@/lib/whatsapp';

export function ProductPurchasePanel({ product }: { product: Product }) {
  const [size, setSize] = useState(defaultSize(product).volume);
  const [qty, setQty] = useState(1);

  return (
    <div className="flex flex-col gap-7">
      {product.sizes.length > 0 && (
        <SizeSelector sizes={product.sizes} selected={size} onSelect={setSize} />
      )}

      <QuantityStepper value={qty} onChange={setQty} />

      <div className="flex flex-col gap-3">
        <BuyNowButton product={product} size={size} qty={qty} />
        <a
          href={whatsAppContactUrl(
            `Assalam o Alaikum! I have a question about ${product.name}.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 border border-gold/60 px-7 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.18em] text-gold-deep transition-all duration-300 ease-smooth hover:border-gold hover:bg-gold/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          Message us
        </a>
      </div>
    </div>
  );
}
