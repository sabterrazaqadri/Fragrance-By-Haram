'use client';

import type { ProductSize } from '@/lib/types';

interface SizeSelectorProps {
  sizes: ProductSize[];
  selected: string;
  onSelect: (volume: string) => void;
}

export function SizeSelector({ sizes, selected, onSelect }: SizeSelectorProps) {
  return (
    <fieldset>
      <legend className="eyebrow mb-3">Size</legend>
      <div className="flex flex-wrap gap-3" role="radiogroup" aria-label="Select size">
        {sizes.map((size) => {
          const active = size.volume === selected;
          return (
            <button
              key={size.volume}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onSelect(size.volume)}
              className={`flex min-w-[96px] flex-col items-start border px-4 py-2.5 text-left transition-all duration-200 ease-smooth focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                active
                  ? 'border-gold bg-gold/10 text-dark'
                  : 'border-smoke/30 text-ink-soft hover:border-gold/60'
              }`}
            >
              <span className="font-sans text-sm font-medium tracking-wide">
                {size.volume}
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.14em] text-smoke">
                {size.concentration}
              </span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
