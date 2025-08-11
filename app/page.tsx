import HeroNew from "@/components/home/HeroNew";
import { About } from "@/components/home/About";
import { Team } from "@/components/home/Team";
import { OurListings } from "@/components/home/OurListings";
import { OurClients } from "@/components/home/OurClients";
import { ContactNew } from "@/components/home/ContactNew";
import { LuxuryLocations } from "@/components/home/NapaMap";
import { MarketInsights } from "@/components/home/BlogNew";
import { Socials } from "@/components/home/Socials";
import { SeenOnNew } from "@/components/home/SeenOnNew";
import { FooterNew } from "@/components/home/FooterNew";
import type { Metadata } from "next";
import { ContactFaqs } from "@/components/contact/ContactFaqs";

export const metadata: Metadata = {
	title: "Legendary Real Estate | Lake Geneva, WI",
	description:
		"Legendary Real Estate is a real estate agency in Lake Geneva, WI."
};

export default function Home() {
	return (
		<>
			<HeroNew />
			<OurListings />
			<About />
			<Team />
			<LuxuryLocations />
			<MarketInsights />
			<OurClients />
			<ContactNew />
			<Socials />
			<SeenOnNew />
			<ContactFaqs />
			<FooterNew />
		</>
	);
}
