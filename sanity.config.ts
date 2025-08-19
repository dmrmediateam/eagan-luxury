// sanity.config.ts
import { defineConfig, SchemaTypeDefinition } from "sanity";
import { structureTool, StructureBuilder } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { media } from "sanity-plugin-media";
import {
	Listing,
	ContentPost,
	Community,
	FAQ,
	Agent,
	NearbyArea,
	Results,
	Testimonial,
	marketStatsSchemas,
	Resource
} from "./schemas";

// Define a helper type for schema objects we iterate over in the structure builder
interface BasicSchemaDefinition {
	name: string;
	title?: string;
}

const buildStructure = (S: StructureBuilder) =>
	S.list()
		.title("Content")
		.items([
			// Create a main Listings menu item
			S.documentTypeListItem("listing")
				.title("Listings")
				.child(
					// List with sub-sections by status
					S.list()
						.title("Listings by Status")
						.items([
							// Active listings first
							S.listItem()
								.title("Active Listings")
								.child(
									S.documentList()
										.title("Active Listings")
										.schemaType("listing")
										.filter(
											'_type == "listing" && status == "active"'
										)
										.defaultOrdering([
											{
												field: "_createdAt",
												direction: "desc"
											}
										])
										.child((documentId) =>
											S.document()
												.documentId(documentId)
												.schemaType("listing")
										)
								),
							// Coming Soon listings second
							S.listItem()
								.title("Coming Soon Listings")
								.child(
									S.documentList()
										.title("Coming Soon Listings")
										.schemaType("listing")
										.filter(
											'_type == "listing" && status == "coming-soon"'
										)
										.defaultOrdering([
											{
												field: "_createdAt",
												direction: "desc"
											}
										])
										.child((documentId) =>
											S.document()
												.documentId(documentId)
												.schemaType("listing")
										)
								),
							// Sold listings last
							S.listItem()
								.title("Sold Listings")
								.child(
									S.documentList()
										.title("Sold Listings")
										.schemaType("listing")
										.filter(
											'_type == "listing" && status == "sold"'
										)
										.defaultOrdering([
											{
												field: "_createdAt",
												direction: "desc"
											}
										])
										.child((documentId) =>
											S.document()
												.documentId(documentId)
												.schemaType("listing")
										)
								),
							// All listings (but still keep the original document list too)
							S.documentTypeListItem("listing")
								.title("All Listings")
								.child(
									S.documentList()
										.title("All Listings")
										.schemaType("listing")
										.filter('_type == "listing"')
										.defaultOrdering([
											{
												field: "_createdAt",
												direction: "desc"
											}
										])
										.child((documentId) =>
											S.document()
												.documentId(documentId)
												.schemaType("listing")
										)
								)
						])
				),
			S.listItem()
				.title("Content Posts")
				.schemaType("contentPost")
				.child(
					// List with sub-sections by contentType
					S.list()
						.title("Content Posts")
						.items([
							// Blog posts first
							S.listItem()
								.title("Blog Posts")
								.child(
									S.documentList()
										.title("Blog Posts")
										.filter(
											'_type == "contentPost" && contentType == "blog"'
										)
										.defaultOrdering([
											{
												field: "publishedAt",
												direction: "desc"
											}
										])
								),
							// Press releases second
							S.listItem()
								.title("Press Releases")
								.child(
									S.documentList()
										.title("Press Releases")
										.filter(
											'_type == "contentPost" && contentType == "press"'
										)
										.defaultOrdering([
											{
												field: "publishedAt",
												direction: "desc"
											}
										])
								),
							// All content posts
							S.listItem()
								.title("All Content Posts")
								.child(
									S.documentList()
										.title("All Content Posts")
										.filter('_type == "contentPost"')
										.defaultOrdering([
											{
												field: "publishedAt",
												direction: "desc"
											}
										])
								)
						])
				),
			S.listItem()
				.title("Communities")
				.schemaType(Community.name)
				.child(
					S.documentList()
						.title("Communities")
						.filter('_type == "community"')
						.defaultOrdering([
							{ field: "_createdAt", direction: "desc" }
						])
				),
			S.listItem()
				.title("FAQs")
				.schemaType(FAQ.name)
				.child(
					S.documentList()
						.title("Frequently Asked Questions")
						.filter('_type == "faq"')
						.defaultOrdering([{ field: "order", direction: "asc" }])
				),
			S.listItem()
				.title(Agent.title || "Agents")
				.schemaType(Agent.name)
				.child(
					S.documentList()
						.title(Agent.title || "Agents")
						.filter(`_type == "${Agent.name}"`)
						.defaultOrdering([
							{ field: "_createdAt", direction: "desc" }
						])
				),
			S.listItem()
				.title(NearbyArea.title || "Nearby Areas")
				.schemaType(NearbyArea.name)
				.child(
					S.documentList()
						.title(NearbyArea.title || "Nearby Areas")
						.filter(`_type == "${NearbyArea.name}"`)
						.defaultOrdering([
							{ field: "_createdAt", direction: "desc" }
						])
				),
			S.listItem()
				.title(Results.title || "Results")
				.schemaType(Results.name)
				.child(
					S.documentList()
						.title(Results.title || "Results")
						.filter(`_type == "${Results.name}"`)
						.defaultOrdering([
							{ field: "_createdAt", direction: "desc" }
						])
				),
			S.listItem()
				.title(Testimonial.title || "Testimonials")
				.schemaType(Testimonial.name)
				.child(
					S.documentList()
						.title(Testimonial.title || "Testimonials")
						.filter(`_type == "${Testimonial.name}"`)
						.defaultOrdering([
							{ field: "_createdAt", direction: "desc" }
						])
				),
			S.listItem()
				.title(Resource.title || "Resources")
				.schemaType(Resource.name)
				.child(
					S.documentList()
						.title(Resource.title || "Resources")
						.filter(`_type == "${Resource.name}"`)
						.defaultOrdering([
							{ field: "_createdAt", direction: "desc" }
						])
				),
			...(
				(Array.isArray(marketStatsSchemas)
					? marketStatsSchemas
					: [marketStatsSchemas]) as BasicSchemaDefinition[]
			).map((schema) =>
				S.listItem()
					.title(schema.title || schema.name)
					.schemaType(schema.name)
					.child(
						S.documentList()
							.title(schema.title || schema.name)
							.filter(`_type == "${schema.name}"`)
							.defaultOrdering([
								{ field: "_createdAt", direction: "desc" }
							])
					)
			)
		]);

export default defineConfig({
	name: "michaud-rauers",
	title: "Cheryl Towey",
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
	basePath: "/studio",
	plugins: [
		structureTool({
			structure: buildStructure
		}),
		media(),
		...(process.env.NODE_ENV === "development" ? [visionTool()] : [])
	],
	schema: {
		types: [
			Listing,
			ContentPost,
			Community,
			FAQ,
			Agent,
			NearbyArea,
			Results,
			Testimonial,
			Resource,
			...((Array.isArray(marketStatsSchemas)
				? marketStatsSchemas
				: [marketStatsSchemas]) as SchemaTypeDefinition[])
		]
	},
	form: {
		components: {},
		inputs: {
			debounce: 500
		}
	},
	api: {
		cdn: true,
		version: "v2023-01-01"
	}
});
