import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MLS Information | Eagan Luxury Real Estate',
  description: 'Information about Multiple Listing Service (MLS) data and how property listings are displayed on our website.',
};

export default function MLSInformationPage() {
  return (
    <main className="page-transition">
      <section className="section-shell">
        <div className="page-shell">
          <p className="eyebrow">MLS Information</p>
          <div className="rule" />
          <h1 className="text-4xl md:text-[3.5rem] leading-tight mt-6">
            Multiple Listing Service Information
          </h1>
          <p className="mt-6 text-base text-ink-soft max-w-2xl">
            Information about how property listings are displayed on our website and the sources of our listing data.
          </p>
          <p className="mt-4 text-sm text-graphite uppercase tracking-[0.2em]">
            Last Updated: November 2024
          </p>
        </div>
      </section>

      <section className="section-shell bg-ink/5">
        <div className="page-shell max-w-4xl">
          <div className="space-y-12">
            {/* About MLS */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">About Multiple Listing Services</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                A Multiple Listing Service (MLS) is a database established by cooperating real estate brokers to provide data about properties for sale. The MLS allows real estate professionals to share information about listings with one another, making it easier for buyers to find properties and for sellers to reach a wider audience.
              </p>
              <p className="text-base leading-relaxed text-ink-soft">
                The property listings displayed on this website are sourced from Stellar MLS and other participating MLS systems. This data is provided through the Internet Data Exchange (IDX) program, which allows real estate websites to display listings from other brokers.
              </p>
            </div>

            {/* Stellar MLS */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Stellar MLS</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                Stellar MLS is the primary Multiple Listing Service serving the St. Petersburg, Tampa Bay, and surrounding areas. It is one of the largest MLS systems in Florida, providing comprehensive property data for residential and commercial real estate.
              </p>
              <p className="text-base leading-relaxed text-ink-soft">
                The data relating to real estate for sale on this website comes in part from the Internet Data Exchange (IDX) program of Stellar MLS. All information is deemed reliable but is not guaranteed.
              </p>
            </div>

            {/* Data Accuracy */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Data Accuracy and Limitations</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                While we strive to provide accurate and up-to-date information, property data displayed on this website is subject to the following limitations:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed text-ink-soft">Property information is provided by listing agents and may contain errors or omissions</li>
                <li className="text-base leading-relaxed text-ink-soft">Property details, including square footage, lot size, and room counts, should be independently verified</li>
                <li className="text-base leading-relaxed text-ink-soft">Property status (active, pending, sold) may not reflect real-time changes</li>
                <li className="text-base leading-relaxed text-ink-soft">Pricing and availability are subject to change without notice</li>
                <li className="text-base leading-relaxed text-ink-soft">Photos may not reflect the current condition of the property</li>
                <li className="text-base leading-relaxed text-ink-soft">Some properties may be shown as available but may have already been sold or taken off the market</li>
              </ul>
              <p className="text-base leading-relaxed text-ink-soft mt-4">
                We recommend that you verify all property information independently before making any decisions. This may include professional inspections, surveys, and consultations with qualified professionals.
              </p>
            </div>

            {/* IDX Program */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Internet Data Exchange (IDX) Program</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                The IDX program allows real estate brokers to display listings from other brokers on their websites. This provides consumers with a comprehensive view of available properties in the market.
              </p>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                Important IDX terms and restrictions:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed text-ink-soft">IDX data is provided exclusively for consumers' personal, non-commercial use</li>
                <li className="text-base leading-relaxed text-ink-soft">The data may be used only to identify prospective properties for purchase</li>
                <li className="text-base leading-relaxed text-ink-soft">Any reproduction or distribution of IDX data is strictly prohibited</li>
                <li className="text-base leading-relaxed text-ink-soft">Listings marked as IDX are held by brokerage firms other than Keller Williams Realty</li>
                <li className="text-base leading-relaxed text-ink-soft">Copyright and ownership of listing data remain with the respective MLS and listing brokers</li>
              </ul>
            </div>

            {/* Listing Ownership */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Listing Ownership and Copyright</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                All property listings, including text, images, and data, are the property of the respective listing brokers and the MLS. The following applies:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed text-ink-soft">Listing data is copyrighted by the MLS and individual listing brokers</li>
                <li className="text-base leading-relaxed text-ink-soft">Unauthorized reproduction or distribution of listing data is prohibited</li>
                <li className="text-base leading-relaxed text-ink-soft">Photos and property descriptions are provided by listing agents and may be subject to copyright</li>
                <li className="text-base leading-relaxed text-ink-soft">We display this information with permission through the IDX program</li>
              </ul>
            </div>

            {/* Broker Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Broker Information</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                Eagan Luxury Real Estate is a licensed real estate brokerage operating under Keller Williams Realty St. Pete. Our license information:
              </p>
              <div className="tile-muted">
                <p className="text-base text-ink-soft mb-2">
                  <strong className="text-ink">Brokerage:</strong> Keller Williams Realty St. Pete
                </p>
                <p className="text-base text-ink-soft mb-2">
                  <strong className="text-ink">License:</strong> Licensed Real Estate Brokerage in Florida
                </p>
                <p className="text-base text-ink-soft">
                  <strong className="text-ink">Office Address:</strong><br />
                  4993 BACOPA LN S #705<br />
                  ST PETERSBURG FL
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="tile-muted mt-12">
              <h2 className="text-3xl md:text-4xl font-light mb-6">Questions About MLS Data</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-6">
                If you have questions about property listings, MLS data, or need assistance with a specific property, please contact us:
              </p>
              <div className="space-y-3 text-base text-ink-soft">
                <p>
                  <strong className="text-ink">Eagan Luxury Real Estate</strong><br />
                  Keller Williams Realty St. Pete
                </p>
                <p>
                  <strong className="text-ink">Email:</strong> info@eaganluxury.com<br />
                  <strong className="text-ink">Phone:</strong> 727 637 1019
                </p>
                <p>
                  <strong className="text-ink">Office Address:</strong><br />
                  4993 BACOPA LN S #705<br />
                  ST PETERSBURG FL
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

