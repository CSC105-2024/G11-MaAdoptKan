/*
  Warnings:

  - You are about to drop the `Request` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Request";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "RequestForm" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "houseEn" TEXT NOT NULL,
    "financial" TEXT NOT NULL,
    "pickup" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "petId" INTEGER NOT NULL,
    CONSTRAINT "RequestForm_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RequestForm_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "RequestForm_petId_key" ON "RequestForm"("petId");
