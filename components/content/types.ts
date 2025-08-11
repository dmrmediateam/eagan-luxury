import { StaticImageData } from "next/image";

export interface SanityContentBlock {
	_type: string;
	_key: string;
	children?: SanitySpan[];
	[key: string]: unknown;
}

export interface SanitySpan {
	_type: string;
	_key: string;
	text?: string;
	marks?: string[];
	[key: string]: unknown;
}

export interface ContentItem {
	id: string;
	title: string;
	slug: string;
	excerpt: string;
	date: string;
	category: string;
	image: StaticImageData | string;
	content?: SanityContentBlock[];

	// Optional fields for both blog posts and press releases
	author?: string;
	readTime?: string;
	source?: string;
	sourceUrl?: string;
	location?: string;
	featured?: boolean;
}
