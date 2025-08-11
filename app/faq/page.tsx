import { Metadata } from "next";
import { FAQ } from "@/components/faq/FAQ";
import { ContactNew } from "@/components/home/ContactNew";
import { FooterNew } from "@/components/home/FooterNew";
import Hero from "@/components/faq/Hero";
import { getAllFAQs } from "@/lib/data/faqs";

export const metadata: Metadata = {
	title: "Frequently Asked Questions | Legendary Real Estate",
	description:
		"Find answers to common questions about real estate in Lake Geneva area, and the services offered by Legendary Real Estate."
};

export const revalidate = 3600; // Revalidate every hour

export default async function FAQPage({
	searchParams
}: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
	// Await the searchParams Promise
	const params = await searchParams;

	// Extract the category from search parameters (if any)
	const category =
		typeof params.category === "string" ? params.category : "all";

	// Fetch FAQs from Sanity
	const faqs = await getAllFAQs();

	return (
		<>
			<Hero />
			<main className="min-h-screen bg-white">
				<FAQ faqs={faqs} initialCategory={category} />
				<ContactNew />
			</main>
			<FooterNew />
		</>
	);
}
