'use client';

import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <footer className="bg-black text-white border-t-4 border-gold">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
                <Link href="/" className="inline-block mb-6">
                  <img 
                    src="/62f3c630f8a08a45cbeff139_Weichert-Realtors-Centered-Bar-Logo-EHO.png" 
                    alt="Weichert Realtors Logo" 
                    className="h-8 w-auto filter brightness-0 invert"
                  />
                </Link>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Licensed real estate agent with Weichert Realtors, serving Morris County and surrounding areas with over 9 years of experience.
                </p>
                <div className="text-sm text-gray-400">
                  <div>1625 Route 10 East</div>
                  <div>Morris Plains, NJ 07950</div>
                </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-6">Navigate</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/listings" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/market-reports" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Market Reports
                </Link>
              </li>
              <li>
                <Link href="/buyers" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Buyer's Guide
                </Link>
              </li>
              <li>
                <Link href="/sellers" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Seller's Guide
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Communities */}
          <div>
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-6">Communities</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/communities/hackettstown" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Hackettstown
                </Link>
              </li>
              <li>
                <Link href="/communities/andover" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Andover
                </Link>
              </li>
              <li>
                <Link href="/communities/byram" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Byram
                </Link>
              </li>
              <li>
                <Link href="/communities/blairstown" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Blairstown
                </Link>
              </li>
              <li>
                <Link href="/communities/chester" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Chester
                </Link>
              </li>
              <li>
                <Link href="/communities/washington" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Washington
                </Link>
              </li>
              <li>
                <Link href="/communities/walpack" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Walpack
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-6">Contact</h4>
            <div className="space-y-4 text-sm text-gray-400">
                  <div>
                    <span className="font-semibold text-white">T:</span>
                    <span className="ml-2">(908) 334-0971</span>
                  </div>
                  <div>
                    <span className="font-semibold text-white">E:</span>
                    <span className="ml-2">yournjrealtor1@gmail.com</span>
                  </div>
            </div>
            <div className="mt-6">
              <h5 className="text-xs font-semibold text-gold uppercase tracking-wider mb-4">Find Me On</h5>
              <div className="flex space-x-3">
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/cheryl-towey-35384864/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit Cheryl Towey on LinkedIn"
                  className="w-8 h-8 border border-gray-600 hover:border-gold hover:bg-gold text-white hover:text-black rounded-sm flex items-center justify-center transition-all text-sm font-semibold"
                >
                  in
                </a>
                {/* Zillow */}
                <a 
                  href="https://www.zillow.com/profile/ctowey" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="View Cheryl Towey on Zillow"
                  className="w-8 h-8 border border-gray-600 hover:border-gold hover:bg-gold text-white hover:text-black rounded-sm flex items-center justify-center transition-all text-sm font-semibold"
                >
                  Z
                </a>
                {/* Realtor.com */}
                <a 
                  href="https://www.realtor.com/realestateagents/5697f23489a68901006bd439" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Find Cheryl Towey on Realtor.com"
                  className="w-8 h-8 border border-gray-600 hover:border-gold hover:bg-gold text-white hover:text-black rounded-sm flex items-center justify-center transition-all text-sm font-semibold"
                >
                  R
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Compliance Accordions */}
        <div className="border-t border-gray-800 py-8">
          <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-6">Legal & Compliance Information</h4>
          <div className="space-y-3">
            {/* MLS Disclaimer Accordion */}
            <div className="border border-gray-800 bg-gray-900 rounded-sm overflow-hidden">
              <button
                onClick={() => toggleAccordion('mls')}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-800 transition-colors"
              >
                <span className="text-xs font-semibold text-white uppercase tracking-wider">
                  MLS Disclaimer & Notification
                </span>
                <svg
                  className={`w-4 h-4 text-gold transition-transform duration-300 ${
                    openAccordion === 'mls' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openAccordion === 'mls' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="p-4 pt-0 text-xs text-gray-400 leading-relaxed space-y-3">
                  <p>
                    The data relating to real estate for sale on this website comes in part from the IDX Program of Garden State Multiple Listing Service, L.L.C. and Weichert, Realtors® - Corporate Headquarters - Morris Plains. Real estate listings held by other brokerage firms are marked as IDX listing. Information deemed reliable but not guaranteed.
                  </p>
                  <p>
                    Copyright © {currentYear} Garden State Multiple Listing Service, L.L.C. All rights reserved. This information is being provided for Consumer's personal, non-commercial use and may not be used for any purpose other than to identify prospective properties Consumers may be interested in purchasing.
                  </p>
                  <p>
                    The dissemination of listings on the website does not constitute the consent required by N.J.A.C. 11.5.6.1 (n) for the advertisement of listings exclusively for sale by another broker. Any such consent must be obtained in writing from the listing broker.
                  </p>
                </div>
              </div>
            </div>

            {/* Fair Housing Accordion */}
            <div className="border border-gray-800 bg-gray-900 rounded-sm overflow-hidden">
              <button
                onClick={() => toggleAccordion('fairhousing')}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-800 transition-colors"
              >
                <span className="text-xs font-semibold text-white uppercase tracking-wider">
                  Fair Housing & Equal Opportunity
                </span>
                <svg
                  className={`w-4 h-4 text-gold transition-transform duration-300 ${
                    openAccordion === 'fairhousing' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openAccordion === 'fairhousing' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="p-4 pt-0 text-xs text-gray-400 leading-relaxed space-y-3">
                  <p>
                    We are pledged to the letter and spirit of U.S. policy for the achievement of equal housing opportunity throughout the Nation. We encourage and support an affirmative advertising and marketing program in which there are no barriers to obtaining housing because of race, color, religion, sex, handicap, familial status, or national origin.
                  </p>
                  <p>
                    This real estate is offered without regard to race, color, religion, sex, handicap, familial status, or national origin. We are committed to providing an accessible website and mobile application. If you have difficulty accessing content, have difficulty viewing a file on the website, or notice any accessibility problems, please contact us to specify the nature of the accessibility issue and any assistive technology you use.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Licensing Accordion */}
            <div className="border border-gray-800 bg-gray-900 rounded-sm overflow-hidden">
              <button
                onClick={() => toggleAccordion('licensing')}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-800 transition-colors"
              >
                <span className="text-xs font-semibold text-white uppercase tracking-wider">
                  Professional Licensing & Realtor Information
                </span>
                <svg
                  className={`w-4 h-4 text-gold transition-transform duration-300 ${
                    openAccordion === 'licensing' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openAccordion === 'licensing' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="p-4 pt-0 text-xs text-gray-400 leading-relaxed space-y-3">
                  <p className="font-semibold text-white">Cheryl Towey</p>
                  <p>
                    Licensed Real Estate Salesperson<br />
                    NJ Real Estate License #1224607
                  </p>
                  <p className="font-semibold text-white">Weichert, Realtors®</p>
                  <p>
                    1625 NJ-10 East, Morris Plains, NJ 07950<br />
                    Office License #8834957
                  </p>
                  <p>
                    REALTOR® is a registered trademark of the National Association of REALTORS® and identifies real estate professionals who are members of the National Association of REALTORS® and subscribe to its strict Code of Ethics.
                  </p>
                  <p>
                    All information provided is deemed reliable but is not guaranteed and should be independently verified. Weichert® is a federally registered trademark owned by Weichert Co. All other trademarks are the property of their respective owners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-gray-400 text-xs">
                  © {currentYear} Cheryl Towey - Weichert Realtors. All rights reserved.
                </div>
            <div className="flex flex-wrap justify-center gap-6 text-xs">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="text-gray-400 hover:text-gold transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-gold transition-colors">
                Accessibility
              </Link>
              <a href="https://dmrmedia.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                Development & SEO Managed by DMR Media
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
