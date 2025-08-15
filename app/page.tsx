import HeroNew from "@/components/home/HeroNew";
import { About } from "@/components/home/About";
import { Team } from "@/components/home/Team";
import { OurListings } from "@/components/home/OurListings";
import { OurClients } from "@/components/home/OurClients";
import { ContactNew } from "@/components/home/ContactNew";
import { LuxuryLocations } from "@/components/home/NapaMap";
import { MarketInsights } from "@/components/home/BlogNew";
import { FooterNew } from "@/components/home/FooterNew";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Cheryl Towey - New Jersey Real Estate Agent",
	description:
		"Cheryl Towey is a premier real estate agent with Weichert Realtors serving New Jersey. Specializing in luxury homes and exceptional service in Hackettstown, Andover, Byram, Blairstown, Chester, and Washington."
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
			<FooterNew />
		</>
	);
}
