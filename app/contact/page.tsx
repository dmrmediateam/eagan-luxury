import ContactHero from "@/components/contact/ContactHero";
import { ContactNew } from "@/components/home/ContactNew";
import { OfficeMap } from "@/components/contact/OfficeMap";
import { ContactFaqs } from "@/components/contact/ContactFaqs";
import { FooterNew } from "@/components/home/FooterNew";
import type { Metadata } from "next";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = {
	title: "Contact Us | Legendary Real Estate | Lake Geneva, WI",
	description:
		"Get in touch with Legendary Real Estate for your luxury real estate needs in Lake Geneva, WI and surrounding areas. We're here to assist you with any questions or inquiries."
};

export default function Contact() {
	return (
		<>
			<ContactHero />
			<ContactNew />
			<OfficeMap />
			<AboutCTA
				title="Ready to Experience Lake Geneva Living?"
				subtitle="Let our expert team guide you through the finest properties in the Lake Geneva area."
			/>
			<ContactFaqs />
			<FooterNew />
		</>
	);
}
