import React from "react";
import Hero from "@/components/listings/ActiveHero";
import FeaturedListings from "@/components/listings/FeaturedListings";
import { ContactNew } from "@/components/home/ContactNew";
import { FooterNew } from "@/components/home/FooterNew";
import { ContactFaqs } from "@/components/contact/ContactFaqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Active Listings | Legendary Real Estate | Lake Geneva, WI",
	description:
		"Browse our exclusive active real estate listings in Lake Geneva, WI. Find your dream property in the beautiful Lake Geneva area."
};

export default function ActiveListingsPage() {
	return (
		<>
			<Hero />
			<FeaturedListings showAll={true} />
			<ContactNew />
			<ContactFaqs />
			<FooterNew />
		</>
	);
}
