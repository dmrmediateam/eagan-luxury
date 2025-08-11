import { defineField, defineType } from "sanity";

// General Market Statistics Schema
export const generalMarketStats = defineType({
	name: "generalMarketStats",
	title: "General Market Statistics",
	type: "document",
	fields: [
		defineField({
			name: "heading",
			title: "Heading",
			type: "string",
			initialValue: "MARKET STATISTICS",
			description: "Main heading for the market statistics section.",
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: "subheading",
			title: "Subheading",
			type: "string",
			initialValue:
				"Key performance indicators for the Lake Geneva area real estate markets",
			description: "Subheading text below the main heading.",
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: "lastUpdated",
			title: "Last Updated",
			type: "date",
			description: "When these statistics were last updated.",
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: "dataSource",
			title: "Data Source",
			type: "string",
			initialValue: "SFAR MLS, BrokerMetrics and Goodrich Group analysis",
			description: "Source of the market data.",
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: "footnoteSample",
			title: "Footnote for Small Sample Size",
			type: "string",
			initialValue:
				"*Small sample size; use caution when interpreting statistics.",
			description: "Footnote text for small sample sizes."
		})
	],
	preview: {
		select: {
			title: "heading",
			subtitle: "lastUpdated"
		}
	}
});

// Region Statistics Schema (Napa/Sonoma)
export const regionStats = defineType({
	name: "regionStats",
	title: "Region Statistics",
	type: "document",
	fields: [
		defineField({
			name: "regionName",
			title: "Region Name",
			type: "string",
			description:
				"Name of the region (e.g., Walworth County or Walworth County).",
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: "regionTitle",
			title: "Region Title",
			type: "string",
			description: "Title for the region (e.g., NAPA COUNTY).",
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: "stats",
			title: "Statistics",
			type: "array",
			description: "List of key statistics for the region.",
			validation: (Rule) => Rule.required().min(1),
			of: [
				{
					type: "object",
					fields: [
						defineField({
							name: "label",
							title: "Label",
							type: "string",
							description: "Statistic label.",
							validation: (Rule) => Rule.required()
						}),
						defineField({
							name: "value",
							title: "Value",
							type: "string",
							description: "Statistic value.",
							validation: (Rule) => Rule.required()
						}),
						defineField({
							name: "change",
							title: "Change (YoY)",
							type: "string",
							description: "Year-over-year change.",
							validation: (Rule) => Rule.required()
						}),
						defineField({
							name: "isPositive",
							title: "Is Change Positive?",
							type: "boolean",
							initialValue: false,
							description:
								"Whether this change represents a positive market trend."
						}),
						defineField({
							name: "description",
							title: "Description",
							type: "string",
							description:
								"Brief explanation or context for the statistic.",
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
			]
		})
	],
	preview: {
		select: {
			title: "regionName",
			subtitle: "regionTitle"
		}
	}
});

// Subregion Statistics Schema
export const subregionStats = defineType({
	name: "subregionStats",
	title: "Subregion Statistics",
	type: "document",
	fields: [
		defineField({
			name: "regionReference",
			title: "Parent Region",
			type: "reference",
			description: "Reference to the parent region (Napa or Sonoma).",
			to: [{ type: "regionStats" }],
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: "subregionName",
			title: "Subregion Name",
			type: "string",
			description: "Name of the subregion.",
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: "propertyType",
			title: "Property Type",
			type: "string",
			description:
				"Optional: Type of property (e.g., Single Family, Condo, Multi-Family).",
			options: {
				list: [
					// Provide some common options, but allow free text
					{ title: "Single Family", value: "Single Family" },
					{ title: "Condo", value: "Condo" },
					{ title: "Multi-Family", value: "Multi-Family" },
					{ title: "Land", value: "Land" }
				],
				layout: "dropdown" // Or 'radio' if fewer options
			}
			// No validation rule means it's optional
		}),
		defineField({
			name: "medianPrice",
			title: "Median Price",
			type: "string",
			description: "Median price for the subregion.",
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: "priceChange",
			title: "Price Change (YoY)",
			type: "string",
			description: "Change in median price.",
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: "isPriceChangePositive",
			title: "Is Price Change Positive?",
			type: "boolean",
			initialValue: false,
			description: "Whether the price change is positive."
		}),
		defineField({
			name: "daysOnMarket",
			title: "Days on Market",
			type: "string",
			description: "Average days on market.",
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: "daysChange",
			title: "Days Change (YoY)",
			type: "string",
			description: "Change in days on market.",
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: "isDaysChangePositive",
			title: "Is Days Change Positive?",
			type: "boolean",
			initialValue: false,
			description:
				"Whether the days on market change is positive (usually means fewer days)."
		}),
		defineField({
			name: "homesSold",
			title: "Homes Sold",
			type: "string",
			description: "Number of homes sold.",
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: "salesChange",
			title: "Sales Change (YoY)",
			type: "string",
			description: "Change in homes sold.",
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: "isSalesChangePositive",
			title: "Is Sales Change Positive?",
			type: "boolean",
			initialValue: false,
			description: "Whether the sales change is positive."
		})
	],
	preview: {
		select: {
			title: "subregionName",
			subtitle: "medianPrice",
			propertyType: "propertyType",
			parentRegion: "regionReference.regionName" // Display parent region name
		},
		prepare({ title, subtitle, propertyType, parentRegion }) {
			const previewTitle = propertyType
				? `${title} (${propertyType})`
				: title;
			const previewSubtitle = `${parentRegion ? parentRegion + " - " : ""}${subtitle}`;
			return {
				title: previewTitle,
				subtitle: previewSubtitle
			};
		}
	}
});

// Export these as an array for convenience
export const marketStatsSchemas = [
	generalMarketStats,
	regionStats,
	subregionStats
];

// Export the MarketStats schema to match the existing import pattern
export const MarketStats = marketStatsSchemas;
