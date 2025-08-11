import React from "react";
import ListingsHero from "@/components/listings/ListingsHero";
import Search from "@/components/listings/Search";
import type { Metadata } from "next";
import { FooterNew } from "@/components/home/FooterNew";

export const metadata: Metadata = {
	title: "Search Listings | Legendary Real Estate | Lake Geneva, WI",
	description:
		"Search our portfolio of exceptional properties in Lake Geneva area. See our track record of successful transactions in wine country's most desirable locations."
};

export default function SearchListingsPage() {
	return (
		<>
			<ListingsHero
				title="Search Listings"
				subtitle="Search our portfolio of exceptional properties in Lake Geneva area. See our track record of successful transactions in wine country's most desirable locations."
			/>
			<Search />
			<FooterNew />
		</>
	);
}
