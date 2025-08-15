import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Cheryl's Featured Property | Cheryl Towey - New Jersey Real Estate Agent",
	description: "Discover Cheryl Towey's featured property in New Jersey. This exceptional home represents the quality and service you can expect when working with Cheryl Towey, your trusted Weichert Realtors agent serving Hackettstown, Andover, Byram, Blairstown, Chester, and Washington.",
	keywords: "Cheryl Towey, New Jersey real estate, Weichert Realtors, featured property, Hackettstown, Andover, Byram, Blairstown, Chester, Washington",
	openGraph: {
		title: "Cheryl's Featured Property | Cheryl Towey - New Jersey Real Estate Agent",
		description: "Discover Cheryl Towey's featured property in New Jersey. This exceptional home represents the quality and service you can expect when working with Cheryl Towey.",
		type: "website",
		locale: "en_US",
	},
};

export default function CherylFeaturedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
