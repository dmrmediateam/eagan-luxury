import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { community } = params;
  
  if (!validCommunities.includes(community)) {
    notFound();
  }
  
  const communityName = formatCommunityName(community);
  
  return {
    title: `${communityName} Resources | Community Information | Eagan Luxury`,
    description: `Access helpful resources and information about ${communityName}. Find community guides, local services, and essential information for residents and visitors.`,
  };
}

export default function ResourcesPage({ params }: PageProps) {
  const { community } = params;
  
  if (!validCommunities.includes(community)) {
    notFound();
  }
  
  const communityName = formatCommunityName(community);

  return (
    <main className="page-transition">
      <section className="section-shell">
        <div className="page-shell">
          <div className="max-w-4xl">
            <Link href={`/${community}`} className="text-sm text-ink-soft hover:text-accent mb-6 inline-block">
              ← Back to {communityName}
            </Link>
            <p className="eyebrow">Resources</p>
            <div className="rule" />
            <h1 className="text-4xl md:text-[3.5rem] leading-tight mt-6">
              {communityName} Resources
            </h1>
            <p className="mt-6 text-base text-ink-soft max-w-xl">
              Find helpful resources and information about {communityName}.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="page-shell">
          <div className="tile-muted max-w-2xl">
            <p className="eyebrow">Coming Soon</p>
            <div className="rule mb-4" />
            <p className="text-base text-ink-soft mb-6">
              Resources for {communityName} are being compiled. Check back soon for community information and helpful links.
            </p>
            <Link href={`/${community}`} className="btn-primary inline-block">
              Return to {communityName}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

