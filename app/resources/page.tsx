import Hero from "@/components/resources/Hero";
import { ResourceList } from "@/components/resources/ResourceList";
import { LocalPartners } from "@/components/resources/LocalPartners";
import { FAQ } from "@/components/resources/FAQ";
import { ContactNew } from "@/components/home/ContactNew";
import { FooterNew } from "@/components/home/FooterNew";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Resources | Legendary Real Estate | Lake Geneva, WI",
	description:
		"Access helpful resources, local partners, and FAQs from Legendary Real Estate to guide you through real estate in Lake Geneva area, CA."
};

export default function Resources() {
	return (
		<>
			<Hero />
			<ResourceList />
			<LocalPartners />
			<FAQ />
			<ContactNew />
			<FooterNew />
		</>
	);
}
