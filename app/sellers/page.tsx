import SellersHero from "@/components/sellers/SellersHero";
import SellerProcess from "@/components/sellers/SellerProcess";
import HomeValuation from "@/components/sellers/HomeValuation";
import { ContactNew } from "@/components/home/ContactNew";
import { LuxuryLocations } from "@/components/home/NapaMap";
import { OurClients } from "@/components/home/OurClients";
import { Socials } from "@/components/home/Socials";
import { SeenOnNew } from "@/components/home/SeenOnNew";
import { FooterNew } from "@/components/home/FooterNew";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Seller Services | Legendary Real Estate | Lake Geneva, WI",
	description:
		"Sell your home with Legendary Real Estate. Expert marketing, staging, and negotiation to maximize your property's value in Lake Geneva, WI."
};

export default function SellersPage() {
	return (
		<>
			<SellersHero />
			<SellerProcess />
			<HomeValuation />
			<LuxuryLocations />
			<OurClients />
			<ContactNew />
			<Socials />
			<SeenOnNew />
			<FooterNew />
		</>
	);
}
