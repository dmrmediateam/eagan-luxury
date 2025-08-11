export type BlogPost = {
	_id: string;
	title: string;
	slug: string;
	excerpt: string;
	content?: Array<{
		_type: string;
		_key: string;
		[key: string]: unknown;
	}>; // Portable Text content
	publishedAt: string;
	mainImage: {
		url: string;
		alt: string;
	};
	categories: string[];
	tags: string[];
	status: "Draft" | "Published" | "Archived";
	readTime: string;
	relatedListings?: {
		_id: string;
		title: string;
		slug: string;
		status: string;
		price: number;
		heroImage: {
			asset?: {
				_ref: string;
				_type: string;
			};
			[key: string]: unknown;
		};
	}[];
};
