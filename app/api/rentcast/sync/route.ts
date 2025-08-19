import { NextRequest, NextResponse } from 'next/server';
import { RentCastDataSyncer } from '@/scripts/sync-rentcast-data';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      action = 'sync',
      cities = [],
      syncProperties = true,
      syncListings = true,
      limit = 50,
      updateExisting = true
    } = body;

    const syncer = new RentCastDataSyncer();

    switch (action) {
      case 'sync':
        if (cities.length > 0) {
          // Sync specific cities
          for (const cityInfo of cities) {
            await syncer.syncCityData(cityInfo.city, cityInfo.state, {
              syncProperties,
              syncListings,
              limit,
              updateExisting
            });
          }
        } else {
          // Sync all configured cities
          await syncer.syncAllCities({
            syncProperties,
            syncListings,
            limit,
            updateExisting
          });
        }
        break;

      case 'stats':
        await syncer.getMarketStats();
        break;

      default:
        return NextResponse.json(
          { error: 'Invalid action. Use "sync" or "stats"' },
          { status: 400 }
        );
    }

    return NextResponse.json({ 
      success: true, 
      message: `RentCast ${action} completed successfully` 
    });

  } catch (error) {
    console.error('RentCast sync error:', error);
    return NextResponse.json(
      { error: 'Failed to sync RentCast data', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action') || 'status';

    switch (action) {
      case 'status':
        // Return sync status information
        return NextResponse.json({
          service: 'RentCast API Integration',
          status: 'active',
          lastSync: new Date().toISOString(),
          availableActions: ['sync', 'stats']
        });

      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('RentCast API error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

