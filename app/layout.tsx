import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Cheryl Towey - New Jersey Real Estate Agent",
	description:
		"Cheryl Towey is a premier real estate agent with Weichert Realtors serving New Jersey. Specializing in luxury homes and exceptional service in Hackettstown, Andover, Byram, Blairstown, Chester, and Washington.",
	icons: {
		icon: '/favicon.svg',
		apple: '/favicon.svg',
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
