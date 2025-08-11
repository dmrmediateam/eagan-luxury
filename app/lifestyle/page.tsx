import Hero from "@/components/lifestyle/Hero";
import { WineTasting } from "@/components/lifestyle/WineTasting";
import { Outdoors } from "@/components/lifestyle/Outdoors";
import { Dining } from "@/components/lifestyle/Dining";
import { SeenOnNew } from "@/components/home/SeenOnNew";
import { ContactNew } from "@/components/home/ContactNew";
import { FooterNew } from "@/components/home/FooterNew";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Lake Geneva area Lifestyle | Legendary Real Estate | Lake Geneva, WI",
	description:
		"Discover the exceptional lifestyle that Lake Geneva area offer with insights from Legendary Real Estate on wine tasting, outdoor recreation, and fine dining."
};

export default function Lifestyle() {
	return (
		<>
			<Hero />
			<WineTasting />
			<Outdoors />
			<Dining />
			<SeenOnNew />
			<ContactNew />
			<FooterNew />
		</>
	);
}
