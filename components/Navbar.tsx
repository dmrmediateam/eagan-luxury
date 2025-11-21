'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Residences', href: '/listings' },
  { label: 'Private Marinas', href: '/communities' },
  { label: 'Advisory', href: '/about' },
  { label: 'Journal', href: '/blog' },
  { label: 'Sell With Us', href: '/sellers' },
  { label: 'Contact', href: '/contact' },
];

const featuredCommunities = [
  { name: 'Dolphin Cay', slug: 'dolphin-cay' },
  { name: 'Tierra Verde', slug: 'tierra-verde' },
  { name: 'Bacopa Bay', slug: 'bacopa-bay' },
  { name: 'St. Petersburg Waterfront', slug: 'st-petersburg-waterfront' },
  { name: 'Downtown St. Petersburg', slug: 'downtown-st-petersburg' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Show navbar when scrolled down more than 50px
      setIsVisible(scrollPosition > 50);
    };

    // Set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <>
      <header 
        className={`nav-shell fixed top-0 left-0 right-0 z-[200] transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
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
      </header>

      {/* Menu drawer - positioned outside header to avoid transform issues */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[600px] lg:w-[800px] bg-white border-l border-grid transition-transform duration-500 z-[300] ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto">
          <div className="px-8 py-12">
            {/* Close button - part of main nav menu */}
            <div className="mb-8 flex justify-end">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center hover:text-accent transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Column - Navigation & Contact */}
              <div className="space-y-10">
                {/* Navigation Links */}
                <div>
                  <p className="eyebrow mb-5 text-ink-soft">Navigate</p>
                  <div className="rule mb-6" />
                  <nav>
                    <ul className="space-y-4">
                      {navLinks.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="group block uppercase tracking-[0.35em] text-sm font-medium hover:text-accent transition-colors duration-200"
                            onClick={() => setOpen(false)}
                          >
                            <span className="relative inline-block">
                              {link.label}
                              <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                {/* Contact Information */}
                <div>
                  <p className="eyebrow mb-5 text-ink-soft">Contact</p>
                  <div className="rule mb-6" />
                  <div className="space-y-4 text-sm">
                    <a 
                      href="tel:7276371019" 
                      className="block uppercase tracking-[0.25em] hover:text-accent transition-colors duration-200"
                    >
                      727 637 1019
                    </a>
                    <a 
                      href="mailto:info@eaganluxury.com" 
                      className="block uppercase tracking-[0.25em] hover:text-accent transition-colors duration-200"
                    >
                      INFO@EAGANLUXURY.COM
                    </a>
                    <p className="text-ink-soft uppercase tracking-[0.2em] leading-relaxed mt-6">
                      4993 BACOPA LN S #705<br />
                      ST PETERSBURG FL
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 pt-2">
                  <Link 
                    href="/contact" 
                    className="btn-primary text-center py-3" 
                    onClick={() => setOpen(false)}
                  >
                    Arrange Viewing
                  </Link>
                  <a 
                    href="tel:7276371019" 
                    className="btn-outline text-center py-3" 
                    onClick={() => setOpen(false)}
                  >
                    727.637.1019
                  </a>
                </div>
              </div>

              {/* Right Column - Featured Communities */}
              <div className="space-y-6">
                <div>
                  <p className="eyebrow mb-5 text-ink-soft">Featured Communities</p>
                  <div className="rule mb-6" />
                </div>
                <nav>
                  <ul className="space-y-3">
                    {featuredCommunities.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/${item.slug}`}
                          className="group block text-base hover:text-accent transition-colors duration-200"
                          onClick={() => setOpen(false)}
                        >
                          <span className="relative inline-block">
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
