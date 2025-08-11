import Hero from "@/components/about/Hero";
import { Team } from "@/components/about/Team";
import { Values } from "@/components/about/Values";
import { AboutCTA } from "@/components/about/AboutCTA";
import { Stats } from "@/components/about/Stats";
import { ContactNew } from "@/components/home/ContactNew";
import { FooterNew } from "@/components/home/FooterNew";
import type { Metadata } from "next";
import { AwardsScrollBanner } from "@/components/about/AwardsScrollBanner";
import { ContactFaqs } from "@/components/contact/ContactFaqs";

export const metadata: Metadata = {
	title: "About Us | Legendary Real Estate | Lake Geneva, WI",
	description:
		"Learn about Legendary Real Estate, our mission, values, and dedicated team of real estate professionals serving Lake Geneva, WI."
};

export default function About() {
	return (
		<>
			<Hero />
			<AwardsScrollBanner />
			<Team />
			<Stats />
			<AboutCTA
				backgroundImage="/images/highlands-estate.jpg"
				title="Ready to Experience Lake Geneva Living?"
				subtitle="Let our expert team guide you through the finest properties in the Lake Geneva area."
			/>
			<Values />
			<ContactNew />
			<ContactFaqs />
			<FooterNew />
		</>
	);
}
