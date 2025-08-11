import { defineField, defineType } from "sanity";

const Community = defineType({
	name: "community",
	title: "Community",
	type: "document",
	groups: [
		{ name: "overview", title: "Overview" },
		{ name: "media", title: "Photos" },
		{ name: "areas", title: "Points of Interest" }
	],
	fields: [
		// Overview Group - Core identifying info
		defineField({
			name: "title",
			title: "Name",
			type: "string",
			description: "Enter the community or neighborhood name",
			validation: (rule) => rule.required(),
			group: "overview"
		}),
		defineField({
			name: "slug",
			title: "URL Slug",
			type: "slug",
			description:
				"Unique URL-friendly identifier (auto-generated from Name)",
			options: {
				source: "title",
				maxLength: 96,
				slugify: (input) =>
					input
						.toLowerCase()
						.replace(/\s+/g, "-")
						.replace(/[^\w-]+/g, "")
						.slice(0, 96)
			},
			validation: (rule) => rule.required(),
			group: "overview"
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
			description: "Write a detailed overview of the community",
			rows: 5,
			validation: (rule) => rule.required().min(50),
			group: "overview"
		}),
		defineField({
			name: "detailsCards",
			title: "Additional Detail Cards",
			type: "array",
			description:
				"Add cards with additional information about the community",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "title",
							title: "Card Title",
							type: "string",
							description: "Title for this information card",
							validation: (rule) => rule.required()
						},
						{
							name: "description",
							title: "Card Description",
							type: "text",
							description: "Content for this information card",
							rows: 4,
							validation: (rule) => rule.required()
						}
					],
					preview: {
						select: {
							title: "title",
							subtitle: "description"
						},
						prepare({ title, subtitle }) {
							return {
								title: title || "Untitled Card",
								subtitle: subtitle
									? subtitle.length > 50
										? subtitle.substring(0, 50) + "..."
										: subtitle
									: ""
							};
						}
					}
				}
			],
			group: "overview"
		}),
		defineField({
			name: "communityLocation",
			title: "Map Center",
			type: "geopoint",
			description: "Pin the approximate center of the community for maps",
			group: "overview"
		}),
		defineField({
			name: "mapRadius",
			title: "Map Radius (Miles)",
			type: "number",
			description: "Set the map display radius in miles (0.1 to 50)",
			validation: (rule) => rule.min(0.1).max(50),
			group: "overview"
		}),
		defineField({
			name: "amenities",
			title: "Amenities",
			type: "array",
			description: "List key community features (e.g., 'Pool', 'Parks')",
			of: [{ type: "string" }],
			options: { layout: "tags" },
			group: "overview"
		}),
		defineField({
			name: "relatedListings",
			title: "Related Properties",
			type: "array",
			description: "Link to property listings within this community",
			of: [{ type: "reference", to: [{ type: "listing" }] }],
			group: "overview"
		}),

		// Media Group - Visual assets
		defineField({
			name: "mainImage",
			title: "Featured Photo",
			type: "image",
			description: "Upload the primary image for this community",
			options: { hotspot: true },
			fields: [
				{
					name: "alt",
					title: "Alt Text",
					type: "string",
					description: "Describe the image for accessibility and SEO",
					validation: (rule) => rule.required()
				}
			],
			validation: (rule) => rule.required(),
			group: "media"
		}),
		defineField({
			name: "gallery",
			title: "Photo Gallery",
			type: "array",
			description: "Add more photos of the community (drag to reorder)",
			of: [
				{
					type: "image",
					options: { hotspot: true },
					fields: [
						{
							name: "alt",
							type: "string",
							title: "Alt Text",
							description:
								"Describe the image for accessibility and SEO",
							validation: (rule) => rule.required()
						},
						{
							name: "caption",
							type: "string",
							title: "Caption",
							description:
								"Add a short description for this photo"
						}
					]
				}
			],
			group: "media"
		}),

		// Areas Group - Points of interest
		defineField({
			name: "areasOfInterest",
			title: "Points of Interest",
			type: "array",
			description: "Add notable locations within or near the community",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "name",
							title: "Name",
							type: "string",
							description: "Name of this point of interest",
							validation: (rule) => rule.required()
						},
						{
							name: "category",
							title: "Category",
							type: "string",
							description: "Select the type of location",
							options: {
								list: [
									{ title: "Park", value: "park" },
									{ title: "School", value: "school" },
									{ title: "Shopping", value: "shopping" },
									{
										title: "Restaurant",
										value: "restaurant"
									},
									{
										title: "Recreation",
										value: "recreation"
									},
									{
										title: "Healthcare",
										value: "healthcare"
									},
									{ title: "Landmark", value: "landmark" },
									{
										title: "Transportation",
										value: "transportation"
									},
									{ title: "Other", value: "other" }
								]
							},
							validation: (rule) => rule.required()
						},
						{
							name: "description",
							title: "Description",
							type: "text",
							description:
								"Briefly describe this point of interest",
							rows: 3
						},
						{
							name: "location",
							title: "Map Coordinates",
							type: "geopoint",
							description: "Pin the exact location on the map",
							validation: (rule) => rule.required()
						},
						{
							name: "image",
							title: "Photo",
							type: "image",
							description:
								"Upload an image of this point of interest",
							options: { hotspot: true },
							fields: [
								{
									name: "alt",
									title: "Alt Text",
									type: "string",
									description:
										"Describe the image for accessibility and SEO",
									validation: (rule) => rule.required()
								}
							]
						}
					],
					preview: {
						select: {
							title: "name",
							subtitle: "category",
							media: "image"
						},
						prepare({ title, subtitle, media }) {
							const categoryDisplay = subtitle
								? subtitle.charAt(0).toUpperCase() +
									subtitle.slice(1)
								: "";
							return {
								title: title || "Unnamed Area",
								subtitle: categoryDisplay,
								media: media
							};
						}
					}
				}
			],
			group: "areas"
		})
	],
	preview: {
		select: {
			title: "title",
			county: "county",
			media: "mainImage"
		},
		prepare({ title, county, media }) {
			return {
				title: title || "Unnamed Community",
				subtitle: county ? `${county} County` : "",
				media: media
			};
		}
	},
	orderings: [
		{
			title: "Name (A-Z)",
			name: "titleAsc",
			by: [{ field: "title", direction: "asc" }]
		},
		{
			title: "County (A-Z)",
			name: "countyAsc",
			by: [{ field: "county", direction: "asc" }]
		}
	]
});

export default Community;
export { Community };
