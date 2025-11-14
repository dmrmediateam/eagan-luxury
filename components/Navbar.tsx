'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { label: 'Residences', href: '/listings' },
  { label: 'Marinas', href: '/communities' },
  { label: 'Advisory', href: '/about' },
  { label: 'Journal', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-shell">
      <div className="page-shell nav-bar" style={{ gridTemplateColumns: 'auto auto' }}>
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-44 relative">
            <Image src="/images/Eagan Luxury Logo.jpg" alt="Eagan Luxury" fill className="object-contain" sizes="176px" />
          </div>
          <span className="hidden lg:block text-xs tracking-[0.3em] uppercase text-accent">St. Petersburg • Gulf Coast</span>
        </Link>

        <div className="flex items-center gap-4 justify-end z-[310] relative">
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
            className="btn-ghost uppercase tracking-[0.35em] text-xs flex items-center gap-3"
          >
            <span>{open ? 'Close' : 'Menu'}</span>
            <span className="w-6 h-px bg-ink relative">
              <span className="absolute inset-0 translate-y-2 bg-ink block" />
              <span className="absolute inset-0 -translate-y-2 bg-ink block" />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white border-l border-grid transition-transform duration-500 z-[300] ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto py-10 px-8 grid gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="uppercase tracking-[0.35em] text-sm border-b border-line pb-4"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-4 pt-4">
            <Link href="/contact" className="btn-primary text-center" onClick={() => setOpen(false)}>
              Arrange Viewing
            </Link>
            <a href="tel:7276371019" className="btn-outline text-center" onClick={() => setOpen(false)}>
              727.637.1019
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
