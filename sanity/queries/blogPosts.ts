import { groq } from "next-sanity";
import { client } from "@/lib/client";

// Query to get all blog posts
export async function getAllBlogPosts() {
	return client.fetch(
		groq`*[_type == "blog"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      "mainImage": {
        "url": mainImage.asset->url,
        "alt": mainImage.alt
      },
      "author": author->{
        name,
        "image": image.asset->url
      },
      category,
      tags,
      content,
      readTime
    }`
	);
}

// Query to get a blog post by slug
export async function getBlogPostBySlug(slug: string) {
	return client.fetch(
		groq`*[_type == "blog" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      "mainImage": {
        "url": mainImage.asset->url,
        "alt": mainImage.alt
      },
      "author": author->{
        name,
        "image": image.asset->url
      },
      content,
      category,
      tags,
      readTime,
      seo
    }`,
		{ slug }
	);
}

// Query to get recent blog posts
export async function getRecentBlogPosts(limit = 3) {
	return client.fetch(
		groq`*[_type == "blog" && defined(publishedAt)] | order(publishedAt desc)[0...$limit] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      "mainImage": {
        "url": mainImage.asset->url,
        "alt": mainImage.alt
      },
      "author": author->{
        name,
        "image": image.asset->url
      },
      category,
      tags
    }`,
		{ limit }
	);
}

// Query to get blog posts by tag
export async function getBlogPostsByTag(tag: string) {
	return client.fetch(
		groq`*[_type == "blog" && $tag in tags] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      "mainImage": {
        "url": mainImage.asset->url,
        "alt": mainImage.alt
      },
      "author": author->{
        name,
        "image": image.asset->url
      },
      category,
      tags,
      content
    }`,
		{ tag }
	);
}
