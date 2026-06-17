import Link from 'next/link';
import { Brandmark } from './Brandmark';

const shopLinks = [
  { label: 'All Fragrances', href: '/products' },
  { label: 'Shaikh-e-Haram', href: '/products/shaikh-e-haram' },
  { label: 'Close With You', href: '/products/close-with-you' },
  { label: 'Bestsellers', href: '/products' },
];

const houseLinks = [
  { label: 'The House', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Fragrance Notes', href: '/products/shaikh-e-haram#pyramid' },
  { label: 'Studio', href: '/studio' },
];

export function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand blurb */}
          <div className="lg:col-span-1">
            <Brandmark align="left" light />
            <p className="mt-5 max-w-xs font-sans text-sm leading-relaxed text-ivory/70">
              Small-batch luxury Eau de Parfum, crafted in Pakistan. Long-lasting
              compositions made to be worn by the devoted.
            </p>
          </div>

          {/* Shop */}
          <nav aria-label="Shop">
            <h3 className="font-sans text-[11px] uppercase tracking-[0.24em] text-gold">
              Shop
            </h3>
            <ul className="mt-5 space-y-3">
              {shopLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-sans text-sm text-ivory/70 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* House */}
          <nav aria-label="The House">
            <h3 className="font-sans text-[11px] uppercase tracking-[0.24em] text-gold">
              The House
            </h3>
            <ul className="mt-5 space-y-3">
              {houseLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-sans text-sm text-ivory/70 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter */}
          <div>
            <h3 className="font-sans text-[11px] uppercase tracking-[0.24em] text-gold">
              Stay in the know
            </h3>
            <p className="mt-5 font-sans text-sm text-ivory/70">
              New releases and private offers, straight to your inbox.
            </p>
            <form
              className="mt-4 flex border border-ivory/20 focus-within:border-gold"
              action="#"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Your email"
                className="w-full bg-transparent px-4 py-3 font-sans text-sm text-ivory placeholder:text-ivory/40 focus:outline-none"
              />
              <button
                type="submit"
                className="whitespace-nowrap bg-gold px-5 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-espresso transition-colors hover:bg-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-6 flex flex-wrap gap-2">
              {['JazzCash', 'EasyPaisa', 'COD'].map((chip) => (
                <span
                  key={chip}
                  className="border border-ivory/20 px-3 py-1 font-sans text-[10px] uppercase tracking-[0.16em] text-ivory/70"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ivory/12 pt-7 sm:flex-row">
          <p className="font-sans text-xs text-ivory/50">
            © 2026 Fragrances by Haram
          </p>
          <p className="flex items-center gap-4 font-sans text-xs text-ivory/50">
            <Link href="/about" className="transition-colors hover:text-gold">
              Privacy
            </Link>
            <span className="text-gold/40">·</span>
            <Link href="/about" className="transition-colors hover:text-gold">
              Terms
            </Link>
            <span className="text-gold/40">·</span>
            <Link href="/about" className="transition-colors hover:text-gold">
              Returns
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
