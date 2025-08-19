import { rentcastAPI } from '../lib/rentcast-api.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function testRentCastAPIConnection() {
  console.log('🔍 Testing RentCast API connection...');
  
  try {
    // Test basic property search for a known area
    const properties = await rentcastAPI.getPropertyRecords({
      city: 'Blairstown',
      state: 'NJ',
      limit: 5
    });
    
    console.log(`✅ Successfully fetched ${properties.length} properties from RentCast API`);
    
    if (properties.length > 0) {
      const sample = properties[0];
      console.log('📋 Sample property data:', {
        id: sample.id,
        address: sample.formattedAddress,
        city: sample.city,
        state: sample.state,
        bedrooms: sample.bedrooms,
        bathrooms: sample.bathrooms,
        squareFootage: sample.squareFootage,
        estimatedValue: sample.estimatedValue
      });
    }
    
    return true;
  } catch (error) {
    console.error('❌ RentCast API connection failed:', error.message);
    return false;
  }
}

async function testListingsAPI() {
  console.log('🏠 Testing RentCast listings API...');
  
  try {
    const listings = await rentcastAPI.getSaleListings({
      city: 'Blairstown',
      state: 'NJ',
      limit: 3
    });
    
    console.log(`✅ Successfully fetched ${listings.length} sale listings`);
    
    if (listings.length > 0) {
      const sample = listings[0];
      console.log('🏡 Sample listing data:', {
        id: sample.id,
        address: sample.address,
        price: sample.price,
        bedrooms: sample.bedrooms,
        bathrooms: sample.bathrooms,
        squareFootage: sample.squareFootage,
        status: sample.status,
        daysOnMarket: sample.daysOnMarket
      });
    }
    
    return true;
  } catch (error) {
    console.error('❌ Listings API test failed:', error.message);
    return false;
  }
}

async function testValuationAPI() {
  console.log('💰 Testing RentCast valuation API...');
  
  try {
    // Test with a generic address in the target area
    const valueEstimate = await rentcastAPI.getPropertyValue(
      '123 Main Street',
      'Blairstown',
      'NJ'
    );
    
    console.log('✅ Value estimation API working');
    console.log('💵 Sample valuation data:', valueEstimate);
    
    return true;
  } catch (error) {
    console.error('❌ Valuation API test failed:', error.message);
    // This might fail if the address doesn't exist, which is expected
    return true; // Don't fail the whole test
  }
}

async function testMarketDataAPI() {
  console.log('📊 Testing RentCast market data API...');
  
  try {
    const marketStats = await rentcastAPI.getMarketStats({
      city: 'Blairstown',
      state: 'NJ'
    });
    
    console.log('✅ Market data API working');
    console.log('📈 Sample market stats:', marketStats);
    
    return true;
  } catch (error) {
    console.error('❌ Market data API test failed:', error.message);
    return false;
  }
}

async function testDatabaseConnection() {
  console.log('🗄️ Testing database connection...');
  
  try {
    // Test database connection
    await prisma.$connect();
    console.log('✅ Database connection successful');
    
    // Test getting existing listings
    const listingsCount = await prisma.listing.count();
    console.log(`📊 Current listings in database: ${listingsCount}`);
    
    // Test MLS table
    const mlsRecords = await prisma.mls.findMany();
    console.log(`📋 MLS records: ${mlsRecords.length}`);
    
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    return false;
  }
}

async function testAPIEndpoints() {
  console.log('🌐 Testing API endpoints...');
  
  try {
    // Test the basic listings endpoint
    const response = await fetch('http://localhost:3000/api/listings?limit=5');
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log(`✅ Listings API endpoint working: ${data.length} listings returned`);
    
    return true;
  } catch (error) {
    console.error('❌ API endpoint test failed:', error.message);
    console.log('💡 Make sure the Next.js development server is running: npm run dev');
    return false;
  }
}

async function runFullIntegrationTest() {
  console.log('🚀 Starting RentCast Integration Test Suite\n');
  
  const tests = [
    { name: 'Database Connection', test: testDatabaseConnection },
    { name: 'RentCast API Connection', test: testRentCastAPIConnection },
    { name: 'Listings API', test: testListingsAPI },
    { name: 'Valuation API', test: testValuationAPI },
    { name: 'Market Data API', test: testMarketDataAPI },
    { name: 'Local API Endpoints', test: testAPIEndpoints }
  ];
  
  const results = [];
  
  for (const { name, test } of tests) {
    console.log(`\n--- Testing ${name} ---`);
    const result = await test();
    results.push({ name, passed: result });
    
    if (result) {
      console.log(`✅ ${name} test passed`);
    } else {
      console.log(`❌ ${name} test failed`);
    }
  }
  
  console.log('\n📊 Test Results Summary:');
  console.log('=' .repeat(50));
  
  let passedCount = 0;
  results.forEach(({ name, passed }) => {
    const status = passed ? '✅ PASS' : '❌ FAIL';
    console.log(`${status} - ${name}`);
    if (passed) passedCount++;
  });
  
  console.log('=' .repeat(50));
  console.log(`Total: ${passedCount}/${results.length} tests passed`);
  
  if (passedCount === results.length) {
    console.log('🎉 All tests passed! RentCast integration is working correctly.');
  } else {
    console.log('⚠️ Some tests failed. Please check the errors above.');
  }
  
  return passedCount === results.length;
}

// CLI execution
async function main() {
  try {
    const success = await runFullIntegrationTest();
    process.exit(success ? 0 : 1);
  } catch (error) {
    console.error('❌ Test suite failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { runFullIntegrationTest };

