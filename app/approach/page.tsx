import type { Metadata } from "next";
import ApproachHero from "@/components/approach/ApproachHero";
import ApproachContent from "@/components/approach/ApproachContent";
import ApproachProcess from "@/components/approach/ApproachProcess";
import { SeenOnNew } from "@/components/home/SeenOnNew";
import { ContactNew } from "@/components/home/ContactNew";
import { FooterNew } from "@/components/home/FooterNew";

export const metadata: Metadata = {
	title: "Our Approach | Legendary Real Estate | Lake Geneva, WI",
	description:
		"Discover Legendary Real Estate's unique approach to real estate in Lake Geneva area. Strategic, client-focused, and results-driven."
};

export default function Approach() {
	return (
		<>
			<ApproachHero />
			<ApproachContent />
			<ApproachProcess />
			<SeenOnNew />
			<ContactNew />
			<FooterNew />
		</>
	);
}
