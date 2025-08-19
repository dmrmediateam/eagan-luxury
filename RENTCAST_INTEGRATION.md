# RentCast API Integration

This document describes the integration of RentCast API with Cheryl Towey's real estate website, replacing the previous MLS data source.

## Overview

The RentCast API provides comprehensive real estate data including:
- Property records with detailed information
- Current sale and rental listings  
- Property valuations (AVM)
- Market statistics and trends
- Property history and ownership details

## API Configuration

### API Key
The RentCast API key is configured in `/lib/rentcast-api.ts`:
```typescript
const RENTCAST_API_KEY = 'ff192079f07f4b4b904bf26fd982428f';
```

**Important**: The API key requires an active RentCast subscription. If you see a "subscription-inactive" error, please:
1. Visit the RentCast API dashboard: https://app.rentcast.io/app/api
2. Activate your subscription plan
3. Ensure billing is current

### Base URL
```typescript
const RENTCAST_BASE_URL = 'https://api.rentcast.io/v1';
```

## Database Schema Updates

The database schema has been updated to accommodate RentCast data structure:

### New Fields Added to Listing Model:
- `rentcastPropertyId` - RentCast property identifier
- `estimatedValue` - AVM property value estimate
- `estimatedRent` - Rental value estimate  
- `pricePerSquareFoot` - Price per square foot
- `lastSaleDate` - Date of last sale
- `lastSalePrice` - Last sale price
- `daysOnMarket` - Days listing has been active
- `lotSize` - Lot size in square feet
- `stories` - Number of stories
- `addressLine1` - Primary address line
- `zoning` - Property zoning information
- `description` - Property description
- `features` - JSON array of property features
- `amenities` - JSON array of amenities
- `heating` - Heating system type
- `cooling` - Cooling system type
- `parking` - Parking information
- `ownerName` - Current owner name
- `ownerType` - Owner type (individual, corporate, etc.)
- `propertyTaxes` - Annual property taxes
- `schoolElementary` - Elementary school
- `schoolMiddle` - Middle school
- `schoolHigh` - High school
- `schoolDistrict` - School district
- `agentName` - Listing agent name
- `brokerageName` - Brokerage name
- `mlsNumber` - MLS number if available
- `rentcastUpdatedAt` - Last update from RentCast

## API Service

### RentCastAPIService Class
Located in `/lib/rentcast-api.ts`, provides methods for:

#### Property Data
- `getPropertyRecords()` - Search properties by location
- `getPropertyById()` - Get specific property details
- `getPropertiesByCity()` - Get all properties in a city

#### Valuations
- `getPropertyValue()` - Get property value estimate
- `getPropertyRent()` - Get rental value estimate

#### Listings
- `getSaleListings()` - Get active sale listings
- `getRentalListings()` - Get rental listings
- `getListingById()` - Get specific listing details
- `getActiveSaleListingsByCity()` - Get sale listings by city

#### Market Data
- `getMarketStats()` - Get market statistics for an area

## Data Synchronization

### Sync Script
Located at `/scripts/sync-rentcast-data.ts`

#### Target Cities
The script syncs data for Cheryl's primary market areas:
- Blairstown, NJ
- Hackettstown, NJ
- Hope, NJ
- Belvidere, NJ
- Washington, NJ
- Phillipsburg, NJ

#### Usage
```bash
# Sync all data (properties and listings)
npm run sync:rentcast

# Sync only properties
npm run sync:rentcast:properties

# Sync only listings  
npm run sync:rentcast:listings

# Get market statistics
npm run sync:rentcast:stats
```

#### Sync Options
- `syncProperties` - Whether to sync property records
- `syncListings` - Whether to sync active listings
- `limit` - Maximum records per city (default: 50)
- `updateExisting` - Whether to update existing records

### RentCastDataSyncer Class
Methods:
- `syncCityData()` - Sync data for a specific city
- `syncAllCities()` - Sync all configured cities
- `getMarketStats()` - Fetch and display market statistics

## API Endpoints

### Enhanced Listings Endpoint
`/api/listings` now supports additional filters:
- `propertyType` - Filter by property type
- `minPrice` / `maxPrice` - Price range filtering
- `beds` - Minimum bedrooms
- `baths` - Minimum bathrooms

### New RentCast Endpoints

#### `/api/rentcast/sync`
- **POST** - Trigger data synchronization
- **GET** - Get sync status

#### `/api/rentcast/properties` 
- **GET** - Search properties directly from RentCast API
- **POST** - Get specific property details by ID

#### `/api/rentcast/valuation`
- **POST** - Get property value and/or rent estimates

## Database Functions

Updated functions in `/lib/db.ts`:

### `getListingsWithMedia()`
Enhanced with new filter options:
- Property type filtering
- Price range filtering  
- Bedroom/bathroom filtering
- Improved city search (case-insensitive)

### Existing Functions
- `getListingByKey()` - Get single listing with full details
- `getListingsByCity()` - Get listings by city
- `searchListings()` - Search listings by text
- `getAgentByKey()` - Get agent information
- `getOfficeByKey()` - Get office information

## Testing

### Test Suite
Run the comprehensive test suite:
```bash
npm run test:rentcast
```

The test suite validates:
- Database connectivity
- RentCast API connection
- Property data retrieval
- Listings API functionality
- Valuation services
- Market data access
- Local API endpoints

### Manual Testing
1. Ensure database is running and migrated
2. Start the development server: `npm run dev`
3. Run the test suite: `npm run test:rentcast`

## Migration Guide

### From Previous MLS System

1. **Database Migration**
   ```bash
   npm run db:migrate
   ```

2. **Initial Data Sync**
   ```bash
   npm run sync:rentcast
   ```

3. **Verify Integration**
   ```bash
   npm run test:rentcast
   ```

### Data Mapping
The sync script automatically maps RentCast data to the existing database schema:
- RentCast property IDs are stored in `rentcastPropertyId`
- Listing keys are prefixed with "RC-" for properties and "RC-L-" for listings
- Property features and amenities are stored as JSON arrays
- School information is mapped to separate fields
- Photos are automatically imported and linked

## Monitoring and Maintenance

### Recommended Sync Schedule
- **Daily**: Active listings sync to get latest market data
- **Weekly**: Full property data sync for comprehensive updates
- **Monthly**: Market statistics review

### API Rate Limits
RentCast API has usage limits based on your subscription plan:
- Free plan: 50 requests/month
- Monitor usage through RentCast dashboard
- Implement respectful delays between requests (1 second in sync script)

### Error Handling
- All API calls include proper error handling
- Failed city syncs don't stop the entire process
- Detailed logging for debugging
- Graceful fallbacks for missing data

## Support and Documentation

### RentCast Resources
- API Documentation: https://developers.rentcast.io/reference/introduction
- Dashboard: https://app.rentcast.io/dashboard
- Support: support@rentcast.io

### Local Documentation
- Database schema: `/prisma/schema.prisma`
- API service: `/lib/rentcast-api.ts`
- Sync logic: `/scripts/sync-rentcast-data.ts`
- Test suite: `/scripts/test-rentcast-integration.ts`

## Troubleshooting

### Common Issues

1. **API Key Issues**
   - Verify API key is correct in `/lib/rentcast-api.ts`
   - **Check subscription status**: Visit https://app.rentcast.io/app/api
   - Ensure your RentCast subscription is active and billing is current
   - Check API plan limits in RentCast dashboard

2. **Database Connection Issues**
   - Ensure PostgreSQL is running
   - Verify DATABASE_URL in `.env` file
   - Run `npm run db:generate` to update Prisma client

3. **Sync Failures**
   - Check network connectivity
   - Verify API key permissions
   - Review error logs for specific issues

4. **No Data Returned**
   - Some areas may have limited RentCast coverage
   - Try different cities or broader search parameters
   - Check if data exists for the target area

### Debug Mode
Enable detailed logging by setting:
```bash
DEBUG=rentcast:* npm run sync:rentcast
```

This completes the RentCast API integration for Cheryl Towey's real estate website.
