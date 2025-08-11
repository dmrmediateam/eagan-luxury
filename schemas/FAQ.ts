import { defineField, defineType } from "sanity";

export default defineType({
	name: "faq",
	title: "FAQ",
	type: "document",
	groups: [
		{ name: "content", title: "Content" },
		{ name: "settings", title: "Settings" }
	],
	fields: [
		defineField({
			name: "question",
			title: "Question",
			type: "string",
			description: "The frequently asked question",
			validation: (rule) => rule.required().min(5).max(200),
			group: "content"
		}),
		defineField({
			name: "answer",
			title: "Answer",
			type: "text",
			description: "The answer to the question",
			rows: 5,
			validation: (rule) => rule.required().min(10),
			group: "content"
		}),
		defineField({
			name: "category",
			title: "Category",
			type: "string",
			description: "Category to group this FAQ under",
			options: {
				list: [
					{ title: "General", value: "general" },
					{ title: "Buying", value: "buying" },
					{ title: "Selling", value: "selling" },
					{ title: "Vineyard Properties", value: "vineyard" },
					{ title: "Luxury Properties", value: "luxury" },
					{ title: "Relocation", value: "relocation" },
					{ title: "Lake Geneva area", value: "wine-country" },
					{ title: "Services", value: "services" }
				]
			},
			validation: (rule) => rule.required(),
			group: "settings"
		}),
		defineField({
			name: "order",
			title: "Display Order",
			type: "number",
			description:
				"Order in which this FAQ should appear (lower numbers appear first)",
			initialValue: 100,
			validation: (rule) => rule.required().integer().positive(),
			group: "settings"
		}),
		defineField({
			name: "isActive",
			title: "Active",
			type: "boolean",
			description: "Whether this FAQ should be displayed on the website",
			initialValue: true,
			group: "settings"
		})
	],
	preview: {
		select: {
			title: "question",
			category: "category",
			isActive: "isActive"
		},
		prepare({ title, category, isActive }) {
			const categoryLabel = category
				? category.charAt(0).toUpperCase() + category.slice(1)
				: "Uncategorized";
			const statusLabel = isActive === false ? "Inactive" : "Active";

			return {
				title: title || "Untitled Question",
				subtitle: `${categoryLabel} | ${statusLabel}`
			};
		}
	},
	orderings: [
		{
			title: "Display Order",
			name: "displayOrder",
			by: [{ field: "order", direction: "asc" }]
		},
		{
			title: "Category",
			name: "categoryAsc",
			by: [
				{ field: "category", direction: "asc" },
				{ field: "order", direction: "asc" }
			]
		},
		{
			title: "Active Status",
			name: "activeStatus",
			by: [
				{ field: "isActive", direction: "desc" },
				{ field: "order", direction: "asc" }
			]
		}
	]
});
