import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { primaryImage } from '@/lib/types';

export function EditorialBand({ product }: { product?: Product }) {
  const img = product ? primaryImage(product) : undefined;
  const slug = product?.slug || 'shaikh-e-haram';
  const name = product?.name || 'Shaikh-e-Haram';

  return (
    <section className="bg-light">
      <div className="container-x grid items-center gap-0 lg:grid-cols-2">
        {/* Image */}
        <div className="relative order-1 aspect-[5/4] w-full lg:order-1 lg:aspect-auto lg:h-full lg:min-h-[520px]">
          {img?.url && (
            <Image
              src={img.url}
              alt={img.alt || name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized={img.url.endsWith('.svg')}
              className="object-cover"
            />
          )}
        </div>

        {/* Copy */}
        <div className="order-2 flex flex-col justify-center px-1 py-14 lg:py-24 lg:pl-16">
          <p className="eyebrow">The Art of the Note</p>
          <div className="mt-4 h-px w-12 bg-gold" />
          <h2 className="mt-6 font-serif text-4xl leading-tight text-dark sm:text-5xl">
            Read a fragrance before you wear it.
          </h2>
          <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-ink-soft">
            Every scent unfolds in three acts — top, heart and base. Learn to read
            the pyramid and you&apos;ll always know how a perfume will move on your
            skin, from first spray to final trail.
          </p>
          <Link
            href={`/products/${slug}#pyramid`}
            className="mt-8 inline-flex w-fit items-center gap-2 font-sans text-[11px] uppercase tracking-[0.2em] text-gold-deep transition-colors hover:text-dark"
          >
            View {name} →
          </Link>
        </div>
      </div>
    </section>
  );
}
