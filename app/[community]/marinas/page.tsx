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
    title: `Marinas in ${communityName} | Waterfront Facilities | Eagan Luxury`,
    description: `Explore marinas and waterfront facilities in ${communityName}. Discover boat slips, yacht clubs, and marine services in this premier St. Petersburg community.`,
  };
}

export default function MarinasPage({ params }: PageProps) {
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
            <p className="eyebrow">Marinas</p>
            <div className="rule" />
            <h1 className="text-4xl md:text-[3.5rem] leading-tight mt-6">
              Marinas & Waterfront Facilities in {communityName}
            </h1>
            <p className="mt-6 text-base text-ink-soft max-w-xl">
              Discover the marina facilities and waterfront access in {communityName}.
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
              Our marina guide for {communityName} is being compiled. Check back soon for 
              information about waterfront facilities, boat slips, and marine services.
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

