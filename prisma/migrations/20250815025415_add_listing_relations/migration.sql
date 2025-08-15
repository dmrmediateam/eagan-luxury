-- CreateTable
CREATE TABLE "mls" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "vendor" TEXT,
    "timezone" TEXT NOT NULL DEFAULT 'UTC',

    CONSTRAINT "mls_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "listing" (
    "id" BIGSERIAL NOT NULL,
    "mlsId" INTEGER NOT NULL,
    "listingKey" TEXT NOT NULL,
    "listingId" TEXT,
    "standardStatus" TEXT,
    "propertyType" TEXT,
    "propertySubType" TEXT,
    "listPrice" DECIMAL(14,2),
    "closePrice" DECIMAL(14,2),
    "originalListPrice" DECIMAL(14,2),
    "listDate" TIMESTAMPTZ(6),
    "onMarketDate" TIMESTAMPTZ(6),
    "offMarketDate" TIMESTAMPTZ(6),
    "closeDate" TIMESTAMPTZ(6),
    "bedsTotal" INTEGER,
    "bathsFull" INTEGER,
    "bathsHalf" INTEGER,
    "livingArea" INTEGER,
    "lotSizeAcres" DECIMAL(10,4),
    "yearBuilt" INTEGER,
    "latitude" DECIMAL(9,6),
    "longitude" DECIMAL(9,6),
    "addressFull" TEXT,
    "city" TEXT,
    "state" TEXT,
    "postalCode" TEXT,
    "county" TEXT,
    "subdivision" TEXT,
    "remarksPublic" TEXT,
    "listingAgentKey" TEXT,
    "listingOfficeKey" TEXT,
    "deletedYn" BOOLEAN NOT NULL DEFAULT false,
    "modificationTimestamp" TIMESTAMPTZ(6),
    "extrasJson" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "listing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "media" (
    "id" BIGSERIAL NOT NULL,
    "listingKey" TEXT NOT NULL,
    "mlsId" INTEGER NOT NULL,
    "mediaKey" TEXT,
    "url" TEXT NOT NULL,
    "order" INTEGER,
    "category" TEXT,
    "caption" TEXT,
    "mediaModificationTimestamp" TIMESTAMPTZ(6),
    "extrasJson" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "open_house" (
    "id" BIGSERIAL NOT NULL,
    "listingKey" TEXT NOT NULL,
    "mlsId" INTEGER NOT NULL,
    "startTime" TIMESTAMPTZ(6) NOT NULL,
    "endTime" TIMESTAMPTZ(6),
    "remarks" TEXT,
    "extrasJson" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "open_house_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "room" (
    "id" BIGSERIAL NOT NULL,
    "listingKey" TEXT NOT NULL,
    "mlsId" INTEGER NOT NULL,
    "roomType" TEXT,
    "level" TEXT,
    "length" DECIMAL(6,2),
    "width" DECIMAL(6,2),
    "featuresJson" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "unit" (
    "id" BIGSERIAL NOT NULL,
    "listingKey" TEXT NOT NULL,
    "mlsId" INTEGER NOT NULL,
    "beds" INTEGER,
    "bathsFull" INTEGER,
    "sqft" INTEGER,
    "rent" DECIMAL(12,2),
    "extrasJson" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "unit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "member" (
    "memberKey" TEXT NOT NULL,
    "mlsId" INTEGER NOT NULL,
    "officeKey" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "licenseNumber" TEXT,
    "extrasJson" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "member_pkey" PRIMARY KEY ("memberKey")
);

-- CreateTable
CREATE TABLE "office" (
    "officeKey" TEXT NOT NULL,
    "mlsId" INTEGER NOT NULL,
    "name" TEXT,
    "phone" TEXT,
    "addressFull" TEXT,
    "city" TEXT,
    "state" TEXT,
    "postalCode" TEXT,
    "extrasJson" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "office_pkey" PRIMARY KEY ("officeKey")
);

-- CreateTable
CREATE TABLE "lookup_value" (
    "id" BIGSERIAL NOT NULL,
    "mlsId" INTEGER NOT NULL,
    "lookupName" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "display" TEXT NOT NULL,

    CONSTRAINT "lookup_value_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "price_history" (
    "id" BIGSERIAL NOT NULL,
    "mlsId" INTEGER NOT NULL,
    "listingKey" TEXT NOT NULL,
    "changedAt" TIMESTAMPTZ(6) NOT NULL,
    "listPrice" DECIMAL(14,2),

    CONSTRAINT "price_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "status_history" (
    "id" BIGSERIAL NOT NULL,
    "mlsId" INTEGER NOT NULL,
    "listingKey" TEXT NOT NULL,
    "changedAt" TIMESTAMPTZ(6) NOT NULL,
    "standardStatus" TEXT,

    CONSTRAINT "status_history_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "listing_standardStatus_listPrice_idx" ON "listing"("standardStatus", "listPrice");

-- CreateIndex
CREATE INDEX "listing_city_idx" ON "listing"("city");

-- CreateIndex
CREATE INDEX "listing_postalCode_idx" ON "listing"("postalCode");

-- CreateIndex
CREATE INDEX "listing_modificationTimestamp_idx" ON "listing"("modificationTimestamp");

-- CreateIndex
CREATE UNIQUE INDEX "listing_mlsId_listingKey_key" ON "listing"("mlsId", "listingKey");

-- CreateIndex
CREATE INDEX "media_mlsId_listingKey_idx" ON "media"("mlsId", "listingKey");

-- CreateIndex
CREATE INDEX "open_house_mlsId_listingKey_idx" ON "open_house"("mlsId", "listingKey");

-- CreateIndex
CREATE INDEX "room_mlsId_listingKey_idx" ON "room"("mlsId", "listingKey");

-- CreateIndex
CREATE INDEX "unit_mlsId_listingKey_idx" ON "unit"("mlsId", "listingKey");

-- CreateIndex
CREATE UNIQUE INDEX "lookup_value_mlsId_lookupName_code_key" ON "lookup_value"("mlsId", "lookupName", "code");

-- CreateIndex
CREATE INDEX "price_history_mlsId_listingKey_idx" ON "price_history"("mlsId", "listingKey");

-- CreateIndex
CREATE INDEX "status_history_mlsId_listingKey_idx" ON "status_history"("mlsId", "listingKey");

-- AddForeignKey
ALTER TABLE "listing" ADD CONSTRAINT "listing_mlsId_fkey" FOREIGN KEY ("mlsId") REFERENCES "mls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media" ADD CONSTRAINT "media_mlsId_fkey" FOREIGN KEY ("mlsId") REFERENCES "mls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media" ADD CONSTRAINT "media_mlsId_listingKey_fkey" FOREIGN KEY ("mlsId", "listingKey") REFERENCES "listing"("mlsId", "listingKey") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "open_house" ADD CONSTRAINT "open_house_mlsId_fkey" FOREIGN KEY ("mlsId") REFERENCES "mls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "open_house" ADD CONSTRAINT "open_house_mlsId_listingKey_fkey" FOREIGN KEY ("mlsId", "listingKey") REFERENCES "listing"("mlsId", "listingKey") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "room" ADD CONSTRAINT "room_mlsId_fkey" FOREIGN KEY ("mlsId") REFERENCES "mls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "room" ADD CONSTRAINT "room_mlsId_listingKey_fkey" FOREIGN KEY ("mlsId", "listingKey") REFERENCES "listing"("mlsId", "listingKey") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "unit" ADD CONSTRAINT "unit_mlsId_fkey" FOREIGN KEY ("mlsId") REFERENCES "mls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "unit" ADD CONSTRAINT "unit_mlsId_listingKey_fkey" FOREIGN KEY ("mlsId", "listingKey") REFERENCES "listing"("mlsId", "listingKey") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "member" ADD CONSTRAINT "member_mlsId_fkey" FOREIGN KEY ("mlsId") REFERENCES "mls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "office" ADD CONSTRAINT "office_mlsId_fkey" FOREIGN KEY ("mlsId") REFERENCES "mls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lookup_value" ADD CONSTRAINT "lookup_value_mlsId_fkey" FOREIGN KEY ("mlsId") REFERENCES "mls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "price_history" ADD CONSTRAINT "price_history_mlsId_fkey" FOREIGN KEY ("mlsId") REFERENCES "mls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "price_history" ADD CONSTRAINT "price_history_mlsId_listingKey_fkey" FOREIGN KEY ("mlsId", "listingKey") REFERENCES "listing"("mlsId", "listingKey") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "status_history" ADD CONSTRAINT "status_history_mlsId_fkey" FOREIGN KEY ("mlsId") REFERENCES "mls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "status_history" ADD CONSTRAINT "status_history_mlsId_listingKey_fkey" FOREIGN KEY ("mlsId", "listingKey") REFERENCES "listing"("mlsId", "listingKey") ON DELETE RESTRICT ON UPDATE CASCADE;
