import { Metadata } from "next";
import BuyersHero from "@/components/buyers/BuyersHero";
import BuyerProcess from "@/components/buyers/BuyerProcess";
import SearchHomes from "@/components/buyers/SearchHomes";
import SellToo from "@/components/buyers/SellToo";
import BuyerLocations from "@/components/buyers/BuyerLocations";
import { ContactNew } from "@/components/home/ContactNew";
import { FooterNew } from "@/components/home/FooterNew";

export const metadata: Metadata = {
	title: "Buyer Services | Cheryl Towey - New Jersey Real Estate Agent",
	description:
		"Find your dream home in New Jersey with Cheryl Towey at Weichert Realtors. Personalized buying experience from consultation to closing."
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
			<FooterNew />
		</>
	);
}
