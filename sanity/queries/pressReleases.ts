import { groq } from "next-sanity";
import { client } from "@/lib/client";

// Query to get all press releases
export async function getAllPressReleases() {
	return client.fetch(
		groq`*[_type == "contentPost" && contentType == "press"] | order(publishedAt desc) {
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
      source,
      sourceUrl,
      content
    }`
	);
}

// Query to get a press release by slug
export async function getPressReleaseBySlug(slug: string) {
	return client.fetch(
		groq`*[_type == "contentPost" && contentType == "press" && slug.current == $slug][0] {
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
      category,
      source,
      sourceUrl
    }`,
		{ slug }
	);
}

// Query to get recent press releases
export async function getRecentPressReleases(limit = 3) {
	return client.fetch(
		groq`*[_type == "contentPost" && contentType == "press" && defined(publishedAt)] | order(publishedAt desc)[0...$limit] {
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
      source,
      sourceUrl
    }`,
		{ limit }
	);
}

// Query to get featured press release
export async function getFeaturedPressRelease() {
	return client.fetch(
		groq`*[_type == "contentPost" && contentType == "press"] | order(publishedAt desc)[0] {
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
      source,
      sourceUrl
    }`
	);
}

// Query to get press releases by category
export async function getPressReleasesByCategory(categoryValue: string) {
	return client.fetch(
		groq`*[_type == "contentPost" && contentType == "press" && category == $categoryValue] | order(publishedAt desc) {
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
      source,
      sourceUrl,
      content
    }`,
		{ categoryValue }
	);
}

// Query to get press release categories
export async function getPressCategories() {
	return client.fetch(
		groq`array::unique(*[_type == "contentPost" && contentType == "press" && defined(category)].category)`
	);
}
