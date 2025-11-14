import type { Metadata } from 'next'
import Link from 'next/link';
import CommunityProperties from '@/app/components/CommunityProperties';
import { CommunityStructuredData } from '@/app/components/CommunityStructuredData';

export const metadata: Metadata = {
  title: 'Hackettstown NJ Homes for Sale | Local Real Estate Agent Cheryl Towey | Warren County',
  description: 'Search Hackettstown NJ homes for sale with local expert Cheryl Towey. Warren County real estate specialist. Downtown living, top schools, $465K median. Call 908-334-0971 for showings.',
  keywords: 'Hackettstown NJ homes for sale, Warren County real estate, Hackettstown realtor, Main Street properties, downtown Hackettstown homes, NJ-182 corridor, Hackettstown school district',
  openGraph: {
    title: 'Hackettstown NJ Real Estate - Homes for Sale',
    description: 'Find your dream home in historic Hackettstown, NJ. Local real estate expert Cheryl Towey specializes in Warren County properties.',
    url: 'https://www.realestatebycherylnj.com/communities/hackettstown',
    images: [
      {
        url: 'https://www.realestatebycherylnj.com/images/hackettstown-downtown.jpg',
        width: 1200,
        height: 630,
        alt: 'Downtown Hackettstown NJ - Main Street properties and homes for sale',
      }
    ],
  },
  other: {
    'geo.region': 'US-NJ',
    'geo.placename': 'Hackettstown, Warren County, New Jersey',
    'geo.position': '40.8584;-74.8282',
    'ICBM': '40.8584, -74.8282',
  },
};

export default function HackettstownPage() {
  const marketStats = [
    { label: 'Median Home Price', value: '$465,000' },
    { label: 'Average Days on Market', value: '38 days' },
    { label: 'Properties Available', value: '45+' },
    { label: 'Average Price/SqFt', value: '$220' },
  ];

  const communityFeatures = [
    {
      title: 'Downtown Living',
      description: 'Main Street buzzes with local gems like Marley\'s Gotham Grill and Czig Meister Brewing, perfect for dining and socializing.',
      icon: '🏪'
    },
    {
      title: 'Family-Friendly',
      description: 'Low-crime community with strong academics and personalized learning in well-rated school districts.',
      icon: '👨‍👩‍👧‍👦'
    },
    {
      title: 'Nature & Recreation',
      description: 'From Stephens State Park\'s hiking trails to Riverfront Park\'s playgrounds and Community Pool.',
      icon: '🌲'
    },
    {
      title: 'Cultural Vibrancy',
      description: 'Centenary University events, annual St. Patrick\'s Day Parade, Street Fair, and seasonal Farmers Market.',
      icon: '🎭'
    }
  ];

  return (
    <>
      <CommunityStructuredData
        name="Hackettstown"
        slug="hackettstown"
        county="Warren"
        population={10143}
        medianPrice={465000}
        distanceFromNYC="50 miles"
        description="Hackettstown, known as the 'Mountain City,' is a charming Warren County town offering small-town warmth with modern vibrancy. Located 50 miles from NYC, this family-friendly community features downtown living, excellent schools, and strong property values."
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h1 className="scroll-animate text-4xl sm:text-5xl font-serif font-light text-black mb-6 heading-underline pb-4">
            Discover Hackettstown, NJ
            <span className="block text-2xl sm:text-3xl text-secondary mt-2">Vibrant Community Downtown Living</span>
          </h1>
          <div className="scroll-animate prose max-w-none">
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Hackettstown, a charming Warren County town of about 10,143 residents, blends small-town warmth with modern vibrancy. Known as the "Mountain City," it sits 50 miles from New York City, offering a low-crime, family-friendly haven. As your Weichert Realtors expert, I, Cheryl Towey, help you explore homes in this dynamic community. Whether you're buying or selling, Hackettstown's appeal makes it a top Northwest NJ destination.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              Main Street buzzes with local gems like Marley's Gotham Grill and Czig Meister Brewing, perfect for dining and socializing. Annual events like the St. Patrick's Day Parade and Street Fair create a lively atmosphere, drawing residents to connect and celebrate. Homes near downtown offer walkable access to shops and cafes, ideal for those seeking an engaged community lifestyle.
            </p>
          </div>
          
          <div className="flex gap-4 flex-wrap mt-8">
            <Link href="/contact" className="btn-primary">
              Schedule Property Tour
            </Link>
            <Link href="/communities/hackettstown/market-report" className="btn-outline">
              View Market Report
            </Link>
          </div>
        </div>
      </section>

      {/* Why Residents Love Hackettstown */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-12 text-center">
            Why Residents Love Hackettstown
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="scroll-animate">
              <h3 className="text-2xl font-serif font-light text-black mb-4">
                Excellence in Education
              </h3>
              <p className="text-base text-gray-dark leading-relaxed">
                Hackettstown's schools provide strong academics and support families with personalized learning in well-rated districts. As your local expert, I can guide you to homes in top school zones, ensuring your family thrives in this educational environment.
              </p>
            </div>
            
            <div className="scroll-animate">
              <h3 className="text-2xl font-serif font-light text-black mb-4">
                Nature Meets Vibrancy
              </h3>
              <p className="text-base text-gray-dark leading-relaxed">
                From Stephens State Park's hiking trails to Centenary University's cultural events, Hackettstown blends nature and vibrancy. The Farmers Market and Community Pool add seasonal fun, while Riverfront Park offers playgrounds and paths. Homes near these attractions suit active buyers seeking a balanced lifestyle.
              </p>
            </div>
          </div>

          {/* Community Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="scroll-animate text-center p-6 bg-gray-light rounded-sm">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-serif font-light text-black mb-3">{feature.title}</h4>
                <p className="text-sm text-gray-dark leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Statistics */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-12 text-center">
            Current Market Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {marketStats.map((stat, index) => (
              <div key={index} className="scroll-animate text-center p-6 bg-white rounded-sm shadow-sm">
                <div className="text-3xl font-serif font-light text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-black font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/communities/hackettstown/market-report" className="btn-outline">
              View Complete Market Report
            </Link>
          </div>
        </div>
      </section>

      {/* Properties Listing */}
      <CommunityProperties cityId={22626} cityName="Hackettstown" />

      {/* Call to Action */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-max text-center">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light mb-6">
            Ready to Call Hackettstown Home?
          </h2>
          <p className="scroll-animate text-base leading-relaxed max-w-3xl mx-auto mb-8">
            Let me help you discover the perfect property in Hackettstown's vibrant community. From downtown condos to family homes near top schools, I'll guide you to your ideal Northwest New Jersey lifestyle.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/contact" 
              className="bg-white text-secondary px-8 py-3 rounded-sm font-light text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors"
            >
              Start Your Home Search
            </Link>
            <Link 
              href="/communities" 
              className="border border-white text-white px-8 py-3 rounded-sm font-light text-sm uppercase tracking-widest hover:bg-white hover:text-secondary transition-colors"
            >
              Explore Other Communities
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

