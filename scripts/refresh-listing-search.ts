import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function refreshListingSearch() {
  try {
    console.log('🔄 Refreshing listing search materialized view...')
    
    // Refresh the materialized view concurrently
    await prisma.$executeRawUnsafe(`
      REFRESH MATERIALIZED VIEW CONCURRENTLY listing_search;
    `)
    
    console.log('✅ Listing search materialized view refreshed successfully!')
  } catch (error) {
    console.error('❌ Error refreshing materialized view:', error)
    
    // If concurrent refresh fails, try regular refresh
    try {
      console.log('🔄 Trying regular refresh...')
      await prisma.$executeRawUnsafe(`
        REFRESH MATERIALIZED VIEW listing_search;
      `)
      console.log('✅ Listing search materialized view refreshed successfully!')
    } catch (fallbackError) {
      console.error('❌ Fallback refresh also failed:', fallbackError)
      throw fallbackError
    }
  }
}

refreshListingSearch()
  .catch((e) => {
    console.error('❌ Error during refresh:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
