import Image from "next/image";
import Link from "next/link";

interface PropertyListing {
	_id: string;
	title: string;
	slug: string;
	price: number;
	status: string;
	address: {
		street?: string;
		city?: string;
		state?: string;
		zipCode?: string;
	};
	propertyDetails: {
		beds: number;
		baths: number;
		sqft: number;
	};
	heroMedia: {
		heroImage: {
			url: string;
			alt: string;
		};
	};
}

interface CommunityListingsProps {
	listings: PropertyListing[];
}

export default function CommunityListings({
	listings
}: CommunityListingsProps) {
	// Format price with commas and dollar sign
	const formatPrice = (price: number) => {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			maximumFractionDigits: 0
		}).format(price);
	};

	// Format status for display
	const formatStatus = (status: string) => {
		return status
			.replace(/-/g, " ")
			.replace(/\b\w/g, (l) => l.toUpperCase());
	};

	return (
		<aside className="bg-gray-50 p-6 rounded-lg shadow-sm">
			<h2 className="text-2xl font-semibold mb-6">
				Properties in This Community
			</h2>

			<div className="space-y-6">
				{listings.map((listing) => (
					<Link
						href={`/listings/${listing.slug}`}
						key={listing._id}
						className="block group">
						<div className="bg-white rounded-lg overflow-hidden shadow-sm transition-shadow group-hover:shadow-md">
							{/* Property Image */}
							<div className="relative h-48 w-full">
								<Image
									src={listing.heroMedia.heroImage.url}
									alt={
										listing.heroMedia.heroImage.alt ||
										listing.title
									}
									fill
									className="object-cover"
								/>
								{/* Status Badge */}
								<div className="absolute top-2 right-2 px-2 py-1 text-xs font-medium bg-white/90 text-gray-800 rounded">
									{formatStatus(listing.status)}
								</div>
							</div>

							{/* Property Details */}
							<div className="p-4">
								<h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
									{listing.title}
								</h3>

								<p className="text-gray-500 text-sm mb-2">
									{listing.address.city &&
									listing.address.state
										? `${listing.address.city}, ${listing.address.state}`
										: "Location not specified"}
								</p>

								<p className="text-xl font-bold text-gray-900 mb-3">
									{formatPrice(listing.price)}
								</p>

								<div className="flex justify-between text-sm text-gray-600">
									<span>
										{listing.propertyDetails.beds} Beds
									</span>
									<span>
										{listing.propertyDetails.baths} Baths
									</span>
									<span>
										{listing.propertyDetails.sqft.toLocaleString()}{" "}
										Sq Ft
									</span>
								</div>
							</div>
						</div>
					</Link>
				))}

				{listings.length === 0 && (
					<p className="text-gray-500 text-center py-4">
						No properties currently available in this community.
					</p>
				)}
			</div>
		</aside>
	);
}
