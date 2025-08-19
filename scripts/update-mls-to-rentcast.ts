import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateMlsToRentcast() {
  console.log('🔄 Starting MLS update to RentCast...');

  try {
    // First, check current MLS records
    const currentMlsRecords = await prisma.mls.findMany();
    console.log('📊 Current MLS records:', currentMlsRecords);

    // Update existing MLS record(s) to RentCast
    const updateResult = await prisma.mls.updateMany({
      data: {
        name: 'RentCast',
        vendor: 'RentCast',
        timezone: 'America/New_York'
      }
    });

    console.log(`✅ Updated ${updateResult.count} MLS record(s) to RentCast`);

    // Verify the update
    const updatedMlsRecords = await prisma.mls.findMany();
    console.log('🔍 Updated MLS records:', updatedMlsRecords);

    // Count associated listings
    const listingsCount = await prisma.listing.count();
    console.log(`📝 Total listings in database: ${listingsCount}`);

    // Sample some listings to verify they're using the updated MLS
    const sampleListings = await prisma.listing.findMany({
      take: 5,
      include: {
        mls: true
      }
    });

    console.log('📋 Sample listings with MLS info:');
    sampleListings.forEach((listing, index) => {
      console.log(`  ${index + 1}. ${listing.addressFull} - MLS: ${listing.mls.name}`);
    });

  } catch (error) {
    console.error('❌ Error updating MLS records:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the update
updateMlsToRentcast();
