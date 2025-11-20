import { groq } from "next-sanity";
import { client } from "@/lib/client";

// Query to get all businesses
export async function getAllBusinesses() {
	return client.fetch(
		groq`*[_type == "business"] | order(name asc) {
      _id,
      name,
      "slug": slug.current,
      description,
      businessType,
      dateOpened,
      tags,
      image {
        "url": asset->url,
        "alt": alt
      },
      location {
        address,
        city,
        state,
        zipCode,
        phone,
        website,
        coordinates
      },
      hours
    }`
	);
}

// Query to get businesses by tag (community)
export async function getBusinessesByTag(tag: string) {
	return client.fetch(
		groq`*[_type == "business" && $tag in tags] | order(name asc) {
      _id,
      name,
      "slug": slug.current,
      description,
      businessType,
      dateOpened,
      tags,
      image {
        "url": asset->url,
        "alt": alt
      },
      location {
        address,
        city,
        state,
        zipCode,
        phone,
        website,
        coordinates
      },
      hours
    }`,
		{ tag }
	);
}

// Query to get businesses by type
export async function getBusinessesByType(businessType: string) {
	return client.fetch(
		groq`*[_type == "business" && businessType == $businessType] | order(name asc) {
      _id,
      name,
      "slug": slug.current,
      description,
      businessType,
      dateOpened,
      tags,
      image {
        "url": asset->url,
        "alt": alt
      },
      location {
        address,
        city,
        state,
        zipCode,
        phone,
        website,
        coordinates
      },
      hours
    }`,
		{ businessType }
	);
}

// Query to get restaurants by community tag
export async function getRestaurantsByCommunity(communityTag: string) {
	return client.fetch(
		groq`*[_type == "business" && businessType == "restaurant" && $communityTag in tags] | order(name asc) {
      _id,
      name,
      "slug": slug.current,
      description,
      businessType,
      dateOpened,
      tags,
      image {
        "url": asset->url,
        "alt": alt
      },
      location {
        address,
        city,
        state,
        zipCode,
        phone,
        website,
        coordinates
      },
      hours
    }`,
		{ communityTag }
	);
}

// Query to get a single business by slug
export async function getBusinessBySlug(slug: string) {
	return client.fetch(
		groq`*[_type == "business" && slug.current == $slug][0] {
      _id,
      name,
      "slug": slug.current,
      description,
      businessType,
      dateOpened,
      tags,
      image {
        "url": asset->url,
        "alt": alt
      },
      location {
        address,
        city,
        state,
        zipCode,
        phone,
        website,
        coordinates
      },
      hours
    }`,
		{ slug }
	);
}
