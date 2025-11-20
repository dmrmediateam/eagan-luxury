// schemas/index.ts

// Import schemas synchronously for Sanity Studio
import { Blog } from "./Blog";
import { Author } from "./Author";
import { Business } from "./Business";
import { Resource } from "./Resource";

// Export the schema types as an array for Sanity Studio
export const schemaTypes = [
	Blog,
	Author,
	Business,
	Resource
];

// Export individual schema definitions and types/interfaces
export { Blog } from "./Blog";
export { Author } from "./Author";
export { Business } from "./Business";
export { Resource } from "./Resource";
