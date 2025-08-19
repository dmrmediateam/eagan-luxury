import { Metadata } from "next";
import BuyersHero from "@/components/buyers/BuyersHero";
import BuyerProcess from "@/components/buyers/BuyerProcess";
import SearchHomes from "@/components/buyers/SearchHomes";
import SellToo from "@/components/buyers/SellToo";
import BuyerLocations from "@/components/buyers/BuyerLocations";
import { ContactNew } from "@/components/home/ContactNew";
import { FooterNew } from "@/components/home/FooterNew";

export const metadata: Metadata = {
	title: "Buyer Services | Cheryl Towey Services - New Jersey Cheryl Towey Services",
	description:
		"Find your dream home in New Jersey with Cheryl Towey Services at Cheryl Towey Services. Personalized buying experience from consultation to closing."
};

export default function BuyersPage() {
	return (
		<>
			<BuyersHero />
			<BuyerProcess />
			<SellToo />
			<ContactNew />
			<FooterNew />
		</>
	);
}
