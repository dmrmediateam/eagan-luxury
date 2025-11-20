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
    title: `${communityName} Magazine | Community Stories & Lifestyle | Eagan Luxury`,
    description: `Explore ${communityName} through our community magazine. Discover lifestyle features, resident stories, and insights into life in this premier St. Petersburg community.`,
  };
}

export default function MagazinePage({ params }: PageProps) {
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
            <p className="eyebrow">Magazine</p>
            <div className="rule" />
            <h1 className="text-4xl md:text-[3.5rem] leading-tight mt-6">
              {communityName} Magazine
            </h1>
            <p className="mt-6 text-base text-ink-soft max-w-xl">
              Discover the stories, lifestyle, and culture that define {communityName}. 
              Our community magazine features resident profiles, local events, and insights 
              into life in this premier Gulf Coast community.
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
              The {communityName} magazine is currently being curated. Check back soon for 
              exclusive content, resident stories, and community features.
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


