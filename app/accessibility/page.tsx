import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement | Eagan Luxury Real Estate',
  description: 'Our commitment to making our website accessible to all users. Learn about our accessibility features and how to request assistance.',
};

export default function AccessibilityPage() {
  return (
    <main className="page-transition">
      <section className="section-shell">
        <div className="page-shell">
          <p className="eyebrow">Accessibility</p>
          <div className="rule" />
          <h1 className="text-4xl md:text-[3.5rem] leading-tight mt-6">
            Accessibility Statement
          </h1>
          <p className="mt-6 text-base text-ink-soft max-w-2xl">
            We are committed to ensuring digital accessibility for all people, including those with disabilities.
          </p>
          <p className="mt-4 text-sm text-graphite uppercase tracking-[0.2em]">
            Last Updated: November 2024
          </p>
        </div>
      </section>

      <section className="section-shell bg-ink/5">
        <div className="page-shell max-w-4xl">
          <div className="space-y-12">
            {/* Our Commitment */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Our Commitment to Accessibility</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                Eagan Luxury Real Estate is committed to ensuring that our website is accessible to everyone, including individuals with disabilities. We believe that all people should have equal access to real estate information and services, and we strive to provide an inclusive online experience for all visitors.
              </p>
              <p className="text-base leading-relaxed text-ink-soft">
                We are continuously working to improve the accessibility and usability of our website to ensure that it meets or exceeds the requirements of applicable accessibility standards. This commitment reflects our dedication to serving all members of our community with dignity and respect.
              </p>
            </div>

            {/* Accessibility Standards */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Accessibility Standards</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                Our website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines are internationally recognized standards for web accessibility and outline how to make web content more accessible to people with disabilities.
              </p>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                We have implemented various accessibility features and best practices, including:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed text-ink-soft">
                  <strong className="text-ink">Semantic HTML:</strong> Proper use of HTML elements to ensure content structure is clear and meaningful to assistive technologies
                </li>
                <li className="text-base leading-relaxed text-ink-soft">
                  <strong className="text-ink">Keyboard Navigation:</strong> All interactive elements can be accessed and operated using a keyboard alone
                </li>
                <li className="text-base leading-relaxed text-ink-soft">
                  <strong className="text-ink">Alt Text:</strong> Descriptive alternative text for images to convey information to screen reader users
                </li>
                <li className="text-base leading-relaxed text-ink-soft">
                  <strong className="text-ink">Color Contrast:</strong> Sufficient color contrast between text and background to ensure readability
                </li>
                <li className="text-base leading-relaxed text-ink-soft">
                  <strong className="text-ink">Responsive Design:</strong> Content that adapts to different screen sizes and can be zoomed without loss of functionality
                </li>
                <li className="text-base leading-relaxed text-ink-soft">
                  <strong className="text-ink">Clear Navigation:</strong> Consistent and logical navigation structure throughout the website
                </li>
                <li className="text-base leading-relaxed text-ink-soft">
                  <strong className="text-ink">Form Labels:</strong> Clear labels and instructions for all form fields to assist users in completing tasks
                </li>
              </ul>
            </div>

            {/* Assistive Technologies */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Assistive Technologies Compatibility</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                Our website is designed to be compatible with a variety of assistive technologies, including:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed text-ink-soft">Screen readers (such as JAWS, NVDA, and VoiceOver)</li>
                <li className="text-base leading-relaxed text-ink-soft">Screen magnification software</li>
                <li className="text-base leading-relaxed text-ink-soft">Speech recognition software</li>
                <li className="text-base leading-relaxed text-ink-soft">Keyboard-only navigation</li>
                <li className="text-base leading-relaxed text-ink-soft">Alternative input devices</li>
              </ul>
              <p className="text-base leading-relaxed text-ink-soft mt-4">
                We test our website with various assistive technologies to ensure the best possible experience for all users.
              </p>
            </div>

            {/* Ongoing Efforts */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Ongoing Accessibility Efforts</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                Accessibility is an ongoing commitment. We continuously work to improve the accessibility of our website through:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed text-ink-soft">Regular accessibility audits and testing with real users who have disabilities</li>
                <li className="text-base leading-relaxed text-ink-soft">Staying current with the latest accessibility guidelines and best practices</li>
                <li className="text-base leading-relaxed text-ink-soft">Training our team on accessibility principles and inclusive design</li>
                <li className="text-base leading-relaxed text-ink-soft">Incorporating accessibility considerations into all new features and updates</li>
                <li className="text-base leading-relaxed text-ink-soft">Responding promptly to accessibility feedback and reports from users</li>
              </ul>
            </div>

            {/* Known Limitations */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Known Limitations and Planned Improvements</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                While we strive for full accessibility, we acknowledge that some areas of our website may not yet be fully accessible. We are aware of the following limitations and are actively working to address them:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed text-ink-soft">
                  Some third-party content and embedded features (such as property listing widgets from external MLS providers) may not be fully accessible. We are working with our vendors to improve these elements.
                </li>
                <li className="text-base leading-relaxed text-ink-soft">
                  Certain PDF documents may not be fully accessible. We are working to ensure all documents meet accessibility standards or provide accessible alternatives.
                </li>
                <li className="text-base leading-relaxed text-ink-soft">
                  Some older property photos may lack comprehensive alternative text. We are systematically updating image descriptions across our site.
                </li>
              </ul>
              <p className="text-base leading-relaxed text-ink-soft mt-4">
                We are committed to resolving these issues and welcome your feedback to help us prioritize improvements.
              </p>
            </div>

            {/* Accessibility Assistance */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Accessibility Assistance</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                If you need assistance accessing any content on our website or require information in an alternative format, please don't hesitate to reach out. We are here to help and will work with you to provide the information or services you need in a format that works for you.
              </p>
              <p className="text-base leading-relaxed text-ink-soft">
                Alternative formats may include large print, audio, accessible electronic formats, or other accommodations based on your specific needs. We will respond to all accessibility requests as quickly as possible, typically within 2-3 business days.
              </p>
            </div>

            {/* Feedback */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Feedback and Reporting</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-4">
                We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers, have suggestions for improvement, or need assistance, please let us know. Your input helps us identify areas for improvement and better serve all members of our community.
              </p>
              <p className="text-base leading-relaxed text-ink-soft">
                When reporting an accessibility issue, please include:
              </p>
              <ul className="space-y-3 ml-6 mb-4">
                <li className="text-base leading-relaxed text-ink-soft">The specific page or feature you were trying to access</li>
                <li className="text-base leading-relaxed text-ink-soft">A description of the problem you encountered</li>
                <li className="text-base leading-relaxed text-ink-soft">The assistive technology you were using (if applicable)</li>
                <li className="text-base leading-relaxed text-ink-soft">Your contact information so we can follow up with you</li>
              </ul>
              <p className="text-base leading-relaxed text-ink-soft">
                We take all accessibility feedback seriously and will work to address reported issues promptly.
              </p>
            </div>

            {/* Contact Information */}
            <div className="tile-muted mt-12">
              <h2 className="text-3xl md:text-4xl font-light mb-6">Contact Us About Accessibility</h2>
              <p className="text-base leading-relaxed text-ink-soft mb-6">
                For accessibility assistance, to report an accessibility issue, or to request information in an alternative format, please contact us:
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
                <p className="text-sm text-graphite mt-4">
                  We will respond to accessibility inquiries within 2-3 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
