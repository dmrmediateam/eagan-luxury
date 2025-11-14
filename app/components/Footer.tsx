import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              Weichert Realtors
            </h3>
            <p className="text-sm mb-4">
              Cheryl Towey, licensed real estate agent with Weichert Realtors,
              specializing in residential properties in Hackettstown, Andover,
              Byram, Blairstown, Chester, and Washington. Offering exceptional
              service and market expertise.
            </p>
            <p className="text-sm">
              1625 NJ-10 East
              <br />
              Morris Plains, NJ 07950
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-emerald-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#properties" className="hover:text-emerald-400 transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Market Reports
                </Link>
              </li>
              <li>
                <Link href="#buyers" className="hover:text-emerald-400 transition-colors">
                  Buyer&apos;s Guide
                </Link>
              </li>
              <li>
                <Link href="#sellers" className="hover:text-emerald-400 transition-colors">
                  Seller&apos;s Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Communities & Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Communities</h4>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Sussex County
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Warren County
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Hackettstown
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Andover
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Byram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Blairstown
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Chester
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Washington
                </Link>
              </li>
            </ul>

            <h4 className="text-white font-semibold mb-2">Contact</h4>
            <p className="text-sm mb-1">T: 908.334.0971</p>
            <p className="text-sm">E: yournjrealtor1@gmail.com</p>
          </div>
        </div>

        {/* Legal & Compliance */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-sm space-y-4">
            <h4 className="text-white font-semibold mb-2">
              Legal & Compliance Information
            </h4>
            <div className="space-y-2">
              <p>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Garden State MLS
                </Link>
                {" | "}
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  MLS® Disclaimer & IDX Information
                </Link>
              </p>
              <p>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Equal Housing Opportunity
                </Link>
                {" | "}
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Fair Housing & Equal Opportunity
                </Link>
              </p>
              <p>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Professional Licensing & REALTOR® Information
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p className="mb-2">
            © 2025 Cheryl Towey | Weichert Realtors. All rights reserved.
          </p>
          <div className="space-x-4">
            <Link href="#" className="hover:text-emerald-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-emerald-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-emerald-400 transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

