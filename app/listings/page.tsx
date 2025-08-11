import React from "react";
import ActiveHero from "@/components/listings/ActiveHero";
import FeaturedListings from "@/components/listings/FeaturedListings";
import ComingSoonListings from "@/components/listings/ComingSoonListings";
import SoldListings from "@/components/listings/SoldListings";
import { ContactNew } from "@/components/home/ContactNew";
import { FooterNew } from "@/components/home/FooterNew";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Listings | Legendary Real Estate | Lake Geneva, WI",
	description:
		"Browse our exclusive real estate listings in Lake Geneva area, CA. Featured properties, coming soon listings, and past sales."
};

export default function ListingsPage() {
	return (
		<>
			<ActiveHero />
			<FeaturedListings showAll={false} />
			<ComingSoonListings showAll={false} />
			<SoldListings showAll={false} />
			<ContactNew />
			<FooterNew />
		</>
	);
}
