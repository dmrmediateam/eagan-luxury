import Hero from "@/components/about/Hero";
import { AboutCheryl } from "@/components/about/AboutCheryl";
import { Values } from "@/components/about/Values";
import { AboutCTA } from "@/components/about/AboutCTA";
import { Stats } from "@/components/about/Stats";
import { ContactNew } from "@/components/home/ContactNew";
import { FooterNew } from "@/components/home/FooterNew";
import type { Metadata } from "next";
import { AwardsScrollBanner } from "@/components/about/AwardsScrollBanner";
import { ContactFaqs } from "@/components/contact/ContactFaqs";

export const metadata: Metadata = {
	title: "About Cheryl Towey | Weichert Realtors | New Jersey",
	description:
		"Learn about Cheryl Towey, your trusted real estate professional with Weichert Realtors serving New Jersey. Specializing in Hackettstown, Andover, Byram, Blairstown, Chester, and Washington."
};

export default function About() {
	return (
		<>
			<Hero />
			<AwardsScrollBanner />
			<AboutCheryl />
			<Stats />
			<AboutCTA
				backgroundImage="/images/highlands-estate.jpg"
				title="Ready to Work with Cheryl?"
				subtitle="Let Cheryl guide you through finding your perfect home in New Jersey's most desirable communities."
			/>
			<Values />
			<ContactNew />
			<ContactFaqs />
			<FooterNew />
		</>
	);
}
