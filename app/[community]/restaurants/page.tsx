import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getRestaurantsByCommunity } from '@/sanity/queries/businesses';

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

function formatCommunityName(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function formatDate(dateString: string | null): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { community } = params;
  
  if (!validCommunities.includes(community)) {
    notFound();
  }
  
  const communityName = formatCommunityName(community);
  
  return {
    title: `Restaurants in ${communityName} | Dining Guide | Eagan Luxury`,
    description: `Discover the best restaurants and dining options in ${communityName}. From waterfront dining to fine cuisine, explore the culinary scene in this St. Petersburg community.`,
  };
}

export default async function RestaurantsPage({ params }: PageProps) {
  const { community } = params;
  
  if (!validCommunities.includes(community)) {
    notFound();
  }
  
  const communityName = formatCommunityName(community);
  const restaurants = await getRestaurantsByCommunity(communityName);

  return (
    <main className="page-transition">
      <section className="section-shell">
        <div className="page-shell">
          <Link href={`/${community}`} className="text-sm text-ink-soft hover:text-accent mb-6 inline-block">
            ← Back to {communityName}
          </Link>
          <p className="eyebrow">Restaurants</p>
          <div className="rule" />
          <h1 className="text-4xl md:text-[3.5rem] leading-tight mt-6">
            Dining in {communityName}
          </h1>
        </div>
      </section>

      <section className="section-shell bg-ink/5">
        <div className="page-shell">
          {restaurants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {restaurants.map((restaurant) => (
                <article key={restaurant._id} className="tile hover:bg-ink/10 transition-colors">
                  {restaurant.image?.url && (
                    <div className="relative aspect-[4/3] mb-6 rounded overflow-hidden">
                      <Image
                        src={restaurant.image.url}
                        alt={restaurant.image.alt || restaurant.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-light text-ink">{restaurant.name}</h3>
                    {restaurant.dateOpened && (
                      <p className="text-xs uppercase tracking-wider text-ink-soft">
                        Opened {formatDate(restaurant.dateOpened)}
                      </p>
                    )}
                    <div className="w-12 h-px bg-accent" />
                    <p className="text-ink-soft leading-relaxed">
                      {restaurant.description}
                    </p>
                    {restaurant.location && (
                      <div className="pt-3 space-y-1 text-sm text-ink-soft">
                        {restaurant.location.address && (
                          <p>{restaurant.location.address}</p>
                        )}
                        {restaurant.location.city && restaurant.location.state && (
                          <p>
                            {restaurant.location.city}, {restaurant.location.state}
                            {restaurant.location.zipCode && ` ${restaurant.location.zipCode}`}
                          </p>
                        )}
                        {restaurant.location.phone && (
                          <p>
                            <a href={`tel:${restaurant.location.phone}`} className="hover:text-accent">
                              {restaurant.location.phone}
                            </a>
                          </p>
                        )}
                        {restaurant.location.website && (
                          <p>
                            <a 
                              href={restaurant.location.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-accent"
                            >
                              Visit Website
                            </a>
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="tile-muted max-w-2xl">
              <p className="eyebrow">Coming Soon</p>
              <div className="rule mb-4" />
              <p className="text-base text-ink-soft">
                Our restaurant guide for {communityName} is being compiled. Check back soon for 
                curated recommendations and dining experiences.
              </p>
              <Link href={`/${community}`} className="btn-primary mt-6 inline-block">
                Return to {communityName}
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
