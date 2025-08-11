import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03";

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: false // Set to true for production
});

// For preview functionality
export const previewClient = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: false,
	token: process.env.SANITY_API_TOKEN
});

// Helper function to determine which client to use
export const getClient = (usePreview = false) =>
	usePreview ? previewClient : client;
