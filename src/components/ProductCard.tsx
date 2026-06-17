import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { currentPrice, primaryImage, defaultSize } from '@/lib/types';
import { Badge } from './Badge';
import { BuyNowButton } from './BuyNowButton';
import { Rating } from './Rating';

export function ProductCard({ product }: { product: Product }) {
  const img = primaryImage(product);
  const price = currentPrice(product);
  const hasDiscount = product.pricing.discountPercent > 0;
  const size = defaultSize(product).volume;
  const href = `/products/${product.slug}`;

  return (
    <article className="group flex flex-col">
      <Link
        href={href}
        className="relative block overflow-hidden bg-panel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        <div className="relative aspect-[4/5] w-full">
          {img?.url && (
            <Image
              src={img.url}
              alt={img.alt || product.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              unoptimized={img.url.endsWith('.svg')}
              placeholder={img.lqip ? 'blur' : 'empty'}
              blurDataURL={img.lqip || undefined}
              className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.06] motion-reduce:transform-none"
            />
          )}
        </div>
        {product.badges.length > 0 && (
          <div className="absolute left-3 top-3 flex flex-col gap-1.5">
            {product.badges.map((b) => (
              <Badge key={b} badge={b} />
            ))}
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col pt-4">
        {product.family && (
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-smoke">
            {product.family}
          </p>
        )}
        <h3 className="mt-1 font-serif text-xl leading-tight text-dark">
          <Link href={href} className="transition-colors hover:text-gold-deep">
            {product.name}
          </Link>
        </h3>

        <div className="mt-1.5">
          <Rating rating={product.rating} reviewCount={product.reviewCount} />
        </div>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-serif text-lg font-semibold text-gold-deep">
            PKR {price.toLocaleString('en-PK')}
          </span>
          {hasDiscount && (
            <span className="font-sans text-xs text-smoke line-through">
              {product.pricing.basePrice.toLocaleString('en-PK')}
            </span>
          )}
        </div>

        <div className="mt-4">
          <BuyNowButton product={product} size={size} variant="compact" />
        </div>
      </div>
    </article>
  );
}
