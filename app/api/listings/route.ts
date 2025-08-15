import { NextRequest, NextResponse } from 'next/server'
import { getListingsWithMedia } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const city = searchParams.get('city')
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 10
    const offset = searchParams.get('offset') ? parseInt(searchParams.get('offset')!) : 0

    const listings = await getListingsWithMedia({
      status: status || undefined,
      city: city || undefined,
      limit,
      offset
    })

    // Convert BigInt to string to fix serialization issue
    const serializedListings = listings.map(listing => ({
      ...listing,
      id: listing.id.toString(),
      media: listing.media.map(media => ({
        ...media,
        id: media.id.toString()
      }))
    }))

    return NextResponse.json(serializedListings)
  } catch (error) {
    console.error('Error fetching listings:', error)
    return NextResponse.json(
      { error: 'Failed to fetch listings' },
      { status: 500 }
    )
  }
}
