import { NextRequest, NextResponse } from 'next/server';
import { rentcastAPI } from '@/lib/rentcast-api';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { address, city, state, type = 'both' } = body;

    if (!address || !city || !state) {
      return NextResponse.json(
        { error: 'Address, city, and state are required' },
        { status: 400 }
      );
    }

    const promises = [];

    if (type === 'value' || type === 'both') {
      promises.push(
        rentcastAPI.getPropertyValue(address, city, state)
          .then(data => ({ type: 'value', data }))
          .catch(error => ({ type: 'value', error: error.message }))
      );
    }

    if (type === 'rent' || type === 'both') {
      promises.push(
        rentcastAPI.getPropertyRent(address, city, state)
          .then(data => ({ type: 'rent', data }))
          .catch(error => ({ type: 'rent', error: error.message }))
      );
    }

    const results = await Promise.all(promises);

    const response: Record<string, unknown> = {};

    results.forEach(result => {
      if ('error' in result) {
        response[result.type] = { error: result.error };
      } else {
        response[result.type] = result.data;
      }
    });

    return NextResponse.json(response);

  } catch (error: unknown) {
    console.error('RentCast valuation API error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to get property valuation', details: message },
      { status: 500 }
    );
  }
}

