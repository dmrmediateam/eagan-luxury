import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function setupDatabase() {
  try {
    console.log('🔧 Setting up database...')

    // Enable PostGIS extension if available
    try {
      await prisma.$executeRawUnsafe(`
        CREATE EXTENSION IF NOT EXISTS postgis;
      `)
      console.log('✅ PostGIS extension enabled')
    } catch (error) {
      console.log('⚠️ PostGIS not available, using standard coordinates')
    }

    // Create materialized view for fast search results
    await prisma.$executeRawUnsafe(`
      CREATE MATERIALIZED VIEW IF NOT EXISTS listing_search AS
      SELECT
        l.id,
        l."mlsId",
        l."listingKey",
        l."standardStatus",
        l."listPrice",
        l."bedsTotal",
        l."bathsFull",
        l."livingArea",
        COALESCE(l."city", '') AS city,
        COALESCE(l."state", '') AS state,
        COALESCE(l."postalCode", '') AS postal_code,
        l."addressFull",
        l."latitude",
        l."longitude",
        (SELECT url FROM media m
          WHERE m."mlsId" = l."mlsId" AND m."listingKey" = l."listingKey"
          ORDER BY m."order" NULLS LAST, m.id
          LIMIT 1) AS primary_photo_url,
        to_tsvector('simple',
          COALESCE(l."remarksPublic",'') || ' ' ||
          COALESCE(l."city",'') || ' ' ||
          COALESCE(l."subdivision",'') ) AS search_vector
      FROM listing l
      WHERE l."deletedYn" = false;
    `)

    console.log('✅ Materialized view created')

    // Create indexes for the materialized view (separate commands)
    await prisma.$executeRawUnsafe(`
      CREATE INDEX IF NOT EXISTS idx_listing_search_status_price ON listing_search ("standardStatus", "listPrice");
    `)

    await prisma.$executeRawUnsafe(`
      CREATE INDEX IF NOT EXISTS idx_listing_search_tsv ON listing_search USING GIN (search_vector);
    `)

    console.log('✅ Indexes created')

    console.log('🎉 Database setup completed successfully!')
  } catch (error) {
    console.error('❌ Error setting up database:', error)
    throw error
  }
}

setupDatabase()
  .catch((e) => {
    console.error('❌ Error during setup:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
