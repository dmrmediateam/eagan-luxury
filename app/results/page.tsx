import Hero from "@/components/results/Hero";
import { Overview } from "@/components/results/Overview";
import { Stats } from "@/components/results/Stats";
import { Testimonials } from "@/components/results/Testimonials";
import { ContactNew } from "@/components/home/ContactNew";
import { FooterNew } from "@/components/home/FooterNew";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Our Results | Legendary Real Estate | Lake Geneva, WI",
	description:
		"Explore Legendary Real Estate's track record of success in Lake Geneva area real estate with sales statistics and client testimonials."
};

export default function Results() {
	return (
		<>
			<Hero />
			<Overview />
			<Stats />
			<Testimonials />
			<ContactNew />
			<FooterNew />
		</>
	);
}
