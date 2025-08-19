import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/content/Hero";
import { ContentGrid } from "@/components/content/ContentGrid";
import { FeaturedItem } from "@/components/content/FeaturedItem";
import { ContactNew } from "@/components/home/ContactNew";
import { FooterNew } from "@/components/home/FooterNew";
import { Newsletter } from "@/components/content/Newsletter";

export const metadata: Metadata = {
	title: "Press & Media | Cheryl Towey | New Jersey, WI",
	description:
		"Stay updated with the latest news, announcements, and media coverage about our luxury real estate ventures and market insights in New Jersey area."
};

export default function PressPage() {
	return (
		<>
			<Hero contentType="press" />
			<FeaturedItem
				contentType="press"
				slug="cottages-gardens-interior-designer"
			/>
			<ContentGrid contentType="press" />
			<Newsletter />
			<ContactNew />
			<FooterNew />
		</>
	);
}
