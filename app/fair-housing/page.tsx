import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fair Housing Act | Eagan Luxury Real Estate',
  description: 'Our commitment to fair housing and equal opportunity. Learn about the Fair Housing Act and our dedication to providing equal access to housing.',
};

export default function FairHousingPage() {
  return (
    <main className="page-transition">
      <section className="section-shell">
        <div className="page-shell">
          <p className="eyebrow">Fair Housing</p>
          <div className="rule" />
          <h1 className="text-4xl md:text-[3.5rem] leading-tight mt-6">
            Fair Housing Act
          </h1>
          <p className="mt-6 text-base text-ink-soft max-w-2xl">
            Our commitment to fair housing and equal opportunity for all.
          </p>
          <p className="mt-4 text-sm text-graphite uppercase tracking-[0.2em]">
            Last Updated: November 2024
          </p>
        </div>
      </section>

      <section className="section-shell bg-ink/5">
        <div className="page-shell max-w-4xl">
          <div className="space-y-12">
            {/* Our Commitment */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Our Commitment to Fair Housing</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                Eagan Luxury Real Estate is committed to providing equal housing opportunities to all individuals, regardless of race, color, religion, sex, national origin, familial status, disability, or any other protected characteristic. We fully support and comply with the Fair Housing Act and all applicable federal, state, and local fair housing laws.
              </p>
              <p className="text-base leading-relaxed text-ink-soft">
                We believe that everyone deserves the right to find and secure housing that meets their needs, and we are dedicated to treating all clients, customers, and prospects with dignity, respect, and fairness.
              </p>
            </div>

            {/* Fair Housing Act */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">The Fair Housing Act</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                The Fair Housing Act is a federal law that prohibits discrimination in the sale, rental, and financing of housing based on:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed text-ink-soft"><strong className="text-ink">Race or Color:</strong> Discrimination based on race, skin color, or ethnic background</li>
                <li className="text-base leading-relaxed text-ink-soft"><strong className="text-ink">Religion:</strong> Discrimination based on religious beliefs or practices</li>
                <li className="text-base leading-relaxed text-ink-soft"><strong className="text-ink">National Origin:</strong> Discrimination based on country of origin or ancestry</li>
                <li className="text-base leading-relaxed text-ink-soft"><strong className="text-ink">Sex:</strong> Discrimination based on gender, including sexual harassment</li>
                <li className="text-base leading-relaxed text-ink-soft"><strong className="text-ink">Familial Status:</strong> Discrimination against families with children under 18, including pregnant women</li>
                <li className="text-base leading-relaxed text-ink-soft"><strong className="text-ink">Disability:</strong> Discrimination against individuals with physical or mental disabilities, including refusal to make reasonable accommodations</li>
              </ul>
            </div>

            {/* What This Means */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">What This Means for You</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                Under the Fair Housing Act, it is illegal for anyone to:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed text-ink-soft">Refuse to rent, sell, or negotiate for housing based on protected characteristics</li>
                <li className="text-base leading-relaxed text-ink-soft">Set different terms, conditions, or privileges for the sale or rental of housing</li>
                <li className="text-base leading-relaxed text-ink-soft">Advertise or make any statement that indicates a preference or limitation based on protected characteristics</li>
                <li className="text-base leading-relaxed text-ink-soft">Falsely deny that housing is available for inspection, sale, or rental</li>
                <li className="text-base leading-relaxed text-ink-soft">Blockbust or encourage homeowners to sell by suggesting that people of a particular protected class are moving into the neighborhood</li>
                <li className="text-base leading-relaxed text-ink-soft">Refuse to make reasonable accommodations or modifications for individuals with disabilities</li>
              </ul>
            </div>

            {/* Our Practices */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Our Fair Housing Practices</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                At Eagan Luxury Real Estate, we are committed to:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed text-ink-soft">Treating all clients, customers, and prospects with equal respect and professionalism</li>
                <li className="text-base leading-relaxed text-ink-soft">Providing equal access to all available properties and services</li>
                <li className="text-base leading-relaxed text-ink-soft">Using inclusive language in all advertising and marketing materials</li>
                <li className="text-base leading-relaxed text-ink-soft">Making reasonable accommodations for individuals with disabilities</li>
                <li className="text-base leading-relaxed text-ink-soft">Regularly training our team on fair housing laws and best practices</li>
                <li className="text-base leading-relaxed text-ink-soft">Investigating and addressing any complaints of discrimination promptly and thoroughly</li>
                <li className="text-base leading-relaxed text-ink-soft">Maintaining a zero-tolerance policy for any form of discrimination or harassment</li>
              </ul>
            </div>

            {/* Reasonable Accommodations */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Reasonable Accommodations and Modifications</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                We are committed to providing reasonable accommodations and modifications for individuals with disabilities. This may include:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed text-ink-soft">Allowing service animals or emotional support animals, even if a property has a "no pets" policy</li>
                <li className="text-base leading-relaxed text-ink-soft">Making changes to policies, practices, or procedures to accommodate a disability</li>
                <li className="text-base leading-relaxed text-ink-soft">Allowing reasonable modifications to a rental unit or common areas at the tenant's expense (with landlord approval)</li>
                <li className="text-base leading-relaxed text-ink-soft">Providing information in alternative formats when requested</li>
              </ul>
              <p className="text-base leading-relaxed text-ink-soft mt-4">
                If you need a reasonable accommodation or modification, please contact us, and we will work with you to find a solution that meets your needs.
              </p>
            </div>

            {/* Reporting Discrimination */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Reporting Discrimination</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                If you believe you have been discriminated against in violation of the Fair Housing Act, you have the right to file a complaint. You can file a complaint with:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed text-ink-soft">
                  <strong className="text-ink">U.S. Department of Housing and Urban Development (HUD):</strong> You can file a complaint online at <a href="https://www.hud.gov/fairhousing" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.hud.gov/fairhousing</a> or by calling 1-800-669-9777
                </li>
                <li className="text-base leading-relaxed text-ink-soft">
                  <strong className="text-ink">Florida Commission on Human Relations:</strong> You can file a complaint with the state agency responsible for enforcing fair housing laws in Florida
                </li>
                <li className="text-base leading-relaxed text-ink-soft">
                  <strong className="text-ink">Local Fair Housing Organizations:</strong> There are local organizations that can assist you with filing a complaint and provide support
                </li>
              </ul>
              <p className="text-base leading-relaxed text-ink-soft mt-4">
                Complaints must generally be filed within one year of the alleged discriminatory act. If you have concerns about discrimination, we encourage you to contact us directly so we can address the issue promptly.
              </p>
            </div>

            {/* Contact Information */}
            <div className="tile-muted mt-12">
              <h2 className="text-3xl md:text-4xl font-light mb-6">Contact Us</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-6">
                If you have questions about fair housing, need a reasonable accommodation, or wish to report a concern, please contact us:
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

