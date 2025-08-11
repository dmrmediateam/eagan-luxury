import BuyersHero from "@/components/buyers/BuyersHero";
import BuyerProcess from "@/components/buyers/BuyerProcess";
import BuyerLocations from "@/components/buyers/BuyerLocations";
import SearchHomes from "@/components/buyers/SearchHomes";
import SellToo from "@/components/buyers/SellToo";
import { FooterNew } from "@/components/home/FooterNew";
import { ContactNew } from "@/components/home/ContactNew";
import { Socials } from "@/components/home/Socials";
import { SeenOnNew } from "@/components/home/SeenOnNew";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Buyer Services | Legendary Real Estate | Lake Geneva, WI",
	description:
		"Find your dream home in Lake Geneva, WI with Legendary Real Estate. Personalized buying experience from consultation to closing."
};

export default function BuyersPage() {
	return (
		<>
			<BuyersHero />
			<BuyerProcess />
			<SearchHomes />
			<SellToo />
			<BuyerLocations />
			<ContactNew />
			<Socials />
			<SeenOnNew />
			<FooterNew />
		</>
	);
}
