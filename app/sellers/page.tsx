import type { Metadata } from 'next';
import Link from 'next/link';
import HomeValuation from '@/components/HomeValuation';

export const metadata: Metadata = {
  title: 'Sell With Us | Eagan Luxury Real Estate',
  description: 'Expert guidance for selling your luxury waterfront or sky residence in St. Petersburg. Professional marketing, strategic pricing, and comprehensive support.',
};

export default function SellersPage() {
  const sellingProcess = [
    {
      step: '01',
      title: 'Consultation & Valuation',
      description: 'Comprehensive market analysis and strategic pricing for your property.',
    },
    {
      step: '02',
      title: 'Preparation & Staging',
      description: 'Expert guidance on presenting your home to maximize appeal and value.',
    },
    {
      step: '03',
      title: 'Professional Marketing',
      description: 'Gallery-grade photography, virtual tours, and targeted digital campaigns.',
    },
    {
      step: '04',
      title: 'Showings & Open Houses',
      description: 'Coordinated presentations to qualified buyers and real estate professionals.',
    },
    {
      step: '05',
      title: 'Offer Review & Negotiation',
      description: 'Strategic analysis and expert negotiation to secure optimal terms.',
    },
    {
      step: '06',
      title: 'Closing',
      description: 'Seamless navigation through inspections, appraisals, and final transactions.',
    },
  ];

  const marketingStrategies = [
    {
      title: 'Professional Photography',
      description: 'Stunning visuals that showcase your property\'s best features.',
    },
    {
      title: 'MLS & Online Exposure',
      description: 'Maximum visibility across all major real estate platforms.',
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic advertising and social media campaigns.',
    },
    {
      title: 'Virtual Tours',
      description: 'Immersive digital experiences for remote buyers.',
    },
    {
      title: 'Staging Consultation',
      description: 'Expert recommendations to present your home optimally.',
    },
    {
      title: 'Private Showings',
      description: 'Flexible showing options for qualified buyers.',
    },
  ];

  const benefits = [
    {
      title: 'Maximum Exposure',
      description: 'Your listing reaches thousands of potential buyers through strategic marketing.',
    },
    {
      title: 'Expert Pricing',
      description: 'Data-driven pricing strategy to attract buyers while maximizing return.',
    },
    {
      title: 'Skilled Negotiation',
      description: 'Professional representation to secure the best terms and highest price.',
    },
    {
      title: 'Full-Service Support',
      description: 'Comprehensive assistance from listing through closing.',
    },
  ];

  return (
    <main className="page-transition">
      {/* Hero Section */}
      <section className="section-shell">
        <div className="page-shell max-w-4xl">
          <p className="eyebrow">Sell With Us</p>
          <div className="rule" />
          <h1 className="text-4xl md:text-[3.5rem] leading-tight mt-6 font-light">
            Sell Your Property
          </h1>
          <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-2xl">
            Expert guidance, professional marketing, and strategic pricing to maximize your property's value. We provide comprehensive support throughout the entire selling process.
          </p>
          <div className="flex gap-4 flex-wrap mt-8">
            <Link href="#valuation" className="btn-primary">
              Get Home Valuation
            </Link>
            <Link href="/contact" className="btn-outline">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* The Selling Process */}
      <section className="section-shell bg-ink/5">
        <div className="page-shell max-w-6xl">
          <p className="eyebrow">Process</p>
          <div className="rule" />
          <h2 className="text-3xl md:text-4xl font-light mb-12">
            The Selling Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sellingProcess.map((item) => (
              <div key={item.step} className="tile">
                <p className="text-sm uppercase tracking-[0.2em] text-graphite mb-4">
                  {item.step}
                </p>
                <h3 className="text-xl font-light mb-4">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sell With Us */}
      <section className="section-shell">
        <div className="page-shell max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow">Why Choose Us</p>
              <div className="rule" />
              <h2 className="text-3xl md:text-4xl font-light mb-8">
                Proven Results
              </h2>
              <p className="text-base leading-relaxed text-ink-soft mb-8">
                Our proven track record, comprehensive marketing strategies, and deep knowledge of the St. Petersburg luxury market ensure your property sells quickly and for the best possible price.
              </p>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-1 h-1 bg-accent rounded-full" />
                    </div>
                    <div>
                      <h3 className="text-lg font-light mb-2">{benefit.title}</h3>
                      <p className="text-sm leading-relaxed text-ink-soft">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="tile-muted">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-3xl font-light text-ink mb-2">98%</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-graphite">
                    Average List-to-Sale
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-light text-ink mb-2">45</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-graphite">
                    Days on Market
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-ink-soft">
                Our marketing approach combines data-driven pricing with gallery-grade presentation to achieve exceptional results for luxury properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Strategies */}
      <section className="section-shell bg-ink/5">
        <div className="page-shell max-w-6xl">
          <p className="eyebrow">Marketing</p>
          <div className="rule" />
          <h2 className="text-3xl md:text-4xl font-light mb-12">
            Comprehensive Marketing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingStrategies.map((strategy, index) => (
              <div key={index} className="tile">
                <h3 className="text-lg font-light mb-3">{strategy.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {strategy.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Preparation */}
      <section className="section-shell">
        <div className="page-shell max-w-4xl">
          <p className="eyebrow">Preparation</p>
          <div className="rule" />
          <h2 className="text-3xl md:text-4xl font-light mb-12">
            Preparing Your Home
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="tile">
              <h3 className="text-xl font-light mb-6">Interior</h3>
              <ul className="space-y-3 text-sm text-ink-soft">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Declutter and depersonalize spaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Deep clean every room</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Make minor repairs and touch-up paint</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Update fixtures and hardware</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Maximize natural light</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Create inviting, neutral spaces</span>
                </li>
              </ul>
            </div>
            <div className="tile">
              <h3 className="text-xl font-light mb-6">Exterior</h3>
              <ul className="space-y-3 text-sm text-ink-soft">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Enhance curb appeal with landscaping</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Power wash siding and walkways</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Paint or stain front door</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Maintain lawn and gardens</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Clean gutters and windows</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Add welcoming touches</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Home Valuation Section */}
      <section id="valuation" className="section-shell bg-ink/5">
        <div className="page-shell max-w-4xl">
          <p className="eyebrow">Valuation</p>
          <div className="rule" />
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Get Your Home Valuation
          </h2>
          <p className="text-base leading-relaxed text-ink-soft mb-8">
            Discover your property's current market value with a comprehensive analysis.
          </p>
          <HomeValuation />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-shell">
        <div className="page-shell max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to Sell?
          </h2>
          <p className="text-base leading-relaxed text-ink-soft mb-8">
            Let us create a customized marketing plan to sell your property quickly and for top dollar. Schedule your consultation today.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn-primary">
              Schedule Consultation
            </Link>
            <a href="tel:7276371019" className="btn-outline">
              Call 727.637.1019
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
