import { defineField, defineType } from "sanity";

const Resource = defineType({
	name: "resource",
	title: "Resource",
	type: "document",
	groups: [
		{ name: "content", title: "Content" },
		{ name: "settings", title: "Settings" }
	],
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
			description: "The name of the resource provider or company",
			validation: (rule) => rule.required(),
			group: "content"
		}),
		defineField({
			name: "email",
			title: "Email",
			type: "string",
			description: "Contact email address",
			group: "content"
		}),
		defineField({
			name: "phone",
			title: "Phone Number",
			type: "string",
			description: "Contact phone number",
			group: "content"
		}),
		defineField({
			name: "website",
			title: "Website",
			type: "url",
			description: "Resource website URL",
			group: "content"
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
			description: "Optional additional details about the resource",
			rows: 3,
			group: "content"
		}),
		defineField({
			name: "location",
			title: "Location",
			type: "string",
			description: "City or area where the resource is located",
			group: "content"
		}),
		defineField({
			name: "category",
			title: "Category",
			type: "string",
			description: "Type of resource",
			options: {
				list: [
					{ title: "Architects", value: "architects" },
					{ title: "Designers", value: "designers" },
					{ title: "Custom Home Builders", value: "builders" },
					{ title: "Planning & Building Permits", value: "permits" },
					{ title: "Securing Insurance", value: "insurance" }
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
				"Order in which this resource should appear within its category (lower numbers appear first)",
			initialValue: 100,
			validation: (rule) => rule.required().integer().positive(),
			group: "settings"
		}),
		defineField({
			name: "isActive",
			title: "Active",
			type: "boolean",
			description:
				"Whether this resource should be displayed on the website",
			initialValue: true,
			group: "settings"
		})
	],
	preview: {
		select: {
			title: "name",
			category: "category",
			location: "location",
			isActive: "isActive"
		},
		prepare({ title, category, location, isActive }) {
			const categoryMap: Record<string, string> = {
				architects: "Architects",
				designers: "Designers",
				builders: "Custom Home Builders",
				permits: "Planning & Building Permits",
				insurance: "Securing Insurance"
			};

			const categoryLabel = category
				? categoryMap[category] || "Uncategorized"
				: "Uncategorized";
			const statusLabel = isActive === false ? "Inactive" : "Active";
			const locationText = location ? `${location} | ` : "";

			return {
				title: title || "Untitled Resource",
				subtitle: `${categoryLabel} | ${locationText}${statusLabel}`
			};
		}
	},
	orderings: [
		{
			title: "Category",
			name: "categoryOrder",
			by: [
				{ field: "category", direction: "asc" },
				{ field: "order", direction: "asc" },
				{ field: "name", direction: "asc" }
			]
		},
		{
			title: "Name",
			name: "nameAsc",
			by: [{ field: "name", direction: "asc" }]
		},
		{
			title: "Display Order",
			name: "displayOrder",
			by: [{ field: "order", direction: "asc" }]
		},
		{
			title: "Active Status",
			name: "activeStatus",
			by: [
				{ field: "isActive", direction: "desc" },
				{ field: "category", direction: "asc" },
				{ field: "order", direction: "asc" }
			]
		}
	]
});

export default Resource;
export { Resource };
