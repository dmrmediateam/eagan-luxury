export const metadata = {
  title: 'Terms & Conditions | Cheryl Towey Real Estate',
  description: 'Terms and conditions for using our website and services. Please review these terms before using our real estate services.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-max text-center">
          <h1 className="text-3xl sm:text-4xl font-serif font-light text-black mb-6">
            Terms & Conditions
          </h1>
          <div className="bg-gold h-[2px] w-16 mx-auto mb-8"></div>
          <p className="text-base text-gray-dark max-w-3xl mx-auto leading-relaxed">
            Please read these terms and conditions carefully before using our website and services.
          </p>
          <p className="text-sm text-gray-600 mt-4">
            Last Updated: October 13, 2025
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl mx-auto">
          <div className="space-y-12 text-gray-700">
            {/* Acceptance of Terms */}
            <div>
              <h2 className="text-2xl font-serif font-light text-black mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Welcome to the website of Cheryl Towey, a licensed real estate salesperson with Weichert Realtors 
                ("we," "us," or "our"). By accessing or using this website, you agree to be bound by these Terms 
                and Conditions ("Terms"). These Terms govern your use of our website and the services we provide.
              </p>
              <p className="text-base leading-relaxed">
                If you do not agree to these Terms, please do not use our website. We reserve the right to modify 
                these Terms at any time, and such modifications will be effective immediately upon posting. Your 
                continued use of the website following any changes indicates your acceptance of the new Terms.
              </p>
            </div>

            {/* Use of Website */}
            <div>
              <h2 className="text-2xl font-serif font-light text-black mb-4">
                Use of Website
              </h2>
              <p className="text-base leading-relaxed mb-4">
                You may use this website for lawful purposes only. You agree not to use this website:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed">
                  In any way that violates any applicable federal, state, local, or international law or regulation
                </li>
                <li className="text-base leading-relaxed">
                  To transmit, or procure the sending of, any advertising or promotional material without our prior 
                  written consent
                </li>
                <li className="text-base leading-relaxed">
                  To impersonate or attempt to impersonate us, our employees, another user, or any other person or entity
                </li>
                <li className="text-base leading-relaxed">
                  To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website
                </li>
                <li className="text-base leading-relaxed">
                  To introduce any viruses, trojan horses, worms, logic bombs, or other material that is malicious 
                  or technologically harmful
                </li>
                <li className="text-base leading-relaxed">
                  To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the website
                </li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-serif font-light text-black mb-4">
                Intellectual Property and Website Content
              </h2>
              <p className="text-base leading-relaxed mb-4">
                All content on this website, including but not limited to text, graphics, logos, images, videos, 
                and software, is the property of Cheryl Towey, Weichert Realtors, or their respective licensors 
                and is protected by United States and international copyright, trademark, and other intellectual 
                property laws.
              </p>
              <p className="text-base leading-relaxed mb-4">
                You may view, download, and print content from this website for your personal, non-commercial use 
                only. You may not:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed">
                  Modify, copy, distribute, transmit, display, reproduce, publish, license, or create derivative 
                  works from any content on this website
                </li>
                <li className="text-base leading-relaxed">
                  Use any content for commercial purposes without our express written consent
                </li>
                <li className="text-base leading-relaxed">
                  Remove any copyright, trademark, or other proprietary notices from the content
                </li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                The Weichert® name and logo are registered trademarks of Weichert Co. and may not be used without 
                permission. REALTOR® is a registered trademark of the National Association of REALTORS®.
              </p>
            </div>

            {/* Property Listings */}
            <div>
              <h2 className="text-2xl font-serif font-light text-black mb-4">
                Property Listings and Information Accuracy
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Property listings and information displayed on this website are provided for informational purposes 
                only and are believed to be accurate but are not guaranteed. Property information may be sourced 
                from Multiple Listing Services (MLS), public records, and other third-party sources.
              </p>
              <p className="text-base leading-relaxed mb-4">
                <strong className="text-black">Important Disclaimers:</strong>
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed">
                  Property information is subject to change without notice and may become outdated or inaccurate
                </li>
                <li className="text-base leading-relaxed">
                  All property details, including but not limited to square footage, lot size, room dimensions, 
                  and amenities, should be independently verified
                </li>
                <li className="text-base leading-relaxed">
                  Photos may not reflect the current condition of the property or may show model units or staged homes
                </li>
                <li className="text-base leading-relaxed">
                  Pricing, availability, and terms are subject to change and require confirmation
                </li>
                <li className="text-base leading-relaxed">
                  Property boundaries and lot sizes should be verified through a professional survey
                </li>
                <li className="text-base leading-relaxed">
                  School district information, tax assessments, and zoning details should be confirmed with 
                  appropriate authorities
                </li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                This website does not constitute an offer to sell or a solicitation of an offer to buy any real 
                estate. All real estate transactions are subject to formal contracts, inspections, financing, and 
                other contingencies.
              </p>
            </div>

            {/* MLS and IDX */}
            <div>
              <h2 className="text-2xl font-serif font-light text-black mb-4">
                MLS and IDX Data
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Some property data displayed on this website is provided through the Internet Data Exchange (IDX) 
                program of Garden State Multiple Listing Service, L.L.C. and other MLS providers. This data is 
                deemed reliable but is not guaranteed.
              </p>
              <p className="text-base leading-relaxed mb-4">
                Users of this data are hereby notified that:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed">
                  The data may be used only for consumers' personal, non-commercial use
                </li>
                <li className="text-base leading-relaxed">
                  The data may not be used for any purpose other than to identify prospective properties for purchase
                </li>
                <li className="text-base leading-relaxed">
                  IDX information is provided exclusively for consumers' personal, non-commercial use and may not 
                  be used for any purpose other than to identify prospective properties
                </li>
                <li className="text-base leading-relaxed">
                  Any reproduction or distribution of IDX data is strictly prohibited
                </li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                Listings marked as IDX are held by brokerage firms other than Weichert Realtors. Copyright and 
                ownership remain with the respective MLS and listing brokers.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-2xl font-serif font-light text-black mb-4">
                Third-Party Links and Services
              </h2>
              <p className="text-base leading-relaxed mb-4">
                This website may contain links to third-party websites and services that are not owned or controlled 
                by us. These links are provided for your convenience only. We have no control over, and assume no 
                responsibility for, the content, privacy policies, or practices of any third-party websites or services.
              </p>
              <p className="text-base leading-relaxed">
                We do not endorse or make any representations about third-party websites or services. Your use of 
                third-party websites is at your own risk, and you should review the terms and policies of any 
                third-party sites you visit.
              </p>
            </div>

            {/* Professional Services */}
            <div>
              <h2 className="text-2xl font-serif font-light text-black mb-4">
                Professional Services and Advice
              </h2>
              <p className="text-base leading-relaxed mb-4">
                The information provided on this website is for general informational purposes only and should not 
                be considered professional advice. Nothing on this website constitutes:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed">
                  Legal, financial, tax, or investment advice
                </li>
                <li className="text-base leading-relaxed">
                  A substitute for professional consultation with qualified real estate, legal, financial, or tax advisors
                </li>
                <li className="text-base leading-relaxed">
                  A guarantee of specific results or outcomes in any real estate transaction
                </li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                Before making any real estate decisions, you should consult with appropriate professionals, including 
                but not limited to real estate attorneys, home inspectors, mortgage lenders, financial advisors, and 
                tax professionals.
              </p>
            </div>

            {/* User Submissions */}
            <div>
              <h2 className="text-2xl font-serif font-light text-black mb-4">
                User Submissions and Communications
              </h2>
              <p className="text-base leading-relaxed mb-4">
                Any information, feedback, suggestions, testimonials, or other materials you submit to us through 
                this website (collectively, "Submissions") will be considered non-confidential and non-proprietary.
              </p>
              <p className="text-base leading-relaxed">
                By submitting content to us, you grant us a worldwide, perpetual, irrevocable, royalty-free license 
                to use, reproduce, modify, publish, and distribute such content in any media for any purpose, including 
                but not limited to marketing and promotional materials. You represent that you have the right to grant 
                this license and that your Submissions do not violate any third-party rights.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-serif font-light text-black mb-4">
                Limitation of Liability
              </h2>
              <p className="text-base leading-relaxed mb-4">
                To the fullest extent permitted by law, Cheryl Towey and Weichert Realtors shall not be liable for 
                any direct, indirect, incidental, special, consequential, or punitive damages arising out of or 
                related to your use of this website or the services provided, including but not limited to:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed">
                  Errors or inaccuracies in property listings or information
                </li>
                <li className="text-base leading-relaxed">
                  Lost profits, revenues, or business opportunities
                </li>
                <li className="text-base leading-relaxed">
                  Loss of data or information
                </li>
                <li className="text-base leading-relaxed">
                  Any unauthorized access to or use of our servers and/or any personal information stored therein
                </li>
                <li className="text-base leading-relaxed">
                  Any interruption or cessation of transmission to or from our website
                </li>
                <li className="text-base leading-relaxed">
                  Any bugs, viruses, or similar issues transmitted to or through our website by any third party
                </li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability 
                for certain damages. In such jurisdictions, our liability will be limited to the maximum extent 
                permitted by law.
              </p>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className="text-2xl font-serif font-light text-black mb-4">
                Indemnification
              </h2>
              <p className="text-base leading-relaxed">
                You agree to indemnify, defend, and hold harmless Cheryl Towey, Weichert Realtors, and their 
                respective officers, directors, employees, agents, and affiliates from and against any claims, 
                liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising 
                out of or related to your use of the website, your violation of these Terms, or your violation 
                of any rights of another party.
              </p>
            </div>

            {/* Disclaimer of Warranties */}
            <div>
              <h2 className="text-2xl font-serif font-light text-black mb-4">
                Disclaimer of Warranties
              </h2>
              <p className="text-base leading-relaxed mb-4">
                This website and all content, services, and products provided through it are offered on an "AS IS" 
                and "AS AVAILABLE" basis without any warranties of any kind, either express or implied, including 
                but not limited to:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-base leading-relaxed">
                  Implied warranties of merchantability, fitness for a particular purpose, or non-infringement
                </li>
                <li className="text-base leading-relaxed">
                  Warranties that the website will be uninterrupted, error-free, or free of viruses or other harmful components
                </li>
                <li className="text-base leading-relaxed">
                  Warranties regarding the accuracy, reliability, or completeness of any content or information
                </li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                We do not warrant that defects will be corrected or that our website or the servers that make it 
                available are free of viruses or other harmful components. You assume all responsibility and risk 
                for your use of this website.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-serif font-light text-black mb-4">
                Governing Law and Jurisdiction
              </h2>
              <p className="text-base leading-relaxed">
                These Terms and your use of this website shall be governed by and construed in accordance with the 
                laws of the State of New Jersey, without regard to its conflict of law provisions. You agree to 
                submit to the exclusive jurisdiction of the courts located in Morris County, New Jersey, for the 
                resolution of any disputes arising out of or relating to these Terms or your use of the website.
              </p>
            </div>

            {/* Severability */}
            <div>
              <h2 className="text-2xl font-serif font-light text-black mb-4">
                Severability
              </h2>
              <p className="text-base leading-relaxed">
                If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining 
                provisions shall continue in full force and effect. The invalid or unenforceable provision shall 
                be modified to the minimum extent necessary to make it valid and enforceable while preserving its 
                intent.
              </p>
            </div>

            {/* Entire Agreement */}
            <div>
              <h2 className="text-2xl font-serif font-light text-black mb-4">
                Entire Agreement
              </h2>
              <p className="text-base leading-relaxed">
                These Terms, together with our Privacy Policy and any other policies or agreements referenced herein, 
                constitute the entire agreement between you and us regarding your use of this website and supersede 
                all prior or contemporaneous communications and proposals, whether oral or written.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-light p-8 rounded-sm">
              <h2 className="text-2xl font-serif font-light text-black mb-4">
                Questions About These Terms
              </h2>
              <p className="text-base leading-relaxed mb-4">
                If you have any questions, concerns, or comments about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-2 text-base">
                <p>
                  <strong className="text-black">Cheryl Towey</strong><br />
                  Licensed Real Estate Salesperson<br />
                  Weichert Realtors
                </p>
                <p>
                  <strong className="text-black">Email:</strong> yournjrealtor1@gmail.com<br />
                  <strong className="text-black">Phone:</strong> (908) 334-0971
                </p>
                <p>
                  <strong className="text-black">Office Address:</strong><br />
                  1625 Route 10 East<br />
                  Morris Plains, NJ 07950
                </p>
              </div>
            </div>

            {/* Legal Notice */}
            <div className="border-l-4 border-gold pl-6">
              <p className="text-sm leading-relaxed text-gray-600">
                <strong className="text-black">Legal Notice:</strong> By using this website, you acknowledge that 
                you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree 
                to these Terms, you must discontinue use of this website immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

