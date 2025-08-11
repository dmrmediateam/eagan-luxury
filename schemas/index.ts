// schemas/index.ts

// Lazy load schemas to improve initial load time

// Define schema types with dynamic imports
const ListingLoader = () =>
	import("./Listing").then((module) => module.Listing);
const ContentPostLoader = () =>
	import("./ContentPost").then((module) => module.ContentPost);
const CommunityLoader = () =>
	import("./Community").then((module) => module.Community);
const FAQLoader = () => import("./FAQ").then((module) => module.default);
const AgentLoader = () => import("./Agent").then((module) => module.Agent);
const NearbyAreaLoader = () =>
	import("./NearbyArea").then((module) => module.NearbyArea);
const ResultsLoader = () =>
	import("./Results").then((module) => module.Results);
const TestimonialLoader = () =>
	import("./Testimonial").then((module) => module.Testimonial);
const MarketStatsLoader = () =>
	import("./marketStats").then((module) => module.marketStatsSchemas);
const ResourceLoader = () =>
	import("./Resource").then((module) => module.Resource);

// Export the schema loaders as an array
export const schemaTypes = [
	ListingLoader,
	ContentPostLoader,
	CommunityLoader,
	FAQLoader,
	AgentLoader,
	NearbyAreaLoader,
	ResultsLoader,
	TestimonialLoader,
	MarketStatsLoader,
	ResourceLoader
];

// Export individual schema definitions and types/interfaces
export { Listing } from "./Listing";
export { ContentPost } from "./ContentPost";
export { Community } from "./Community";
export { default as FAQ } from "./FAQ";
export * from "./Agent";
export * from "./NearbyArea";
export * from "./Results";
export * from "./Testimonial";
export * from "./marketStats";
export * from "./Resource";
