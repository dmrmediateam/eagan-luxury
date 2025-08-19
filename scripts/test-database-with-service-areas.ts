import { PrismaClient } from '@prisma/client';
import { getAllServiceAreas, getPrimaryServiceAreas, isServiceArea, getServiceAreasByCounty } from '../lib/cheryl-service-areas.js';

const prisma = new PrismaClient();

async function testDatabaseWithServiceAreas() {
  console.log('🏡 Testing Database Integration with Cheryl Service Areas\n');

  try {
    // Test database connection
    console.log('--- Database Connection Test ---');
    await prisma.$connect();
    console.log('✅ Database connected successfully');

    // Test service areas configuration
    console.log('\n--- Service Areas Configuration ---');
    const allAreas = getAllServiceAreas();
    const primaryAreas = getPrimaryServiceAreas();
    
    console.log(`📊 Total service areas: ${allAreas.length}`);
    console.log(`🎯 Primary service areas: ${primaryAreas.length}`);
    
    console.log('\n🏙️ Primary Service Areas:');
    primaryAreas.forEach(area => {
      console.log(`  • ${area.name}, ${area.county} County, ${area.state}`);
    });

    // Test county breakdown
    console.log('\n--- Service Areas by County ---');
    const counties = ['Warren', 'Sussex', 'Morris', 'Hunterdon'];
    counties.forEach(county => {
      const countyAreas = getServiceAreasByCounty(county);
      console.log(`${county} County: ${countyAreas.length} areas`);
    });

    // Test current database listings
    console.log('\n--- Current Database State ---');
    const totalListings = await prisma.listing.count();
    const activeListings = await prisma.listing.count({
      where: { 
        deletedYn: false,
        standardStatus: 'Active'
      }
    });
    
    console.log(`📋 Total listings in database: ${totalListings}`);
    console.log(`🏠 Active listings: ${activeListings}`);

    // Test listings by service areas
    console.log('\n--- Listings by Primary Service Areas ---');
    for (const area of primaryAreas) {
      const listingsCount = await prisma.listing.count({
        where: {
          city: area.name,
          deletedYn: false
        }
      });
      
      const activeCount = await prisma.listing.count({
        where: {
          city: area.name,
          deletedYn: false,
          standardStatus: 'Active'
        }
      });
      
      console.log(`📍 ${area.name}, ${area.county} County: ${listingsCount} total, ${activeCount} active`);
    }

    // Test database schema
    console.log('\n--- Database Schema Verification ---');
    const sampleListing = await prisma.listing.findFirst({
      include: {
        media: true,
        mls: true
      }
    });
    
    if (sampleListing) {
      console.log('✅ Sample listing found with structure:');
      console.log(`  • ID: ${sampleListing.id}`);
      console.log(`  • Listing Key: ${sampleListing.listingKey}`);
      console.log(`  • RentCast Property ID: ${sampleListing.rentcastPropertyId || 'N/A'}`);
      console.log(`  • City: ${sampleListing.city}`);
      console.log(`  • Status: ${sampleListing.standardStatus}`);
      console.log(`  • Price: ${sampleListing.listPrice ? `$${Number(sampleListing.listPrice).toLocaleString()}` : 'N/A'}`);
      console.log(`  • Estimated Value: ${sampleListing.estimatedValue ? `$${Number(sampleListing.estimatedValue).toLocaleString()}` : 'N/A'}`);
      console.log(`  • Media Count: ${sampleListing.media.length}`);
      console.log(`  • MLS: ${sampleListing.mls.name}`);
    } else {
      console.log('ℹ️ No listings found in database');
    }

    // Test MLS records
    console.log('\n--- MLS Configuration ---');
    const mlsRecords = await prisma.mls.findMany();
    mlsRecords.forEach(mls => {
      console.log(`📋 MLS: ${mls.name} (Vendor: ${mls.vendor}, Timezone: ${mls.timezone})`);
    });

    // Service area validation tests
    console.log('\n--- Service Area Validation Tests ---');
    const testCities = ['Hackettstown', 'Blairstown', 'Chester', 'Newark', 'New York'];
    testCities.forEach(city => {
      const isServed = isServiceArea(city, 'NJ');
      console.log(`${isServed ? '✅' : '❌'} ${city}, NJ: ${isServed ? 'Served' : 'Not served'}`);
    });

    console.log('\n🎉 Database integration test completed successfully!');
    return true;

  } catch (error) {
    console.error('❌ Database test failed:', error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}

// CLI execution
async function main() {
  try {
    const success = await testDatabaseWithServiceAreas();
    process.exit(success ? 0 : 1);
  } catch (error) {
    console.error('❌ Test failed:', error);
    process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { testDatabaseWithServiceAreas };

