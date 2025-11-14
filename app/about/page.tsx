import Link from 'next/link';

export const metadata = {
  title: 'About Cheryl Towey | Expert New Jersey Real Estate Agent',
  description: 'Meet Cheryl Towey, your trusted Weichert Realtors agent specializing in Sussex and Warren County real estate. Years of experience helping clients find their dream homes.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-max text-center">
          <h1 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-6 heading-underline pb-4">
            About Cheryl Towey
          </h1>
          <p className="scroll-animate text-base text-gray-dark max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in New Jersey real estate, dedicated to making your home buying and selling experience seamless, successful, and stress-free.
          </p>
        </div>
      </section>

      {/* Agent Bio Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Agent Image */}
            <div className="scroll-animate">
              <img 
                src="/images/1752608667829.jpeg" 
                alt="Cheryl Towey - New Jersey Real Estate Agent" 
                className="w-full rounded-sm shadow-lg"
              />
            </div>

            {/* Agent Info */}
            <div>
              <h2 className="scroll-animate text-2xl font-serif font-light text-black mb-4">
                Cheryl Towey
              </h2>
              <p className="scroll-animate text-base text-gold mb-6 font-serif">
                Licensed Real Estate Salesperson | Weichert Realtors
              </p>
              <div className="space-y-4 text-gray-dark leading-relaxed text-sm">
                <p className="scroll-animate">
                  With a deep passion for real estate and an unwavering commitment to client satisfaction, Cheryl Towey has established herself as a trusted advisor in the New Jersey real estate market. Specializing in Sussex County, Warren County, and surrounding communities, Cheryl brings extensive local knowledge and market expertise to every transaction.
                </p>
                <p className="scroll-animate">
                  Cheryl's approach to real estate is built on a foundation of integrity, professionalism, and personalized service. Whether you're a first-time homebuyer, seasoned investor, or looking to sell your property, Cheryl provides expert guidance through every step of the process. Her intimate knowledge of communities like Hackettstown, Andover, Byram, Blairstown, Chester, and Washington allows her to match clients with properties that truly fit their lifestyle and goals.
                </p>
                <p className="scroll-animate">
                  As a Weichert Realtors agent, Cheryl leverages cutting-edge technology, comprehensive marketing strategies, and a vast professional network to deliver exceptional results. Her dedication to understanding each client's unique needs, combined with her negotiation skills and attention to detail, ensures a smooth and successful real estate experience from start to finish.
                </p>
                <p className="scroll-animate">
                  Beyond real estate, Cheryl is deeply committed to the communities she serves, staying actively involved in local events and maintaining strong relationships throughout Northern New Jersey.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-xs">
                  Get In Touch
                </Link>
                <a href="tel:9083340971" className="btn-secondary text-xs">
                  Call 908.334.0971
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="scroll-animate text-center">
              <div className="text-4xl font-serif font-light text-secondary mb-2">Extensive</div>
              <div className="text-xs uppercase tracking-widest text-gray-dark font-light">
                LOCAL MARKET KNOWLEDGE
              </div>
            </div>
            <div className="scroll-animate text-center">
              <div className="text-4xl font-serif font-light text-secondary mb-2">Years</div>
              <div className="text-xs uppercase tracking-widest text-gray-dark font-light">
                OF EXPERIENCE
              </div>
            </div>
            <div className="scroll-animate text-center">
              <div className="text-4xl font-serif font-light text-secondary mb-2">Dedicated</div>
              <div className="text-xs uppercase tracking-widest text-gray-dark font-light">
                CLIENT SERVICE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-4">
              Service Areas
            </h2>
            <p className="scroll-animate text-base text-gray-dark max-w-3xl mx-auto">
              Proudly serving Northern New Jersey communities with expertise and dedication
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Sussex County', href: '/communities/sussex-county' },
              { name: 'Warren County', href: '/communities/warren-county' },
              { name: 'Hackettstown', href: '/communities/hackettstown' },
              { name: 'Andover', href: '/communities/andover' },
              { name: 'Byram', href: '/communities/byram' },
              { name: 'Blairstown', href: '/communities/blairstown' },
              { name: 'Chester', href: '/communities/chester' },
              { name: 'Washington', href: '/communities/washington' },
            ].map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="scroll-animate text-center p-6 bg-gray-light rounded-sm hover:bg-gold hover:text-white transition-all duration-300 group"
              >
                <div className="text-base font-serif font-light text-black group-hover:text-white">
                  {area.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Affiliations */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-4">
              Professional Affiliations
            </h2>
            <p className="scroll-animate text-base text-gray-dark max-w-3xl mx-auto">
              Backed by industry-leading resources and professional excellence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="scroll-animate bg-white p-12 rounded-sm text-center">
              <img 
                src="https://www.realestatebycherylnj.com/logos/weichert-logo.svg" 
                alt="Weichert Realtors" 
                className="h-16 mx-auto mb-8"
              />
              <h3 className="text-xl font-serif font-light text-black mb-4">
                Weichert Realtors
              </h3>
              <p className="text-sm text-gray-dark leading-relaxed max-w-2xl mx-auto">
                As a proud member of Weichert Realtors, one of the nation's leading real estate companies, Cheryl has access to cutting-edge technology, comprehensive marketing tools, and a vast network of industry professionals to better serve her clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="scroll-animate bg-white p-8 rounded-sm text-center">
                <div className="text-gold text-3xl mb-3">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h4 className="text-base font-serif font-light text-black mb-2">
                  New Jersey Realtors®
                </h4>
                <p className="text-xs text-gray-dark">
                  Member in good standing
                </p>
              </div>

              <div className="scroll-animate bg-white p-8 rounded-sm text-center">
                <div className="text-gold text-3xl mb-3">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-base font-serif font-light text-black mb-2">
                  Licensed Professional
                </h4>
                <p className="text-xs text-gray-dark">
                  New Jersey Real Estate License
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-6">
              Ready to Start Your Real Estate Journey?
            </h2>
            <p className="scroll-animate text-base text-gray-dark mb-8 leading-relaxed">
              Whether you're buying your first home, upgrading to your dream property, or selling your current residence, Cheryl is here to guide you every step of the way.
            </p>
            <div className="scroll-animate flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-xs">
                Schedule a Consultation
              </Link>
              <Link href="/listings" className="btn-secondary text-xs">
                View Available Properties
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
