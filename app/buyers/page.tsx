import Link from 'next/link';
import MortgageCalculator from '@/components/MortgageCalculator';

export const metadata = {
  title: 'Buyer\'s Guide | Cheryl Towey Real Estate',
  description: 'Expert guidance for home buyers in New Jersey. Learn about the home buying process, get pre-approved, and use our mortgage calculator to find your dream home.',
};

export default function BuyersPage() {
  const buyingProcess = [
    {
      step: '01',
      title: 'Get Pre-Approved',
      description: 'Start with a mortgage pre-approval to understand your budget and show sellers you\'re a serious buyer.',
      icon: '💰',
    },
    {
      step: '02',
      title: 'Define Your Needs',
      description: 'Work with Cheryl to identify your must-haves, preferred locations, and lifestyle requirements.',
      icon: '🏡',
    },
    {
      step: '03',
      title: 'Search Properties',
      description: 'Tour homes that match your criteria with expert guidance on neighborhoods, values, and potential.',
      icon: '🔍',
    },
    {
      step: '04',
      title: 'Make an Offer',
      description: 'Craft a competitive offer with professional negotiation to get the best terms and price.',
      icon: '📝',
    },
    {
      step: '05',
      title: 'Home Inspection',
      description: 'Protect your investment with a thorough inspection and expert advice on any issues discovered.',
      icon: '🔧',
    },
    {
      step: '06',
      title: 'Close the Deal',
      description: 'Navigate the closing process smoothly with guidance through paperwork, final walkthrough, and keys!',
      icon: '🔑',
    },
  ];

  const benefits = [
    {
      title: 'Local Market Expertise',
      description: 'Extensive knowledge of Sussex County, Warren County, and surrounding communities.',
    },
    {
      title: 'Exclusive Access',
      description: 'First look at new listings and off-market properties before they hit the public market.',
    },
    {
      title: 'Expert Negotiation',
      description: 'Professional representation to secure the best price and terms for your purchase.',
    },
    {
      title: 'Trusted Network',
      description: 'Connections to top lenders, inspectors, attorneys, and contractors to support your purchase.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-gray-light to-white">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto">
            <h1 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-6 heading-underline pb-4">
            Buyer's Guide
          </h1>
            <p className="scroll-animate text-base text-gray-dark leading-relaxed mb-8">
              Expert guidance through every step of your home buying journey in New Jersey. From pre-approval to closing, Cheryl Towey is dedicated to making your dream home a reality.
            </p>
            <div className="scroll-animate flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-xs">
                Start Your Search
              </Link>
              <Link href="/listings" className="btn-secondary text-xs">
                View Available Homes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Home Buying Process */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-4">
              The Home Buying Process
            </h2>
            <p className="scroll-animate text-base text-gray-dark max-w-3xl mx-auto">
              A clear roadmap to guide you from your first consultation to closing day
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buyingProcess.map((item, index) => (
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

      {/* Why Choose Cheryl */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div>
                <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-6">
                  Why Choose Cheryl Towey?
                </h2>
                <p className="scroll-animate text-base text-gray-dark leading-relaxed mb-8">
                  With years of experience in the New Jersey real estate market, Cheryl brings unparalleled expertise, dedication, and personalized service to every client. Her commitment goes beyond the transaction—she's invested in helping you find not just a house, but your perfect home.
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

                <div className="scroll-animate mt-8">
                  <Link href="/about" className="text-gold hover:text-gold-dark transition-colors duration-200 inline-flex items-center text-sm">
                    Learn More About Cheryl
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="scroll-animate">
                <div className="bg-white p-8 rounded-sm shadow-xl">
                  <div className="aspect-square bg-gray-200 rounded-sm mb-6 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Professional Photo</span>
                  </div>
                  <blockquote className="text-sm italic text-gray-dark leading-relaxed border-l-4 border-gold pl-4">
                    "Cheryl made our home buying experience seamless. Her knowledge, patience, and dedication were exceptional. We couldn't have found our dream home without her!"
                    <div className="text-xs text-black font-semibold mt-3">- Happy Homebuyers</div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First-Time Homebuyer Tips */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-8 text-center">
              First-Time Homebuyer Tips
            </h2>
            
            <div className="scroll-animate bg-gradient-to-br from-gold/10 to-transparent p-8 md:p-12 rounded-sm border border-gold/30">
              <ul className="space-y-4 text-sm text-gray-dark">
                <li className="flex gap-3">
                  <span className="text-gold flex-shrink-0">✓</span>
                  <span><strong className="text-black">Check Your Credit:</strong> Review your credit report and score at least 6 months before house hunting.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold flex-shrink-0">✓</span>
                  <span><strong className="text-black">Save for Down Payment:</strong> Aim for 20% down to avoid PMI, but FHA loans require as little as 3.5%.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold flex-shrink-0">✓</span>
                  <span><strong className="text-black">Budget for Closing Costs:</strong> Expect 2-5% of the purchase price for closing costs and fees.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold flex-shrink-0">✓</span>
                  <span><strong className="text-black">Get Pre-Approved:</strong> Show sellers you're serious and know exactly what you can afford.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold flex-shrink-0">✓</span>
                  <span><strong className="text-black">Research Neighborhoods:</strong> Visit at different times of day and talk to potential neighbors.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold flex-shrink-0">✓</span>
                  <span><strong className="text-black">Think Long-Term:</strong> Consider resale value, school districts, and future development plans.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold flex-shrink-0">✓</span>
                  <span><strong className="text-black">Don't Skip Inspection:</strong> A home inspection can save you thousands in unexpected repairs.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mortgage Calculator Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-4">
              Mortgage Calculator
            </h2>
            <p className="scroll-animate text-base text-gray-dark max-w-3xl mx-auto">
              Estimate your monthly mortgage payment and see how different factors affect your home buying budget
          </p>
        </div>
          
          <MortgageCalculator />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-6">
              Ready to Find Your Dream Home?
            </h2>
            <p className="scroll-animate text-base text-gray-dark mb-8 leading-relaxed">
              Let Cheryl guide you through the home buying process with expertise, dedication, and personalized service every step of the way.
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

