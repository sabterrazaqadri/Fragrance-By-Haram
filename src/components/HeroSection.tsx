import Image from 'next/image';
import { Button } from './Button';
import type { Product } from '@/lib/types';
import { primaryImage } from '@/lib/types';

export function HeroSection({ product }: { product?: Product }) {
  const img = product ? primaryImage(product) : undefined;

  return (
    <section className="border-b border-gold/15 bg-cream">
      <div className="container-x grid items-stretch gap-0 lg:grid-cols-2">
        {/* Copy */}
        <div className="flex flex-col justify-center py-14 lg:py-24 lg:pr-14">
          <p className="eyebrow">The Signature House · 50ML</p>
          <div className="mt-5 h-px w-12 bg-gold" />
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-dark sm:text-6xl lg:text-7xl">
            Worn by the
            <br />
            devoted.
            <span className="mt-1 block font-serif text-3xl italic text-gold-deep sm:text-4xl lg:text-5xl">
              A scent that stays.
            </span>
          </h1>
          <p className="mt-7 max-w-md font-sans text-base leading-relaxed text-ink-soft">
            Small-batch Eau de Parfum, composed for longevity and worn close to
            the skin. Crafted in Pakistan, made to be remembered.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/products" variant="primary">
              Explore the Collection
            </Button>
            <Button href="/products" variant="ghost">
              Discover your scent →
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative border-t border-gold/15 lg:border-l lg:border-t-0">
          <div className="relative aspect-[4/5] w-full lg:aspect-auto lg:h-full lg:min-h-[560px]">
            {img?.url && (
              <Image
                src={img.url}
                alt={img.alt || product?.name || 'Signature fragrance'}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized={img.url.endsWith('.svg')}
                className="object-cover"
              />
            )}
            <div className="absolute bottom-5 left-5 bg-cream/85 px-4 py-2 backdrop-blur-sm">
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold-deep">
                The Signature
              </p>
              <p className="font-serif text-lg text-dark">
                {product?.name || 'Shaikh-e-Haram'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
