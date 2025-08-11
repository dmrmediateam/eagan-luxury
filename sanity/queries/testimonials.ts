import { groq } from "next-sanity";
import { client } from "@/lib/client";

// Query to get all testimonials
export async function getAllTestimonials() {
	return client.fetch(
		groq`*[_type == "testimonial"] | order(_createdAt desc) {
      _id,
      name,
      propertyName,
      testimonialText,
      "image": image.asset->url,
      clientType,
      featured,
      location
    }`
	);
}

// Query to get featured testimonials
export async function getFeaturedTestimonials() {
	return client.fetch(
		groq`*[_type == "testimonial" && featured == true] | order(_createdAt desc) {
      _id,
      name,
      propertyName,
      testimonialText,
      "image": image.asset->url,
      clientType,
      featured,
      location
    }`
	);
}

// Query to get testimonials by client type
export async function getTestimonialsByClientType(clientType: string) {
	return client.fetch(
		groq`*[_type == "testimonial" && clientType == $clientType] | order(_createdAt desc) {
      _id,
      name,
      propertyName,
      testimonialText,
      "image": image.asset->url,
      clientType,
      featured,
      location
    }`,
		{ clientType }
	);
}
