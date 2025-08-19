-- CreateTable
CREATE TABLE "sync_operations" (
    "id" SERIAL NOT NULL,
    "operationType" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "lastSyncAt" TIMESTAMP(3),
    "itemsProcessed" INTEGER,
    "itemsUpdated" INTEGER,
    "itemsCreated" INTEGER,
    "itemsFailed" INTEGER,
    "errorMessage" TEXT,
    "metadata" JSONB,

    CONSTRAINT "sync_operations_pkey" PRIMARY KEY ("id")
);
