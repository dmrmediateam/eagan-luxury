import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	// Get the base URL from environment variables or use a default
	const baseUrl = "https://thegoodrichgroup.com";

	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: [
					"/studio/", // Exclude Sanity Studio
					"/dashboard/", // Exclude admin dashboard
					"/api/" // Exclude API routes
				]
			},
			{
				userAgent: "*",
				allow: [
					"/blog/", // Explicitly allow blog posts
					"/press/" // Explicitly allow press releases
				]
			}
		],
		sitemap: `${baseUrl}/sitemap.xml`
	};
}
