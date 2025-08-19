import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function cleanupNullAddresses() {
  console.log('🧹 Starting cleanup of properties with null addresses...');

  try {
    // Find properties with null or empty addresses
    const nullAddressProperties = await prisma.listing.findMany({
      where: {
        OR: [
          { addressFull: null },
          { addressFull: '' },
          { addressLine1: null },
          { addressLine1: '' },
          { city: null },
          { city: '' },
          { state: null },
          { state: '' }
        ]
      },
      include: {
        media: true
      }
    });

    console.log(`📊 Found ${nullAddressProperties.length} properties with incomplete addresses`);

    if (nullAddressProperties.length === 0) {
      console.log('✅ No properties found with null addresses');
      return;
    }

    // Show details of properties to be removed
    console.log('\n🗑️ Properties to be removed:');
    nullAddressProperties.forEach((property, index) => {
      console.log(`  ${index + 1}. ID: ${property.id}`);
      console.log(`     Listing Key: ${property.listingKey}`);
      console.log(`     RentCast ID: ${property.rentcastPropertyId || 'N/A'}`);
      console.log(`     Address Full: ${property.addressFull || 'NULL'}`);
      console.log(`     Address Line1: ${property.addressLine1 || 'NULL'}`);
      console.log(`     City: ${property.city || 'NULL'}`);
      console.log(`     State: ${property.state || 'NULL'}`);
      console.log(`     Media Count: ${property.media.length}`);
      console.log('');
    });

    // Delete related records first (foreign key constraints)
    console.log('🗑️ Deleting associated records...');
    let deletedMediaCount = 0;
    let deletedPriceHistoryCount = 0;
    let deletedStatusHistoryCount = 0;
    
    for (const property of nullAddressProperties) {
      // Delete media
      if (property.media.length > 0) {
        await prisma.media.deleteMany({
          where: {
            listingKey: property.listingKey,
            mlsId: property.mlsId
          }
        });
        deletedMediaCount += property.media.length;
      }

      // Delete price history
      const priceHistoryDeleted = await prisma.priceHistory.deleteMany({
        where: {
          listingKey: property.listingKey,
          mlsId: property.mlsId
        }
      });
      deletedPriceHistoryCount += priceHistoryDeleted.count;

      // Delete status history
      const statusHistoryDeleted = await prisma.statusHistory.deleteMany({
        where: {
          listingKey: property.listingKey,
          mlsId: property.mlsId
        }
      });
      deletedStatusHistoryCount += statusHistoryDeleted.count;

      // Delete other related records
      await prisma.openHouse.deleteMany({
        where: {
          listingKey: property.listingKey,
          mlsId: property.mlsId
        }
      });

      await prisma.room.deleteMany({
        where: {
          listingKey: property.listingKey,
          mlsId: property.mlsId
        }
      });

      await prisma.unit.deleteMany({
        where: {
          listingKey: property.listingKey,
          mlsId: property.mlsId
        }
      });
    }

    console.log(`✅ Deleted ${deletedMediaCount} media records`);
    console.log(`✅ Deleted ${deletedPriceHistoryCount} price history records`);
    console.log(`✅ Deleted ${deletedStatusHistoryCount} status history records`);

    // Now delete the properties
    console.log('🗑️ Deleting properties with null addresses...');
    
    const deleteResult = await prisma.listing.deleteMany({
      where: {
        OR: [
          { addressFull: null },
          { addressFull: '' },
          { addressLine1: null },
          { addressLine1: '' },
          { city: null },
          { city: '' },
          { state: null },
          { state: '' }
        ]
      }
    });

    console.log(`✅ Deleted ${deleteResult.count} properties with null addresses`);

    // Show final statistics
    const totalRemaining = await prisma.listing.count();
    const activeRemaining = await prisma.listing.count({
      where: {
        deletedYn: false,
        standardStatus: 'Active'
      }
    });

    console.log('\n📊 Final Statistics:');
    console.log(`  Total properties remaining: ${totalRemaining}`);
    console.log(`  Active properties remaining: ${activeRemaining}`);

    console.log('\n🎉 Cleanup completed successfully!');
    return true;

  } catch (error) {
    console.error('❌ Error during cleanup:', error);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}

// CLI execution
async function main() {
  try {
    const success = await cleanupNullAddresses();
    process.exit(success ? 0 : 1);
  } catch (error) {
    console.error('❌ Cleanup failed:', error);
    process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { cleanupNullAddresses };
