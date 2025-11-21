import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Eagan Luxury | St. Petersburg Waterfront Real Estate Experts',
  description: 'Meet Deborah Eagan and the Eagan Luxury team. Award-winning luxury and waterfront real estate specialists in St. Petersburg, Tierra Verde, and the Gulf Beaches.',
};

export default function AboutPage() {
  return (
    <main className="page-transition">
      {/* Hero Section */}
      <section className="section-shell">
        <div className="page-shell max-w-4xl">
          <p className="eyebrow">About</p>
          <div className="rule" />
          <h1 className="text-4xl md:text-[3.5rem] leading-tight mt-6 font-light">
            Eagan Luxury
          </h1>
          <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-2xl">
            A highly skilled and professional team specializing in luxury waterfront and sky residences throughout St. Petersburg, Tierra Verde, and the Gulf Beaches.
          </p>
        </div>
      </section>

      {/* Deborah Eagan Bio */}
      <section className="section-shell bg-ink/5">
        <div className="page-shell max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <Image
                src="/images/DeborahEaganEdited_42 (1).jpg"
                alt="Deborah Eagan"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div>
              <p className="eyebrow">Principal Agent</p>
              <div className="rule" />
              <h2 className="text-3xl md:text-4xl font-light mb-3">Deborah Eagan</h2>
              <p className="text-sm uppercase tracking-[0.2em] text-graphite mb-8">
                Realtor, GRI, CNE, CLHMS
              </p>
              <div className="space-y-6 text-base leading-relaxed text-ink-soft mb-8">
                <p>
                  Deborah is St. Petersburg's #1 Individual Agent for Keller Williams Realty St. Petersburg (2016-2024) and the #1 Individual Realtor in St. Petersburg, FL (2021). She ranks in the Top 1% of Keller Williams Agents Worldwide and has been recognized as a Top 5 Individual Agent in the North Florida Region (2019-2024).
                </p>
                <p>
                  Having left a successful career running her own advertising agency, Deborah brings marketing expertise, a passion for interior design and architecture, and exceptional negotiation skills to luxury real estate.
                </p>
              </div>
              <div className="space-y-3 text-sm">
                <a href="tel:7276371019" className="block text-ink hover:text-accent transition-colors">
                  727.637.1019
                </a>
                <a href="mailto:Debi@EaganLuxury.com" className="block text-ink hover:text-accent transition-colors">
                  Debi@EaganLuxury.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Achievements */}
      <section className="section-shell">
        <div className="page-shell max-w-4xl">
          <p className="eyebrow">Recognition</p>
          <div className="rule" />
          <h2 className="text-3xl md:text-4xl font-light mb-12">
            Awards & Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-light mb-6">Awards</h3>
              <ul className="space-y-4 text-sm text-ink-soft leading-relaxed">
                <li>#1 Individual Agent – KW St Pete Realty (2016-2024)</li>
                <li>#1 Individual Agent in St. Petersburg, FL – Stella MLS</li>
                <li>Top 5 Individual Agent – North Florida Region (2019-2024)</li>
                <li>Top 1% of Keller Williams Agents Worldwide (2019-2024)</li>
                <li>#1 Luxury Agent – Tampa Bay Region 2018</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-light mb-6">Certifications</h3>
              <ul className="space-y-4 text-sm text-ink-soft leading-relaxed">
                <li>GRI – Graduate Real Estate Institute</li>
                <li>CNE – Negotiation Certified Expert</li>
                <li>CLHMS – Certified Luxury Home Marketing Specialist</li>
                <li>RCS-D – Real Estate Collaboration Specialist</li>
                <li>Member National Association of Realtors</li>
                <li>Member Stellar MLS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-shell bg-ink/5">
        <div className="page-shell max-w-5xl">
          <p className="eyebrow">Excellence</p>
          <div className="rule" />
          <h2 className="text-3xl md:text-4xl font-light mb-12">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-light mb-3">Certified Expertise</h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                GRI, CNE, and CLHMS certifications ensure you receive the highest level of professional service.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-light mb-3">Top Rankings</h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                Consistently ranked #1 in the Pinellas Bayway/Tierra Verde area since 2013.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-light mb-3">International Reach</h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                Expertise in international real estate sales and marketing.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-light mb-3">Technology & Service</h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                Advanced marketing technology balanced with personalized attention.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-light mb-3">Dedicated Communication</h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                Responsive and transparent communication throughout every transaction.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-light mb-3">Keller Williams Network</h3>
              <p className="text-sm leading-relaxed text-ink-soft">
                Access to the largest real estate network in the USA with local expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-shell">
        <div className="page-shell max-w-6xl">
          <p className="eyebrow">Team</p>
          <div className="rule" />
          <h2 className="text-3xl md:text-4xl font-light mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-light mb-2">Deborah Eagan</h3>
              <p className="text-sm uppercase tracking-[0.2em] text-graphite mb-4">
                Principal Agent
              </p>
              <p className="text-sm leading-relaxed text-ink-soft mb-6">
                Award-winning real estate professional specializing in luxury condos and homes from downtown St. Petersburg to waterfront communities throughout south Pinellas County.
              </p>
              <div className="space-y-2 text-sm">
                <a href="tel:7276371019" className="block text-ink hover:text-accent transition-colors">
                  727.637.1019
                </a>
                <a href="mailto:Debi@EaganLuxury.com" className="block text-ink hover:text-accent transition-colors">
                  Debi@EaganLuxury.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-light mb-2">William Breaden</h3>
              <p className="text-sm uppercase tracking-[0.2em] text-graphite mb-4">
                Financial Advisor
              </p>
              <p className="text-sm leading-relaxed text-ink-soft mb-6">
                Former CPA with over 35 years of financial expertise. Provides comprehensive financial analysis and market trend insights for Pinellas County real estate.
              </p>
              <div className="space-y-2 text-sm">
                <a href="tel:8133121007" className="block text-ink hover:text-accent transition-colors">
                  813.312.1007
                </a>
                <a href="mailto:Bill@EaganLuxury.com" className="block text-ink hover:text-accent transition-colors">
                  Bill@EaganLuxury.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-light mb-2">Diane Martin</h3>
              <p className="text-sm uppercase tracking-[0.2em] text-graphite mb-4">
                Transaction Coordinator
              </p>
              <p className="text-sm leading-relaxed text-ink-soft">
                Manages transaction coordination, staging, and administrative operations to ensure seamless client experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-shell bg-ink/5">
        <div className="page-shell max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Work With Us
          </h2>
          <p className="text-base leading-relaxed text-ink-soft mb-8">
            Whether you're buying your first waterfront home, upgrading to your dream property, or selling your current residence, our team is here to guide you.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary">
              Schedule Consultation
            </Link>
            <Link href="/listings" className="btn-outline">
              View Properties
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
