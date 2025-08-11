import { MetadataRoute } from "next";
import { getAllListings } from "@/sanity/queries/listings";
import { getAllBlogPosts } from "@/sanity/queries/blogPosts";
import { getAllCommunities } from "@/sanity/queries/communities";
import { getAllPressReleases } from "@/sanity/queries/pressReleases";

// Define types for Sanity content
interface Listing {
	slug: { current: string };
	publishedAt?: string;
	status: string;
	isFeatured?: boolean;
}

interface BlogPost {
	slug: string | { current: string };
	publishedAt?: string;
	status: string;
}

interface Community {
	slug: string;
}

interface PressRelease {
	slug: string;
	publishedAt?: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	// Get the base URL from environment variables or use a default
	const baseUrl = "https://thegoodrichgroup.com";

	// Define static routes
	const staticRoutes = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 1.0
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.8
		},
		{
			url: `${baseUrl}/approach`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.8
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.8
		},
		{
			url: `${baseUrl}/results`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.8
		},
		{
			url: `${baseUrl}/resources`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.7
		},
		{
			url: `${baseUrl}/press`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.7
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.9
		},
		{
			url: `${baseUrl}/listings`,
			lastModified: new Date(),
			changeFrequency: "daily" as const,
			priority: 0.9
		},
		{
			url: `${baseUrl}/communities`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.9
		},
		{
			url: `${baseUrl}/faq`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.6
		},
		{
			url: `${baseUrl}/privacy-policy`,
			lastModified: new Date(),
			changeFrequency: "yearly" as const,
			priority: 0.5
		},
		{
			url: `${baseUrl}/terms-of-service`,
			lastModified: new Date(),
			changeFrequency: "yearly" as const,
			priority: 0.5
		}
	];

	// Fetch all listings from Sanity
	let listingRoutes: MetadataRoute.Sitemap = [];
	try {
		const listings = await getAllListings();

		listingRoutes = listings.map((listing: Listing) => ({
			url: `${baseUrl}/listings/${listing.slug.current}`,
			lastModified: listing.publishedAt
				? new Date(listing.publishedAt)
				: new Date(),
			changeFrequency: "weekly" as const,
			priority: listing.isFeatured ? 0.9 : 0.8
		}));
	} catch (error) {
		console.error("Error fetching listings for sitemap:", error);
	}

	// Fetch all blog posts from Sanity
	let blogRoutes: MetadataRoute.Sitemap = [];
	try {
		const blogPosts = await getAllBlogPosts();

		blogRoutes = blogPosts
			.filter((post: BlogPost) => post.status === "Published") // Only include published posts
			.map((post: BlogPost) => ({
				url: `${baseUrl}/blog/${
					typeof post.slug === "string"
						? post.slug
						: post.slug.current
				}`,
				lastModified: post.publishedAt
					? new Date(post.publishedAt)
					: new Date(),
				changeFrequency: "monthly" as const,
				priority: 0.7
			}));
	} catch (error) {
		console.error("Error fetching blog posts for sitemap:", error);
	}

	// Fetch all communities from Sanity
	let communityRoutes: MetadataRoute.Sitemap = [];
	try {
		const communities = await getAllCommunities();

		communityRoutes = communities.map((community: Community) => ({
			url: `${baseUrl}/communities/${community.slug}`,
			lastModified: new Date(), // Communities don't have a publishedAt date
			changeFrequency: "monthly" as const,
			priority: 0.8
		}));
	} catch (error) {
		console.error("Error fetching communities for sitemap:", error);
	}

	// Fetch all press releases from Sanity
	let pressRoutes: MetadataRoute.Sitemap = [];
	try {
		const pressReleases = await getAllPressReleases();

		pressRoutes = pressReleases.map((press: PressRelease) => ({
			url: `${baseUrl}/press/${press.slug}`,
			lastModified: press.publishedAt
				? new Date(press.publishedAt)
				: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.7
		}));
	} catch (error) {
		console.error("Error fetching press releases for sitemap:", error);
	}

	// Combine all routes
	return [
		...staticRoutes,
		...listingRoutes,
		...blogRoutes,
		...communityRoutes,
		...pressRoutes
	];
}
