import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HomepageStructuredData } from '@/app/components/HomepageStructuredData';
import { LocalBusinessSchema } from '@/app/components/LocalBusinessSchema';
import SearchWidget from '@/components/SearchWidget';
import FeaturedProperties from '@/components/FeaturedProperties';

const listings = [
  {
    title: 'Harbour Isle Marina Estate',
    location: 'St. Petersburg Waterfront',
    price: '$4.85M',
    specs: ['70\' slip', '6,700 sq ft', 'Boca Ciega Bay'],
    image: '/images/aerial-view-of-lisloughrey-pier-in-ireland-2025-02-12-05-10-21-utc.jpg',
    href: '/st-petersburg-waterfront',
  },
  {
    title: 'Skyline Reserve Penthouse',
    location: 'Downtown St. Petersburg',
    price: '$3.25M',
    specs: ['Dual-story glass', 'Private club access', 'Gallery walls'],
    image: '/images/toronto-city-skyline-ontario-canada-2024-10-16-15-20-33-utc.jpg',
    href: '/downtown-st-petersburg',
  },
  {
    title: 'Marina Bay Villas',
    location: 'Tierra Verde',
    price: '$2.95M',
    specs: ['Yacht mooring', 'Resort courtyard', 'Gulf views'],
    image: '/images/yacht-club-in-the-indian-ocean-mauritius-a-tropic-2025-01-10-20-31-12-utc.jpg',
    href: '/tierra-verde',
  },
  {
    title: 'Dolphin Cay Waterfront Estate',
    location: 'Dolphin Cay',
    price: '$5.2M',
    specs: ['Private marina', '8,200 sq ft', 'Gulf access'],
    image: '/images/yacht-club-in-the-indian-ocean-mauritius-a-tropic-2025-01-10-20-31-12-utc.jpg',
    href: '/dolphin-cay',
  },
  {
    title: 'Bacopa Bay Residence',
    location: 'Bacopa Bay',
    price: '$3.8M',
    specs: ['Deep water dock', '5,400 sq ft', 'Bay views'],
    image: '/images/aerial-view-of-lisloughrey-pier-in-ireland-2025-02-12-05-10-21-utc.jpg',
    href: '/bacopa-bay',
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
    quote: 'My wife and I have purchased and sold 5 properties with Debi and Bill and have in all cases had buyers within hours of the listing going live. She plants seeds and waters them like no other I know.',
    author: 'Burt Driver • 4961 Bacopa Ln Penthouse #801',
  },
  {
    quote: 'Debi sets the standard for a 5-star realtor. From the first introduction to the day our home closed, she was engaging, creative, confident, reassuring and always available. Debi is a true professional in an industry where it is critical to have a top-notch expert and partner to reach the finish line. Bravo Debi!',
    author: 'The Hamachers • 4991 Bacopa Ln #703',
  },
  {
    quote: 'In less than 10 days and with multiple offers in hand, our home sold! Debi took the time to fully understand the special attributes of the home and then used precision marketing techniques that helped to increase a high level of interest. I would not hesitate one iota to work with her again on any transaction. She is indeed one of those rare champions for unmatched customer service.',
    author: 'Danato J. Tramuto • Pasadena Yacht and Country Club',
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
        <section className="section-shell hero-section">
          <div className="page-shell hero-grid">
            <div className="hero-panel">
              <p className="eyebrow">St. Petersburg • Gulf Beaches</p>
              <div className="rule" />
              <h1 className="text-4xl md:text-[3.5rem] leading-tight mb-8">
                Quietly presenting the coast's most singular residences.
              </h1>
              <div className="mt-8">
                <SearchWidget />
              </div>
            </div>
            <div className="hero-media">
              <Image
                src="/images/DeborahEaganEdited_42 (1).jpg"
                alt="Deborah Eagan"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 41.666667vw"
                priority
              />
            </div>
          </div>
          <div className="page-shell mt-8 metric-grid">
            {accolades.map((item) => (
              <div key={item.label} className="metric">
                <p className="text-3xl font-semibold text-ink">{item.label}</p>
                <p className="text-xs uppercase tracking-[0.25em] mt-2 text-graphite">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <div className="page-shell">
            <div className="mb-8">
              <p className="eyebrow">Featured Properties</p>
              <div className="rule" />
              <h2 className="text-3xl mt-6">Curated waterfront residences.</h2>
            </div>
            <FeaturedProperties />
          </div>
        </section>

        <section className="section-shell">
          <div className="page-shell space-y-16">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="tile">
                <p className="eyebrow">Signature Collection</p>
                <div className="rule" />
                <h2 className="text-3xl mb-6">Square-cut editorial showcases with cinematic pacing.</h2>
                <p className="text-base leading-relaxed">
                  Each release is storyboarded like a Christie’s exhibition—rigid grids, calm whitespace, and bold contrasts to let
                  the architecture lead. Catalogue drops are private and data-backed.
                </p>
              </div>
              <div className="tile-muted">
                <p className="eyebrow">Request Access</p>
                <div className="rule" />
                <p className="text-base leading-relaxed mb-8">
                  Email info@eaganluxury.com for off-market dossiers across St. Petersburg waterfront towers, Tierra Verde marina
                  estates, and Gulf Beach villas.
                </p>
                <Link href="/contact" className="btn-primary mt-8">
                  Secure Brief
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <Link href={listing.href || '/listings'} className="btn-ghost">
                      View dossier →
                    </Link>
                  </div>
                </article>
              ))}
              <article className="feature-card border-dashed border-2 border-line">
                <div className="feature-content flex flex-col justify-center items-center text-center min-h-[400px]">
                  <p className="eyebrow mb-4">Explore More</p>
                  <h3 className="text-2xl mb-6">View All Communities</h3>
                  <p className="text-base text-ink-soft mb-8">
                    Discover additional waterfront communities and exclusive properties throughout St. Petersburg and the Gulf Beaches.
                  </p>
                  <Link href="/listings" className="btn-primary">
                    See More →
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="page-shell grid gap-8 md:grid-cols-3">
            {briefs.map((brief) => (
              <div key={brief.title} className="tile">
                <p className="eyebrow">Advisory</p>
                <div className="rule" />
                <h3 className="text-2xl mb-6">{brief.title}</h3>
                <p className="leading-relaxed">{brief.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <div className="page-shell grid gap-8 lg:grid-cols-12">
            <div className="tile lg:col-span-7">
              <p className="eyebrow">Testimonials</p>
              <div className="rule" />
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.author} className="mb-12">
                  <p className="text-xl leading-relaxed text-ink-soft">"{testimonial.quote}"</p>
                  <footer className="mt-4 text-xs uppercase tracking-[0.3em] text-graphite">{testimonial.author}</footer>
                </blockquote>
              ))}
              <div className="mt-8">
                <Link href="/testimonials" className="btn-ghost">
                  View All Testimonials →
                </Link>
              </div>
            </div>
            <div className="tile-muted lg:col-span-5">
              <p className="eyebrow">Office</p>
              <div className="rule" />
              <p className="text-sm leading-relaxed mb-8">
                4993 Bacopa Ln S #705
                <br />
                St. Petersburg, FL 33715
              </p>
              <div className="grid gap-3 text-xs uppercase tracking-[0.25em] mb-8">
                <a href="tel:7276371019">Call 727.637.1019</a>
                <a href="mailto:info@eaganluxury.com">Email info@eaganluxury.com</a>
              </div>
              <Link href="/about" className="btn-outline">
                Studio Overview
              </Link>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="page-shell grid gap-8 lg:grid-cols-12">
            <div className="tile lg:col-span-8">
              <p className="eyebrow">Arrange a Consultation</p>
              <div className="rule" />
              <h2 className="text-3xl mb-6">Tell us the viewline, marina depth, or skyline you're targeting.</h2>
              <p className="text-base leading-relaxed">
                We'll deliver a structured action plan covering valuation, creative direction, and launch sequencing tailored to
                your residence.
              </p>
            </div>
            <div className="tile-muted lg:col-span-4 flex flex-col justify-between">
              <div>
                <p className="uppercase text-xs tracking-[0.3em]">Direct Line</p>
                <a href="tel:7276371019" className="text-2xl mt-3 block mb-8">
                  727.637.1019
                </a>
                <p className="uppercase text-xs tracking-[0.3em]">Email</p>
                <a href="mailto:info@eaganluxury.com" className="text-sm mt-3 block">
                  info@eaganluxury.com
                </a>
              </div>
              <Link href="/contact" className="btn-primary mt-12">
                Schedule
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
