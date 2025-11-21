import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Eagan Luxury Real Estate',
  description: 'Terms and conditions for using our website and services. Please review these terms before using our real estate services.',
};

export default function TermsAndConditionsPage() {
  return (
    <main className="page-transition">
      <section className="section-shell">
        <div className="page-shell">
          <p className="eyebrow">Terms & Conditions</p>
          <div className="rule" />
          <h1 className="text-4xl md:text-[3.5rem] leading-tight mt-6">
            Terms & Conditions
          </h1>
          <p className="mt-6 text-base text-ink-soft max-w-2xl">
            Please read these terms and conditions carefully before using our website and services.
          </p>
          <p className="mt-4 text-sm text-graphite uppercase tracking-[0.2em]">
            Last Updated: November 2024
          </p>
        </div>
      </section>

      <section className="section-shell bg-ink/5">
        <div className="page-shell max-w-4xl">
          <div className="space-y-12">
            {/* Acceptance of Terms */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Acceptance of Terms</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                Welcome to Eagan Luxury Real Estate. By accessing or using this website, you agree to be bound by these Terms and Conditions ("Terms"). These Terms govern your use of our website and the services we provide.
              </p>
              <p className="text-base leading-relaxed text-ink-soft">
                If you do not agree to these Terms, please do not use our website. We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting. Your continued use of the website following any changes indicates your acceptance of the new Terms.
              </p>
            </div>

            {/* Use of Website */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Use of Website</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                You may use this website for lawful purposes only. You agree not to use this website:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed text-ink-soft">In any way that violates any applicable federal, state, local, or international law or regulation</li>
                <li className="text-base leading-relaxed text-ink-soft">To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                <li className="text-base leading-relaxed text-ink-soft">To impersonate or attempt to impersonate us, our employees, another user, or any other person or entity</li>
                <li className="text-base leading-relaxed text-ink-soft">To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
                <li className="text-base leading-relaxed text-ink-soft">To introduce any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful</li>
                <li className="text-base leading-relaxed text-ink-soft">To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the website</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Intellectual Property and Website Content</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                All content on this website, including but not limited to text, graphics, logos, images, videos, and software, is the property of Eagan Luxury Real Estate, Keller Williams Realty, or their respective licensors and is protected by United States and international copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                You may view, download, and print content from this website for your personal, non-commercial use only. You may not:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed text-ink-soft">Modify, copy, distribute, transmit, display, reproduce, publish, license, or create derivative works from any content on this website</li>
                <li className="text-base leading-relaxed text-ink-soft">Use any content for commercial purposes without our express written consent</li>
                <li className="text-base leading-relaxed text-ink-soft">Remove any copyright, trademark, or other proprietary notices from the content</li>
              </ul>
              <p className="text-base leading-relaxed text-ink-soft mt-4">
                The Keller Williams® name and logo are registered trademarks of Keller Williams Realty, Inc. and may not be used without permission. REALTOR® is a registered trademark of the National Association of REALTORS®.
              </p>
            </div>

            {/* Property Listings */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Property Listings and Information Accuracy</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                Property listings and information displayed on this website are provided for informational purposes only and are believed to be accurate but are not guaranteed. Property information may be sourced from Multiple Listing Services (MLS), public records, and other third-party sources.
              </p>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                <strong className="text-ink">Important Disclaimers:</strong>
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed text-ink-soft">Property information is subject to change without notice and may become outdated or inaccurate</li>
                <li className="text-base leading-relaxed text-ink-soft">All property details, including but not limited to square footage, lot size, room dimensions, and amenities, should be independently verified</li>
                <li className="text-base leading-relaxed text-ink-soft">Photos may not reflect the current condition of the property or may show model units or staged homes</li>
                <li className="text-base leading-relaxed text-ink-soft">Pricing, availability, and terms are subject to change and require confirmation</li>
                <li className="text-base leading-relaxed text-ink-soft">Property boundaries and lot sizes should be verified through a professional survey</li>
              </ul>
              <p className="text-base leading-relaxed text-ink-soft mt-4">
                This website does not constitute an offer to sell or a solicitation of an offer to buy any real estate. All real estate transactions are subject to formal contracts, inspections, financing, and other contingencies.
              </p>
            </div>

            {/* MLS and IDX */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">MLS and IDX Data</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                Some property data displayed on this website is provided through the Internet Data Exchange (IDX) program of Stellar MLS and other MLS providers. This data is deemed reliable but is not guaranteed.
              </p>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                Users of this data are hereby notified that:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed text-ink-soft">The data may be used only for consumers' personal, non-commercial use</li>
                <li className="text-base leading-relaxed text-ink-soft">The data may not be used for any purpose other than to identify prospective properties for purchase</li>
                <li className="text-base leading-relaxed text-ink-soft">IDX information is provided exclusively for consumers' personal, non-commercial use and may not be used for any purpose other than to identify prospective properties</li>
                <li className="text-base leading-relaxed text-ink-soft">Any reproduction or distribution of IDX data is strictly prohibited</li>
              </ul>
              <p className="text-base leading-relaxed text-ink-soft mt-4">
                Listings marked as IDX are held by brokerage firms other than Keller Williams Realty. Copyright and ownership remain with the respective MLS and listing brokers.
              </p>
            </div>

            {/* Professional Services */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Professional Services and Advice</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                The information provided on this website is for general informational purposes only and should not be considered professional advice. Nothing on this website constitutes:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed text-ink-soft">Legal, financial, tax, or investment advice</li>
                <li className="text-base leading-relaxed text-ink-soft">A substitute for professional consultation with qualified real estate, legal, financial, or tax advisors</li>
                <li className="text-base leading-relaxed text-ink-soft">A guarantee of specific results or outcomes in any real estate transaction</li>
              </ul>
              <p className="text-base leading-relaxed text-ink-soft mt-4">
                Before making any real estate decisions, you should consult with appropriate professionals, including but not limited to real estate attorneys, home inspectors, mortgage lenders, financial advisors, and tax professionals.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Limitation of Liability</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                To the fullest extent permitted by law, Eagan Luxury Real Estate and Keller Williams Realty shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of this website or the services provided, including but not limited to:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed text-ink-soft">Errors or inaccuracies in property listings or information</li>
                <li className="text-base leading-relaxed text-ink-soft">Lost profits, revenues, or business opportunities</li>
                <li className="text-base leading-relaxed text-ink-soft">Loss of data or information</li>
                <li className="text-base leading-relaxed text-ink-soft">Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Governing Law and Jurisdiction</h2>
              <p className="text-base leading-relaxed text-ink-soft">
                These Terms and your use of this website shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the courts located in Pinellas County, Florida, for the resolution of any disputes arising out of or relating to these Terms or your use of the website.
              </p>
            </div>

            {/* Contact Information */}
            <div className="tile-muted mt-12">
              <h2 className="text-3xl md:text-4xl font-light mb-6">Questions About These Terms</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-6">
                If you have any questions, concerns, or comments about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-3 text-base text-ink-soft">
                <p>
                  <strong className="text-ink">Eagan Luxury Real Estate</strong><br />
                  Keller Williams Realty St. Pete
                </p>
                <p>
                  <strong className="text-ink">Email:</strong> info@eaganluxury.com<br />
                  <strong className="text-ink">Phone:</strong> 727 637 1019
                </p>
                <p>
                  <strong className="text-ink">Office Address:</strong><br />
                  4993 BACOPA LN S #705<br />
                  ST PETERSBURG FL
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
