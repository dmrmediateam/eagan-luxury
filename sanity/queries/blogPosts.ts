import { groq } from "next-sanity";
import { client } from "@/lib/client";

// Query to get all blog posts
export async function getAllBlogPosts() {
	return client.fetch(
		groq`*[_type == "contentPost" && contentType == "blog"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      "mainImage": {
        "url": mainImage.asset->url,
        "alt": mainImage.alt
      },
      "categories": [category],
      category,
      content
    }`
	);
}

// Query to get a blog post by slug
export async function getBlogPostBySlug(slug: string) {
	return client.fetch(
		groq`*[_type == "contentPost" && contentType == "blog" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      "mainImage": {
        "url": mainImage.asset->url,
        "alt": mainImage.alt
      },
      content,
      "categories": [category],
      category
    }`,
		{ slug }
	);
}

// Query to get recent blog posts
export async function getRecentBlogPosts(limit = 3) {
	return client.fetch(
		groq`*[_type == "contentPost" && contentType == "blog" && defined(publishedAt)] | order(publishedAt desc)[0...$limit] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      "mainImage": {
        "url": mainImage.asset->url,
        "alt": mainImage.alt
      },
      "categories": [category],
      category
    }`,
		{ limit }
	);
}

// Query to get blog posts by category
export async function getBlogPostsByCategory(categoryValue: string) {
	return client.fetch(
		groq`*[_type == "contentPost" && contentType == "blog" && category == $categoryValue] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      "mainImage": {
        "url": mainImage.asset->url,
        "alt": mainImage.alt
      },
      "categories": [category],
      category,
      content
    }`,
		{ categoryValue }
	);
}

// Query to get blog post categories
export async function getBlogCategories() {
	return client.fetch(
		groq`array::unique(*[_type == "contentPost" && contentType == "blog" && defined(category)].category)`
	);
}

// Get a single blog post by ID
export async function getBlogPostById(id: string) {
	const query = groq`*[_type == "contentPost" && _id == $id][0] {
		_id,
		title,
		"slug": slug.current,
		excerpt,
		publishedAt,
		"mainImage": {
			"url": mainImage.asset->url,
			"alt": mainImage.alt
		},
		category,
		content
	}`;

	return client.fetch(query, { id });
}

// Create a new blog post
export async function createBlogPost(post: {
	title: string;
	slug?: string;
	excerpt: string;
	content?: Array<{
		_type: string;
		_key: string;
		[key: string]: unknown;
	}>;
	publishedAt?: string;
	mainImage?: { url: string; alt: string };
	category?: string;
}) {
	// Convert the post data to Sanity document format
	const sanityDoc = {
		_type: "contentPost",
		contentType: "blog",
		title: post.title,
		slug: {
			_type: "slug",
			current:
				post.slug ||
				post.title
					?.toLowerCase()
					.replace(/\s+/g, "-")
					.replace(/[^\w-]+/g, "") ||
				""
		},
		excerpt: post.excerpt,
		publishedAt: post.publishedAt || new Date().toISOString(),
		mainImage: post.mainImage?.url
			? {
					_type: "image",
					asset: {
						_type: "reference",
						_ref:
							post.mainImage.url
								.split("/")
								.pop()
								?.split(".")[0] || ""
					},
					alt: post.mainImage.alt || ""
				}
			: undefined,
		category: post.category || "market-trends",
		content: post.content
	};

	// Create the document in Sanity
	const result = await client.create(sanityDoc);

	// Return the created post with the new _id
	return getBlogPostById(result._id);
}

// Update an existing blog post
export async function updateBlogPost(post: {
	_id: string;
	title: string;
	slug?: string;
	excerpt: string;
	content?: Array<{
		_type: string;
		_key: string;
		[key: string]: unknown;
	}>;
	publishedAt?: string;
	mainImage?: { url: string; alt: string };
	category?: string;
}) {
	// Convert the post data to Sanity document format
	const sanityDoc = {
		title: post.title,
		slug: {
			_type: "slug",
			current:
				post.slug ||
				post.title
					?.toLowerCase()
					.replace(/\s+/g, "-")
					.replace(/[^\w-]+/g, "") ||
				""
		},
		excerpt: post.excerpt,
		publishedAt: post.publishedAt || new Date().toISOString(),
		mainImage: post.mainImage?.url
			? {
					_type: "image",
					asset: {
						_type: "reference",
						_ref:
							post.mainImage.url
								.split("/")
								.pop()
								?.split(".")[0] || ""
					},
					alt: post.mainImage.alt || ""
				}
			: undefined,
		category: post.category || "market-trends",
		content: post.content
	};

	// Update the document in Sanity
	await client.patch(post._id).set(sanityDoc).commit();

	// Return the updated post
	return getBlogPostById(post._id);
}

// Delete a blog post
export async function deleteBlogPost(id: string): Promise<void> {
	await client.delete(id);
}
