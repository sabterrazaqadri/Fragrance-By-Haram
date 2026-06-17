import Link from 'next/link';
import { Brandmark } from './Brandmark';
import { MobileMenu } from './MobileMenu';
import { navLinks } from './nav-links';
import { SearchIcon, AccountIcon, BagIcon } from './icons';

const iconBtn =
  'flex h-10 w-10 items-center justify-center text-dark transition-colors hover:text-gold-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/15 bg-cream/90 backdrop-blur-md">
      <div className="container-x">
        {/* Desktop */}
        <div className="hidden grid-cols-3 items-center py-5 lg:grid">
          <nav aria-label="Primary" className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-[11px] uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-gold-deep"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex justify-center">
            <Brandmark />
          </div>
          <div className="flex items-center justify-end gap-1">
            <button type="button" aria-label="Search" className={iconBtn}>
              <SearchIcon className="h-5 w-5" />
            </button>
            <Link href="/contact" aria-label="Account" className={iconBtn}>
              <AccountIcon className="h-5 w-5" />
            </Link>
            <Link href="/products" aria-label="Shop" className={iconBtn}>
              <BagIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center justify-between py-4 lg:hidden">
          <MobileMenu />
          <div className="flex flex-1 justify-center">
            <Brandmark />
          </div>
          <Link href="/products" aria-label="Shop" className={iconBtn}>
            <BagIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
