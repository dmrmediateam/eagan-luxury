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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-shell section-shell">
      <div className="page-shell footer-grid">
        <div className="footer-block lg:col-span-4">
          <p className="eyebrow">Eagan Luxury</p>
          <div className="rule" />
          <p className="text-sm leading-7 mb-6">
            A waterfront collective representing St. Petersburg, Tierra Verde, Bacopa Bay, and the Gulf Beaches. We curate
            gallery-grade marketing and bespoke negotiations for every shoreline property.
          </p>
          <div className="mb-4">
            <div className="relative h-14 w-56 mb-4">
              <Image 
                src="/images/KWlogo-55-1.png" 
                alt="Keller Williams Realty St. Pete" 
                fill 
                className="object-contain" 
                sizes="224px"
              />
            </div>
          </div>
          <div className="grid gap-2 text-sm uppercase tracking-[0.25em]">
            <a href="tel:7276371019">727 637 1019</a>
            <a href="mailto:info@eaganluxury.com">INFO@EAGANLUXURY.COM</a>
            <span>4993 BACOPA LN S #705 • ST PETERSBURG FL</span>
          </div>
        </div>

        <div className="footer-block lg:col-span-4">
          <p className="eyebrow">Navigate</p>
          <div className="rule" />
          <div className="grid grid-cols-2 gap-6 mb-8">
            <ul className="list-plain">
              {navLeft.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <ul className="list-plain">
              {navRight.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Featured Communities</p>
            <ul className="list-plain">
              <li><Link href="#">Dolphin Cay</Link></li>
              <li><Link href="#">Tierra Verde</Link></li>
              <li><Link href="#">Bacopa Bay</Link></li>
              <li><Link href="#">St. Petersburg Waterfront</Link></li>
              <li><Link href="#">Downtown St. Petersburg</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-block lg:col-span-4">
          <p className="eyebrow">Inquiries</p>
          <div className="rule" />
          <p className="text-sm leading-7 mb-6">
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

      <div className="page-shell border-t border-grid mt-10 pt-6 text-xs uppercase tracking-[0.2em]">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-between mb-6">
          <span>© {year} Eagan Luxury Real Estate. All Rights Reserved.</span>
          <div className="flex gap-4 flex-wrap">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms</Link>
            <Link href="/fair-housing">Fair Housing Act</Link>
            <Link href="/mls-information">MLS Information</Link>
            <Link href="/accessibility">Accessibility</Link>
          </div>
        </div>
        <div className="text-xs uppercase tracking-[0.2em] text-graphite">
          <p className="mb-2">Multiple Listings Service Information (Stella MLS)</p>
          <p className="mb-4">
            The data relating to real estate for sale on this website comes in part from the Internet Data Exchange (IDX) program of the Stellar MLS. 
            All information is deemed reliable but not guaranteed.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="https://dmrmedia.org" target="_blank" rel="noopener noreferrer">
              Produced by DMR Media
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
