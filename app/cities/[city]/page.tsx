import { notFound } from 'next/navigation'
import { prisma } from '@/lib/db'
import { FooterNew } from '@/components/home/FooterNew'
import NavbarNew from '@/components/home/NavbarNew'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

interface CityPageProps {
	params: Promise<{
		city: string
	}>
}

// City data with specific information for each city
const cityData = {
	'hackettstown': {
		name: 'Hackettstown',
		state: 'NJ',
		county: 'Warren',
		description: 'A charming town in Warren County known for its historic downtown, excellent schools, and family-friendly atmosphere. Perfect for those seeking a suburban lifestyle with easy access to major highways.',
		highlights: ['Historic Downtown', 'Excellent Schools', 'Family-Friendly', 'Easy Commuting', 'Community Events', 'Outdoor Recreation'],
		marketStats: {
			medianPrice: 425000,
			avgDaysOnMarket: 45,
			pricePerSqFt: 245,
			avgBeds: 3.2,
			avgBaths: 2.1,
			avgSqFt: 1850,
			priceTrend: '+5.2%',
			inventoryLevel: 'Low',
			marketType: 'Seller\'s Market'
		}
	},
	'washington': {
		name: 'Washington',
		state: 'NJ',
		county: 'Warren',
		description: 'A picturesque borough in Warren County offering rural charm with modern conveniences. Known for its beautiful landscapes, outdoor recreation opportunities, and tight-knit community.',
		highlights: ['Rural Charm', 'Outdoor Recreation', 'Tight-Knit Community', 'Beautiful Landscapes', 'Historic Sites', 'Family-Friendly'],
		marketStats: {
			medianPrice: 385000,
			avgDaysOnMarket: 52,
			pricePerSqFt: 220,
			avgBeds: 3.0,
			avgBaths: 2.0,
			avgSqFt: 1750,
			priceTrend: '+3.8%',
			inventoryLevel: 'Medium',
			marketType: 'Balanced Market'
		}
	},
	'andover': {
		name: 'Andover',
		state: 'NJ',
		county: 'Sussex',
		description: 'A picturesque borough in Sussex County offering rural charm with modern conveniences. Known for its beautiful landscapes, outdoor recreation opportunities, and tight-knit community.',
		highlights: ['Rural Charm', 'Outdoor Recreation', 'Tight-Knit Community', 'Beautiful Landscapes', 'Historic Sites', 'Peaceful Setting'],
		marketStats: {
			medianPrice: 425000,
			avgDaysOnMarket: 48,
			pricePerSqFt: 235,
			avgBeds: 3.1,
			avgBaths: 2.0,
			avgSqFt: 1800,
			priceTrend: '+4.1%',
			inventoryLevel: 'Low',
			marketType: 'Seller\'s Market'
		}
	},
	'byram': {
		name: 'Byram',
		state: 'NJ',
		county: 'Sussex',
		description: 'A township in Sussex County featuring a mix of residential areas and natural beauty. Home to Lake Musconetcong and offering excellent recreational opportunities for outdoor enthusiasts.',
		highlights: ['Lake Musconetcong', 'Outdoor Recreation', 'Residential Areas', 'Natural Beauty', 'Water Activities', 'Family-Friendly'],
		marketStats: {
			medianPrice: 525000,
			avgDaysOnMarket: 38,
			pricePerSqFt: 280,
			avgBeds: 3.5,
			avgBaths: 2.5,
			avgSqFt: 2100,
			priceTrend: '+6.2%',
			inventoryLevel: 'Low',
			marketType: 'Seller\'s Market'
		}
	},
	'blairstown': {
		name: 'Blairstown',
		state: 'NJ',
		county: 'Warren',
		description: 'A historic township in Warren County known for its colonial architecture, excellent schools, and peaceful country setting. Perfect for those seeking a quiet, rural lifestyle.',
		highlights: ['Historic Architecture', 'Excellent Schools', 'Rural Setting', 'Peaceful Lifestyle', 'Colonial Charm', 'Natural Beauty'],
		marketStats: {
			medianPrice: 550000,
			avgDaysOnMarket: 42,
			pricePerSqFt: 295,
			avgBeds: 3.3,
			avgBaths: 2.2,
			avgSqFt: 1850,
			priceTrend: '+7.1%',
			inventoryLevel: 'Low',
			marketType: 'Seller\'s Market'
		}
	},
	'chester': {
		name: 'Chester',
		state: 'NJ',
		county: 'Morris',
		description: 'A borough in Morris County offering a perfect blend of small-town charm and modern amenities. Known for its excellent schools, shopping, and convenient location.',
		highlights: ['Small-Town Charm', 'Modern Amenities', 'Excellent Schools', 'Convenient Location', 'Shopping', 'Family-Friendly'],
		marketStats: {
			medianPrice: 675000,
			avgDaysOnMarket: 35,
			pricePerSqFt: 320,
			avgBeds: 3.8,
			avgBaths: 2.5,
			avgSqFt: 2200,
			priceTrend: '+8.3%',
			inventoryLevel: 'Low',
			marketType: 'Seller\'s Market'
		}
	}
}

// Generate metadata for the city
export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
	const { city } = await params
	const cityInfo = cityData[city as keyof typeof cityData]
	
	if (!cityInfo) {
		return {
			title: 'City Not Found | Cheryl Towey - New Jersey Real Estate Agent',
			description: 'The requested city page could not be found.'
		}
	}

	return {
		title: `Homes for Sale in ${cityInfo.name}, ${cityInfo.state} | Cheryl Towey - New Jersey Real Estate Agent`,
		description: `Find your dream home in ${cityInfo.name}, ${cityInfo.state}. Browse current listings, explore market statistics, and discover why ${cityInfo.name} is the perfect place to call home. Expert real estate guidance from Cheryl Towey.`,
		keywords: `homes for sale ${cityInfo.name} ${cityInfo.state}, ${cityInfo.name} real estate, houses for sale ${cityInfo.name}, ${cityInfo.name} ${cityInfo.state} homes, ${cityInfo.name} property listings, real estate agent ${cityInfo.name}, Cheryl Towey ${cityInfo.name}, Weichert Realtors ${cityInfo.name}, ${cityInfo.county} County homes, New Jersey real estate`,
		openGraph: {
			title: `Homes for Sale in ${cityInfo.name}, ${cityInfo.state} | Cheryl Towey - New Jersey Real Estate Agent`,
			description: `Find your dream home in ${cityInfo.name}, ${cityInfo.state}. Browse current listings, explore market statistics, and discover why ${cityInfo.name} is the perfect place to call home.`,
			type: 'website',
			locale: 'en_US',
		},
		alternates: {
			canonical: `https://cheryl-towey.com/cities/${city}`
		}
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
	}
}

export default async function CityPage({ params }: CityPageProps) {
	const { city } = await params
	const cityInfo = cityData[city as keyof typeof cityData]
	
	if (!cityInfo) {
		notFound()
	}

	// Fetch all active listings in the city
	const listings = await prisma.listing.findMany({
		where: {
			city: cityInfo.name,
			deletedYn: false,
			standardStatus: 'Active'
		},
		include: {
			media: {
				orderBy: { order: 'asc' },
				take: 1
			}
		},
		orderBy: { modificationTimestamp: 'desc' }
	})

	// Serialize listings to handle Decimal objects
	const serializedListings = listings.map(serializeListing)

	// Update market stats with actual listing count
	const marketStats = {
		...cityInfo.marketStats,
		activeListings: serializedListings.length
	}

	// Format price
	const formatPrice = (price?: number) => {
		if (!price) return "Price on request"
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		}).format(price)
	}

	// Format address
	const formatAddress = (listing: any) => {
		return `${listing.addressFull}, ${listing.city}, ${listing.state} ${listing.postalCode}`
	}

	return (
		<div className="min-h-screen bg-white">
			{/* Header/Navbar */}
			<NavbarNew />

			{/* Hero Section */}
			<section className="relative h-[70vh] bg-gray-200">
				<Image
					src="/mr/mrg.jpg"
					alt={`Homes for Sale in ${cityInfo.name}, ${cityInfo.state}`}
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-black/40" />
				
				{/* Hero Content */}
				<div className="absolute inset-0 flex items-center">
					<div className="mx-[5%] md:mx-[10%] lg:mx-[15%] w-full">
						<div className="text-white max-w-4xl">
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-4">
								Homes for Sale in {cityInfo.name}, {cityInfo.state}
							</h1>
							<div className="h-[2px] bg-yellow-500 w-24 mb-6"></div>
							<p className="text-xl md:text-2xl text-white/90 mb-8">
								Discover your perfect home in this charming {cityInfo.county} County {cityInfo.name === 'Chester' ? 'borough' : 'town'}
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Link
									href="#listings"
									className="px-8 py-4 bg-yellow-500 text-black font-sans text-sm tracking-wider uppercase transition-all duration-300 hover:bg-yellow-600"
								>
									View All Listings
								</Link>
								<Link
									href="#market-stats"
									className="px-8 py-4 border border-white text-white font-sans text-sm tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-black"
								>
									Market Statistics
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* City Overview */}
			<section className="py-20 bg-gray-50">
				<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-serif font-light mb-6">
								Why Choose {cityInfo.name}?
							</h2>
							<div className="space-y-4 text-gray-700">
								<p className="text-lg leading-relaxed">
									{cityInfo.description}
								</p>
							</div>
							
							{/* City Highlights */}
							<div className="mt-8">
								<h3 className="text-xl font-medium text-gray-900 mb-4">City Highlights</h3>
								<div className="grid grid-cols-2 gap-4">
									{cityInfo.highlights.map((highlight, index) => (
										<div
											key={highlight}
											className="flex items-center text-gray-700"
										>
											<svg className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
											</svg>
											<span>{highlight}</span>
										</div>
									))}
								</div>
							</div>
						</div>

						<div className="relative">
							<Image
								src="/mr/mrg.jpg"
								alt={`${cityInfo.name}, ${cityInfo.state}`}
								width={600}
								height={400}
								className="rounded-lg shadow-lg"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Property Listings */}
			<section id="listings" className="py-20">
				<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-serif font-light mb-4">
							Current Listings in {cityInfo.name}
						</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Browse our current selection of homes for sale in {cityInfo.name}, {cityInfo.state}. 
							Each listing represents a unique opportunity to find your perfect home.
						</p>
					</div>

					{serializedListings.length > 0 ? (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{serializedListings.map((listing: any, index: number) => (
								<div
									key={listing.id}
									className="group"
								>
									<Link href={`/listing/${listing.listingKey}`}>
										<div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
											<div className="relative aspect-[4/3] overflow-hidden">
												<Image
													src={listing.media?.[0]?.url || '/placeholder.jpg'}
													alt={formatAddress(listing)}
													fill
													className="object-cover group-hover:scale-105 transition-transform duration-300"
												/>
												<div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-sm font-medium">
													{formatPrice(listing.listPrice)}
												</div>
												<div className="absolute top-4 right-4 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-medium uppercase tracking-wide">
													{listing.standardStatus}
												</div>
											</div>
											
											<div className="p-6">
												<h3 className="font-medium text-gray-900 mb-2 line-clamp-1">
													{formatAddress(listing)}
												</h3>
												<p className="text-gray-600 text-sm mb-4">{listing.city}, {listing.state}</p>
												<div className="flex items-center justify-between text-sm text-gray-500">
													<span>{listing.bedsTotal} Beds</span>
													<span>{listing.bathsFull} Baths</span>
													<span>{listing.livingArea?.toLocaleString()} Sq Ft</span>
												</div>
											</div>
										</div>
									</Link>
								</div>
							))}
						</div>
					) : (
						<div className="text-center py-12">
							<div className="text-gray-500 mb-4">
								<p className="text-lg">No active listings in {cityInfo.name} at this time.</p>
								<p className="text-sm mt-2">Contact Cheryl to be notified when new properties become available.</p>
							</div>
							<Link
								href="/contact"
								className="inline-flex items-center px-8 py-4 bg-yellow-500 text-black font-sans text-sm tracking-wider uppercase transition-all duration-300 hover:bg-yellow-600"
							>
								Contact Cheryl
							</Link>
						</div>
					)}
				</div>
			</section>

			{/* Market Statistics */}
			<section id="market-stats" className="py-20 bg-gray-50">
				<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-serif font-light mb-4">
							{cityInfo.name} Market Statistics
						</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Stay informed with the latest market data for {cityInfo.name}, {cityInfo.state} real estate.
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
						{[
							{ label: 'Median Price', value: formatPrice(marketStats.medianPrice) },
							{ label: 'Avg Days on Market', value: `${marketStats.avgDaysOnMarket} days` },
							{ label: 'Price per Sq Ft', value: `$${marketStats.pricePerSqFt}` },
							{ label: 'Active Listings', value: marketStats.activeListings.toString() }
						].map((stat, index) => (
							<div
								key={stat.label}
								className="bg-white p-6 rounded-lg shadow-sm text-center"
							>
								<div className="text-2xl font-serif font-light text-gray-900 mb-2">
									{stat.value}
								</div>
								<div className="text-sm text-gray-600">
									{stat.label}
								</div>
							</div>
						))}
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="bg-white p-8 rounded-lg shadow-sm">
							<h3 className="text-xl font-serif font-light mb-6">Market Overview</h3>
							<div className="space-y-4">
								<div className="flex justify-between items-center">
									<span className="text-gray-600">Market Type:</span>
									<span className="font-medium text-gray-900">{marketStats.marketType}</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-gray-600">Price Trend:</span>
									<span className="font-medium text-green-600">{marketStats.priceTrend}</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-gray-600">Inventory Level:</span>
									<span className="font-medium text-gray-900">{marketStats.inventoryLevel}</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-gray-600">Average Beds:</span>
									<span className="font-medium text-gray-900">{marketStats.avgBeds}</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-gray-600">Average Baths:</span>
									<span className="font-medium text-gray-900">{marketStats.avgBaths}</span>
								</div>
								<div className="flex justify-between items-center">
									<span className="text-gray-600">Average Sq Ft:</span>
									<span className="font-medium text-gray-900">{marketStats.avgSqFt.toLocaleString()}</span>
								</div>
							</div>
						</div>

						<div className="bg-white p-8 rounded-lg shadow-sm">
							<h3 className="text-xl font-serif font-light mb-6">Why {cityInfo.name}?</h3>
							<div className="space-y-4">
								{cityInfo.highlights.slice(0, 4).map((highlight, index) => (
									<div key={highlight} className="flex items-start">
										<svg className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
										</svg>
										<div>
											<h4 className="font-medium text-gray-900">{highlight}</h4>
											<p className="text-sm text-gray-600">One of {cityInfo.name}'s key attractions</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-[#222223] text-white">
				<div className="mx-[5%] md:mx-[10%] lg:mx-[15%] text-center">
					<div>
						<h2 className="text-3xl font-serif font-light mb-4">
							Ready to Find Your Dream Home in {cityInfo.name}?
						</h2>
						<p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
							Let Cheryl Towey help you navigate the {cityInfo.name} real estate market and find the perfect home for your family.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/contact"
								className="px-8 py-4 bg-yellow-500 text-black font-sans text-sm tracking-wider uppercase transition-all duration-300 hover:bg-yellow-600"
							>
								Contact Cheryl
							</Link>
							<Link
								href="/listings/active"
								className="px-8 py-4 border border-white text-white font-sans text-sm tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-black"
							>
								View All Listings
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<FooterNew />
		</div>
	)
}
