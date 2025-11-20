import type { Metadata } from 'next';
import Link from 'next/link';

interface PageProps {
  params: {
    community: string;
  };
}

function formatCommunityName(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { community } = params;
  const communityName = formatCommunityName(community);
  
  return {
    title: `Businesses in ${communityName} | Local Services | Eagan Luxury`,
    description: `Find local businesses and services in ${communityName}. Discover shops, professional services, and commercial establishments in this St. Petersburg community.`,
  };
}

export default function BusinessesPage({ params }: PageProps) {
  const { community } = params;
  const communityName = formatCommunityName(community);

  return (
    <main className="page-transition">
      <section className="section-shell">
        <div className="page-shell">
          <div className="max-w-4xl">
            <Link href={`/${community}`} className="text-sm text-ink-soft hover:text-accent mb-6 inline-block">
              ← Back to {communityName}
            </Link>
            <p className="eyebrow">Businesses</p>
            <div className="rule" />
            <h1 className="text-4xl md:text-[3.5rem] leading-tight mt-6">
              Local Businesses in {communityName}
            </h1>
            <p className="mt-6 text-base text-ink-soft max-w-xl">
              Discover the local businesses and services in {communityName}.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="page-shell">
          <div className="tile-muted max-w-2xl">
            <p className="eyebrow">Coming Soon</p>
            <div className="rule" />
            <p className="text-base mt-4">
              Our business directory for {communityName} is being developed. Check back soon 
              for a comprehensive guide to local services and commercial establishments.
            </p>
            <Link href={`/${community}`} className="btn-primary mt-6 inline-block">
              Return to {communityName}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

