import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Eagan Luxury | St. Petersburg Real Estate',
  description: 'Contact Eagan Luxury Real Estate for luxury waterfront and sky residences in St. Petersburg, Tierra Verde, and the Gulf Beaches. Call 727-637-1019.',
};

export default function ContactPage() {
  return (
    <main className="page-transition">
      {/* Hero Section */}
      <section className="section-shell">
        <div className="page-shell max-w-4xl">
          <p className="eyebrow">Contact</p>
          <div className="rule" />
          <h1 className="text-4xl md:text-[3.5rem] leading-tight mt-6 font-light">
            Get In Touch
          </h1>
          <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-2xl">
            We operate by appointment for private showings and seller consultations. Submit your inquiry and our team will respond within one business day.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-shell bg-ink/5">
        <div className="page-shell max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <p className="eyebrow">Contact Information</p>
              <div className="rule" />
              <div className="space-y-8 mt-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-graphite mb-3">Phone</p>
                  <a 
                    href="tel:7276371019" 
                    className="text-2xl font-light text-ink hover:text-accent transition-colors"
                  >
                    727.637.1019
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-graphite mb-3">Email</p>
                  <a 
                    href="mailto:info@eaganluxury.com" 
                    className="text-lg font-light text-ink hover:text-accent transition-colors break-all"
                  >
                    info@eaganluxury.com
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-graphite mb-3">Office</p>
                  <address className="text-lg font-light text-ink not-italic leading-relaxed">
                    4993 BACOPA LN S #705<br />
                    ST PETERSBURG FL
                  </address>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-line">
                <p className="text-sm leading-relaxed text-ink-soft">
                  We are available by appointment for private showings, property consultations, and seller briefings. Our team specializes in luxury waterfront and sky residences throughout St. Petersburg, Tierra Verde, and the Gulf Beaches.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="tile">
              <p className="eyebrow">Send a Message</p>
              <div className="rule" />
              <form action="/api/contact" method="POST" className="space-y-6 mt-8">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-graphite mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-line bg-white focus:outline-none focus:border-ink transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-graphite mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-line bg-white focus:outline-none focus:border-ink transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-[0.2em] text-graphite mb-3">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-line bg-white focus:outline-none focus:border-ink transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-graphite mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-line bg-white focus:outline-none focus:border-ink transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section-shell">
        <div className="page-shell max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="tile">
              <p className="eyebrow">Office Hours</p>
              <div className="rule" />
              <p className="text-base leading-relaxed text-ink-soft mt-6">
                We operate by appointment. Please contact us to schedule a private consultation or property showing.
              </p>
            </div>
            <div className="tile">
              <p className="eyebrow">Service Areas</p>
              <div className="rule" />
              <p className="text-base leading-relaxed text-ink-soft mt-6">
                St. Petersburg Waterfront, Downtown St. Petersburg, Tierra Verde, Dolphin Cay, Bacopa Bay, and the Gulf Beaches.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
