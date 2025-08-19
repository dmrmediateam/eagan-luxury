import Hero from "@/components/market-update/Hero";
import { Overview } from "@/components/market-update/Overview";
import { MarketStats } from "@/components/market-update/MarketStats";
import { Reports } from "@/components/market-update/Reports";
import { SeenOnNew } from "@/components/home/SeenOnNew";
import { ContactNew } from "@/components/home/ContactNew";
import { FooterNew } from "@/components/home/FooterNew";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Market Update | Cheryl Towey | New Jersey, WI",
	description:
		"Stay informed with the latest real estate market updates for New Jersey area from Cheryl Towey."
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
