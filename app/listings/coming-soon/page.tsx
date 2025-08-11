import React from "react";
import ComingSoonHero from "@/components/listings/ComingSoonHero";
import ComingSoonListings from "@/components/listings/ComingSoonListings";
import { ContactNew } from "@/components/home/ContactNew";
import { FooterNew } from "@/components/home/FooterNew";
import { ContactFaqs } from "@/components/contact/ContactFaqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Coming Soon Listings | Legendary Real Estate | Lake Geneva, WI",
	description:
		"Preview our upcoming real estate listings in Lake Geneva area, CA. Be the first to know about new properties coming to the market."
};

export default function ComingSoonListingsPage() {
	return (
		<>
			<ComingSoonHero />
			<ComingSoonListings showAll={true} />
			<ContactNew />
			<ContactFaqs />
			<FooterNew />
		</>
	);
}
