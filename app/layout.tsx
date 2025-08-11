import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Legendary Real Estate | Lake Geneva, WI",
	description:
		"The Legendary Real Estate Team is a luxury real estate team that specializes in selling and renting high-end properties."
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
