import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

type Variant = 'primary' | 'ghost' | 'dark';
type Size = 'sm' | 'md';

const base =
  'inline-flex items-center justify-center gap-2 font-sans font-medium uppercase tracking-[0.18em] transition-all duration-300 ease-smooth focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-60';

const sizes: Record<Size, string> = {
  sm: 'text-[11px] px-5 py-2.5',
  md: 'text-xs px-7 py-3.5',
};

const variants: Record<Variant, string> = {
  primary:
    'bg-gold text-espresso hover:bg-gold-deep hover:text-ivory shadow-sm hover:shadow-md',
  ghost:
    'border border-gold/60 text-gold-deep hover:border-gold hover:bg-gold/10',
  dark: 'bg-dark text-ivory hover:bg-espresso',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  Omit<ComponentProps<'button'>, keyof CommonProps> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<ComponentProps<typeof Link>, keyof CommonProps> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...rest
  } = props;

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if ('href' in props && props.href !== undefined) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonAsButton)}>
      {children}
    </button>
  );
}
