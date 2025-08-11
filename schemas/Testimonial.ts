import { defineField, defineType } from "sanity";

const Testimonial = defineType({
	name: "testimonial",
	title: "Testimonial",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Client Name",
			type: "string",
			description: "Name of the client giving the testimonial",
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: "propertyName",
			title: "Property Name",
			type: "string",
			description: "Name or address of the property (optional)"
		}),
		defineField({
			name: "testimonialText",
			title: "Testimonial",
			type: "text",
			description: "The client's testimonial text",
			rows: 4,
			validation: (Rule) => Rule.required().min(10)
		}),
		defineField({
			name: "image",
			title: "Client Image",
			type: "image",
			description: "Photo of the client (optional)",
			options: {
				hotspot: true
			},
			fields: [
				{
					name: "alt",
					title: "Alt Text",
					type: "string",
					description:
						"Brief description of the image for accessibility"
				}
			]
		}),
		defineField({
			name: "clientType",
			title: "Client Type",
			type: "string",
			description: "Was this a buyer or seller client?",
			options: {
				list: [
					{ title: "Buyer", value: "buyer" },
					{ title: "Seller", value: "seller" },
					{ title: "Both", value: "both" }
				],
				layout: "radio"
			},
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: "featured",
			title: "Featured Testimonial",
			type: "boolean",
			description: "Show this testimonial in featured sections",
			initialValue: false
		}),
		defineField({
			name: "location",
			title: "Location",
			type: "string",
			description: "City, State or area of the client (e.g., 'Napa, CA')"
		})
	],
	preview: {
		select: {
			title: "name",
			subtitle: "clientType",
			media: "image"
		},
		prepare({ title, subtitle, media }) {
			const clientTypeMap: Record<string, string> = {
				buyer: "Buyer",
				seller: "Seller",
				both: "Buyer & Seller"
			};

			return {
				title: title || "Unnamed Client",
				subtitle: subtitle ? clientTypeMap[subtitle] : "",
				media: media
			};
		}
	},
	orderings: [
		{
			title: "Client Name (A-Z)",
			name: "nameAsc",
			by: [{ field: "name", direction: "asc" }]
		},
		{
			title: "Client Type",
			name: "clientType",
			by: [{ field: "clientType", direction: "asc" }]
		}
	]
});

export default Testimonial;
export { Testimonial };
