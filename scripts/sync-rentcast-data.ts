import { PrismaClient } from '@prisma/client';
import { rentcastAPI, RentCastProperty, RentCastListing } from '../lib/rentcast-api';
import { getServiceAreasForSync, getPrimaryServiceAreas, getAllServiceAreas } from '../lib/cheryl-service-areas';

const prisma = new PrismaClient();

interface PropertySyncOptions {
  syncProperties?: boolean;
  syncListings?: boolean;
  limit?: number;
  updateExisting?: boolean;
}

class RentCastDataSyncer {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  async syncCityData(city: string, state: string, options: PropertySyncOptions = {}) {
    const {
      syncProperties = true,
      syncListings = true,
      limit = 100,
      updateExisting = true
    } = options;

    console.log(`🔄 Syncing data for ${city}, ${state}...`);

    try {
      // Ensure MLS exists
      const mls = await this.ensureMLS();

      if (syncProperties) {
        await this.syncProperties(city, state, mls.id, limit, updateExisting);
      }

      if (syncListings) {
        await this.syncListings(city, state, mls.id, limit, updateExisting);
      }

      console.log(`✅ Successfully synced data for ${city}, ${state}`);
    } catch (error) {
      console.error(`❌ Error syncing data for ${city}, ${state}:`, error);
      throw error;
    }
  }

  private async ensureMLS() {
    return await this.prisma.mls.upsert({
      where: { id: 1 },
      update: {},
      create: {
        id: 1,
        name: 'RentCast Data Service',
        vendor: 'RentCast',
        timezone: 'America/New_York'
      }
    });
  }

  private async syncProperties(city: string, state: string, mlsId: number, limit: number, updateExisting: boolean) {
    console.log(`📦 Fetching properties for ${city}, ${state}...`);

    try {
      const properties = await rentcastAPI.getPropertiesByCity(city, state, limit);
      
      console.log(`Found ${properties.length} properties`);

      for (const property of properties) {
        await this.upsertProperty(property, mlsId, updateExisting);
      }

      console.log(`✅ Synced ${properties.length} properties for ${city}, ${state}`);
    } catch (error) {
      console.error(`❌ Error syncing properties for ${city}, ${state}:`, error);
    }
  }

  private async syncListings(city: string, state: string, mlsId: number, limit: number, updateExisting: boolean) {
    console.log(`🏠 Fetching listings for ${city}, ${state}...`);

    try {
      const listings = await rentcastAPI.getActiveSaleListingsByCity(city, state, limit);
      
      console.log(`Found ${listings.length} listings`);

      for (const listing of listings) {
        await this.upsertListing(listing, mlsId, updateExisting);
      }

      console.log(`✅ Synced ${listings.length} listings for ${city}, ${state}`);
    } catch (error) {
      console.error(`❌ Error syncing listings for ${city}, ${state}:`, error);
    }
  }

  private async upsertProperty(property: RentCastProperty, mlsId: number, updateExisting: boolean) {
    // Filter out properties with null/empty addresses
    if (!property.formattedAddress || !property.addressLine1 || !property.city || !property.state) {
      console.log(`⚠️ Skipping property with incomplete address: ${property.id}`);
      return;
    }

    // Generate a clean listing key from address components
    const listingKey = this.generateListingKey(property.addressLine1, property.city, property.state, property.zipCode);

    const existingProperty = await this.prisma.listing.findFirst({
      where: {
        mlsId,
        rentcastPropertyId: property.id
      }
    });

    if (existingProperty && !updateExisting) {
      return; // Skip if exists and not updating
    }

    // Safely handle lot size conversion with bounds checking
    const lotSizeAcres = property.lotSize ? 
      Math.min(property.lotSize / 43560, 999999) : null; // Cap at 999999 acres

    // Extract most recent property tax as a decimal value
    let propertyTaxAmount = null;
    if (property.propertyTaxes && typeof property.propertyTaxes === 'object') {
      const taxYears = Object.keys(property.propertyTaxes);
      if (taxYears.length > 0) {
        const mostRecentYear = Math.max(...taxYears.map(y => parseInt(y)));
        const taxData = property.propertyTaxes[mostRecentYear];
        if (taxData && typeof taxData.total === 'number') {
          propertyTaxAmount = taxData.total;
        }
      }
    }

    const propertyData = {
      mlsId,
      listingKey,
      rentcastPropertyId: property.id,
      standardStatus: 'Active',
      propertyType: property.propertyType,
      estimatedValue: property.estimatedValue || null,
      estimatedRent: property.estimatedRent || null,
      pricePerSquareFoot: property.pricePerSquareFoot || null,
      lastSaleDate: property.lastSaleDate ? new Date(property.lastSaleDate) : null,
      lastSalePrice: property.lastSalePrice || null,
      bedsTotal: property.bedrooms || null,
      bathsFull: property.bathrooms ? Math.floor(property.bathrooms) : null,
      bathsHalf: property.bathrooms % 1 > 0 ? 1 : 0,
      livingArea: property.squareFootage || null,
      lotSize: property.lotSize || null,
      lotSizeAcres: lotSizeAcres,
      stories: property.stories || null,
      yearBuilt: property.yearBuilt || null,
      latitude: property.latitude || null,
      longitude: property.longitude || null,
      addressFull: property.formattedAddress || null,
      addressLine1: property.addressLine1 || null,
      city: property.city,
      state: property.state,
      postalCode: property.zipCode || null,
      county: property.county || null,
      subdivision: property.subdivision || null,
      zoning: property.zoning || null,
      features: property.features ? JSON.stringify(property.features) : JSON.stringify([]),
      heating: property.heating || null,
      cooling: property.cooling || null,
      parking: property.parking || null,
      ownerName: property.ownerName || null,
      ownerType: property.ownerType || null,
      propertyTaxes: propertyTaxAmount,
      schoolElementary: property.school?.elementary || null,
      schoolMiddle: property.school?.middle || null,
      schoolHigh: property.school?.high || null,
      schoolDistrict: property.school?.district || null,
      deletedYn: false,
      modificationTimestamp: new Date(),
      rentcastUpdatedAt: new Date(),
    };

    if (existingProperty) {
      await this.prisma.listing.update({
        where: { id: existingProperty.id },
        data: propertyData
      });
    } else {
      await this.prisma.listing.create({
        data: propertyData
      });
    }
  }

  private async upsertListing(listing: RentCastListing, mlsId: number, updateExisting: boolean) {
    // Filter out listings with null/empty addresses
    if (!listing.address || !listing.city || !listing.state) {
      console.log(`⚠️ Skipping listing with incomplete address: ${listing.id}`);
      return;
    }

    // Generate a clean listing key from address
    const addressParts = listing.address.split(',')[0]; // Get street address part
    const listingKey = this.generateListingKey(addressParts, listing.city, listing.state, listing.zipCode);

    const existingListing = await this.prisma.listing.findFirst({
      where: {
        mlsId,
        listingKey
      }
    });

    if (existingListing && !updateExisting) {
      return; // Skip if exists and not updating
    }

    // Safely handle lot size conversion with bounds checking
    const lotSizeAcres = listing.lotSize ? 
      Math.min(listing.lotSize / 43560, 999999) : null; // Cap at 999999 acres

    const listingData = {
      mlsId,
      listingKey,
      rentcastPropertyId: listing.propertyId || null,
      standardStatus: this.mapListingStatus(listing.status),
      propertyType: listing.propertyType || null,
      listPrice: listing.price || null,
      pricePerSquareFoot: listing.pricePerSquareFoot || null,
      listDate: listing.listingDate ? new Date(listing.listingDate) : null,
      daysOnMarket: listing.daysOnMarket || null,
      bedsTotal: listing.bedrooms || null,
      bathsFull: listing.bathrooms ? Math.floor(listing.bathrooms) : null,
      bathsHalf: listing.bathrooms % 1 > 0 ? 1 : 0,
      livingArea: listing.squareFootage || null,
      lotSize: listing.lotSize || null,
      lotSizeAcres: lotSizeAcres,
      yearBuilt: listing.yearBuilt || null,
      latitude: listing.latitude || null,
      longitude: listing.longitude || null,
      addressFull: listing.address || null,
      city: listing.city,
      state: listing.state,
      postalCode: listing.zipCode || null,
      description: listing.description || null,
      amenities: listing.amenities ? JSON.stringify(listing.amenities) : JSON.stringify([]),
      agentName: listing.agentName || null,
      brokerageName: listing.brokerageName || null,
      mlsNumber: listing.mlsNumber || null,
      deletedYn: false,
      modificationTimestamp: new Date(),
      rentcastUpdatedAt: new Date(),
    };

    if (existingListing) {
      await this.prisma.listing.update({
        where: { id: existingListing.id },
        data: listingData
      });
    } else {
      const createdListing = await this.prisma.listing.create({
        data: listingData
      });

      // Add photos if available
      if (listing.photos && listing.photos.length > 0) {
        await this.syncListingPhotos(createdListing.id, listing.photos, mlsId, listingKey);
      }
    }
  }

  private async syncListingPhotos(listingId: bigint, photoUrls: string[], mlsId: number, listingKey: string) {
    const maxPhotos = Math.min(photoUrls.length, 10); // Limit to 10 photos to avoid too many downloads
    
    for (let i = 0; i < maxPhotos; i++) {
      const photoUrl = photoUrls[i];
      
      // Download and store the image locally
      const localImagePath = await this.downloadAndStoreImage(photoUrl, listingId, i + 1);
      const finalImageUrl = localImagePath || photoUrl; // Use local path if download succeeded, otherwise original URL
      
      await this.prisma.media.upsert({
        where: {
          id: BigInt(`${listingId}${i + 1}`)
        },
        update: {
          url: finalImageUrl,
          mediaModificationTimestamp: new Date()
        },
        create: {
          id: BigInt(`${listingId}${i + 1}`),
          listingKey,
          mlsId,
          mediaKey: `${listingKey}-photo-${i + 1}`,
          url: finalImageUrl,
          order: i + 1,
          category: 'Photo',
          caption: `Property Photo ${i + 1}`,
          mediaModificationTimestamp: new Date()
        }
      });
    }
  }

  private mapListingStatus(status: string): string {
    // Map RentCast status to standardized status
    const statusMap: Record<string, string> = {
      'active': 'Active',
      'pending': 'Pending',
      'sold': 'Sold',
      'off_market': 'Off Market',
      'withdrawn': 'Withdrawn',
      'expired': 'Expired'
    };

    return statusMap[status.toLowerCase()] || status;
  }

  private generateListingKey(street: string, city: string, state: string, zipCode?: string): string {
    // Clean and format address components for URL
    const cleanStreet = street
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens
      .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens

    const cleanCity = city
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    const cleanState = state.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cleanZip = zipCode ? zipCode.replace(/[^0-9]/g, '') : '';

    return cleanZip ? 
      `${cleanStreet}-${cleanCity}-${cleanState}-${cleanZip}` :
      `${cleanStreet}-${cleanCity}-${cleanState}`;
  }

  private async downloadAndStoreImage(imageUrl: string, listingId: bigint, order: number): Promise<string | null> {
    try {
      const response = await fetch(imageUrl);
      if (!response.ok) {
        console.log(`⚠️ Failed to download image: ${imageUrl}`);
        return null;
      }

      const buffer = await response.arrayBuffer();
      const fileName = `listing-${listingId}-${order}.jpg`;
      const localPath = `/listings/${fileName}`;
      
      // Create the listings directory if it doesn't exist
      const fs = await import('fs');
      const path = await import('path');
      const publicDir = path.join(process.cwd(), 'public', 'listings');
      
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }

      // Write the image file
      const filePath = path.join(publicDir, fileName);
      fs.writeFileSync(filePath, Buffer.from(buffer));
      
      console.log(`✅ Downloaded image: ${localPath}`);
      return localPath;
    } catch (error) {
      console.error(`❌ Error downloading image ${imageUrl}:`, error);
      return null;
    }
  }

  async syncAllCities(options: PropertySyncOptions = {}) {
    console.log('🚀 Starting RentCast data sync for all Cheryl service areas...');
    
    // Get cities to sync - primary areas only for full sync, all areas for comprehensive sync
    const serviceCities = getServiceAreasForSync(options.syncProperties && options.syncListings);
    
    console.log(`📍 Syncing ${serviceCities.length} cities in Cheryl's service areas`);
    console.log('Primary areas:', getPrimaryServiceAreas().map(area => area.name).join(', '));
    
    for (const location of serviceCities) {
      try {
        await this.syncCityData(location.city, location.state, options);
        // Add a small delay between cities to be respectful to the API
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.error(`❌ Failed to sync ${location.city}, ${location.state}:`, error);
        // Continue with other cities even if one fails
      }
    }

    console.log('🎉 RentCast data sync completed!');
  }

  async syncPrimaryCities(options: PropertySyncOptions = {}) {
    console.log('🚀 Starting RentCast data sync for PRIMARY service areas only...');
    
    const primaryCities = getServiceAreasForSync(true); // Primary only
    
    console.log(`📍 Syncing ${primaryCities.length} primary cities:`, primaryCities.map(c => c.city).join(', '));
    
    for (const location of primaryCities) {
      try {
        await this.syncCityData(location.city, location.state, options);
        // Add a small delay between cities to be respectful to the API
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.error(`❌ Failed to sync ${location.city}, ${location.state}:`, error);
        // Continue with other cities even if one fails
      }
    }

    console.log('🎉 Primary city sync completed!');
  }

  async getMarketStats(primaryOnly: boolean = false) {
    console.log('📊 Fetching market statistics...');
    
    const serviceCities = getServiceAreasForSync(primaryOnly);
    
    for (const location of serviceCities) {
      try {
        const stats = await rentcastAPI.getMarketStats({
          city: location.city,
          state: location.state
        });
        
        console.log(`📈 Market stats for ${location.city}, ${location.state}:`, {
          averagePrice: stats.averagePrice,
          averageRent: stats.averageRent,
          inventory: stats.inventory,
          daysOnMarket: stats.daysOnMarket
        });
      } catch (error) {
        console.error(`❌ Failed to get market stats for ${location.city}, ${location.state}:`, error);
      }
    }
  }
}

// CLI execution
async function main() {
  const syncer = new RentCastDataSyncer();
  
  const args = process.argv.slice(2);
  const command = args[0] || 'sync';
  
  try {
    switch (command) {
      case 'sync':
        await syncer.syncAllCities({
          syncProperties: true,
          syncListings: true,
          limit: 50,
          updateExisting: true
        });
        break;

      case 'primary':
        await syncer.syncPrimaryCities({
          syncProperties: true,
          syncListings: true,
          limit: 100,
          updateExisting: true
        });
        break;
        
      case 'properties':
        await syncer.syncAllCities({
          syncProperties: true,
          syncListings: false,
          limit: 100,
          updateExisting: true
        });
        break;
        
      case 'listings':
        await syncer.syncAllCities({
          syncProperties: false,
          syncListings: true,
          limit: 100,
          updateExisting: true
        });
        break;
        
      case 'stats':
        await syncer.getMarketStats(false); // All cities
        break;

      case 'stats-primary':
        await syncer.getMarketStats(true); // Primary cities only
        break;
        
      default:
        console.log('Usage: tsx scripts/sync-rentcast-data.ts [sync|primary|properties|listings|stats|stats-primary]');
        console.log('  sync - Sync all Cheryl service areas');
        console.log('  primary - Sync primary service areas only (faster)');
        console.log('  properties - Sync property data only');
        console.log('  listings - Sync listing data only'); 
        console.log('  stats - Get market stats for all areas');
        console.log('  stats-primary - Get market stats for primary areas only');
        break;
    }
  } catch (error) {
    console.error('❌ Sync failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { RentCastDataSyncer };
