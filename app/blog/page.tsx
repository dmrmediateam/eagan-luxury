import Hero from "@/components/content/Hero";
import { ContentGrid } from "@/components/content/ContentGrid";
import { FeaturedItem } from "@/components/content/FeaturedItem";
import { Newsletter } from "@/components/content/Newsletter";
import { ContactNew } from "@/components/home/ContactNew";
import { FooterNew } from "@/components/home/FooterNew";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog | Cheryl Towey | New Jersey, WI",
	description:
		"Explore insights and trends in New Jersey area real estate with Cheryl Towey's blog, featuring market updates and expert advice."
};

export default function BlogNew() {
	return (
		<>
			<Hero contentType="blog" />
			<FeaturedItem contentType="blog" slug="2025-luxury-outlook" />
			<ContentGrid contentType="blog" />
			<Newsletter />
			<ContactNew />
			<FooterNew />
		</>
	);
}
