'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { navLinks } from './nav-links';
import { MenuIcon, CloseIcon } from './icons';

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center text-dark transition-colors hover:text-gold-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold lg:hidden"
      >
        <MenuIcon className="h-6 w-6" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true">
          <button
            aria-label="Close menu"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-espresso/40 backdrop-blur-sm"
          />
          <nav className="absolute left-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-panel px-7 py-6 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="eyebrow">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center text-dark hover:text-gold-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-8 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-smoke/15 py-4 font-serif text-2xl text-dark transition-colors hover:text-gold-deep"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="border-b border-smoke/15 py-4 font-serif text-2xl text-dark transition-colors hover:text-gold-deep"
              >
                Contact
              </Link>
            </div>
            <p className="mt-auto font-sans text-[11px] uppercase tracking-[0.2em] text-smoke">
              Cash on Delivery · Nationwide
            </p>
          </nav>
        </div>
      )}
    </>
  );
}
