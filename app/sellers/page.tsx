import { Metadata } from "next";
import SellersHero from "@/components/sellers/SellersHero";
import SellerProcess from "@/components/sellers/SellerProcess";
import HomeValuation from "@/components/sellers/HomeValuation";
import { ContactNew } from "@/components/home/ContactNew";
import { FooterNew } from "@/components/home/FooterNew";

export const metadata: Metadata = {
	title: "Seller Services | Cheryl Towey - New Jersey Real Estate Agent",
	description:
		"Sell your home with Cheryl Towey at Weichert Realtors. Expert marketing, staging, and negotiation to maximize your property's value in New Jersey."
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
