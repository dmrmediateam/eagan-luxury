import { defineField, defineType } from "sanity";
export const Listing = defineType({
	name: "listing",
	title: "Property Listing",
	type: "document",
	groups: [
		{ name: "overview", title: "Overview" },
		{ name: "media", title: "Photos & Videos" },
		{ name: "details", title: "Details" },
		{ name: "features", title: "Features & Tabs" },
		{ name: "location", title: "Location" },
		{ name: "financials", title: "Financials" }
	],
	fields: [
		// Overview Group - Core identifying info
		defineField({
			name: "title",
			title: "Property Name",
			type: "string",
			description:
				"Enter a descriptive name (e.g., 'Luxury Beachfront Villa')",
			validation: (rule) => rule.required().min(5).max(100),
			group: "overview"
		}),
		defineField({
			name: "slug",
			title: "URL Slug",
			type: "slug",
			description:
				"Unique URL-friendly identifier (auto-generated from Property Name)",
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
			name: "subdomain",
			title: "Subdomain",
			type: "slug",
			description: "THIS MUST BE UNIQUE - NO DUPLICATES",
			group: "overview"
		}),
		defineField({
			name: "status",
			title: "Status",
			type: "string",
			description: "Select the current status of this listing",
			options: {
				list: [
					{ title: "Active", value: "active" },
					{ title: "Coming Soon", value: "coming-soon" },
					{ title: "Sold", value: "sold" },
					{ title: "Archived", value: "archived" }
				],
				layout: "radio"
			},
			validation: (rule) => rule.required(),
			group: "overview"
		}),
		defineField({
			name: "isFeatured",
			title: "Feature This Listing?",
			type: "boolean",
			description:
				"Check to highlight this listing in featured sections (Active listings only)",
			initialValue: false,
			hidden: ({ document }) => document?.status !== "active",
			group: "overview"
		}),
		defineField({
			name: "price",
			title: "Listing Price",
			type: "number",
			description: "Enter the price in dollars (no symbols or commas)",
			validation: (rule) => rule.required().positive(),
			group: "overview"
		}),
		defineField({
			name: "address",
			title: "Address",
			type: "object",
			description: "Provide the full property address",
			validation: (rule) => rule.required(),
			fields: [
				{
					name: "street",
					type: "string",
					title: "Street Address",
					validation: (rule) => rule.required()
				},
				{
					name: "region",
					type: "string",
					title: "Region",
					description: "e.g., Calistoga, Lake Geneva",
					validation: (rule) => rule.required()
				},
				{
					name: "state",
					type: "string",
					title: "State",
					validation: (rule) => rule.required()
				},
				{
					name: "zipCode",
					type: "string",
					title: "ZIP Code",
					validation: (rule) => rule.required()
				}
			],
			group: "overview"
		}),
		defineField({
			name: "publishedAt",
			title: "Publication Date",
			type: "datetime",
			description:
				"When this listing was published (auto-set to now by default)",
			initialValue: () => new Date().toISOString(),
			group: "overview"
		}),
		defineField({
			name: "buyerOrSeller",
			title: "Buyer or Seller",
			type: "string",
			description: "Select whether this listing is by a buyer or seller",
			options: {
				list: [
					{ title: "Buyer", value: "buyer" },
					{ title: "Seller", value: "seller" },
					{ title: "Both", value: "both" }
				],
				layout: "radio"
			},
			group: "overview"
		}),

		// Media Group - Visual assets
		defineField({
			name: "heroMedia",
			title: "Featured Media",
			type: "object",
			description:
				"Main image, optional thumbnail, and video (URL or upload)",
			validation: (rule) => rule.required(),
			fields: [
				{
					name: "heroImage",
					title: "Primary Featured Image",
					type: "image",
					description:
						"The main image displayed prominently (e.g., 1920x1080px)",
					options: { hotspot: true },
					validation: (rule) => rule.required()
				},
				{
					name: "thumbnail",
					title: "Thumbnail Image (Optional)",
					type: "image",
					description:
						"Smaller image for previews/cards (e.g., 400x300px). Defaults to Primary if empty.",
					options: { hotspot: true }
				},
				{
					name: "heroVideoUrl",
					title: "Featured Video URL (Optional)",
					type: "url",
					description:
						"URL to an external video (e.g., YouTube, Vimeo)"
				},
				{
					name: "heroVideoFile",
					title: "Featured Video Upload (Optional)",
					type: "file",
					description:
						"Upload a video file directly (MP4 recommended)",
					options: {
						accept: "video/*"
					}
				}
			],
			group: "media"
		}),
		defineField({
			name: "gallery",
			title: "Photo Gallery",
			type: "array",
			description:
				"Upload additional photos (drag to reorder). Providing descriptive alt text is highly recommended for accessibility and SEO.",
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
								"Describe the image for SEO and accessibility. If left empty, a fallback might be used."
						}
					]
				}
			],
			options: {
				layout: "grid",
				sortable: true
			},
			group: "media"
		}),
		defineField({
			name: "floorPlan",
			title: "Floor Plan",
			type: "object",
			description: "Upload an image and/or a PDF floor plan",
			fields: [
				{
					name: "floorPlanImage",
					type: "image",
					title: "Floor Plan Image",
					options: { hotspot: true }
				},
				{
					name: "floorPlanPdf",
					type: "file",
					title: "Floor Plan PDF",
					options: { accept: "application/pdf" }
				}
			],
			group: "media"
		}),
		defineField({
			name: "sitePlan",
			title: "Site Plan",
			type: "object",
			description: "Upload an image and/or a PDF site plan",
			fields: [
				{
					name: "sitePlanImage",
					type: "image",
					title: "Site Plan Image",
					options: { hotspot: true }
				},
				{
					name: "sitePlanPdf",
					type: "file",
					title: "Site Plan PDF",
					options: { accept: "application/pdf" }
				}
			],
			group: "media"
		}),

		// Details Group - Core property specs
		defineField({
			name: "propertyDetails",
			title: "Basic Property Specs",
			type: "object",
			description: "Enter the key details about this property",
			validation: (rule) => rule.required(),
			fields: [
				{
					name: "beds",
					type: "number",
					title: "Bedrooms",
					validation: (rule) => rule.required().min(0)
				},
				{
					name: "baths",
					type: "number",
					title: "Bathrooms",
					validation: (rule) => rule.required().min(0)
				},
				{
					name: "sqft",
					type: "number",
					title: "Square Footage",
					validation: (rule) => rule.required().positive()
				},
				{
					name: "lotSizeAcres",
					type: "number",
					title: "Lot Size (Acres)",
					validation: (rule) => rule.required().positive()
				},
				{
					name: "yearBuilt",
					type: "number",
					title: "Year Built",
					validation: (rule) =>
						rule.required().min(0).max(new Date().getFullYear())
				},
				{
					name: "propertyType",
					type: "string",
					title: "Property Type",
					options: {
						list: [
							{ title: "House", value: "house" },
							{ title: "Condo", value: "condo" },
							{ title: "Townhouse", value: "townhouse" },
							{ title: "Multi-Family", value: "multi-family" },
							{ title: "Land", value: "land" },
							{ title: "Other", value: "other" }
						]
					},
					validation: (rule) => rule.required()
				},
				{
					name: "stories",
					type: "number",
					title: "Stories",
					validation: (rule) => rule.min(1)
				},
				{
					name: "parkingSpaces",
					type: "number",
					title: "Parking Spaces",
					validation: (rule) => rule.min(0)
				},
				{
					name: "hasPool",
					type: "boolean",
					title: "Pool",
					initialValue: false
				},
				{
					name: "hasSpa",
					type: "boolean",
					title: "Spa/Hot Tub",
					initialValue: false
				},
				{
					name: "hasView",
					type: "boolean",
					title: "View",
					initialValue: false
				},
				{
					name: "viewDescription",
					type: "string",
					title: "View Description",
					description: "e.g., Mountain, Ocean",
					hidden: ({ parent }) => !parent?.hasView
				},
				{
					name: "hasFireplace",
					type: "boolean",
					title: "Fireplace",
					initialValue: false
				},
				{
					name: "fireplaceCount",
					type: "number",
					title: "Number of Fireplaces",
					validation: (rule) => rule.min(0),
					hidden: ({ parent }) => !parent?.hasFireplace
				}
			],
			group: "details"
		}),
		defineField({
			name: "description",
			title: "Property Description",
			type: "text",
			description:
				"General overview description (can also use tabs for specific details)",
			rows: 6,
			group: "details"
		}),

		// Features Group - Includes new Tabs field
		defineField({
			name: "propertyTabs",
			title: "Property Detail Tabs",
			type: "array",
			description:
				"Add tabs for organized details (e.g., Overview, Interiors, Outdoors). Drag to reorder.",
			of: [
				{
					type: "object",
					name: "propertyTab",
					title: "Detail Tab",
					fields: [
						{
							name: "tabTitle",
							type: "string",
							title: "Tab Title",
							description: "e.g., 'Interior Features'",
							validation: (rule) => rule.required()
						},
						{
							name: "tabContent",
							type: "array",
							title: "Tab Content",
							description: "Details for this tab",
							of: [
								{
									type: "block",
									styles: [
										{ title: "Normal", value: "normal" },
										{ title: "H3", value: "h3" },
										{ title: "H4", value: "h4" }
									],
									lists: [
										{ title: "Bullet", value: "bullet" },
										{ title: "Numbered", value: "number" }
									],
									marks: {
										decorators: [
											{
												title: "Strong",
												value: "strong"
											},
											{ title: "Emphasis", value: "em" }
										],
										annotations: [
											{
												name: "link",
												type: "object",
												title: "URL",
												fields: [
													{
														title: "URL",
														name: "href",
														type: "url"
													}
												]
											}
										]
									}
								}
							]
						}
					],
					preview: {
						select: {
							title: "tabTitle"
						},
						prepare({ title }) {
							return {
								title: title || "Untitled Tab"
							};
						}
					}
				}
			],
			group: "features"
		}),
		defineField({
			name: "features",
			title: "Key Feature Tags (Optional)",
			type: "array",
			description:
				"Quick tags for filtering/display (e.g., 'Pool', 'Vineyard View')",
			of: [{ type: "string" }],
			options: { layout: "tags" },
			group: "features"
		}),

		// Location Group - Geographic info
		defineField({
			name: "location",
			title: "Map Coordinates",
			type: "geopoint",
			description: "Pin the exact location for maps",
			group: "location"
		}),
		defineField({
			name: "pointsOfInterest",
			title: "Nearby Attractions",
			type: "array",
			description: "Add nearby points of interest or amenities",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "name",
							type: "string",
							title: "Name",
							validation: (rule) => rule.required()
						},
						{
							name: "category",
							type: "string",
							title: "Category",
							options: {
								list: [
									{ title: "Dining", value: "dining" },
									{ title: "Shopping", value: "shopping" },
									{ title: "Education", value: "education" },
									{
										title: "Recreation",
										value: "recreation"
									},
									{
										title: "Transportation",
										value: "transportation"
									},
									{
										title: "Healthcare",
										value: "healthcare"
									},
									{ title: "Other", value: "other" }
								]
							},
							validation: (rule) => rule.required()
						},
						{
							name: "description",
							type: "text",
							title: "Description"
						},
						{
							name: "location",
							type: "geopoint",
							title: "Coordinates"
						},
						{
							name: "highlights",
							type: "array",
							of: [{ type: "string" }],
							title: "Highlights",
							options: { layout: "tags" }
						}
					],
					preview: {
						select: { title: "name", subtitle: "category" }
					}
				}
			],
			group: "location"
		}),

		// Financials Group - Monetary details
		defineField({
			name: "financialDetails",
			title: "Financial Information",
			type: "object",
			group: "financials",
			fields: [
				{
					name: "pricePerSqFt",
					type: "number",
					title: "Price per Sq Ft",
					description: "Calculated price per square foot"
				},
				{
					name: "taxAssessedValue",
					type: "number",
					title: "Assessed Value",
					description: "Value for tax purposes"
				},
				{
					name: "annualTaxAmount",
					type: "number",
					title: "Annual Taxes",
					description: "Yearly property tax amount"
				},
				{
					name: "dateOnMarket",
					type: "date",
					title: "Date Listed",
					description: "When the property went on market"
				}
			]
		})
	],
	preview: {
		select: {
			title: "title",
			price: "price",
			status: "status",
			region: "address.region",
			state: "address.state",
			media: "heroMedia.thumbnail"
		},
		prepare({ title, price, status, region, state, media }) {
			const formattedPrice = price
				? `$${price.toLocaleString()}`
				: "Price not set";
			const location = region && state ? `${region}, ${state}` : "";
			const statusText = status ? `[${status.toUpperCase()}]` : "";
			return {
				title: title || "Untitled Property",
				subtitle: `${statusText} ${formattedPrice} - ${location}`,
				media: media
			};
		}
	},
	orderings: [
		{
			title: "Price: High to Low",
			name: "priceDesc",
			by: [{ field: "price", direction: "desc" }]
		},
		{
			title: "Price: Low to High",
			name: "priceAsc",
			by: [{ field: "price", direction: "asc" }]
		},
		{
			title: "Newest First",
			name: "publishedAtDesc",
			by: [{ field: "publishedAt", direction: "desc" }]
		}
	]
});
