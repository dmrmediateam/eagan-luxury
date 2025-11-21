import type { Metadata } from 'next'
import { Playfair_Display, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimations from '@/components/ScrollAnimations'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import { StructuredData, MultiStructuredData } from '@/app/components/StructuredData'
import {
  getRealEstateAgentSchema,
  getLocalBusinessSchema,
  getWebsiteSchema,
  getOrganizationSchema,
} from '@/lib/structuredData'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Eagan Luxury Real Estate | St. Petersburg Waterfront Specialists',
  description:
    'Eagan Luxury is a concierge real estate collective focused on waterfront estates, skyline penthouses, and Gulf Beach villas throughout St. Petersburg, Tierra Verde, and the Pinellas Bayway.',
  keywords:
    'St. Petersburg waterfront homes, Tierra Verde luxury real estate, Bacopa Bay condos, Pinellas Bayway estates, Gulf Beach penthouse, Eagan Luxury',
  authors: [{ name: 'Eagan Luxury', url: 'https://www.eaganluxury.com' }],
  creator: 'Eagan Luxury Real Estate',
  publisher: 'Eagan Luxury Real Estate',
  openGraph: {
    title: 'Eagan Luxury | Waterfront & Sky Residences',
    description: 'Concierge representation for St. Petersburg waterfront estates and Gulf-front villas.',
    url: 'https://www.eaganluxury.com',
    siteName: 'Eagan Luxury',
    images: [
      {
        url: 'https://www.eaganluxury.com/images/aerial-view-of-lisloughrey-pier-in-ireland-2025-02-12-05-10-21-utc.jpg',
        width: 1200,
        height: 630,
        alt: 'Luxury waterfront harbor with yachts',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@eaganluxury',
    creator: '@eaganluxury',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Global Structured Data */}
        <MultiStructuredData
          schemas={[
            getOrganizationSchema(),
            getRealEstateAgentSchema(),
            getLocalBusinessSchema(),
            getWebsiteSchema(),
          ]}
        />
      </head>
      <body className={spaceGrotesk.className}>
        <Script
          src="https://kestrel.idxhome.com/ihf-kestrel.js"
          strategy="beforeInteractive"
        />
        <Script
          id="ihf-kestrel-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.ihfKestrel = window.ihfKestrel || {};
              ihfKestrel.config = {
                platform: "",
                activationToken: "f2376947-5540-4265-9583-91df83176095",
              };
            `,
          }}
        />
        <ScrollProgressBar />
        <ScrollAnimations />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
