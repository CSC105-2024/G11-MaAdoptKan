/*
  Warnings:

  - You are about to drop the column `vaccine` on the `Pet` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Vaccine" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vaccine" TEXT,
    "petId" INTEGER NOT NULL,
    CONSTRAINT "Vaccine_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Request" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "petId" INTEGER NOT NULL,
    CONSTRAINT "Request_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Request_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "pictureUrl" TEXT NOT NULL,
    "color" TEXT,
    "dateOfBirth" DATETIME,
    "ageYear" INTEGER,
    "ageMonth" INTEGER,
    "breed" TEXT,
    "phoneNumber" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "vacineUrl" TEXT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Pet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Pet" ("address", "ageMonth", "ageYear", "breed", "color", "dateOfBirth", "gender", "id", "name", "phoneNumber", "pictureUrl", "type", "userId", "vacineUrl") SELECT "address", "ageMonth", "ageYear", "breed", "color", "dateOfBirth", "gender", "id", "name", "phoneNumber", "pictureUrl", "type", "userId", "vacineUrl" FROM "Pet";
DROP TABLE "Pet";
ALTER TABLE "new_Pet" RENAME TO "Pet";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Request_petId_key" ON "Request"("petId");
