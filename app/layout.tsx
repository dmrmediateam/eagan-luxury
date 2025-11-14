import type { Metadata } from 'next'
import { Bodoni_Moda, Varela } from 'next/font/google'
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

// Bodoni Moda for headings - Elegant luxury serif
const bodoniModa = Bodoni_Moda({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bodoni',
  display: 'swap',
})

// Varela for body text - Clean, modern sans-serif
const varela = Varela({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-varela',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cheryl Towey - Licensed Real Estate Agent | Northwest New Jersey',
  description: 'Licensed real estate professional serving Northwest New Jersey since 2010. Specializing in Hackettstown, Sussex County, Warren County. Weichert Realtors.',
  keywords: 'licensed real estate agent New Jersey, Cheryl Towey realtor, Hackettstown homes for sale, Sussex County realtor, Warren County real estate, Morris Plains office',
  authors: [{ name: 'Cheryl Towey', url: 'https://www.realestatebycherylnj.com' }],
  creator: 'Cheryl Towey',
  publisher: 'Weichert Realtors',
  verification: {
    google: 'google-site-verification-code', // Add actual verification code when available
  },
  openGraph: {
    title: 'Cheryl Towey - Licensed Real Estate Agent NJ',
    description: 'Find your dream home in Northwest New Jersey with experienced licensed agent Cheryl Towey.',
    url: 'https://www.realestatebycherylnj.com',
    siteName: 'Real Estate by Cheryl NJ',
    images: [
      {
        url: 'https://www.realestatebycherylnj.com/images/cheryl-towey.jpg',
        width: 1200,
        height: 630,
        alt: 'Cheryl Towey - Licensed Real Estate Agent in Northwest New Jersey',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@cheryltoweyrealestate',
    creator: '@cheryltoweyrealestate',
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
    <html lang="en" className={`${bodoniModa.variable} ${varela.variable}`}>
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
      <body className={varela.className}>
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
                platform: "custom",
                activationToken: "5bde82f9-6b1d-4223-b1a3-7b664e7c5a6e",
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
