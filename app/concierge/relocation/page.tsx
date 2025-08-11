import RelocationHero from "@/components/relocation/RelocationHero";
import RelocationProcess from "@/components/relocation/RelocationProcess";
import { RelocationBenefits } from "@/components/relocation/RelocationBenefits";
import { RelocationFaqs } from "@/components/relocation/RelocationFaqs";
import { RelocationTestimonials } from "@/components/relocation/RelocationTestimonials";
import { ContactNew } from "@/components/home/ContactNew";
import { FooterNew } from "@/components/home/FooterNew";
import type { Metadata } from "next";
import { AboutCTA } from "@/components/about/AboutCTA";
export const metadata: Metadata = {
	title: "Relocation Services | Legendary Real Estate | Lake Geneva, WI",
	description:
		"Experience seamless relocation to Lake Geneva area with our personalized concierge services. From community introductions to local resources, we'll help you make a smooth transition to mountain living."
};

export default function Relocation() {
	return (
		<>
			<RelocationHero />
			<RelocationProcess />
			<RelocationBenefits />
			<AboutCTA
				backgroundImage="/images/highlands-mountains.jpg"
				title="Ready to Start Your Relocation Journey?"
				subtitle="Let our relocation specialists guide you through every step of the process to ensure a smooth transition to your new mountain lifestyle."
			/>
			<RelocationTestimonials />
			<RelocationFaqs />
			<ContactNew />
			<FooterNew />
		</>
	);
}
