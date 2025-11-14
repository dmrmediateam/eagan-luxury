import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HomepageStructuredData } from '@/app/components/HomepageStructuredData';
import { LocalBusinessSchema } from '@/app/components/LocalBusinessSchema';

const listings = [
  {
    title: 'Harbour Isle Marina Estate',
    location: 'St. Petersburg Waterfront',
    price: '$4.85M',
    specs: ['70’ slip', '6,700 sq ft', 'Boca Ciega Bay'],
    image: '/images/aerial-view-of-lisloughrey-pier-in-ireland-2025-02-12-05-10-21-utc.jpg',
  },
  {
    title: 'Skyline Reserve Penthouse',
    location: 'Downtown Arts District',
    price: '$3.25M',
    specs: ['Dual-story glass', 'Private club access', 'Gallery walls'],
    image: '/images/toronto-city-skyline-ontario-canada-2024-10-16-15-20-33-utc.jpg',
  },
  {
    title: 'Marina Bay Villas',
    location: 'Tierra Verde',
    price: '$2.95M',
    specs: ['Yacht mooring', 'Resort courtyard', 'Gulf views'],
    image: '/images/yacht-club-in-the-indian-ocean-mauritius-a-tropic-2025-01-10-20-31-12-utc.jpg',
  },
];

const accolades = [
  { label: '$325M+', detail: 'Waterfront volume' },
  { label: '22', detail: 'Years in Pinellas' },
  { label: '25', detail: 'Curated enclaves' },
  { label: '01', detail: 'Concierge team' },
];

const briefs = [
  {
    title: 'Waterway Portfolio Strategy',
    copy: 'Multi-slip opportunities from Bacopa Bay to Maximo Moorings with private dockage analyses.',
  },
  {
    title: 'Sky Collection Advisory',
    copy: 'Penthouses and half-floor residences within ONE, Signature Place, and the downtown cultural corridor.',
  },
  {
    title: 'Gulf + Bayway Estates',
    copy: 'Marina Bay, Tierra Verde, and beach-to-bay villas engineered for dual-residence lifestyles.',
  },
];

const testimonials = [
  {
    quote: 'Eagan Luxury positioned our Bacopa Bay residence with museum-grade media and sold within weeks.',
    author: 'Robert B. • Bacopa Bay',
  },
  {
    quote: 'They handled contractors, staging, and remote closing while we relocated overseas. Seamless.',
    author: 'Bruce T. • St. Petersburg',
  },
];

export const metadata: Metadata = {
  title: 'Eagan Luxury | Waterfront & Sky Residences in St. Petersburg, FL',
  description:
    'Eagan Luxury curates waterfront estates, sky residences, and marina-front villas from Downtown St. Petersburg to the Gulf Beaches. Call 727-637-1019 for concierge representation.',
  openGraph: {
    title: 'Eagan Luxury | Waterfront & Sky Residences',
    description:
      'Bespoke representation for St. Petersburg waterfront homes, downtown towers, and Gulf Beach estates.',
    url: 'https://www.eaganluxury.com',
    siteName: 'Eagan Luxury',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.eaganluxury.com/images/aerial-view-of-lisloughrey-pier-in-ireland-2025-02-12-05-10-21-utc.jpg',
        width: 1200,
        height: 630,
        alt: 'Luxury waterfront harbor with yachts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eagan Luxury Real Estate',
    description: 'Concierge representation for St. Petersburg waterfront & sky residences.',
    images: ['https://www.eaganluxury.com/images/aerial-view-of-lisloughrey-pier-in-ireland-2025-02-12-05-10-21-utc.jpg'],
  },
  alternates: {
    canonical: 'https://www.eaganluxury.com',
  },
};

export default function Home() {
  return (
    <>
      <HomepageStructuredData />
      <LocalBusinessSchema />
      <main className="page-transition">
        <section className="section-shell">
          <div className="page-shell hero-grid">
            <div className="hero-panel">
              <p className="eyebrow">St. Petersburg • Gulf Beaches</p>
              <div className="rule" />
              <h1 className="text-4xl md:text-[3.5rem] leading-tight">
                Quietly presenting the coast’s most singular residences.
              </h1>
              <p className="mt-6 text-base text-ink-soft max-w-xl">
                Luxury breathes. We release only a handful of waterfront, marina, and skyline offerings each season—edited,
                square, and calm.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/listings" className="btn-primary">
                  Discover Collection
                </Link>
                <Link href="/contact" className="btn-outline">
                  Speak with Eagan
                </Link>
              </div>
            </div>
            <div className="hero-media">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/images/aerial-view-of-lisloughrey-pier-in-ireland-2025-02-12-05-10-21-utc.jpg"
              >
                <source src="/videos/the%20dock.mov" type="video/quicktime" />
              </video>
            </div>
          </div>
          <div className="page-shell mt-10 metric-grid">
            {accolades.map((item) => (
              <div key={item.label} className="metric">
                <p className="text-3xl font-semibold text-ink">{item.label}</p>
                <p className="text-xs uppercase tracking-[0.25em] mt-2 text-graphite">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <div className="page-shell space-y-10">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="tile">
                <p className="eyebrow">Signature Collection</p>
                <div className="rule" />
                <h2 className="text-3xl">Square-cut editorial showcases with cinematic pacing.</h2>
                <p className="mt-4 text-base">
                  Each release is storyboarded like a Christie’s exhibition—rigid grids, calm whitespace, and bold contrasts to let
                  the architecture lead. Catalogue drops are private and data-backed.
                </p>
              </div>
              <div className="tile-muted">
                <p className="eyebrow">Request Access</p>
                <div className="rule" />
                <p className="text-base">
                  Email info@eaganluxury.com for off-market dossiers across St. Petersburg waterfront towers, Tierra Verde marina
                  estates, and Gulf Beach villas.
                </p>
                <Link href="/contact" className="btn-primary mt-6">
                  Secure Brief
                </Link>
              </div>
            </div>
            <div className="feature-grid">
              {listings.map((listing) => (
                <article key={listing.title} className="feature-card">
                  <div className="feature-media">
                    <Image src={listing.image} alt={listing.title} fill sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw" />
                  </div>
                  <div className="feature-content">
                    <span className="eyebrow">{listing.location}</span>
                    <h3 className="text-2xl">{listing.title}</h3>
                    <p className="text-accent text-sm uppercase tracking-[0.3em]">{listing.price}</p>
                    <ul className="list-disc pl-5 text-sm text-graphite/80">
                      {listing.specs.map((spec) => (
                        <li key={spec}>{spec}</li>
                      ))}
                    </ul>
                    <Link href="/listings" className="btn-ghost">
                      View dossier →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="page-shell grid gap-6 md:grid-cols-3">
            {briefs.map((brief) => (
              <div key={brief.title} className="tile">
                <p className="eyebrow">Advisory</p>
                <div className="rule" />
                <h3 className="text-2xl mb-4">{brief.title}</h3>
                <p>{brief.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <div className="page-shell grid gap-6 lg:grid-cols-12">
            <div className="tile lg:col-span-7">
              <p className="eyebrow">Testimonials</p>
              <div className="rule" />
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.author} className="mb-8">
                  <p className="text-xl leading-8 text-ink-soft">“{testimonial.quote}”</p>
                  <footer className="mt-3 text-xs uppercase tracking-[0.3em] text-graphite">{testimonial.author}</footer>
                </blockquote>
              ))}
            </div>
            <div className="tile-muted lg:col-span-5">
              <p className="eyebrow">Office</p>
              <div className="rule" />
              <p className="text-sm leading-7">
                4993 Bacopa Ln S #705
                <br />
                St. Petersburg, FL 33715
              </p>
              <div className="mt-6 grid gap-2 text-xs uppercase tracking-[0.25em]">
                <a href="tel:7276371019">Call 727.637.1019</a>
                <a href="mailto:info@eaganluxury.com">Email info@eaganluxury.com</a>
              </div>
              <Link href="/about" className="btn-outline mt-6">
                Studio Overview
              </Link>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="page-shell grid gap-6 lg:grid-cols-12">
            <div className="tile lg:col-span-8">
              <p className="eyebrow">Arrange a Consultation</p>
              <div className="rule" />
              <h2 className="text-3xl">Tell us the viewline, marina depth, or skyline you’re targeting.</h2>
              <p className="mt-4 text-base">
                We’ll deliver a structured action plan covering valuation, creative direction, and launch sequencing tailored to
                your residence.
              </p>
            </div>
            <div className="tile-muted lg:col-span-4 flex flex-col justify-between">
              <div>
                <p className="uppercase text-xs tracking-[0.3em]">Direct Line</p>
                <a href="tel:7276371019" className="text-2xl mt-2 block">
                  727.637.1019
                </a>
                <p className="uppercase text-xs tracking-[0.3em] mt-6">Email</p>
                <a href="mailto:info@eaganluxury.com" className="text-sm">
                  info@eaganluxury.com
                </a>
              </div>
              <Link href="/contact" className="btn-primary mt-8">
                Schedule
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
