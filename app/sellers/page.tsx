import Link from 'next/link';
import HomeValuation from '@/components/HomeValuation';

export const metadata = {
  title: 'Seller\'s Guide | Cheryl Towey Real Estate',
  description: 'Expert guidance for home sellers in New Jersey. Get a free home valuation, learn about the selling process, and maximize your property\'s value with Cheryl Towey.',
};

export default function SellersPage() {
  const sellingProcess = [
    {
      step: '01',
      title: 'Consultation & Valuation',
      description: 'Meet with Cheryl to discuss your goals and receive a comprehensive market analysis of your property.',
      icon: '🤝',
    },
    {
      step: '02',
      title: 'Prepare Your Home',
      description: 'Expert advice on staging, repairs, and improvements to maximize your home\'s appeal and value.',
      icon: '✨',
    },
    {
      step: '03',
      title: 'Professional Marketing',
      description: 'High-quality photography, virtual tours, MLS listing, and targeted digital marketing campaigns.',
      icon: '📸',
    },
    {
      step: '04',
      title: 'Show Your Home',
      description: 'Coordinate showings and open houses to showcase your property to qualified buyers.',
      icon: '🚪',
    },
    {
      step: '05',
      title: 'Review Offers',
      description: 'Analyze offers together and negotiate the best terms, price, and contingencies for your sale.',
      icon: '📋',
    },
    {
      step: '06',
      title: 'Close the Sale',
      description: 'Navigate inspections, appraisals, and closing process smoothly to complete your successful sale.',
      icon: '✅',
    },
  ];

  const marketingStrategies = [
    {
      title: 'Professional Photography & Video',
      description: 'Stunning visuals that showcase your home\'s best features and attract more qualified buyers.',
      icon: '📷',
    },
    {
      title: 'MLS & Online Exposure',
      description: 'Maximum visibility on all major real estate platforms including Zillow, Realtor.com, and more.',
      icon: '🌐',
    },
    {
      title: 'Targeted Social Media',
      description: 'Strategic advertising on Facebook, Instagram, and other platforms to reach potential buyers.',
      icon: '📱',
    },
    {
      title: 'Virtual Tours & 3D Walkthroughs',
      description: 'Immersive digital experiences that allow buyers to explore your home from anywhere.',
      icon: '🎥',
    },
    {
      title: 'Professional Staging Advice',
      description: 'Expert recommendations to present your home in the best possible light.',
      icon: '🏠',
    },
    {
      title: 'Open Houses & Private Showings',
      description: 'Flexible showing options to accommodate serious buyers and maximize interest.',
      icon: '🗝️',
    },
  ];

  const benefits = [
    {
      title: 'Maximum Market Exposure',
      description: 'Your listing reaches thousands of potential buyers through strategic marketing.',
    },
    {
      title: 'Expert Pricing Strategy',
      description: 'Data-driven pricing to attract buyers while maximizing your return.',
    },
    {
      title: 'Skilled Negotiation',
      description: 'Professional representation to secure the best terms and highest price.',
    },
    {
      title: 'Stress-Free Process',
      description: 'Full-service support handling all details from listing to closing.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-gray-light to-white">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto">
            <h1 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-6 heading-underline pb-4">
            Seller's Guide
          </h1>
            <p className="scroll-animate text-base text-gray-dark leading-relaxed mb-8">
              Maximize your home's value with expert guidance, professional marketing, and strategic pricing. Cheryl Towey provides comprehensive support to ensure a successful sale from start to finish.
            </p>
            <div className="scroll-animate flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#valuation" className="btn-primary text-xs">
                Get Free Home Valuation
              </Link>
              <Link href="/contact" className="btn-secondary text-xs">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Selling Process */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-4">
              The Home Selling Process
            </h2>
            <p className="scroll-animate text-base text-gray-dark max-w-3xl mx-auto">
              A proven step-by-step approach to selling your home for top dollar
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sellingProcess.map((item, index) => (
              <div
                key={index}
                className="scroll-animate bg-gradient-to-br from-white to-gray-light p-8 rounded-sm border border-gray-200 hover:border-gold hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="text-xs uppercase tracking-widest text-gold font-semibold mb-3">
                  Step {item.step}
                </div>
                <h3 className="text-xl font-serif font-light text-black mb-3 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-dark leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sell With Cheryl */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="scroll-animate order-2 lg:order-1">
                <div className="bg-white p-8 rounded-sm shadow-xl">
                  <div className="aspect-video bg-gray-200 rounded-sm mb-6 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Professional Listing Photo</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-gold/10 to-transparent rounded-sm">
                      <div className="text-2xl font-serif text-gold mb-1">98%</div>
                      <div className="text-xs text-gray-dark">Average List-to-Sale Price</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-gold/10 to-transparent rounded-sm">
                      <div className="text-2xl font-serif text-gold mb-1">45</div>
                      <div className="text-xs text-gray-dark">Average Days on Market</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-6">
                  Why Sell With Cheryl?
                </h2>
                <p className="scroll-animate text-base text-gray-dark leading-relaxed mb-8">
                  Cheryl's proven track record, comprehensive marketing strategies, and deep knowledge of the New Jersey market ensure your home sells quickly and for the best possible price. Her personalized approach means you're never just another listing.
                </p>
                
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="scroll-animate flex gap-4 p-6 bg-white rounded-sm border-l-4 border-gold hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex-shrink-0">
                        <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-serif font-light text-black mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-gray-dark leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Strategies */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-4">
              Comprehensive Marketing
            </h2>
            <p className="scroll-animate text-base text-gray-dark max-w-3xl mx-auto">
              Your property deserves a multi-channel marketing approach that reaches the right buyers
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingStrategies.map((strategy, index) => (
              <div
                key={index}
                className="scroll-animate bg-white p-6 rounded-sm border border-gray-200 hover:border-gold hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{strategy.icon}</div>
                <h3 className="text-base font-serif font-light text-black mb-2">
                  {strategy.title}
                </h3>
                <p className="text-xs text-gray-dark leading-relaxed">
                  {strategy.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Preparation Tips */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-8 text-center">
              Preparing Your Home to Sell
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="scroll-animate bg-white p-6 rounded-sm shadow-md">
                <h3 className="text-lg font-serif font-light text-black mb-4 flex items-center gap-2">
                  <span className="text-gold">✓</span>
                  Interior Preparation
                </h3>
                <ul className="space-y-2 text-sm text-gray-dark">
                  <li className="flex gap-2">
                    <span className="text-gold flex-shrink-0">•</span>
                    <span>Declutter and depersonalize spaces</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold flex-shrink-0">•</span>
                    <span>Deep clean every room</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold flex-shrink-0">•</span>
                    <span>Make minor repairs and touch-up paint</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold flex-shrink-0">•</span>
                    <span>Update fixtures and hardware</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold flex-shrink-0">•</span>
                    <span>Maximize natural light</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold flex-shrink-0">•</span>
                    <span>Create inviting, neutral spaces</span>
                  </li>
                </ul>
              </div>

              <div className="scroll-animate bg-white p-6 rounded-sm shadow-md">
                <h3 className="text-lg font-serif font-light text-black mb-4 flex items-center gap-2">
                  <span className="text-gold">✓</span>
                  Exterior Preparation
                </h3>
                <ul className="space-y-2 text-sm text-gray-dark">
                  <li className="flex gap-2">
                    <span className="text-gold flex-shrink-0">•</span>
                    <span>Enhance curb appeal with landscaping</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold flex-shrink-0">•</span>
                    <span>Power wash siding and walkways</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold flex-shrink-0">•</span>
                    <span>Paint or stain front door</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold flex-shrink-0">•</span>
                    <span>Maintain lawn and gardens</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold flex-shrink-0">•</span>
                    <span>Clean gutters and windows</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold flex-shrink-0">•</span>
                    <span>Add welcoming touches (plants, new mailbox)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Valuation Section */}
      <section id="valuation" className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-4">
              Get Your Free Home Valuation
            </h2>
            <p className="scroll-animate text-base text-gray-dark max-w-3xl mx-auto">
              Discover your home's current market value with a comprehensive analysis from Cheryl Towey
          </p>
        </div>
          
          <HomeValuation />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-gray-light to-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-6">
              Ready to Sell Your Home?
            </h2>
            <p className="scroll-animate text-base text-gray-dark mb-8 leading-relaxed">
              Let Cheryl create a customized marketing plan to sell your home quickly and for top dollar. Schedule your free consultation today.
            </p>
            <div className="scroll-animate flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-xs">
                Schedule a Consultation
              </Link>
              <a href="tel:9083340971" className="btn-secondary text-xs">
                Call 908.334.0971
              </a>
            </div>
          </div>
      </div>
      </section>
    </div>
  );
}

