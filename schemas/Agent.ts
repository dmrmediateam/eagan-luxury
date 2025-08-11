import { defineField, defineType } from "sanity";

const Agent = defineType({
	name: "agent",
	title: "Agent",
	type: "document",
	groups: [
		{ name: "personal", title: "Personal Information" },
		{ name: "professional", title: "Professional Information" },
		{ name: "media", title: "Media & Photos" },
		{ name: "seo", title: "SEO & Visibility" }
	],
	fields: [
		// Personal Information Group
		defineField({
			name: "name",
			title: "Full Name",
			type: "string",
			description: "Agent's full name",
			validation: (rule) => rule.required().min(2).max(100),
			group: "personal"
		}),
		defineField({
			name: "slug",
			title: "URL Slug",
			type: "slug",
			description: "Unique URL identifier for this agent",
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
			group: "personal"
		}),
		defineField({
			name: "profileImage",
			title: "Profile Image",
			type: "image",
			description: "Professional portrait photo of the agent",
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
			],
			validation: (rule) => rule.required(),
			group: "media"
		}),
		defineField({
			name: "email",
			title: "Email Address",
			type: "string",
			description: "Agent's professional email address",
			validation: (rule) =>
				rule
					.required()
					.email()
					.error("Please enter a valid email address"),
			group: "personal"
		}),
		defineField({
			name: "phone",
			title: "Phone Number",
			type: "string",
			description: "Agent's professional phone number",
			group: "personal"
		}),

		// Professional Information Group
		defineField({
			name: "title",
			title: "Job Title",
			type: "string",
			description: "Agent's professional title or role",
			validation: (rule) => rule.required(),
			group: "professional"
		}),
		defineField({
			name: "licenseNumber",
			title: "License Number",
			type: "string",
			description: "Agent's real estate license number",
			group: "professional"
		}),
		defineField({
			name: "shortBio",
			title: "Short Bio",
			type: "text",
			description: "Brief professional description (1-2 sentences)",
			rows: 2,
			validation: (rule) => rule.required().min(10).max(300),
			group: "professional"
		}),
		defineField({
			name: "fullBio",
			title: "Full Biography",
			type: "array",
			of: [{ type: "block" }],
			description: "Detailed professional biography and background",
			validation: (rule) => rule.required(),
			group: "professional"
		}),
		defineField({
			name: "specialties",
			title: "Specialties",
			type: "array",
			of: [{ type: "string" }],
			description: "Agent's areas of specialization",
			options: {
				list: [
					{ title: "Luxury Properties", value: "luxury" },
					{ title: "Vineyard Properties", value: "vineyard" },
					{ title: "Residential", value: "residential" },
					{ title: "Commercial", value: "commercial" },
					{ title: "Investment", value: "investment" },
					{ title: "Relocation", value: "relocation" },
					{ title: "First-Time Buyers", value: "first-time-buyers" }
				]
			},
			validation: (rule) => rule.required(),
			group: "professional"
		}),
		defineField({
			name: "areas",
			title: "Service Areas",
			type: "array",
			of: [{ type: "string" }],
			description: "Geographical areas the agent serves",
			validation: (rule) => rule.required(),
			group: "professional"
		}),
		defineField({
			name: "languages",
			title: "Languages Spoken",
			type: "array",
			of: [{ type: "string" }],
			description: "Languages the agent speaks fluently",
			options: {
				list: [
					{ title: "English", value: "english" },
					{ title: "Spanish", value: "spanish" },
					{ title: "French", value: "french" },
					{ title: "Italian", value: "italian" },
					{ title: "Mandarin", value: "mandarin" },
					{ title: "Cantonese", value: "cantonese" },
					{ title: "Japanese", value: "japanese" },
					{ title: "Korean", value: "korean" },
					{ title: "Russian", value: "russian" },
					{ title: "Portuguese", value: "portuguese" },
					{ title: "German", value: "german" }
				]
			},
			group: "professional"
		}),
		defineField({
			name: "certifications",
			title: "Certifications & Designations",
			type: "array",
			of: [{ type: "string" }],
			description: "Professional certifications and designations",
			group: "professional"
		}),

		// SEO & Visibility Group
		defineField({
			name: "isActive",
			title: "Active Status",
			type: "boolean",
			description:
				"Whether the agent is currently active and should be displayed",
			initialValue: true,
			group: "seo"
		}),
		defineField({
			name: "displayOrder",
			title: "Display Order",
			type: "number",
			description:
				"Order in which to display (lower numbers appear first)",
			initialValue: 100,
			validation: (rule) => rule.integer().positive(),
			group: "seo"
		}),
		defineField({
			name: "featuredAgent",
			title: "Featured Agent",
			type: "boolean",
			description: "Whether to highlight this agent as featured",
			initialValue: false,
			group: "seo"
		}),

		// Social Media
		defineField({
			name: "socialMedia",
			title: "Social Media Profiles",
			type: "object",
			fields: [
				{
					name: "linkedin",
					title: "LinkedIn URL",
					type: "url",
					description: "URL to agent's LinkedIn profile"
				},
				{
					name: "instagram",
					title: "Instagram URL",
					type: "url",
					description: "URL to agent's Instagram profile"
				},
				{
					name: "facebook",
					title: "Facebook URL",
					type: "url",
					description: "URL to agent's Facebook profile"
				},
				{
					name: "twitter",
					title: "X/Twitter URL",
					type: "url",
					description: "URL to agent's X/Twitter profile"
				}
			],
			group: "personal"
		})
	],
	preview: {
		select: {
			title: "name",
			subtitle: "title",
			media: "profileImage"
		}
	}
});

export default Agent;
export { Agent };
