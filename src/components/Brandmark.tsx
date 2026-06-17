import Link from 'next/link';

function VaseEmblem({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      aria-hidden="true"
    >
      <path d="M12 4h8M13.5 4c0 2 1 2.5 1 4M18.5 4c0 2-1 2.5-1 4" strokeLinecap="round" />
      <path d="M11 9c-1.6 1.8-2.5 4.2-2.5 7 0 4.4 3.4 8 7.5 8s7.5-3.6 7.5-8c0-2.8-.9-5.2-2.5-7z" />
      <path d="M12.5 13.5c1.2 1 2.2 1.4 3.5 1.4s2.3-.4 3.5-1.4" strokeLinecap="round" />
      <path d="M14.5 9h3" strokeLinecap="round" />
    </svg>
  );
}

export function Brandmark({
  align = 'center',
  light = false,
}: {
  align?: 'center' | 'left';
  light?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Fragrances by Haram — home"
      className={`group flex flex-col items-${align === 'center' ? 'center' : 'start'} leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold`}
    >
      <VaseEmblem className={`mb-1 h-6 w-6 ${light ? 'text-gold' : 'text-gold-deep'}`} />
      <span
        className={`font-serif text-base font-semibold tracking-[0.22em] ${light ? 'text-ivory' : 'text-dark'}`}
      >
        FRAGRANCES BY HARAM
      </span>
      <span
        className={`mt-0.5 font-sans text-[9px] uppercase tracking-[0.34em] ${light ? 'text-gold' : 'text-gold-deep'}`}
      >
        Eau de Parfum
      </span>
    </Link>
  );
}
