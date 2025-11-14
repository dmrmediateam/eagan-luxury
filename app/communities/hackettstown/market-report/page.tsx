import Link from 'next/link';

export const metadata = {
  title: 'Hackettstown NJ Market Report September 2025 | Real Estate by Cheryl NJ',
  description: 'Explore the Hackettstown NJ real estate market report for September 2025 with Cheryl Towey. Discover current trends, home values, schools, and what it\'s like to live in this vibrant Warren County community. Contact for personalized insights.',
};

export default function HackettstownMarketReport() {
  const marketStats = [
    { label: 'Market Heat Score', value: '85/100' },
    { label: 'Average Days on Market', value: '18-26 Days' },
    { label: 'Active Listings', value: '80-83' },
    { label: 'Above Asking Price', value: '86%' },
  ];

  const schoolData = [
    { name: 'Hatchery Hill Elementary', grades: 'PreK-1', rating: 'N/A', focus: 'Early Development' },
    { name: 'Willow Grove Elementary', grades: '2-4', rating: '6/10', focus: 'Supportive Programs' },
    { name: 'Hackettstown Middle School', grades: '5-8', rating: '5/10', focus: 'Robotics & Arts' },
    { name: 'Hackettstown High School', grades: '9-12', rating: '3.3★', focus: 'College Prep' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h1 className="scroll-animate text-4xl sm:text-5xl font-serif font-light text-black mb-6 heading-underline pb-4">
            Hackettstown Market Report
            <span className="block text-2xl sm:text-3xl text-secondary mt-2">September 2025</span>
          </h1>
          <p className="scroll-animate text-base text-gray-dark leading-relaxed max-w-4xl mb-6">
            Stay informed on the Hackettstown real estate market with this September 2025 report from Cheryl Towey, your dedicated Weichert Realtors professional. As a key community in Warren County, Hackettstown continues to attract buyers with its blend of suburban charm and natural beauty. This report covers current market trends, school quality, and the everyday appeal of living here, helping you make confident decisions in Northwest New Jersey's dynamic landscape.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link 
              href="/communities/hackettstown" 
              className="btn-primary"
            >
              View Hackettstown Properties
            </Link>
            <Link 
              href="/contact" 
              className="btn-outline"
            >
              Get Personalized Report
            </Link>
          </div>
        </div>
      </section>

      {/* Current Market Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-8">
            Current Market Overview
          </h2>
          
          {/* Market Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {marketStats.map((stat, index) => (
              <div key={index} className="scroll-animate text-center p-6 bg-gray-light rounded-sm">
                <div className="text-3xl font-serif font-light text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-black font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="scroll-animate prose max-w-none">
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              The Hackettstown housing market remains very competitive in September 2025, scoring 85 out of 100 on market heat indexes. Homes are selling quickly, often in 18-26 days on average, reflecting strong buyer demand amid stable inventory levels. Recent data shows around 80-83 active listings, a slight increase from earlier in the year, providing more options for buyers without overwhelming sellers. Year-over-year appreciation has been robust, with home values rising steadily due to low crime rates and proximity to urban centers like New York City, just 50 miles away.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              Market activity in late summer has shown a balanced pace, with properties spending less time on the market compared to national averages. This trend aligns with broader New Jersey patterns, where active listings have grown by about 18% statewide, yet Hackettstown's smaller scale keeps it buyer-friendly for well-priced homes. Whether you're eyeing a starter condo or a spacious family residence, the market favors proactive buyers who act swiftly.
            </p>
          </div>
        </div>
      </section>

      {/* Key Market Trends */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-8">
            Key Market Trends and Inventory
          </h2>
          <div className="scroll-animate prose max-w-none">
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Inventory in Hackettstown hovers at 71-83 homes, offering a mix from cozy two-bedroom options to larger four- or five-bedroom properties on wooded lots. Popular features include updated kitchens and proximity to parks, driving interest in neighborhoods like Panther Valley and College View. Recent sales indicate a high percentage—around 86%—closing above asking price, underscoring the area's appeal for sellers.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              Compared to last year, bedroom-specific trends show consistent growth across categories, with larger homes seeing the strongest interest due to family-oriented demand. Statewide influences, such as slightly dipping mortgage rates (around 6.5-6.8% for 30-year fixed), are easing entry for buyers, though Hackettstown's competitive edge persists. For sellers, strategic pricing remains key, as listings with professional staging move faster in this dense suburban environment.
            </p>
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-8">
            Hackettstown Schools: A Strong Foundation for Families
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {schoolData.map((school, index) => (
              <div key={index} className="scroll-animate bg-gray-light p-6 rounded-sm">
                <h3 className="text-xl font-serif font-light text-black mb-2">{school.name}</h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-dark">Grades: {school.grades}</span>
                  <span className="text-sm font-medium text-secondary">{school.rating}</span>
                </div>
                <p className="text-sm text-gray-dark">{school.focus}</p>
              </div>
            ))}
          </div>

          <div className="scroll-animate prose max-w-none">
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Education is a cornerstone of Hackettstown's appeal, with the Hackettstown Public School District serving over 2,000 students across four schools. Proficiency rates in reading and math hover around 52% and 44%, respectively, slightly above some state benchmarks and reflecting a commitment to foundational skills. The district maintains a favorable 11:1 student-teacher ratio, better than the New Jersey average of 12:1, fostering personalized learning.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              Overall, these schools contribute to Hackettstown's family-friendly reputation, with boundaries aligning well to residential areas. One private/charter option adds flexibility for families seeking alternatives to public education.
            </p>
          </div>
        </div>
      </section>

      {/* Living in Hackettstown */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-8">
            What It's Like to Live in Hackettstown
          </h2>
          <div className="scroll-animate prose max-w-none">
            <p className="text-base text-gray-dark leading-relaxed mb-6">
              Living in Hackettstown offers a dense suburban feel with a true small-town vibe, where most residents own their homes and enjoy a conservative-leaning community of about 10,143. The town's "Mountain City" nickname shines through its rolling hills and access to nature, like the 805-acre Stephens State Park for hiking and fishing along the Musconetcong River. Downtown Main Street buzzes with independent shops, eateries such as Marley's Gotham Grill (famous for wings) and TOPO for Vietnamese cuisine, plus craft spots like Czig Meister Brewing—creating a welcoming, at-home atmosphere.
            </p>
            <p className="text-base text-gray-dark leading-relaxed">
              Daily life here balances convenience and community: young professionals appreciate the 50-mile commute to NYC via Route 46, while families cherish events like the St. Patrick's Day Parade, Street Fair, and seasonal Farmers Market. Centenary University infuses cultural energy with concerts and programs, and the Hackettstown Community Pool provides summer fun. Residents rave about friendly neighbors and a lively yet safe environment—crime rates are low, and the median household income supports a comfortable lifestyle. Drawbacks? Some note occasional overcrowding at schools, but the overall sense of belonging makes it a cherished spot for raising kids or settling down.
            </p>
          </div>
        </div>
      </section>

      {/* Why Hackettstown */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-8">
            Why Hackettstown Remains a Smart Choice
          </h2>
          <div className="scroll-animate prose max-w-none mb-8">
            <p className="text-base text-gray-dark leading-relaxed">
              Hackettstown's market stability, quality schools, and vibrant community make it a standout in Northwest NJ for 2025. With ongoing appreciation and quick sales, it's an opportune time for buyers to invest in this growing area. Sellers benefit from high demand, especially for well-maintained properties near amenities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-max text-center">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light mb-6">
            Partner with Cheryl Towey for Hackettstown Insights
          </h2>
          <p className="scroll-animate text-base leading-relaxed max-w-3xl mx-auto mb-8">
            As your local expert, I'm here to provide tailored market reports, school tours, and home searches in Hackettstown. Contact me for the latest data or to discuss your goals in this thriving community.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/contact" 
              className="bg-white text-secondary px-8 py-3 rounded-sm font-light text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors"
            >
              Get Your Market Analysis
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
  );
}