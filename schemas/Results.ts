// schemas/results.ts
import { defineField, defineType } from "sanity";
import { PortableTextBlock } from "@portabletext/types";

const Results = defineType({
	name: "results",
	title: "Results Page",
	type: "document",
	// This is a singleton - only one document instance should exist
	description:
		"This content controls the Results page. Only one instance of this document is needed.",
	// Removed deprecated __experimental_actions
	fields: [
		defineField({
			name: "hero",
			title: "Hero Section",
			type: "object",
			fields: [
				defineField({
					name: "title",
					title: "Title",
					type: "string",
					validation: (Rule) => Rule.required()
				}),
				defineField({
					name: "subtitle",
					title: "Subtitle",
					type: "string",
					validation: (Rule) => Rule.required()
				})
			]
		}),
		defineField({
			name: "overview",
			title: "Overview Section",
			type: "object",
			fields: [
				defineField({
					name: "heading",
					title: "Heading",
					type: "string",
					validation: (Rule) => Rule.required()
				}),
				defineField({
					name: "paragraphs",
					title: "Paragraphs",
					type: "array",
					of: [{ type: "block" }], // Use portable text for richer content
					validation: (Rule) => Rule.required()
				})
			]
		}),
		defineField({
			name: "stats",
			title: "Stats Section",
			type: "object",
			fields: [
				defineField({
					name: "heading",
					title: "Heading",
					type: "string",
					validation: (Rule) => Rule.required()
				}),
				defineField({
					name: "items",
					title: "Stat Items",
					type: "array",
					of: [
						{
							type: "object", // Define object type directly
							name: "statItem",
							title: "Stat Item",
							fields: [
								defineField({
									name: "label",
									title: "Label",
									type: "string",
									validation: (Rule) => Rule.required()
								}),
								defineField({
									name: "value",
									title: "Value",
									type: "string",
									description:
										'The value or statistic (e.g., "$500M+", "98%").',
									validation: (Rule) => Rule.required()
								})
							],
							preview: {
								select: {
									title: "label",
									subtitle: "value"
								}
							}
						}
					],
					validation: (Rule) => Rule.min(1)
				})
			]
		})
	],
	preview: {
		prepare() {
			return {
				title: "Results Page Content"
			};
		}
	}
});

export default Results;
export { Results };

export interface StatItem {
	label: string;
	value: string;
}

export interface ResultsData {
	hero: {
		title: string;
		subtitle: string;
	};
	overview: {
		heading: string;
		paragraphs: string[] | PortableTextBlock[];
	};
	stats: {
		heading: string;
		items: StatItem[];
	};
	testimonials: {
		heading: string;
		items: TestimonialItem[];
	};
}

export interface TestimonialItem {
	name: string;
	quote: string;
	location?: string;
}
