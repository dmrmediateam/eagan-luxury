import Hero from "@/components/market-update/Hero";
import { Overview } from "@/components/market-update/Overview";
import { MarketStats } from "@/components/market-update/MarketStats";
import { Reports } from "@/components/market-update/Reports";
import { SeenOnNew } from "@/components/home/SeenOnNew";
import { ContactNew } from "@/components/home/ContactNew";
import { FooterNew } from "@/components/home/FooterNew";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Market Update | Legendary Real Estate | Lake Geneva, WI",
	description:
		"Stay informed with the latest real estate market updates for Lake Geneva area from Legendary Real Estate."
};

export default function MarketUpdate() {
	return (
		<>
			<Hero />
			<Overview />
			<MarketStats />
			<Reports />
			<SeenOnNew />
			<ContactNew />
			<FooterNew />
		</>
	);
}
