import { NextRequest, NextResponse } from 'next/server'
import { getListingsWithMedia } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const city = searchParams.get('city')
    const propertyType = searchParams.get('propertyType')
    const minPrice = searchParams.get('minPrice') ? parseInt(searchParams.get('minPrice')!) : undefined
    const maxPrice = searchParams.get('maxPrice') ? parseInt(searchParams.get('maxPrice')!) : undefined
    const beds = searchParams.get('beds') ? parseInt(searchParams.get('beds')!) : undefined
    const baths = searchParams.get('baths') ? parseInt(searchParams.get('baths')!) : undefined
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 10
    const offset = searchParams.get('offset') ? parseInt(searchParams.get('offset')!) : 0
    const sort = searchParams.get('sort') as 'price_desc' | 'price_asc' | 'date_desc' | 'date_asc' | null

    const result = await getListingsWithMedia({
      status: status || undefined,
      city: city || undefined,
      propertyType: propertyType || undefined,
      minPrice,
      maxPrice,
      beds,
      baths,
      limit,
      offset,
      includeCount: true,
      sortBy: sort || undefined
    })

    // Handle both array return (legacy) and object return (with count)
    const listings = Array.isArray(result) ? result : result.listings
    const totalCount = Array.isArray(result) ? result.length : result.totalCount

    // Convert BigInt to string to fix serialization issue
    const serializedListings = listings.map(listing => ({
      ...listing,
      id: listing.id.toString(),
      media: listing.media.map(media => ({
        ...media,
        id: media.id.toString()
      }))
    }))

    return NextResponse.json({
      listings: serializedListings,
      totalCount,
      page: Math.floor(offset / limit) + 1,
      totalPages: Math.ceil(totalCount / limit)
    })
  } catch (error) {
    console.error('Error fetching listings:', error)
    return NextResponse.json(
      { error: 'Failed to fetch listings' },
      { status: 500 }
    )
  }
}
