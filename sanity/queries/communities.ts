import { groq } from "next-sanity";
import { client } from "../../lib/client";

// Get all communities
export async function getAllCommunities() {
	return client.fetch(
		groq`*[_type == "community"] | order(title asc) {
      _id,
      title,
      "slug": slug.current,
      county,
      description,
      mainImage {
        "url": asset->url,
        "alt": alt
      },
      amenities
    }`
	);
}

// Get a specific community by slug
export async function getCommunityBySlug(slug: string) {
	return client.fetch(
		groq`*[_type == "community" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      county,
      description,
      mainImage {
        "url": asset->url,
        "alt": alt
      },
      gallery[] {
        "url": asset->url,
        "alt": alt,
        caption
      },
      communityLocation,
      areasOfInterest[] {
        name,
        category,
        description,
        location,
        image {
          "url": asset->url,
          "alt": alt
        }
      },
      amenities,
      "relatedListings": *[_type == "listing" && references(^._id)] {
        _id,
        title,
        "slug": slug.current,
        price,
        status,
        address,
        propertyDetails {
          beds,
          baths,
          sqft
        },
        heroMedia {
          heroImage {
            "url": asset->url,
            "alt": "Property image"
          }
        }
      }
    }`,
		{ slug }
	);
}
