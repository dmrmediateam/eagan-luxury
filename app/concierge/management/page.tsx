import PropertyManagementHero from "@/components/property-management/Hero";
import { PropertyManagementServices } from "@/components/property-management/Services";
import { PropertyManagementProcess } from "@/components/property-management/Process";
import { PropertyManagementTestimonials } from "@/components/property-management/Testimonials";
import { ContactNew } from "@/components/home/ContactNew";
import { FooterNew } from "@/components/home/FooterNew";
import type { Metadata } from "next";
import { ContactFaqs } from "@/components/contact/ContactFaqs";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = {
	title: "Property Management | Legendary Real Estate | Lake Geneva, WI",
	description:
		"Professional property management services in Lake Geneva, WI. We handle everything from tenant screening to maintenance, allowing you to enjoy the benefits of property ownership without the hassle."
};

export default function PropertyManagement() {
	return (
		<>
			<PropertyManagementHero />
			<PropertyManagementServices />
			<PropertyManagementProcess />
			<PropertyManagementTestimonials />
			<AboutCTA
				backgroundImage="/images/highlands-estate.jpg"
				title="Maximize Your Property's Potential"
				subtitle="Let our expert team manage your property in the beautiful Lake Geneva area."
			/>
			<ContactNew />
			<ContactFaqs />
			<FooterNew />
		</>
	);
}
