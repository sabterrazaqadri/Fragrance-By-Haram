'use client';

import { useMemo, useState } from 'react';
import type { Product } from '@/lib/types';
import { ProductCard } from './ProductCard';

const FILTERS = ['All', 'Aromatic', 'Aquatic', 'Fruity', 'Spicy'] as const;
type Filter = (typeof FILTERS)[number];

export function CollectionGrid({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState<Filter>('All');

  const available = useMemo(() => {
    const present = new Set<string>(['All']);
    products.forEach((p) => {
      FILTERS.forEach((f) => {
        if (f !== 'All' && p.family?.toLowerCase().includes(f.toLowerCase())) {
          present.add(f);
        }
      });
    });
    return FILTERS.filter((f) => present.has(f));
  }, [products]);

  const filtered = useMemo(() => {
    if (filter === 'All') return products;
    return products.filter((p) =>
      p.family?.toLowerCase().includes(filter.toLowerCase())
    );
  }, [products, filter]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2.5" role="group" aria-label="Filter by family">
        {available.map((f) => {
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={active}
              className={`border px-4 py-2 font-sans text-[11px] uppercase tracking-[0.16em] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                active
                  ? 'border-gold bg-gold text-espresso'
                  : 'border-smoke/30 text-ink-soft hover:border-gold/60'
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center font-serif text-xl italic text-smoke">
          No fragrances in this family yet.
        </p>
      )}
    </div>
  );
}
