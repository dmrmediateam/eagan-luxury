import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Eagan Luxury Real Estate',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <main className="page-transition">
      {/* Hero Section */}
      <section className="section-shell">
        <div className="page-shell max-w-4xl">
          <p className="eyebrow">404</p>
          <div className="rule" />
          <h1 className="text-4xl md:text-[3.5rem] leading-tight mt-6 font-light">
            Page Not Found
          </h1>
          <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-2xl">
            The page you are looking for could not be found. It may have been moved, deleted, or the URL may be incorrect.
          </p>
        </div>
      </section>

      {/* Navigation Options */}
      <section className="section-shell bg-ink/5">
        <div className="page-shell max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="tile">
              <p className="eyebrow">Navigate</p>
              <div className="rule" />
              <h2 className="text-2xl font-light mb-6 mt-6">
                Explore Our Site
              </h2>
              <ul className="space-y-4 text-base">
                <li>
                  <Link href="/" className="text-ink hover:text-accent transition-colors">
                    Home →
                  </Link>
                </li>
                <li>
                  <Link href="/listings" className="text-ink hover:text-accent transition-colors">
                    View Listings →
                  </Link>
                </li>
                <li>
                  <Link href="/communities" className="text-ink hover:text-accent transition-colors">
                    Featured Communities →
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-ink hover:text-accent transition-colors">
                    About Us →
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-ink hover:text-accent transition-colors">
                    Contact →
                  </Link>
                </li>
              </ul>
            </div>

            <div className="tile-muted">
              <p className="eyebrow">Featured Communities</p>
              <div className="rule" />
              <h2 className="text-2xl font-light mb-6 mt-6">
                Discover Our Communities
              </h2>
              <ul className="space-y-4 text-base">
                <li>
                  <Link href="/dolphin-cay" className="text-ink hover:text-accent transition-colors">
                    Dolphin Cay →
                  </Link>
                </li>
                <li>
                  <Link href="/tierra-verde" className="text-ink hover:text-accent transition-colors">
                    Tierra Verde →
                  </Link>
                </li>
                <li>
                  <Link href="/bacopa-bay" className="text-ink hover:text-accent transition-colors">
                    Bacopa Bay →
                  </Link>
                </li>
                <li>
                  <Link href="/st-petersburg-waterfront" className="text-ink hover:text-accent transition-colors">
                    St. Petersburg Waterfront →
                  </Link>
                </li>
                <li>
                  <Link href="/downtown-st-petersburg" className="text-ink hover:text-accent transition-colors">
                    Downtown St. Petersburg →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-shell">
        <div className="page-shell max-w-2xl mx-auto text-center">
          <div className="tile-muted">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Need Help?
            </h2>
            <p className="text-base leading-relaxed text-ink-soft mb-8">
              If you believe this is an error, please contact us and we'll be happy to assist you.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/" className="btn-outline">
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

