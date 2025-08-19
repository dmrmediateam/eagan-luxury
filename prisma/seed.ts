import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
	console.log('🌱 Starting database seed...')

	// Create MLS - RentCast as the data source
	const mls = await prisma.mls.upsert({
		where: { id: 1 },
		update: {},
		create: {
			id: 1,
			name: 'RentCast',
			vendor: 'RentCast',
			timezone: 'America/New_York'
		}
	})

	// Create lookup values
	const standardStatuses = await Promise.all([
		prisma.lookupValue.upsert({
			where: {
				mlsId_lookupName_code: {
					mlsId: 1,
					lookupName: 'StandardStatus',
					code: 'Active'
				}
			},
			update: {},
			create: {
				mlsId: 1,
				lookupName: 'StandardStatus',
				code: 'Active',
				display: 'Active'
			}
		}),
		prisma.lookupValue.upsert({
			where: {
				mlsId_lookupName_code: {
					mlsId: 1,
					lookupName: 'StandardStatus',
					code: 'Pending'
				}
			},
			update: {},
			create: {
				mlsId: 1,
				lookupName: 'StandardStatus',
				code: 'Pending',
				display: 'Pending'
			}
		}),
		prisma.lookupValue.upsert({
			where: {
				mlsId_lookupName_code: {
					mlsId: 1,
					lookupName: 'StandardStatus',
					code: 'Sold'
				}
			},
			update: {},
			create: {
				mlsId: 1,
				lookupName: 'StandardStatus',
				code: 'Sold',
				display: 'Sold'
			}
		})
	])

	const propertyTypes = await Promise.all([
		prisma.lookupValue.upsert({
			where: {
				mlsId_lookupName_code: {
					mlsId: 1,
					lookupName: 'PropertyType',
					code: 'Residential'
				}
			},
			update: {},
			create: {
				mlsId: 1,
				lookupName: 'PropertyType',
				code: 'Residential',
				display: 'Residential'
			}
		}),
		prisma.lookupValue.upsert({
			where: {
				mlsId_lookupName_code: {
					mlsId: 1,
					lookupName: 'PropertyType',
					code: 'Condo'
				}
			},
			update: {},
			create: {
				mlsId: 1,
				lookupName: 'PropertyType',
				code: 'Condo',
				display: 'Condo'
			}
		})
	])

	const propertySubTypes = await Promise.all([
		prisma.lookupValue.upsert({
			where: {
				mlsId_lookupName_code: {
					mlsId: 1,
					lookupName: 'PropertySubType',
					code: 'Single Family'
				}
			},
			update: {},
			create: {
				mlsId: 1,
				lookupName: 'PropertySubType',
				code: 'Single Family',
				display: 'Single Family'
			}
		}),
		prisma.lookupValue.upsert({
			where: {
				mlsId_lookupName_code: {
					mlsId: 1,
					lookupName: 'PropertySubType',
					code: 'Townhouse'
				}
			},
			update: {},
			create: {
				mlsId: 1,
				lookupName: 'PropertySubType',
				code: 'Townhouse',
				display: 'Townhouse'
			}
		})
	])

	// Create office
	const office = await prisma.office.upsert({
		where: { officeKey: 'weichert-morristown' },
		update: {},
		create: {
			officeKey: 'weichert-morristown',
			mlsId: 1,
			name: 'Cheryl Towey Services - Morristown',
			addressFull: '123 Main Street',
			city: 'Morristown',
			state: 'NJ',
			postalCode: '07960',
			phone: '(262) 204-5534'
		}
	})

	// Create agent (Cheryl Towey Services)
	const agent = await prisma.member.upsert({
		where: { memberKey: 'cheryl-towey' },
		update: {},
		create: {
			memberKey: 'cheryl-towey',
			mlsId: 1,
			officeKey: 'weichert-morristown',
			firstName: 'Cheryl',
			lastName: 'Towey',
			email: 'cheryl.towey@weichert.com',
			phone: '(908) 334-0971',
			licenseNumber: 'NJ123456'
		}
	})

	// Sample listings with new images
	const listings = [
		{
			// Blairstown - Historic urban area (nighttime bridge scene)
			listingKey: 'blairstown-001',
			listingId: 'BL001',
			standardStatus: 'Active',
			propertyType: 'Residential',
			propertySubType: 'Single Family',
			listPrice: 550000,
			originalListPrice: 575000,
			bedsTotal: 4,
			bathsFull: 3,
			bathsHalf: 1,
			livingArea: 2800,
			lotSizeAcres: 0.5,
			yearBuilt: 1925,
			latitude: 40.9829,
			longitude: -74.9571,
			addressFull: '94 Hoagland Rd',
			city: 'Blairstown',
			state: 'NJ',
			postalCode: '07825',
			county: 'Warren',
			subdivision: 'Historic District',
			remarksPublic: 'Charming historic home in the heart of Blairstown. This beautifully maintained property features original architectural details, modern updates, and a prime location near the historic downtown area. Perfect for those who appreciate character and convenience.',
			listingAgentKey: 'cheryl-towey',
			listingOfficeKey: 'weichert-morristown',
			media: [
				{ url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop', caption: 'Historic Blairstown Home Exterior', order: 1 },
				{ url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop', caption: 'Living Room with Fireplace', order: 2 },
				{ url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop', caption: 'Updated Kitchen', order: 3 },
				{ url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop', caption: 'Master Bedroom', order: 4 },
				{ url: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop', caption: 'Backyard Garden', order: 5 },
				{ url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop', caption: 'Historic Downtown View', order: 6 }
			]
		},
		{
			// Washington - Beach house style (luxury coastal home)
			listingKey: 'washington-001',
			listingId: 'WA001',
			standardStatus: 'Active',
			propertyType: 'Residential',
			propertySubType: 'Single Family',
			listPrice: 385000,
			originalListPrice: 400000,
			bedsTotal: 3,
			bathsFull: 2,
			bathsHalf: 1,
			livingArea: 2200,
			lotSizeAcres: 0.3,
			yearBuilt: 1995,
			latitude: 40.7584,
			longitude: -74.9793,
			addressFull: '654 Elm St',
			city: 'Washington',
			state: 'NJ',
			postalCode: '07882',
			county: 'Warren',
			subdivision: 'Elmwood Estates',
			remarksPublic: 'Beautiful family home in Washington with modern amenities and a spacious layout. This well-maintained property offers comfort and style with an open floor plan, updated kitchen, and private backyard perfect for entertaining.',
			listingAgentKey: 'cheryl-towey',
			listingOfficeKey: 'weichert-morristown',
			media: [
				{ url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop', caption: 'Washington Home Exterior', order: 1 },
				{ url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop', caption: 'Modern Kitchen', order: 2 },
				{ url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop', caption: 'Family Room', order: 3 },
				{ url: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop', caption: 'Backyard Deck', order: 4 },
				{ url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop', caption: 'Master Suite', order: 5 },
				{ url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop', caption: 'Front Porch', order: 6 }
			]
		},
		{
			// Hackettstown - Dense residential neighborhood
			listingKey: 'hackettstown-001',
			listingId: 'HA001',
			standardStatus: 'Active',
			propertyType: 'Residential',
			propertySubType: 'Single Family',
			listPrice: 475000,
			originalListPrice: 490000,
			bedsTotal: 4,
			bathsFull: 2,
			bathsHalf: 1,
			livingArea: 2400,
			lotSizeAcres: 0.4,
			yearBuilt: 1980,
			latitude: 40.8539,
			longitude: -74.8291,
			addressFull: '123 Main St',
			city: 'Hackettstown',
			state: 'NJ',
			postalCode: '07840',
			county: 'Warren',
			subdivision: 'Main Street Estates',
			remarksPublic: 'Spacious family home in the heart of Hackettstown. This well-appointed property features a large kitchen, formal dining room, and plenty of space for growing families. Convenient location near schools and shopping.',
			listingAgentKey: 'cheryl-towey',
			listingOfficeKey: 'weichert-morristown',
			media: [
				{ url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop', caption: 'Hackettstown Home Exterior', order: 1 },
				{ url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop', caption: 'Updated Kitchen', order: 2 },
				{ url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop', caption: 'Living Room', order: 3 },
				{ url: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop', caption: 'Backyard', order: 4 },
				{ url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop', caption: 'Master Bedroom', order: 5 },
				{ url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop', caption: 'Front View', order: 6 }
			]
		},
		{
			// Andover - Historic style
			listingKey: 'andover-001',
			listingId: 'AN001',
			standardStatus: 'Active',
			propertyType: 'Residential',
			propertySubType: 'Single Family',
			listPrice: 425000,
			originalListPrice: 440000,
			bedsTotal: 3,
			bathsFull: 2,
			bathsHalf: 0,
			livingArea: 2000,
			lotSizeAcres: 0.6,
			yearBuilt: 1975,
			latitude: 40.9859,
			longitude: -74.7438,
			addressFull: '456 Oak Ave',
			city: 'Andover',
			state: 'NJ',
			postalCode: '07821',
			county: 'Sussex',
			subdivision: 'Oak Ridge',
			remarksPublic: 'Charming home in Andover with beautiful views and a peaceful setting. This property offers a perfect blend of comfort and nature, with a large lot and plenty of privacy. Ideal for those seeking a quiet retreat.',
			listingAgentKey: 'cheryl-towey',
			listingOfficeKey: 'weichert-morristown',
			media: [
				{ url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop', caption: 'Andover Home Exterior', order: 1 },
				{ url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop', caption: 'Country Kitchen', order: 2 },
				{ url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop', caption: 'Cozy Living Room', order: 3 },
				{ url: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop', caption: 'Scenic Backyard', order: 4 },
				{ url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop', caption: 'Bedroom', order: 5 },
				{ url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop', caption: 'Front Porch', order: 6 }
			]
		},
		{
			// Byram - Luxury style
			listingKey: 'byram-001',
			listingId: 'BY001',
			standardStatus: 'Active',
			propertyType: 'Residential',
			propertySubType: 'Single Family',
			listPrice: 525000,
			originalListPrice: 540000,
			bedsTotal: 5,
			bathsFull: 3,
			bathsHalf: 1,
			livingArea: 3200,
			lotSizeAcres: 0.8,
			yearBuilt: 2000,
			latitude: 40.9418,
			longitude: -74.7357,
			addressFull: '789 Pine Rd',
			city: 'Byram',
			state: 'NJ',
			postalCode: '07874',
			county: 'Sussex',
			subdivision: 'Pine Ridge Estates',
			remarksPublic: 'Luxurious home in Byram with premium finishes and exceptional attention to detail. This stunning property features high-end appliances, custom cabinetry, and a beautiful outdoor living space perfect for entertaining.',
			listingAgentKey: 'cheryl-towey',
			listingOfficeKey: 'weichert-morristown',
			media: [
				{ url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop', caption: 'Byram Luxury Home Exterior', order: 1 },
				{ url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop', caption: 'Gourmet Kitchen', order: 2 },
				{ url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop', caption: 'Great Room', order: 3 },
				{ url: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop', caption: 'Outdoor Living Space', order: 4 },
				{ url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop', caption: 'Master Suite', order: 5 },
				{ url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop', caption: 'Front Entrance', order: 6 }
			]
		},
		{
			// Chester - Premium style
			listingKey: 'chester-001',
			listingId: 'CH001',
			standardStatus: 'Active',
			propertyType: 'Residential',
			propertySubType: 'Single Family',
			listPrice: 675000,
			originalListPrice: 690000,
			bedsTotal: 4,
			bathsFull: 3,
			bathsHalf: 1,
			livingArea: 2800,
			lotSizeAcres: 0.7,
			yearBuilt: 1998,
			latitude: 40.7854,
			longitude: -74.6967,
			addressFull: '321 Maple Dr',
			city: 'Chester',
			state: 'NJ',
			postalCode: '07930',
			county: 'Morris',
			subdivision: 'Maple Ridge',
			remarksPublic: 'Exceptional home in Chester with premium features and a prime location. This stunning property offers luxury living with high-end finishes, spacious rooms, and a beautiful setting. Perfect for discerning buyers.',
			listingAgentKey: 'cheryl-towey',
			listingOfficeKey: 'weichert-morristown',
			media: [
				{ url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop', caption: 'Chester Premium Home Exterior', order: 1 },
				{ url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop', caption: 'Designer Kitchen', order: 2 },
				{ url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop', caption: 'Elegant Living Room', order: 3 },
				{ url: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop', caption: 'Landscaped Grounds', order: 4 },
				{ url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop', caption: 'Master Bedroom Suite', order: 5 },
				{ url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop', caption: 'Grand Foyer', order: 6 }
			]
		}
	]

	// Create listings with media
	for (const listingData of listings) {
		const { media, ...listingFields } = listingData
		
		const listing = await prisma.listing.upsert({
			where: { 
				mlsId_listingKey: {
					mlsId: 1,
					listingKey: listingData.listingKey
				}
			},
			update: {},
			create: {
				...listingFields,
				mlsId: 1,
				deletedYn: false,
				modificationTimestamp: new Date()
			}
		})

		// Create media for each listing
		for (const mediaItem of media) {
			await prisma.media.upsert({
				where: {
					id: BigInt(`${listing.id}${mediaItem.order}`)
				},
				update: {},
				create: {
					id: BigInt(`${listing.id}${mediaItem.order}`),
					listingKey: listingData.listingKey,
					mlsId: 1,
					mediaKey: `${listingData.listingKey}-media-${mediaItem.order}`,
					url: mediaItem.url,
					caption: mediaItem.caption,
					order: mediaItem.order,
					category: 'Photo',
					mediaModificationTimestamp: new Date()
				}
			})
		}

		// Create price history
		await prisma.priceHistory.upsert({
			where: {
				id: BigInt(`${listing.id}0001`)
			},
			update: {},
			create: {
				id: BigInt(`${listing.id}0001`),
				listingKey: listingData.listingKey,
				mlsId: 1,
				listPrice: listingData.originalListPrice,
				changedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // 30 days ago
			}
		})

		// Create status history
		await prisma.statusHistory.upsert({
			where: {
				id: BigInt(`${listing.id}0002`)
			},
			update: {},
			create: {
				id: BigInt(`${listing.id}0002`),
				listingKey: listingData.listingKey,
				mlsId: 1,
				standardStatus: 'Active',
				changedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // 30 days ago
			}
		})
	}

	console.log('✅ Database seeded successfully!')
}

main()
	.catch((e) => {
		console.error('❌ Error seeding database:', e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
