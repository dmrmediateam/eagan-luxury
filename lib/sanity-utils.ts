import { client } from "./client";
import imageUrlBuilder from "@sanity/image-url";
import type {
	SanityImageSource,
	SanityAsset,
	SanityReference,
	SanityImageObject
} from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);

/**
 * Generates image URLs with transformations from Sanity image references.
 * @param source - The Sanity image source object (must include asset reference).
 * @returns An image URL builder instance.
 */
export function urlForImage(source: SanityImageSource) {
	// Refined type check for SanityImageSource being an object with asset._ref
	if (
		typeof source !== "object" ||
		!source ||
		!("asset" in source) || // Check if source is an object with an asset property
		!(source.asset as SanityAsset | SanityReference)?._ref // Check if asset has _ref
	) {
		// Return a dummy builder or handle error appropriately if asset ref is missing
		console.warn(
			"Missing or invalid asset reference in source for urlForImage:",
			source
		);
		// Dummy source to prevent crashing the builder, but indicates an issue upstream.
		return builder.image({ _type: "image", asset: { _ref: "" } });
	}
	// Now TypeScript knows source is likely SanityImageObject or similar with asset._ref
	return builder.image(source as SanityImageObject); // Cast for clarity if needed
}

/**
 * Generates the direct URL for a Sanity file asset (e.g., video, pdf).
 * @param fileReference - The Sanity file reference object containing the asset ref.
 * @returns The direct URL to the file, or undefined if invalid.
 */
export function urlForFile(fileReference: {
	asset?: { _ref: string };
}): string | undefined {
	if (!fileReference?.asset?._ref) {
		console.warn(
			"Missing asset reference in source for urlForFile:",
			fileReference
		);
		return undefined;
	}

	const fileRef = fileReference.asset._ref;
	// Example ref: file-123abc456def-pdf
	const matches = fileRef.match(/^file-([a-fA-F0-9]+)-([a-zA-Z0-9]+)$/);

	if (!matches || matches.length < 3) {
		console.error("Invalid file asset _ref format:", fileRef);
		return undefined;
	}

	const assetId = matches[1];
	const extension = matches[2];

	const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
	const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

	if (!projectId || !dataset) {
		console.error(
			"Sanity projectId or dataset missing in environment variables."
		);
		return undefined;
	}

	return `https://cdn.sanity.io/files/${projectId}/${dataset}/${assetId}.${extension}`;
}
