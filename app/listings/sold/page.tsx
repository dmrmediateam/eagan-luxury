import React from "react";
import Hero from "@/components/listings/SoldHero";
import SoldListings from "@/components/listings/SoldListings";
import { ContactNew } from "@/components/home/ContactNew";
import { FooterNew } from "@/components/home/FooterNew";
import { ContactFaqs } from "@/components/contact/ContactFaqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sold Properties | Legendary Real Estate | Lake Geneva, WI",
	description:
		"View our recently sold real estate properties in Lake Geneva area, CA. Explore our track record of successful sales in wine country."
};

export default function SoldListingsPage() {
	return (
		<>
			<Hero />
			<SoldListings showAll={true} />
			<ContactNew />
			<ContactFaqs />
			<FooterNew />
		</>
	);
}
