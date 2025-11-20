import { defineField, defineType } from "sanity";

const Business = defineType({
	name: "business",
	title: "Business",
	type: "document",
	groups: [
		{ name: "content", title: "Content" },
		{ name: "location", title: "Location" },
		{ name: "media", title: "Media" }
	],
	fields: [
		defineField({
			name: "name",
			title: "Business Name",
			type: "string",
			description: "Name of the business",
			validation: (rule) => rule.required().min(2).max(100),
			group: "content"
		}),
		defineField({
			name: "slug",
			title: "URL Slug",
			type: "slug",
			description: "Unique URL identifier for this business",
			options: {
				source: "name",
				maxLength: 96,
				slugify: (input) =>
					input
						.toLowerCase()
						.replace(/\s+/g, "-")
						.replace(/[^\w-]+/g, "")
						.slice(0, 96)
			},
			validation: (rule) => rule.required(),
			group: "content"
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
			description: "Description of the business",
			rows: 4,
			validation: (rule) => rule.required().min(50).max(500),
			group: "content"
		}),
		defineField({
			name: "businessType",
			title: "Business Type",
			type: "string",
			description: "Select the type of business",
			options: {
				list: [
					{ title: "Restaurant", value: "restaurant" },
					{ title: "Cafe", value: "cafe" },
					{ title: "Bar", value: "bar" },
					{ title: "Retail", value: "retail" },
					{ title: "Service", value: "service" },
					{ title: "Professional", value: "professional" },
					{ title: "Entertainment", value: "entertainment" },
					{ title: "Fitness", value: "fitness" },
					{ title: "Spa & Wellness", value: "spa-wellness" },
					{ title: "Marina", value: "marina" },
					{ title: "Other", value: "other" }
				],
				layout: "dropdown"
			},
			validation: (rule) => rule.required(),
			group: "content"
		}),
		defineField({
			name: "tags",
			title: "Community Tags",
			type: "array",
			description: "Add community tags to associate this business with specific communities (e.g., Dolphin Cay, St. Petersburg)",
			of: [{ type: "string" }],
			options: {
				layout: "tags"
			},
			group: "content"
		}),
		defineField({
			name: "dateOpened",
			title: "Date Opened",
			type: "date",
			description: "Date when the business opened",
			group: "content"
		}),
		defineField({
			name: "image",
			title: "Business Image",
			type: "image",
			description: "Main image for the business",
			options: {
				hotspot: true
			},
			fields: [
				{
					name: "alt",
					title: "Alt Text",
					type: "string",
					description: "Alternative text for accessibility and SEO",
					validation: (rule) => rule.required()
				}
			],
			validation: (rule) => rule.required(),
			group: "media"
		}),
		defineField({
			name: "location",
			title: "Location",
			type: "object",
			description: "Business location information",
			fields: [
				{
					name: "address",
					title: "Street Address",
					type: "string",
					validation: (rule) => rule.required()
				},
				{
					name: "city",
					title: "City",
					type: "string",
					validation: (rule) => rule.required()
				},
				{
					name: "state",
					title: "State",
					type: "string",
					initialValue: "FL",
					validation: (rule) => rule.required()
				},
				{
					name: "zipCode",
					title: "ZIP Code",
					type: "string"
				},
				{
					name: "phone",
					title: "Phone Number",
					type: "string"
				},
				{
					name: "website",
					title: "Website",
					type: "url"
				},
				{
					name: "coordinates",
					title: "Coordinates",
					type: "geopoint",
					description: "Geographic coordinates for mapping"
				}
			],
			validation: (rule) => rule.required(),
			group: "location"
		}),
		defineField({
			name: "hours",
			title: "Business Hours",
			type: "object",
			description: "Operating hours",
			fields: [
				{
					name: "monday",
					title: "Monday",
					type: "string"
				},
				{
					name: "tuesday",
					title: "Tuesday",
					type: "string"
				},
				{
					name: "wednesday",
					title: "Wednesday",
					type: "string"
				},
				{
					name: "thursday",
					title: "Thursday",
					type: "string"
				},
				{
					name: "friday",
					title: "Friday",
					type: "string"
				},
				{
					name: "saturday",
					title: "Saturday",
					type: "string"
				},
				{
					name: "sunday",
					title: "Sunday",
					type: "string"
				}
			],
			group: "content"
		})
	],
	preview: {
		select: {
			title: "name",
			type: "businessType",
			media: "image"
		},
		prepare({ title, type, media }) {
			return {
				title: title || "Untitled",
				subtitle: type ? type.charAt(0).toUpperCase() + type.slice(1) : "Business",
				media: media
			};
		}
	},
	orderings: [
		{
			title: "Name, A-Z",
			name: "nameAsc",
			by: [{ field: "name", direction: "asc" }]
		},
		{
			title: "Date Opened, New",
			name: "dateOpenedDesc",
			by: [{ field: "dateOpened", direction: "desc" }]
		},
		{
			title: "Business Type",
			name: "businessType",
			by: [{ field: "businessType", direction: "asc" }]
		}
	]
});

export default Business;
export { Business };
