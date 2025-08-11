import { defineField, defineType } from "sanity";

const ContentPost = defineType({
	name: "contentPost",
	title: "Content Post",
	type: "document",
	groups: [
		{ name: "content", title: "Content" },
		{ name: "seo", title: "SEO & Metadata" },
		{ name: "media", title: "Media" }
	],
	fields: [
		defineField({
			name: "contentType",
			title: "Content Type",
			type: "string",
			description: "Select whether this is a blog post or press release",
			options: {
				list: [
					{ title: "Blog Post", value: "blog" },
					{ title: "Press Release", value: "press" }
				],
				layout: "radio"
			},
			validation: (rule) => rule.required(),
			group: "content"
		}),
		defineField({
			name: "title",
			title: "Post Title",
			type: "string",
			description:
				"Title of the content (50-60 characters ideal for SEO)",
			validation: (rule) => rule.required().min(10).max(100),
			group: "content"
		}),
		defineField({
			name: "slug",
			title: "URL Slug",
			type: "slug",
			description: "Unique URL identifier for this content",
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
			group: "content"
		}),
		defineField({
			name: "publishedAt",
			title: "Published Date",
			type: "datetime",
			description: "Date and time when this content was published",
			initialValue: () => new Date().toISOString(),
			validation: (rule) => rule.required(),
			group: "content"
		}),
		defineField({
			name: "mainImage",
			title: "Main Image",
			type: "image",
			description:
				"Featured image for the content (1200x630px recommended for social sharing)",
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
			name: "excerpt",
			title: "Excerpt / Meta Description",
			type: "text",
			description:
				"Brief summary for display and meta description (150-160 characters ideal for SEO)",
			rows: 3,
			validation: (rule) => rule.required().min(50).max(200),
			group: "seo"
		}),
		defineField({
			name: "source",
			title: "Source/Publication",
			type: "string",
			description:
				"For press releases: name of the original publication or source",
			hidden: ({ document }) => document?.contentType !== "press",
			group: "content"
		}),
		defineField({
			name: "sourceUrl",
			title: "Source URL",
			type: "url",
			description: "For press releases: link to the original publication",
			hidden: ({ document }) => document?.contentType !== "press",
			group: "content"
		}),
		defineField({
			name: "category",
			title: "Category",
			type: "string",
			description: "Select the primary category for this content",
			options: {
				list: [
					{ title: "Market Trends", value: "market-trends" },
					{ title: "Selling Tips", value: "selling-tips" },
					{ title: "Investment", value: "investment" },
					{ title: "Technology", value: "technology" },
					{ title: "Interior Design", value: "interior-design" },
					{ title: "Sustainability", value: "sustainability" },
					{ title: "Dining", value: "dining" },
					{ title: "Lifestyle", value: "lifestyle" }
				],
				layout: "dropdown"
			},
			validation: (rule) => rule.required(),
			group: "content"
		}),
		defineField({
			name: "content",
			title: "Post Content",
			type: "array",
			description: "The main content of the post",
			of: [
				{
					type: "block",
					styles: [
						{ title: "Normal", value: "normal" },
						{ title: "Heading 2", value: "h2" },
						{ title: "Heading 3", value: "h3" },
						{ title: "Heading 4", value: "h4" },
						{ title: "Quote", value: "blockquote" }
					],
					lists: [
						{ title: "Bullet", value: "bullet" },
						{ title: "Numbered", value: "number" }
					],
					marks: {
						decorators: [
							{ title: "Strong", value: "strong" },
							{ title: "Emphasis", value: "em" },
							{ title: "Underline", value: "underline" },
							{ title: "Strike", value: "strike-through" }
						],
						annotations: [
							{
								name: "link",
								type: "object",
								title: "Link",
								fields: [
									{
										name: "href",
										type: "url",
										title: "URL",
										validation: (rule) => rule.required()
									},
									{
										name: "blank",
										type: "boolean",
										title: "Open in new tab",
										initialValue: true
									}
								]
							}
						]
					}
				},
				{
					type: "image",
					options: { hotspot: true },
					fields: [
						{
							name: "alt",
							type: "string",
							title: "Alt Text",
							description:
								"Alternative text for accessibility and SEO",
							validation: (rule) => rule.required()
						},
						{
							name: "caption",
							type: "string",
							title: "Caption"
						}
					]
				}
			],
			validation: (rule) => rule.required(),
			group: "content"
		})
	],
	preview: {
		select: {
			title: "title",
			type: "contentType",
			date: "publishedAt",
			media: "mainImage"
		},
		prepare({ title, type, date, media }) {
			const formattedDate = date
				? new Date(date).toLocaleDateString()
				: "Unpublished";
			const contentType =
				type === "press" ? "Press Release" : "Blog Post";

			return {
				title: title || "Untitled",
				subtitle: `${contentType} | Published: ${formattedDate}`,
				media: media
			};
		}
	},
	orderings: [
		{
			title: "Publish Date, New",
			name: "publishDateDesc",
			by: [{ field: "publishedAt", direction: "desc" }]
		},
		{
			title: "Publish Date, Old",
			name: "publishDateAsc",
			by: [{ field: "publishedAt", direction: "asc" }]
		},
		{
			title: "Content Type",
			name: "contentType",
			by: [{ field: "contentType", direction: "asc" }]
		},
		{
			title: "Title, A-Z",
			name: "titleAsc",
			by: [{ field: "title", direction: "asc" }]
		}
	]
});

export default ContentPost;
export { ContentPost };
