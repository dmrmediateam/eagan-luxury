import { NextRequest, NextResponse } from 'next/server';
import { rentcastAPI } from '@/lib/rentcast-api';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const address = searchParams.get('address');
    const city = searchParams.get('city');
    const state = searchParams.get('state');
    const zipCode = searchParams.get('zipCode');
    const latitude = searchParams.get('latitude') ? parseFloat(searchParams.get('latitude')!) : undefined;
    const longitude = searchParams.get('longitude') ? parseFloat(searchParams.get('longitude')!) : undefined;
    const radius = searchParams.get('radius') ? parseInt(searchParams.get('radius')!) : undefined;
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 20;
    const offset = searchParams.get('offset') ? parseInt(searchParams.get('offset')!) : 0;

    const properties = await rentcastAPI.getPropertyRecords({
      address: address || undefined,
      city: city || undefined,
      state: state || undefined,
      zipCode: zipCode || undefined,
      latitude,
      longitude,
      radius,
      limit,
      offset
    });

    return NextResponse.json({
      properties,
      total: properties.length,
      limit,
      offset
    });

  } catch (error: unknown) {
    console.error('RentCast properties API error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to fetch properties from RentCast', details: message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { propertyId } = body;

    if (!propertyId) {
      return NextResponse.json(
        { error: 'Property ID is required' },
        { status: 400 }
      );
    }

    const property = await rentcastAPI.getPropertyById(propertyId);

    return NextResponse.json(property);

  } catch (error: unknown) {
    console.error('RentCast property details API error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to fetch property details', details: message },
      { status: 500 }
    );
  }
}

