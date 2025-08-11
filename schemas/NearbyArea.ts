import { defineField, defineType } from "sanity";

const NearbyArea = defineType({
	name: "nearbyArea",
	title: "Nearby Area",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text"
		}),
		defineField({
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true // Enables hotspot cropping
			}
		}),
		defineField({
			name: "latitude",
			title: "Latitude",
			type: "number",
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: "longitude",
			title: "Longitude",
			type: "number",
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: "category",
			title: "Category",
			type: "string",
			options: {
				list: [
					{ title: "Sites", value: "sites" },
					{ title: "Vineyards", value: "vineyards" },
					{ title: "Food & Drink", value: "food-drink" },
					{ title: "General", value: "general" },
					{ title: "Travel", value: "travel" }
				]
			},
			validation: (Rule) => Rule.required()
		})
	],
	preview: {
		select: {
			title: "title",
			media: "image"
		}
	}
});

export default NearbyArea;
export { NearbyArea };
