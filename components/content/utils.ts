import { ContentItem, SanityContentBlock } from "./types";

// Define interface for Sanity blog post
interface SanityBlogPost {
	_id: string;
	title: string;
	slug: string;
	excerpt: string;
	publishedAt: string;
	author?: string;
	category: string;
	mainImage: { url: string };
	content?: SanityContentBlock[];
}

// Define interface for Sanity press release
interface SanityPressRelease {
	_id: string;
	title: string;
	slug: string;
	excerpt: string;
	publishedAt: string;
	source?: string;
	sourceUrl?: string;
	category: string;
	mainImage: { url: string };
	location?: string;
	featured?: boolean;
	content?: SanityContentBlock[];
}

/**
 * Converts a Sanity blog post to our ContentItem format
 */
export function formatBlogPost(post: SanityBlogPost): ContentItem {
	return {
		id: post._id,
		title: post.title,
		slug: post.slug,
		excerpt: post.excerpt,
		date: new Date(post.publishedAt).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric"
		}),
		author: post.author || "Cheryl Towey",
		category: post.category,
		image: post.mainImage.url,
		content: post.content
	};
}

/**
 * Formats related blog posts for display
 */
export function formatRelatedBlogPosts(posts: SanityBlogPost[]): ContentItem[] {
	return posts.map((p) => ({
		id: p._id,
		title: p.title,
		slug: p.slug,
		excerpt: p.excerpt,
		date: new Date(p.publishedAt).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric"
		}),
		author: p.author || "Cheryl Towey",
		category: p.category,
		image: p.mainImage.url,
		readTime: "5 min read" // Default read time
	}));
}

/**
 * Converts a Sanity press release to our ContentItem format
 */
export function formatPressRelease(
	pressRelease: SanityPressRelease
): ContentItem {
	return {
		id: pressRelease._id,
		title: pressRelease.title,
		slug: pressRelease.slug,
		excerpt: pressRelease.excerpt,
		date: new Date(pressRelease.publishedAt).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric"
		}),
		source: pressRelease.source || "Cheryl Towey",
		sourceUrl: pressRelease.sourceUrl,
		category: pressRelease.category,
		image: pressRelease.mainImage.url,
		location: pressRelease.location || "New Jersey, CA",
		featured: pressRelease.featured || false,
		content: pressRelease.content
	};
}

/**
 * Formats related press releases for display
 */
export function formatRelatedPressReleases(
	releases: SanityPressRelease[]
): ContentItem[] {
	return releases.map((p) => ({
		id: p._id,
		title: p.title,
		slug: p.slug,
		excerpt: p.excerpt,
		date: new Date(p.publishedAt).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric"
		}),
		source: p.source || "Cheryl Towey",
		sourceUrl: p.sourceUrl,
		category: p.category,
		image: p.mainImage.url,
		location: p.location || "New Jersey, CA",
		featured: p.featured || false
	}));
}
