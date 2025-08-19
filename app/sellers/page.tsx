import { Metadata } from "next";
import SellersHero from "@/components/sellers/SellersHero";
import SellerProcess from "@/components/sellers/SellerProcess";
import HomeValuation from "@/components/sellers/HomeValuation";
import { ContactNew } from "@/components/home/ContactNew";
import { FooterNew } from "@/components/home/FooterNew";

export const metadata: Metadata = {
	title: "Seller Services | Cheryl Towey Services - New Jersey Cheryl Towey Services",
	description:
		"Sell your home with Cheryl Towey Services at Cheryl Towey Services. Expert marketing, staging, and negotiation to maximize your property's value in New Jersey."
};

export default function SellersPage() {
	return (
		<>
			<SellersHero />
			<SellerProcess />
			<HomeValuation />
			<ContactNew />
			<FooterNew />
		</>
	);
}
