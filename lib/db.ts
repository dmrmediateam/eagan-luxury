import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Helper function to get listings with media
export async function getListingsWithMedia(options: {
	status?: string
	city?: string
	limit?: number
	offset?: number
	propertyType?: string
	minPrice?: number
	maxPrice?: number
	beds?: number
	baths?: number
	includeCount?: boolean
	sortBy?: 'price_desc' | 'price_asc' | 'date_desc' | 'date_asc'
} = {}) {
	const { status, city, limit = 10, offset = 0, propertyType, minPrice, maxPrice, beds, baths, includeCount = false, sortBy = 'date_desc' } = options

	const where: any = {
		deletedYn: false
	}

	if (status) {
		where.standardStatus = status
	}

	if (city) {
		where.city = {
			equals: city,
			mode: 'insensitive'
		}
	}

	if (propertyType) {
		where.propertyType = {
			equals: propertyType,
			mode: 'insensitive'
		}
	}

	if (minPrice || maxPrice) {
		where.listPrice = {}
		if (minPrice) where.listPrice.gte = minPrice
		if (maxPrice) where.listPrice.lte = maxPrice
	}

	if (beds) {
		where.bedsTotal = {
			gte: beds
		}
	}

	if (baths) {
		where.bathsFull = {
			gte: baths
		}
	}

	// Determine order by parameter
	let orderBy: any = { modificationTimestamp: 'desc' }
	
	switch (sortBy) {
		case 'price_desc':
			orderBy = { listPrice: 'desc' }
			break
		case 'price_asc':
			orderBy = { listPrice: 'asc' }
			break
		case 'date_desc':
			orderBy = { modificationTimestamp: 'desc' }
			break
		case 'date_asc':
			orderBy = { modificationTimestamp: 'asc' }
			break
		default:
			orderBy = { modificationTimestamp: 'desc' }
	}

	if (includeCount) {
		// Return both listings and count for pagination
		const [listings, totalCount] = await Promise.all([
			prisma.listing.findMany({
				where,
				include: {
					media: {
						orderBy: { order: 'asc' },
						take: 1 // Get primary photo
					},
					mls: true
				},
				orderBy,
				take: limit,
				skip: offset
			}),
			prisma.listing.count({ where })
		])

		return { listings, totalCount }
	}

	return await prisma.listing.findMany({
		where,
		include: {
			media: {
				orderBy: { order: 'asc' },
				take: 1 // Get primary photo
			},
			mls: true
		},
		orderBy: { modificationTimestamp: 'desc' },
		take: limit,
		skip: offset
	})
}

// Helper function to get a single listing with all details
export async function getListingByKey(listingKey: string) {
  return await prisma.listing.findFirst({
    where: {
      listingKey,
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
}

// Helper function to get listings by city
export async function getListingsByCity(city: string) {
  return await prisma.listing.findMany({
    where: {
      city: {
        equals: city,
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
    orderBy: { modificationTimestamp: 'desc' }
  })
}

// Helper function to search listings
export async function searchListings(query: string) {
  return await prisma.listing.findMany({
    where: {
      OR: [
        {
          addressFull: {
            contains: query,
            mode: 'insensitive'
          }
        },
        {
          city: {
            contains: query,
            mode: 'insensitive'
          }
        },
        {
          remarksPublic: {
            contains: query,
            mode: 'insensitive'
          }
        }
      ],
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
    orderBy: { modificationTimestamp: 'desc' }
  })
}

// Helper function to get agent information
export async function getAgentByKey(memberKey: string) {
  return await prisma.member.findUnique({
    where: { memberKey },
    include: {
      mls: true
    }
  })
}

// Helper function to get office information
export async function getOfficeByKey(officeKey: string) {
  return await prisma.office.findUnique({
    where: { officeKey },
    include: {
      mls: true
    }
  })
}
