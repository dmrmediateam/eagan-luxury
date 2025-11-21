'use client';

import Link from 'next/link';
import Image from 'next/image';

const navLeft = [
  { label: 'Residences', href: '/listings' },
  { label: 'Private Marinas', href: '/communities' },
  { label: 'Journal', href: '/blog' },
];

const navRight = [
  { label: 'About', href: '/about' },
  { label: 'Sell With Us', href: '/sellers' },
  { label: 'Contact', href: '/contact' },
];

const communities = [
  { label: 'Dolphin Cay', href: '/dolphin-cay' },
  { label: 'Tierra Verde', href: '/tierra-verde' },
  { label: 'Bacopa Bay', href: '/bacopa-bay' },
  { label: 'St. Petersburg Waterfront', href: '/st-petersburg-waterfront' },
  { label: 'Downtown St. Petersburg', href: '/downtown-st-petersburg' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-shell section-shell">
      <div className="page-shell footer-grid">
        {/* Brand & Contact Section */}
        <div className="footer-block lg:col-span-4">
          <p className="eyebrow">Eagan Luxury</p>
          <div className="rule" />
          <p className="text-sm leading-7 mb-8 text-ink-soft">
            A waterfront collective representing St. Petersburg, Tierra Verde, Bacopa Bay, and the Gulf Beaches. We curate
            gallery-grade marketing and bespoke negotiations for every shoreline property.
          </p>
          
          {/* KW Logo - Enhanced */}
          <div className="mb-8 pb-8 border-b border-line">
            <div className="relative h-16 w-64 bg-white border border-line p-4 flex items-center justify-start">
              <Image 
                src="/images/KWlogo-55-1.png" 
                alt="Keller Williams Realty St. Pete" 
                fill 
                className="object-contain object-left" 
                sizes="256px"
                priority
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <a 
              href="tel:7276371019" 
              className="block text-sm uppercase tracking-[0.2em] text-ink hover:text-accent transition-colors"
            >
              727 637 1019
            </a>
            <a 
              href="mailto:info@eaganluxury.com" 
              className="block text-sm uppercase tracking-[0.2em] text-ink hover:text-accent transition-colors"
            >
              INFO@EAGANLUXURY.COM
            </a>
            <p className="text-sm uppercase tracking-[0.2em] text-graphite leading-relaxed">
              4993 BACOPA LN S #705<br />
              ST PETERSBURG FL
            </p>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="footer-block lg:col-span-4">
          <p className="eyebrow">Navigate</p>
          <div className="rule" />
          <div className="grid grid-cols-2 gap-8 mb-10">
            <ul className="list-plain">
              {navLeft.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="list-plain">
              {navRight.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <p className="eyebrow mb-4">Featured Communities</p>
            <ul className="list-plain">
              {communities.map((community) => (
                <li key={community.label}>
                  <Link href={community.href} className="hover:text-accent transition-colors">
                    {community.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Inquiries Section */}
        <div className="footer-block lg:col-span-4">
          <p className="eyebrow">Inquiries</p>
          <div className="rule" />
          <p className="text-sm leading-7 mb-8 text-ink-soft">
            We operate by appointment for private showings and seller consultations. Submit your portfolio brief and our team
            will respond within one business day.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Arrange Meeting
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="page-shell border-t border-line mt-12 pt-8">
        <div className="flex flex-col md:flex-row gap-6 justify-between mb-8">
          <span className="text-xs uppercase tracking-[0.2em] text-graphite">
            © {year} Eagan Luxury Real Estate. All Rights Reserved.
          </span>
          <div className="flex gap-6 flex-wrap">
            <Link 
              href="/privacy-policy" 
              className="text-xs uppercase tracking-[0.2em] text-graphite hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms-and-conditions" 
              className="text-xs uppercase tracking-[0.2em] text-graphite hover:text-accent transition-colors"
            >
              Terms
            </Link>
            <Link 
              href="/fair-housing" 
              className="text-xs uppercase tracking-[0.2em] text-graphite hover:text-accent transition-colors"
            >
              Fair Housing Act
            </Link>
            <Link 
              href="/mls-information" 
              className="text-xs uppercase tracking-[0.2em] text-graphite hover:text-accent transition-colors"
            >
              MLS Information
            </Link>
            <Link 
              href="/accessibility" 
              className="text-xs uppercase tracking-[0.2em] text-graphite hover:text-accent transition-colors"
            >
              Accessibility
            </Link>
          </div>
        </div>
        
        {/* MLS Information */}
        <div className="border-t border-line pt-6">
          <div className="text-xs uppercase tracking-[0.15em] text-graphite space-y-3">
            <p className="font-medium">Multiple Listings Service Information (Stellar MLS)</p>
            <p className="leading-relaxed max-w-3xl">
              The data relating to real estate for sale on this website comes in part from the Internet Data Exchange (IDX) program of the Stellar MLS. 
              All information is deemed reliable but not guaranteed.
            </p>
            <div className="pt-2">
              <a 
                href="https://dmrmedia.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Produced by DMR Media
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
