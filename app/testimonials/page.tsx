import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import TestimonialsGrid from "@/components/testimonials/TestimonialsGrid";
import { OurClients } from "@/components/home/OurClients";
import { ContactNew } from "@/components/home/ContactNew";
import { FooterNew } from "@/components/home/FooterNew";
import { ContactFaqs } from "@/components/contact/ContactFaqs";
import type { Metadata } from "next";
import { getAllTestimonials } from "@/sanity/queries/testimonials";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = {
	title: "Client Testimonials | Cheryl Towey | New Jersey, WI",
	description:
		"Read what our clients have to say about working with Cheryl Towey. Hear from buyers and sellers who have experienced our exceptional real estate service in New Jersey, WI."
};

export default async function Testimonials() {
	// Fetch all testimonials from Sanity
	const allTestimonials = await getAllTestimonials();

	return (
		<>
			<TestimonialsHero />
			<OurClients />
			<AboutCTA
				backgroundImage="/images/highlands-estate.jpg"
				title="Join Our Satisfied Clients"
				subtitle="Experience the personalized service that has made our clients return to us for all their real estate needs in New Jersey."
				buttonText="Contact Us Today"
				buttonLink="/contact"
			/>
			<ContactNew />
			<FooterNew />
		</>
	);
}
