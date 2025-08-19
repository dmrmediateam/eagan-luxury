import { getClient } from "../client";

// Type definitions
export interface FAQ {
	_id: string;
	question: string;
	answer: string;
	category: string;
	order: number;
	isActive: boolean;
}

// Base query for FAQs
const faqsQuery = `*[_type == "faq" && isActive == true]`;

/**
 * Fetch all FAQs
 */
export async function getAllFAQs(): Promise<FAQ[]> {
	const client = getClient();
	return client.fetch(
		`${faqsQuery} | order(order asc) {
      _id,
      question,
      answer,
      category,
      order,
      isActive
    }`
	);
}

/**
 * Fetch FAQs by category
 */
export async function getFAQsByCategory(category: string): Promise<FAQ[]> {
	const client = getClient();
	return client.fetch(
		`${faqsQuery}[category == $category] | order(order asc) {
      _id,
      question,
      answer,
      category,
      order,
      isActive
    }`,
		{ category }
	);
}

/**
 * Fetch all FAQ categories with their FAQs
 */
export async function getFAQsGroupedByCategory(): Promise<{
	[key: string]: FAQ[];
}> {
	const faqs = await getAllFAQs();

	// Group FAQs by category
	return faqs.reduce(
		(acc, faq) => {
			const category = faq.category || "general";
			if (!acc[category]) {
				acc[category] = [];
			}
			acc[category].push(faq);
			return acc;
		},
		{} as { [key: string]: FAQ[] }
	);
}

/**
 * Get category display names
 */
export function getCategoryDisplayName(category: string): string {
	const displayNames: Record<string, string> = {
		general: "General Questions",
		buying: "Buying a Property",
		selling: "Selling Your Property",
		vineyard: "Vineyard Properties",
		luxury: "Luxury Real Estate",
		relocation: "Relocation Services",
		"wine-country": "New Jersey area Living",
		services: "Our Services"
	};

	return (
		displayNames[category] ||
		category.charAt(0).toUpperCase() + category.slice(1)
	);
}
