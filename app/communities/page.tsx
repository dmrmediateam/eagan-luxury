import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Communities | Eagan Luxury Real Estate',
  description:
    'Explore premier St. Petersburg communities including Pinellas Bayway waterfront areas, Downtown St. Petersburg, Pasadena Yacht & Country Club, and Gulf Beaches.',
};

const communities = {
  'Featured Communities (Pinellas Bayway / Waterfront Area)': [
    { name: 'Marina Bay', slug: 'marina-bay' },
    { name: 'Isla Del Sol Condo', slug: 'isla-del-sol-condo' },
    { name: 'Gulfport', slug: 'gulfport' },
    { name: 'Bayway Isles', slug: 'bayway-isles' },
    { name: 'Maximo Moorings', slug: 'maximo-moorings' },
    { name: 'Moorings of Maximo', slug: 'moorings-of-maximo' },
    { name: 'Broadwater', slug: 'broadwater' },
  ],
  'Pasadena Yacht & Country Club Communities': [
    { name: 'Harbour Side Condominiums', slug: 'harbour-side-condominiums' },
  ],
  'Downtown St. Petersburg Communities': [
    { name: 'Vinoy Place', slug: 'vinoy-place' },
    { name: 'Old Northeast', slug: 'old-northeast' },
    { name: 'Snell Isle', slug: 'snell-isle' },
    { name: '400 Beach Drive', slug: '400-beach-drive' },
    { name: 'Parkshore Plaza', slug: 'parkshore-plaza' },
    { name: 'Ovation', slug: 'ovation' },
    { name: 'Bayfront Towers', slug: 'bayfront-towers' },
    { name: 'Cloisters', slug: 'cloisters' },
    { name: 'Signature Place', slug: 'signature-place' },
    { name: 'ONE', slug: 'one' },
    { name: 'Bliss', slug: 'bliss' },
    { name: 'The Salvador', slug: 'the-salvador' },
    { name: 'The Sage', slug: 'the-sage' },
  ],
  'Gulf Beaches Communities': [
    { name: 'Pass-a-Grille Beach', slug: 'pass-a-grille-beach' },
    { name: 'St. Pete Beach', slug: 'st-pete-beach' },
    { name: 'Belleair Country Club', slug: 'belleair-country-club' },
  ],
};

export default function CommunitiesPage() {
  return (
    <main className="page-transition">
      <section className="section-shell">
        <div className="page-shell">
          <div className="max-w-4xl">
            <p className="eyebrow">Communities</p>
            <div className="rule" />
            <h1 className="text-4xl md:text-[3.5rem] leading-tight mt-6">
              Explore St. Petersburg's premier communities.
            </h1>
            <p className="mt-6 text-base text-ink-soft max-w-xl">
              From waterfront estates to downtown towers, discover the distinctive character of each neighborhood we serve.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="page-shell space-y-12">
          {Object.entries(communities).map(([section, items]) => (
            <div key={section}>
              <div className="mb-6">
                <p className="eyebrow">{section}</p>
                <div className="rule" />
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/communities/${item.slug}`}
                    className="tile hover:bg-ink/5 transition-colors"
                  >
                    <h3 className="text-xl font-semibold text-ink">{item.name}</h3>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="page-shell">
          <div className="tile-muted max-w-2xl">
            <p className="eyebrow">Featured Communities</p>
            <div className="rule" />
            <p className="text-base mt-4">
              For more information about our featured communities—Dolphin Cay, Tierra Verde, Bacopa Bay, St. Petersburg
              Waterfront, and Downtown St. Petersburg—please contact our team.
            </p>
            <Link href="/contact" className="btn-primary mt-6 inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
