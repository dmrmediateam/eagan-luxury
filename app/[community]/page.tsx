import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import CommunityListings from './components/CommunityListings';

interface PageProps {
  params: {
    community: string;
  };
}

// Valid community slugs from footer and header
const validCommunities = [
  'dolphin-cay',
  'tierra-verde',
  'bacopa-bay',
  'st-petersburg-waterfront',
  'downtown-st-petersburg',
];

// Helper function to format community name for display
function formatCommunityName(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { community } = params;
  
  // Validate community slug - return 404 if not valid
  if (!validCommunities.includes(community)) {
    notFound();
  }
  
  const communityName = formatCommunityName(community);
  
  return {
    title: `Homes for Sale in ${communityName} | Eagan Luxury Real Estate`,
    description: `Discover luxury homes for sale in ${communityName}, St. Petersburg. Browse exclusive waterfront properties, condos, and estates in this premier Gulf Coast community.`,
    keywords: [
      `homes for sale in ${communityName}`,
      `${communityName} real estate`,
      `${communityName} homes`,
      `${communityName} properties`,
      `St. Petersburg ${communityName}`,
      `luxury homes ${communityName}`,
      `${communityName} waterfront properties`,
      `${communityName} condos for sale`,
    ].join(', '),
    openGraph: {
      title: `Homes for Sale in ${communityName} | Eagan Luxury`,
      description: `Explore luxury real estate in ${communityName}, St. Petersburg. Waterfront properties, condos, and exclusive estates.`,
      url: `https://www.eaganluxury.com/${community}`,
      type: 'website',
    },
  };
}

export default function CommunityPage({ params }: PageProps) {
  const { community } = params;
  
  // Validate community slug - return 404 if not valid
  if (!validCommunities.includes(community)) {
    notFound();
  }
  
  const communityName = formatCommunityName(community);

  return (
    <main className="page-transition">
      {/* Hero Section */}
      <section className="section-shell">
        <div className="page-shell">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow">Featured Community</p>
              <div className="rule" />
              <h1 className="text-4xl md:text-[3.5rem] leading-tight mt-6">
                Homes for Sale in {communityName}
              </h1>
              <p className="mt-6 text-base text-ink-soft max-w-xl">
                Discover exceptional properties in {communityName}, one of St. Petersburg&apos;s most prestigious communities.
              </p>
              <div className="flex gap-4 flex-wrap mt-8">
                <Link href="/contact" className="btn-primary">
                  Schedule Property Tour
                </Link>
                <Link href={`/${community}/resources`} className="btn-outline">
                  Community Resources
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <Image
                src="/images/yacht-club-in-the-indian-ocean-mauritius-a-tropic-2025-01-10-20-31-12-utc.jpg"
                alt={`${communityName} waterfront community`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Overview */}
      <section className="section-shell bg-ink/5">
        <div className="page-shell">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                About {communityName}
              </h2>
              <p className="text-ink-soft">
                {communityName} represents the pinnacle of Gulf Coast living, combining sophisticated 
                architecture with unparalleled waterfront access.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-6">Community Features</h3>
              <ul className="space-y-3 text-ink-soft">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Waterfront access and private marinas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>World-class dining and entertainment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Proximity to downtown St. Petersburg</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Exclusive amenities and services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="section-shell">
        <div className="page-shell">
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            Properties in {communityName}
          </h2>
          <CommunityListings communityName={communityName} />
        </div>
      </section>

      {/* Community Resources Navigation */}
      <section className="section-shell bg-ink/5 w-full px-4">
        <div className="w-full max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            Explore {communityName}
          </h2>
          <div className="flex gap-4 justify-center items-stretch w-full">
            <Link
              href={`/${community}/magazine`}
              className="tile hover:bg-ink/10 transition-all duration-300 hover:scale-105 hover:shadow-lg flex-1 max-w-[250px] text-center"
            >
              <h3 className="text-xl font-semibold text-ink mb-2">Magazine</h3>
              <p className="text-sm text-ink-soft">
                Community stories and lifestyle features
              </p>
            </Link>
            <Link
              href={`/${community}/restaurants`}
              className="tile hover:bg-ink/10 transition-all duration-300 hover:scale-105 hover:shadow-lg flex-1 max-w-[250px] text-center"
            >
              <h3 className="text-xl font-semibold text-ink mb-2">Restaurants</h3>
              <p className="text-sm text-ink-soft">
                Dining options and culinary experiences
              </p>
            </Link>
            <Link
              href={`/${community}/businesses`}
              className="tile hover:bg-ink/10 transition-all duration-300 hover:scale-105 hover:shadow-lg flex-1 max-w-[250px] text-center"
            >
              <h3 className="text-xl font-semibold text-ink mb-2">Businesses</h3>
              <p className="text-sm text-ink-soft">
                Local services and commercial establishments
              </p>
            </Link>
            <Link
              href={`/${community}/marinas`}
              className="tile hover:bg-ink/10 transition-all duration-300 hover:scale-105 hover:shadow-lg flex-1 max-w-[250px] text-center"
            >
              <h3 className="text-xl font-semibold text-ink mb-2">Marinas</h3>
              <p className="text-sm text-ink-soft">
                Waterfront facilities and boat access
              </p>
            </Link>
            <Link
              href={`/${community}/resources`}
              className="tile hover:bg-ink/10 transition-all duration-300 hover:scale-105 hover:shadow-lg flex-1 max-w-[250px] text-center"
            >
              <h3 className="text-xl font-semibold text-ink mb-2">Resources</h3>
              <p className="text-sm text-ink-soft">
                Community information and helpful links
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-shell">
        <div className="page-shell">
          <div className="tile-muted max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Interested in {communityName}?
            </h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/listings" className="btn-outline">
                View All Listings
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

