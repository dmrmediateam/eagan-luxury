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
} = {}) {
	const { status, city, limit = 10, offset = 0 } = options

	const where: {
		deletedYn: boolean
		standardStatus?: string
		city?: string
	} = {
		deletedYn: false
	}

	if (status) {
		where.standardStatus = status
	}

	if (city) {
		where.city = city
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
