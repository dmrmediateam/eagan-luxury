import { notFound } from 'next/navigation'
import { prisma } from '@/lib/db'
import { FooterNew } from '@/components/home/FooterNew'
import NavbarNew from '@/components/home/NavbarNew'
import CityPropertiesView from '@/components/properties/CityPropertiesView'
import { getAllServiceAreas } from '@/lib/cheryl-service-areas'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

interface PropertyTypePageProps {
	params: Promise<{
		city: string
		propertyType: string
	}>
	searchParams: Promise<{
		[key: string]: string | string[] | undefined
	}>
}

// Property type configurations
const PROPERTY_TYPES = {
	'condos': {
		name: 'Condos',
		description: 'Modern condominium living with amenities and low maintenance',
		icon: '🏢',
		filter: 'Condo'
	},
	'land': {
		name: 'Land',
		description: 'Buildable lots and acreage for custom homes',
		icon: '🌲',
		filter: 'Land'
	},
	'duplexes': {
		name: 'Duplexes',
		description: 'Multi-family properties perfect for investors or extended families',
		icon: '🏘️',
		filter: 'Multi-Family'
	},
	'townhomes': {
		name: 'Townhomes',
		description: 'Attached homes offering space and convenience',
		icon: '🏠',
		filter: 'Townhouse'
	},
	'commercial': {
		name: 'Commercial',
		description: 'Business properties and investment opportunities',
		icon: '🏢',
		filter: 'Commercial'
	},
	'waterfront': {
		name: 'Waterfront',
		description: 'Properties with water access and scenic views',
		icon: '🌊',
		filter: 'Waterfront'
	}
}

// City information - Generated from all service areas
const CITY_INFO = {
	// Primary Service Areas - Warren County
	hackettstown: { name: 'Hackettstown', state: 'NJ', county: 'Warren' },
	washington: { name: 'Washington', state: 'NJ', county: 'Warren' },
	blairstown: { name: 'Blairstown', state: 'NJ', county: 'Warren' },
	
	// Primary Service Areas - Sussex County
	andover: { name: 'Andover', state: 'NJ', county: 'Sussex' },
	byram: { name: 'Byram', state: 'NJ', county: 'Sussex' },
	
	// Primary Service Areas - Morris County
	chester: { name: 'Chester', state: 'NJ', county: 'Morris' },
	
	// Extended Service Areas - Warren County
	belvidere: { name: 'Belvidere', state: 'NJ', county: 'Warren' },
	phillipsburg: { name: 'Phillipsburg', state: 'NJ', county: 'Warren' },
	oxford: { name: 'Oxford', state: 'NJ', county: 'Warren' },
	pohatcong: { name: 'Pohatcong', state: 'NJ', county: 'Warren' },
	franklin: { name: 'Franklin', state: 'NJ', county: 'Warren' },
	hope: { name: 'Hope', state: 'NJ', county: 'Warren' },
	alpha: { name: 'Alpha', state: 'NJ', county: 'Warren' },
	allamuchy: { name: 'Allamuchy', state: 'NJ', county: 'Warren' },
	frelinghuysen: { name: 'Frelinghuysen', state: 'NJ', county: 'Warren' },
	greenwich: { name: 'Greenwich', state: 'NJ', county: 'Warren' },
	hardwick: { name: 'Hardwick', state: 'NJ', county: 'Warren' },
	harmony: { name: 'Harmony', state: 'NJ', county: 'Warren' },
	independence: { name: 'Independence', state: 'NJ', county: 'Warren' },
	knowlton: { name: 'Knowlton', state: 'NJ', county: 'Warren' },
	liberty: { name: 'Liberty', state: 'NJ', county: 'Warren' },
	lopatcong: { name: 'Lopatcong', state: 'NJ', county: 'Warren' },
	mansfield: { name: 'Mansfield', state: 'NJ', county: 'Warren' },
	white: { name: 'White', state: 'NJ', county: 'Warren' },
	
	// Extended Service Areas - Sussex County
	hopatcong: { name: 'Hopatcong', state: 'NJ', county: 'Sussex' },
	sparta: { name: 'Sparta', state: 'NJ', county: 'Sussex' },
	vernon: { name: 'Vernon', state: 'NJ', county: 'Sussex' },
	newton: { name: 'Newton', state: 'NJ', county: 'Sussex' },
	branchville: { name: 'Branchville', state: 'NJ', county: 'Sussex' },
	frankford: { name: 'Frankford', state: 'NJ', county: 'Sussex' },
	fredon: { name: 'Fredon', state: 'NJ', county: 'Sussex' },
	green: { name: 'Green', state: 'NJ', county: 'Sussex' },
	hamburg: { name: 'Hamburg', state: 'NJ', county: 'Sussex' },
	hampton: { name: 'Hampton', state: 'NJ', county: 'Sussex' },
	hardyston: { name: 'Hardyston', state: 'NJ', county: 'Sussex' },
	lafayette: { name: 'Lafayette', state: 'NJ', county: 'Sussex' },
	montague: { name: 'Montague', state: 'NJ', county: 'Sussex' },
	ogdensburg: { name: 'Ogdensburg', state: 'NJ', county: 'Sussex' },
	sandyston: { name: 'Sandyston', state: 'NJ', county: 'Sussex' },
	stanhope: { name: 'Stanhope', state: 'NJ', county: 'Sussex' },
	stillwater: { name: 'Stillwater', state: 'NJ', county: 'Sussex' },
	sussex: { name: 'Sussex', state: 'NJ', county: 'Sussex' },
	walpack: { name: 'Walpack', state: 'NJ', county: 'Sussex' },
	wantage: { name: 'Wantage', state: 'NJ', county: 'Sussex' },
	
	// Extended Service Areas - Morris County
	morristown: { name: 'Morristown', state: 'NJ', county: 'Morris' },
	madison: { name: 'Madison', state: 'NJ', county: 'Morris' },
	chatham: { name: 'Chatham', state: 'NJ', county: 'Morris' },
	boonton: { name: 'Boonton', state: 'NJ', county: 'Morris' },
	butler: { name: 'Butler', state: 'NJ', county: 'Morris' },
	denville: { name: 'Denville', state: 'NJ', county: 'Morris' },
	dover: { name: 'Dover', state: 'NJ', county: 'Morris' },
	'east-hanover': { name: 'East Hanover', state: 'NJ', county: 'Morris' },
	'florham-park': { name: 'Florham Park', state: 'NJ', county: 'Morris' },
	hanover: { name: 'Hanover', state: 'NJ', county: 'Morris' },
	harding: { name: 'Harding', state: 'NJ', county: 'Morris' },
	jefferson: { name: 'Jefferson', state: 'NJ', county: 'Morris' },
	kinnelon: { name: 'Kinnelon', state: 'NJ', county: 'Morris' },
	'lincoln-park': { name: 'Lincoln Park', state: 'NJ', county: 'Morris' },
	'long-hill': { name: 'Long Hill', state: 'NJ', county: 'Morris' },
	mendham: { name: 'Mendham', state: 'NJ', county: 'Morris' },
	'mine-hill': { name: 'Mine Hill', state: 'NJ', county: 'Morris' },
	montville: { name: 'Montville', state: 'NJ', county: 'Morris' },
	morris: { name: 'Morris', state: 'NJ', county: 'Morris' },
	'mount-arlington': { name: 'Mount Arlington', state: 'NJ', county: 'Morris' },
	'mount-olive': { name: 'Mount Olive', state: 'NJ', county: 'Morris' },
	netcong: { name: 'Netcong', state: 'NJ', county: 'Morris' },
	'parsippany-troy-hills': { name: 'Parsippany-Troy Hills', state: 'NJ', county: 'Morris' },
	pequannock: { name: 'Pequannock', state: 'NJ', county: 'Morris' },
	randolph: { name: 'Randolph', state: 'NJ', county: 'Morris' },
	riverdale: { name: 'Riverdale', state: 'NJ', county: 'Morris' },
	rockaway: { name: 'Rockaway', state: 'NJ', county: 'Morris' },
	roxbury: { name: 'Roxbury', state: 'NJ', county: 'Morris' },
	wharton: { name: 'Wharton', state: 'NJ', county: 'Morris' },
	
	// Extended Service Areas - Hunterdon County
	flemington: { name: 'Flemington', state: 'NJ', county: 'Hunterdon' },
	clinton: { name: 'Clinton', state: 'NJ', county: 'Hunterdon' },
	lambertville: { name: 'Lambertville', state: 'NJ', county: 'Hunterdon' },
	alexandria: { name: 'Alexandria', state: 'NJ', county: 'Hunterdon' },
	bethlehem: { name: 'Bethlehem', state: 'NJ', county: 'Hunterdon' },
	bloomsbury: { name: 'Bloomsbury', state: 'NJ', county: 'Hunterdon' },
	califon: { name: 'Califon', state: 'NJ', county: 'Hunterdon' },
	'clinton-township': { name: 'Clinton Township', state: 'NJ', county: 'Hunterdon' },
	delaware: { name: 'Delaware', state: 'NJ', county: 'Hunterdon' },
	'east-amwell': { name: 'East Amwell', state: 'NJ', county: 'Hunterdon' },
	frenchtown: { name: 'Frenchtown', state: 'NJ', county: 'Hunterdon' },
	'glen-gardner': { name: 'Glen Gardner', state: 'NJ', county: 'Hunterdon' },
	'high-bridge': { name: 'High Bridge', state: 'NJ', county: 'Hunterdon' },
	holland: { name: 'Holland', state: 'NJ', county: 'Hunterdon' },
	kingwood: { name: 'Kingwood', state: 'NJ', county: 'Hunterdon' },
	lebanon: { name: 'Lebanon', state: 'NJ', county: 'Hunterdon' },
	'lebanon-township': { name: 'Lebanon Township', state: 'NJ', county: 'Hunterdon' },
	milford: { name: 'Milford', state: 'NJ', county: 'Hunterdon' },
	raritan: { name: 'Raritan', state: 'NJ', county: 'Hunterdon' },
	readington: { name: 'Readington', state: 'NJ', county: 'Hunterdon' },
	stockton: { name: 'Stockton', state: 'NJ', county: 'Hunterdon' },
	tewksbury: { name: 'Tewksbury', state: 'NJ', county: 'Hunterdon' },
	union: { name: 'Union', state: 'NJ', county: 'Hunterdon' },
	'west-amwell': { name: 'West Amwell', state: 'NJ', county: 'Hunterdon' }
} as const

export async function generateMetadata({ params }: PropertyTypePageProps): Promise<Metadata> {
	const { city, propertyType } = await params
	
	const cityInfo = CITY_INFO[city as keyof typeof CITY_INFO]
	const propertyTypeInfo = PROPERTY_TYPES[propertyType as keyof typeof PROPERTY_TYPES]
	
	if (!cityInfo || !propertyTypeInfo) {
		return {
			title: 'Property Type Not Found'
		}
	}

	const title = `${propertyTypeInfo.name} for Sale in ${cityInfo.name}, ${cityInfo.state} | Cheryl Towey`
	const description = `Find ${propertyTypeInfo.name.toLowerCase()} for sale in ${cityInfo.name}, ${cityInfo.state}. ${propertyTypeInfo.description}. Expert real estate guidance from Cheryl Towey.`

	return {
		title,
		description,
		keywords: `${propertyTypeInfo.name.toLowerCase()} for sale ${cityInfo.name} ${cityInfo.state}, ${cityInfo.name} ${propertyTypeInfo.name.toLowerCase()}, ${propertyTypeInfo.name.toLowerCase()} ${cityInfo.name}, real estate ${cityInfo.name}, Cheryl Towey ${cityInfo.name}`,
		openGraph: {
			title,
			description,
			locale: 'en_US',
			type: 'website',
		},
		twitter: {
			card: 'summary',
			title,
			description,
		},
		alternates: {
			canonical: `https://cheryl-towey.com/cities/${city}/${propertyType}`
		}
	}
}

const serializeListing = (listing: any) => {
	return {
		...listing,
		listPrice: listing.listPrice ? Number(listing.listPrice) : null,
		livingArea: listing.livingArea ? Number(listing.livingArea) : null,
		lotSizeAcres: listing.lotSizeAcres ? Number(listing.lotSizeAcres) : null,
		propertyTaxes: listing.propertyTaxes ? Number(listing.propertyTaxes) : null,
		estimatedValue: listing.estimatedValue ? Number(listing.estimatedValue) : null,
		estimatedRent: listing.estimatedRent ? Number(listing.estimatedRent) : null,
		pricePerSquareFoot: listing.pricePerSquareFoot ? Number(listing.pricePerSquareFoot) : null,
		lastSalePrice: listing.lastSalePrice ? Number(listing.lastSalePrice) : null,
	}
}

export default async function PropertyTypePage({ params }: PropertyTypePageProps) {
	const { city, propertyType } = await params
	
	const cityInfo = CITY_INFO[city as keyof typeof CITY_INFO]
	const propertyTypeInfo = PROPERTY_TYPES[propertyType as keyof typeof PROPERTY_TYPES]
	
	if (!cityInfo || !propertyTypeInfo) {
		notFound()
	}

	// Fetch listings for this city and property type
	const listings = await prisma.listing.findMany({
		where: {
			city: {
				equals: cityInfo.name,
				mode: 'insensitive'
			},
			propertyType: {
				equals: propertyTypeInfo.filter,
				mode: 'insensitive'
			},
			deletedYn: false,
			standardStatus: 'Active'
		},
		include: {
			media: {
				orderBy: { order: 'asc' },
				take: 1
			},
			mls: true
		},
		orderBy: {
			modificationTimestamp: 'desc'
		},
		take: 50
	})

	const serializedListings = listings.map(serializeListing)

	// Calculate stats for this property type in this city
	const marketStats = {
		activeListings: serializedListings.length,
		medianPrice: serializedListings.length > 0 
			? serializedListings[Math.floor(serializedListings.length / 2)]?.listPrice || 0 
			: 0,
		averageDaysOnMarket: 30, // This would be calculated from actual data
		pricePerSqFt: 200 // This would be calculated from actual data
	}

	const formatPrice = (price?: number) => {
		if (!price) return 'Contact for Price'
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			maximumFractionDigits: 0
		}).format(price)
	}

	return (
		<div className="min-h-screen bg-white">
			<NavbarNew />

			{/* Hero Section */}
			<section className="relative h-[70vh] bg-gray-200">
				<Image
					src="/house-906644.jpg"
					alt={`${propertyTypeInfo.name} for Sale in ${cityInfo.name}, ${cityInfo.state}`}
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-black/40" />
				
				<div className="absolute inset-0 flex items-center">
					<div className="mx-[5%] md:mx-[10%] lg:mx-[15%] w-full">
						<div className="text-white max-w-4xl">
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-4">
								{propertyTypeInfo.name} for Sale in {cityInfo.name}, {cityInfo.state}
							</h1>
							
							<div className="h-[2px] bg-yellow-500 w-24 mb-6" />
							
							<p className="text-xl md:text-2xl text-white/90 mb-8">
								{propertyTypeInfo.description} in {cityInfo.county} County
							</p>
							
							<div className="flex flex-col sm:flex-row gap-4">
								<Link 
									href="#listings"
									className="px-8 py-4 bg-yellow-500 text-black font-sans text-sm tracking-wider uppercase transition-all duration-300 hover:bg-yellow-600"
								>
									View Available {propertyTypeInfo.name}
								</Link>
								<Link 
									href={`/cities/${city}`}
									className="px-8 py-4 border border-white text-white font-sans text-sm tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-black"
								>
									All Properties in {cityInfo.name}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* About This Property Type Section */}
			<section className="py-20 bg-gray-50">
				<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-serif font-light mb-6">
								Why Choose {propertyTypeInfo.name} in {cityInfo.name}?
							</h2>
							<div className="space-y-4 text-gray-700">
								<p className="text-lg leading-relaxed">
									{propertyTypeInfo.description} Located in the desirable {cityInfo.county} County area, 
									{cityInfo.name} offers excellent {propertyTypeInfo.name.toLowerCase()} opportunities.
								</p>
							</div>
							
							<div className="mt-8">
								<h3 className="text-xl font-medium text-gray-900 mb-4">
									{propertyTypeInfo.name} Highlights in {cityInfo.name}
								</h3>
								<div className="grid grid-cols-2 gap-4">
									{[
										'Prime Locations',
										'Great Value',
										'Growing Market',
										'Excellent Schools'
									].map((highlight) => (
										<div key={highlight} className="flex items-center text-gray-700">
											<svg 
												className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" 
												fill="currentColor" 
												viewBox="0 0 20 20"
											>
												<path 
													fillRule="evenodd" 
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
													clipRule="evenodd" 
												/>
											</svg>
											<span>{highlight}</span>
										</div>
									))}
								</div>
							</div>
						</div>

						<div className="relative">
							<Image
								src="/house-906644.jpg"
								alt={`${propertyTypeInfo.name} in ${cityInfo.name}, ${cityInfo.state}`}
								width={600}
								height={400}
								className="rounded-lg shadow-lg"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Market Statistics */}
			<section id="market-stats" className="py-20 bg-gray-50">
				<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-serif font-light mb-4">
							{propertyTypeInfo.name} Market Statistics in {cityInfo.name}
						</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Stay informed with the latest {propertyTypeInfo.name.toLowerCase()} market data for {cityInfo.name}, {cityInfo.state}.
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
						{[
							{ label: 'Available ' + propertyTypeInfo.name, value: marketStats.activeListings },
							{ label: 'Median Price', value: formatPrice(marketStats.medianPrice) },
							{ label: 'Avg Days on Market', value: `${marketStats.averageDaysOnMarket} days` },
							{ label: 'Price per Sq Ft', value: `$${marketStats.pricePerSqFt}` }
						].map((stat, index) => (
							<div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm text-center">
								<div className="text-2xl font-serif font-light text-gray-900 mb-2">
									{stat.value}
								</div>
								<div className="text-sm text-gray-600">
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Properties Section */}
			<section id="listings" className="py-20 bg-gray-50">
				<div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-serif font-light text-gray-900 mb-4">
							Available {propertyTypeInfo.name} in {cityInfo.name}
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Browse current {propertyTypeInfo.name.toLowerCase()} listings and find your perfect property in {cityInfo.name}, {cityInfo.state}.
						</p>
					</div>
					
					<CityPropertiesView
						city={cityInfo.name}
						showSearch={false}
						variant="default"
						propertyType={propertyTypeInfo.filter}
					/>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-[#222223] text-white">
				<div className="mx-[5%] md:mx-[10%] lg:mx-[15%] text-center">
					<div>
						<h2 className="text-3xl font-serif font-light mb-4">
							Ready to Find Your Perfect {propertyTypeInfo.name.slice(0, -1)} in {cityInfo.name}?
						</h2>
						<p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
							Let Cheryl Towey help you navigate the {cityInfo.name} {propertyTypeInfo.name.toLowerCase()} market 
							and find the perfect property for your needs.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link 
								href="/contact"
								className="px-8 py-4 bg-yellow-500 text-black font-sans text-sm tracking-wider uppercase transition-all duration-300 hover:bg-yellow-600"
							>
								Contact Cheryl
							</Link>
							<Link 
								href={`/cities/${city}`}
								className="px-8 py-4 border border-white text-white font-sans text-sm tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-black"
							>
								View All Properties
							</Link>
						</div>
					</div>
				</div>
			</section>

			<FooterNew />
		</div>
	)
}
