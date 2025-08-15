export interface Listing {
	id: string;
	listingKey: string;
	addressFull: string;
	city: string;
	state: string;
	postalCode: string;
	listPrice: number;
	bedsTotal: number;
	bathsFull: number;
	livingArea: number;
	media: Array<{
		id: string;
		url: string;
		order: number;
	}>;
}
