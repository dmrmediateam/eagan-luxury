import { notFound } from 'next/navigation'
import { prisma } from '@/lib/db'
import { FooterNew } from '@/components/home/FooterNew'
import { SimilarListings } from '@/components/listings/SimilarListings'
import { PropertyDetails } from '@/components/listings/PropertyDetails'
import NavbarNew from '@/components/home/NavbarNew'
import Image from 'next/image'
import type { Metadata } from 'next'

interface ListingPageProps { 
	params: Promise<{ 
		slug: string 
	}>
}

// Generate metadata for the listing
export async function generateMetadata({ params }: ListingPageProps): Promise<Metadata> {
	const { slug } = await params
	
	const listing = await prisma.listing.findFirst({
		where: {
			listingKey: slug,
			deletedYn: false
		},
		include: {
			media: {
				orderBy: { order: 'asc' }
			},
			mls: true
		}
	})

	if (!listing) {
		return {
			title: 'Listing Not Found | Cheryl Towey - New Jersey Real Estate Agent',
			description: 'The requested property listing could not be found.'
		}
	}

	const address = `${listing.addressFull}, ${listing.city}, ${listing.state} ${listing.postalCode}`
	
	return {
		title: `${address} | Cheryl Towey - New Jersey Real Estate Agent`,
		description: listing.remarksPublic || `Discover this ${listing.bedsTotal}-bedroom, ${listing.bathsFull}-bath property at ${address}.`,
		keywords: `${listing.city} NJ, ${listing.county} County, ${listing.propertyType}, ${listing.bedsTotal} Bedroom, Cheryl Towey, Weichert Realtors, New Jersey Real Estate`,
		openGraph: {
			title: `${address} | Cheryl Towey - New Jersey Real Estate Agent`,
			description: listing.remarksPublic || `Discover this ${listing.bedsTotal}-bedroom, ${listing.bathsFull}-bath property at ${address}.`,
			type: 'website',
			locale: 'en_US',
		},
	}
}

// Helper function to serialize Decimal objects
function serializeListing(listing: any) {
	return {
		...listing,
		listPrice: listing.listPrice ? Number(listing.listPrice) : null,
		closePrice: listing.closePrice ? Number(listing.closePrice) : null,
		originalListPrice: listing.originalListPrice ? Number(listing.originalListPrice) : null,
		livingArea: listing.livingArea ? Number(listing.livingArea) : null,
		lotSizeAcres: listing.lotSizeAcres ? Number(listing.lotSizeAcres) : null,
		latitude: listing.latitude ? Number(listing.latitude) : null,
		longitude: listing.longitude ? Number(listing.longitude) : null,
		priceHistories: listing.priceHistories?.map((ph: any) => ({
			...ph,
			listPrice: ph.listPrice ? Number(ph.listPrice) : null
		})) || [],
		statusHistories: listing.statusHistories || []
	}
}

export default async function ListingPage({ params }: ListingPageProps) {
	const { slug } = await params
	
	const listing = await prisma.listing.findFirst({
		where: {
			listingKey: slug,
			deletedYn: false
		},
		include: {
			media: {
				orderBy: { order: 'asc' }
			},
			mls: true,
			priceHistories: {
				orderBy: { changedAt: 'desc' }
			},
			statusHistories: {
				orderBy: { changedAt: 'desc' }
			}
		}
	})

	if (!listing) {
		notFound()
	}

	// Serialize the listing to handle Decimal objects
	const serializedListing = serializeListing(listing)

	// Get similar listings
	const similarListings = await prisma.listing.findMany({
		where: {
			city: listing.city,
			deletedYn: false,
			NOT: {
				listingKey: listing.listingKey
			}
		},
		include: {
			media: {
				orderBy: { order: 'asc' },
				take: 1
			}
		},
		take: 4,
		orderBy: { modificationTimestamp: 'desc' }
	})

	// Serialize similar listings
	const serializedSimilarListings = similarListings.map(serializeListing)

	// Format price
	const formatPrice = (price?: any) => {
		if (!price) return "Price on request"
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		}).format(Number(price))
	}

	// Format address
	const formatAddress = () => {
		return `${serializedListing.addressFull}, ${serializedListing.city}, ${serializedListing.state} ${serializedListing.postalCode}`
	}

	// Calculate price per square foot
	const pricePerSqFt = serializedListing.listPrice && serializedListing.livingArea 
		? Number(serializedListing.listPrice) / serializedListing.livingArea 
		: null

	// Market data for the city
	const marketData = {
		'Hackettstown': { medianPrice: 425000, priceTrend: '+5.2%', daysOnMarket: 45 },
		'Washington': { medianPrice: 385000, priceTrend: '+3.8%', daysOnMarket: 52 },
		'Andover': { medianPrice: 425000, priceTrend: '+4.1%', daysOnMarket: 48 },
		'Byram': { medianPrice: 525000, priceTrend: '+6.2%', daysOnMarket: 38 },
		'Blairstown': { medianPrice: 550000, priceTrend: '+7.1%', daysOnMarket: 42 },
		'Chester': { medianPrice: 675000, priceTrend: '+8.3%', daysOnMarket: 35 }
	}

	const cityMarket = marketData[serializedListing.city as keyof typeof marketData] || { medianPrice: 450000, priceTrend: '+4.5%', daysOnMarket: 50 }

	return (
		<div className="min-h-screen bg-white">
			{/* Header/Navbar */}
			<NavbarNew />

			{/* Hero Section */}
			<section className="relative h-[70vh] min-h-[500px] overflow-hidden bg-gray-200">
				{serializedListing.media && serializedListing.media.length > 0 && (
					<Image
						src={serializedListing.media[0].url}
						alt={serializedListing.addressFull || 'Property Image'}
						fill
						className="object-cover"
						priority
					/>
				)}
				<div className="absolute inset-0 bg-black/30" />
				
				{/* Hero Content */}
				<div className="absolute inset-0 flex items-center">
					<div className="mx-[5%] md:mx-[10%] lg:mx-[15%] w-full">
						<div className="text-white">
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-4">
								{formatAddress()}
							</h1>
							
							<div className="flex flex-wrap items-center gap-6 mb-8">
								<div className="text-2xl md:text-3xl font-serif">
									{formatPrice(serializedListing.listPrice)}
								</div>
								<div className="text-lg opacity-90">
									{serializedListing.bedsTotal} Beds • {serializedListing.bathsFull} Baths • {serializedListing.livingArea?.toLocaleString()} Sq Ft
								</div>
								{pricePerSqFt && (
									<div className="text-lg opacity-90">
										${pricePerSqFt.toFixed(0)}/sq ft
									</div>
								)}
							</div>

							<div className="flex flex-col sm:flex-row gap-4">
								<button className="px-8 py-4 bg-yellow-500 text-black font-sans text-sm tracking-wider uppercase transition-all duration-300 hover:bg-yellow-600">
									Schedule Viewing
								</button>
								<button className="px-8 py-4 border border-white text-white font-sans text-sm tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-black">
									Request Info
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Property Details */}
			<section className="py-20">
				<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
					<div className="space-y-12">
						{/* Property Images */}
						<div>
							<h2 className="text-3xl font-serif font-light mb-6">Property Photos</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
								{serializedListing.media && serializedListing.media.slice(0, 6).map((image: any, index: number) => (
									<div key={image.id} className="aspect-square overflow-hidden rounded-lg">
										<Image
											src={image.url}
											alt={image.caption || `Property photo ${index + 1}`}
											width={400}
											height={400}
											className="w-full h-full object-cover"
										/>
									</div>
								))}
							</div>
						</div>

						{/* Main Content Grid */}
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
							{/* Left Column - Property Information */}
							<div className="lg:col-span-2 space-y-12">
								{/* About This Property */}
								<div>
									<h2 className="text-3xl font-serif font-light mb-6">About This Property</h2>
									<div className="prose prose-lg max-w-none">
										<p className="text-[#222223]/80 leading-relaxed text-lg">
											{serializedListing.remarksPublic || 'No description available for this property.'}
										</p>
									</div>
								</div>

								{/* Property Details */}
								<PropertyDetails listing={serializedListing} />

								{/* Local Market Information */}
								<div>
									<h3 className="text-2xl font-serif font-light mb-6">Local Market Information</h3>
									<div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-200">
										<h4 className="text-lg font-medium text-[#222223] mb-3">{serializedListing.city} Market Overview</h4>
										<p className="text-[#222223]/80 leading-relaxed mb-4">
											{serializedListing.city} is experiencing a strong market with excellent investment potential. 
											Properties in this area typically sell within {cityMarket.daysOnMarket} days.
										</p>
										
										<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
											<div className="text-center">
												<div className="text-lg font-medium text-[#222223]">{formatPrice(cityMarket.medianPrice)}</div>
												<div className="text-sm text-[#222223]/70">Median Price</div>
											</div>
											<div className="text-center">
												<div className="text-lg font-medium text-green-600">{cityMarket.priceTrend}</div>
												<div className="text-sm text-[#222223]/70">Price Trend</div>
											</div>
											<div className="text-center">
												<div className="text-lg font-medium text-[#222223]">{cityMarket.daysOnMarket}</div>
												<div className="text-sm text-[#222223]/70">Avg. Days on Market</div>
											</div>
											<div className="text-center">
												<div className="text-lg font-medium text-[#222223]">Low</div>
												<div className="text-sm text-[#222223]/70">Inventory Level</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Right Column - Sidebar */}
							<div className="space-y-8">
								{/* Price Information */}
								<div className="bg-[#F9F9F9] p-6 rounded-lg">
									<h3 className="text-xl font-serif font-light mb-4">Price Information</h3>
									<div className="space-y-3">
										<div className="flex justify-between">
											<span className="text-[#222223]/70">List Price:</span>
											<span className="text-[#222223] font-medium">{formatPrice(serializedListing.listPrice)}</span>
										</div>
										{pricePerSqFt && (
											<div className="flex justify-between">
												<span className="text-[#222223]/70">Price per Sq Ft:</span>
												<span className="text-[#222223] font-medium">${pricePerSqFt.toFixed(0)}</span>
											</div>
										)}
										{serializedListing.originalListPrice && serializedListing.originalListPrice !== serializedListing.listPrice && (
											<div className="flex justify-between">
												<span className="text-[#222223]/70">Original Price:</span>
												<span className="text-[#222223] font-medium line-through">{formatPrice(serializedListing.originalListPrice)}</span>
											</div>
										)}
									</div>
								</div>

								{/* Simple Loan Calculator */}
								<div className="bg-[#F9F9F9] p-6 rounded-lg">
									<h3 className="text-xl font-serif font-light mb-4">Payment Calculator</h3>
									<div className="space-y-4">
										<div>
											<label className="block text-sm font-medium text-[#222223]/70 mb-2">
												Estimated Monthly Payment
											</label>
											<div className="text-2xl font-serif text-[#222223] mb-2">
												{formatPrice(Number(serializedListing.listPrice) * 0.005)}
											</div>
											<div className="text-xs text-[#222223]/60">
												Based on 20% down, 6.5% interest, 30-year fixed
											</div>
										</div>
										<div className="text-xs text-[#222223]/50 p-3 bg-gray-100 rounded">
											<p>
												This is an estimate only. Contact a mortgage lender for personalized quotes.
											</p>
										</div>
									</div>
								</div>

								{/* Location Information */}
								<div className="bg-[#F9F9F9] p-6 rounded-lg">
									<h3 className="text-xl font-serif font-light mb-4">Location</h3>
									<div className="space-y-3">
										<div>
											<span className="text-[#222223]/70 block text-sm">Address:</span>
											<span className="text-[#222223]">{formatAddress()}</span>
										</div>
										<div>
											<span className="text-[#222223]/70 block text-sm">County:</span>
											<span className="text-[#222223]">{serializedListing.county}</span>
										</div>
										{serializedListing.subdivision && (
											<div>
												<span className="text-[#222223]/70 block text-sm">Subdivision:</span>
												<span className="text-[#222223]">{serializedListing.subdivision}</span>
											</div>
										)}
										{serializedListing.latitude && serializedListing.longitude && (
											<div>
												<span className="text-[#222223]/70 block text-sm">Coordinates:</span>
												<span className="text-[#222223] text-sm">
													{Number(serializedListing.latitude).toFixed(4)}, {Number(serializedListing.longitude).toFixed(4)}
												</span>
											</div>
										)}
									</div>
								</div>

								{/* Contact Information */}
								<div className="bg-[#F9F9F9] p-6 rounded-lg">
									<h3 className="text-xl font-serif font-light mb-4">Contact Information</h3>
									<div className="space-y-3">
										<div>
											<span className="text-[#222223]/70 block text-sm">Agent:</span>
											<span className="text-[#222223]">Cheryl Towey</span>
										</div>
										<div>
											<span className="text-[#222223]/70 block text-sm">Phone:</span>
											<a href="tel:(908) 334-0971" className="text-yellow-500 hover:text-yellow-600">
												(908) 334-0971
											</a>
										</div>
										<div>
											<span className="text-[#222223]/70 block text-sm">Email:</span>
											<a href="mailto:cheryl.towey@weichert.com" className="text-yellow-500 hover:text-yellow-600">
												cheryl.towey@weichert.com
											</a>
										</div>
										<div>
											<span className="text-[#222223]/70 block text-sm">Office:</span>
											<span className="text-[#222223]">Weichert Realtors</span>
										</div>
									</div>
								</div>

								{/* MLS Information */}
								<div className="bg-[#F9F9F9] p-6 rounded-lg">
									<h3 className="text-xl font-serif font-light mb-4">MLS Information</h3>
									<div className="space-y-3">
										<div>
											<span className="text-[#222223]/70 block text-sm">MLS:</span>
											<span className="text-[#222223]">{serializedListing.mls.name}</span>
										</div>
										<div>
											<span className="text-[#222223]/70 block text-sm">Listing ID:</span>
											<span className="text-[#222223]">{serializedListing.listingId}</span>
										</div>
										<div>
											<span className="text-[#222223]/70 block text-sm">Last Updated:</span>
											<span className="text-[#222223]">
												{serializedListing.modificationTimestamp ? new Date(serializedListing.modificationTimestamp).toLocaleDateString() : 'N/A'}
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Similar Listings */}
			<SimilarListings listings={serializedSimilarListings} currentListing={serializedListing} />

			{/* Footer */}
			<FooterNew />
		</div>
	)
}

