import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Eagan Luxury Real Estate',
  description: 'Our commitment to protecting your privacy and personal information. Learn how we collect, use, and safeguard your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="page-transition">
      <section className="section-shell">
        <div className="page-shell">
          <p className="eyebrow">Privacy Policy</p>
          <div className="rule" />
          <h1 className="text-4xl md:text-[3.5rem] leading-tight mt-6">
            Privacy Policy
          </h1>
          <p className="mt-6 text-base text-ink-soft max-w-2xl">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
          </p>
          <p className="mt-4 text-sm text-graphite uppercase tracking-[0.2em]">
            Last Updated: November 2024
          </p>
        </div>
      </section>

      <section className="section-shell bg-ink/5">
        <div className="page-shell max-w-4xl">
          <div className="space-y-12">
            {/* Introduction */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Introduction</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                Welcome to Eagan Luxury Real Estate. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-base leading-relaxed text-ink-soft">
                By using this website, you consent to the data practices described in this policy. If you do not agree with the terms of this Privacy Policy, please do not access or use our website.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Information We Collect</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                We may collect information about you in a variety of ways. The information we may collect via our website includes:
              </p>
              <ul className="space-y-4 ml-6">
                <li className="text-base leading-relaxed text-ink-soft">
                  <strong className="text-ink">Personal Data:</strong> When you submit a contact form, request a property tour, or sign up for our newsletter, we may collect personally identifiable information, such as your name, email address, phone number, mailing address, and property preferences.
                </li>
                <li className="text-base leading-relaxed text-ink-soft">
                  <strong className="text-ink">Property Information:</strong> Details about properties you are interested in buying or selling, including addresses, preferences, and timeline.
                </li>
                <li className="text-base leading-relaxed text-ink-soft">
                  <strong className="text-ink">Derivative Data:</strong> Information our servers automatically collect when you access our website, such as your IP address, browser type, operating system, access times, and pages viewed.
                </li>
                <li className="text-base leading-relaxed text-ink-soft">
                  <strong className="text-ink">Cookies and Tracking Technologies:</strong> We may use cookies, web beacons, and other tracking technologies to enhance your experience, analyze site usage, and assist in our marketing efforts.
                </li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">How We Use Your Information</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                We use the information we collect in the following ways:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed text-ink-soft">To provide, operate, and maintain our website and services</li>
                <li className="text-base leading-relaxed text-ink-soft">To respond to your inquiries, comments, and questions</li>
                <li className="text-base leading-relaxed text-ink-soft">To assist you in your real estate search, property valuation, or home selling process</li>
                <li className="text-base leading-relaxed text-ink-soft">To send you marketing communications, newsletters, and updates about our services (you may opt out at any time)</li>
                <li className="text-base leading-relaxed text-ink-soft">To improve our website functionality and user experience</li>
                <li className="text-base leading-relaxed text-ink-soft">To analyze usage trends and optimize our marketing strategies</li>
                <li className="text-base leading-relaxed text-ink-soft">To prevent fraud and enhance security</li>
                <li className="text-base leading-relaxed text-ink-soft">To comply with legal obligations and industry regulations</li>
              </ul>
            </div>

            {/* How We Protect Your Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">How We Protect Your Information</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                We implement a variety of security measures to maintain the safety of your personal information. Your information is stored on secure servers and is only accessible by authorized personnel who are required to keep the information confidential.
              </p>
              <p className="text-base leading-relaxed text-ink-soft">
                While we strive to use commercially acceptable means to protect your personal information, please be aware that no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security, but we are committed to protecting your data to the best of our ability.
              </p>
            </div>

            {/* Sharing and Disclosure */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Sharing and Disclosure of Information</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                We may share your information in the following situations:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed text-ink-soft">
                  <strong className="text-ink">With Your Consent:</strong> We may disclose your information when you give us explicit permission to do so.
                </li>
                <li className="text-base leading-relaxed text-ink-soft">
                  <strong className="text-ink">Service Providers:</strong> We may share your information with third-party vendors who perform services on our behalf, such as email marketing platforms, analytics providers, and MLS databases.
                </li>
                <li className="text-base leading-relaxed text-ink-soft">
                  <strong className="text-ink">Business Partners:</strong> In connection with real estate transactions, we may share your information with mortgage lenders, home inspectors, title companies, and other professionals involved in the transaction.
                </li>
                <li className="text-base leading-relaxed text-ink-soft">
                  <strong className="text-ink">Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.
                </li>
              </ul>
            </div>

            {/* Third-Party Websites */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Third-Party Websites</h2>
              <p className="text-base leading-relaxed text-ink-soft">
                Our website may contain links to third-party websites, including social media platforms, MLS listings, and partner services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Your Rights and Choices */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Your Rights and Choices</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                You have certain rights regarding your personal information:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed text-ink-soft">
                  <strong className="text-ink">Access and Update:</strong> You may request access to the personal information we hold about you and request corrections or updates.
                </li>
                <li className="text-base leading-relaxed text-ink-soft">
                  <strong className="text-ink">Opt-Out:</strong> You may opt out of receiving marketing communications from us by following the unsubscribe instructions in our emails or contacting us directly.
                </li>
                <li className="text-base leading-relaxed text-ink-soft">
                  <strong className="text-ink">Delete Information:</strong> You may request that we delete your personal information, subject to certain legal exceptions.
                </li>
                <li className="text-base leading-relaxed text-ink-soft">
                  <strong className="text-ink">Cookies:</strong> You can set your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of our website may not function properly without cookies.
                </li>
              </ul>
            </div>

            {/* Updates to This Policy */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Updates to This Privacy Policy</h2>
              <p className="text-base leading-relaxed text-ink-soft">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact Information */}
            <div className="tile-muted mt-12">
              <h2 className="text-3xl md:text-4xl font-light mb-6">Contact Us</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-6">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
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
