import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: 'Cheryl Towey - New Jersey Real Estate Agent and Realtor',
    template: '%s | Cheryl Towey - New Jersey Real Estate Agent and Realtor'
  },
  description: 'Cheryl Towey is a dedicated real estate agent providing personalized service and expertise in Napa Valley and Sonoma County. Find your dream home with professional guidance.',
  keywords: [
    'Napa Valley', 'Sonoma County', 'St. Helena', 'Calistoga', 'Yountville', 'Healdsburg',
    'real estate',
    'homes for sale',
    'Napa Valley Properties', 'Sonoma County Homes', 'Luxury Real Estate', 'Wine Country Properties', 'Cheryl Towey', 'Real Estate Agent'
  ].join(', '),
  authors: [{ name: 'Cheryl Towey' }],
  creator: 'Cheryl Towey',
  publisher: 'Cheryl Towey',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://legendaryrealestateservices.com',
    siteName: 'Cheryl Towey Real Estate',
    title: 'Cheryl Towey - New Jersey Real Estate Agent and Realtor',
    description: 'Cheryl Towey is a dedicated real estate agent providing personalized service and expertise in Napa Valley and Sonoma County. Find your dream home with professional guidance.',
    images: [
      {
        url: '/cheryl-towey.jpeg',
        width: 1200,
        height: 630,
        alt: 'Cheryl Towey - New Jersey Real Estate Agent and Realtor'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cheryl Towey - New Jersey Real Estate Agent and Realtor',
    description: 'Cheryl Towey is a dedicated real estate agent providing personalized service and expertise in Napa Valley and Sonoma County. Find your dream home with professional guidance.',
    images: ['/cheryl-towey.jpeg']
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
	userScalable: true,
	themeColor: "#121212"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="bg-[#121212]">
			<head>
				{/* Preload hero images for faster LCP */}
				<script
					defer
					src="https://cloud.umami.is/script.js"
					data-website-id="61487ad5-548b-43c3-bd99-135ecfa4f9c1"></script>
			</head>
			<body className="antialiased bg-[#121212] min-h-screen">
				{children}
			</body>
		</html>
	);
}
