/*
  Warnings:

  - You are about to drop the column `address` on the `RequestForm` table. All the data in the column will be lost.
  - Added the required column `addressRequest` to the `RequestForm` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RequestForm" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "houseEn" TEXT NOT NULL,
    "financial" TEXT NOT NULL,
    "pickup" TEXT NOT NULL,
    "addressRequest" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "petId" INTEGER NOT NULL,
    CONSTRAINT "RequestForm_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RequestForm_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_RequestForm" ("financial", "houseEn", "id", "petId", "pickup", "userId") SELECT "financial", "houseEn", "id", "petId", "pickup", "userId" FROM "RequestForm";
DROP TABLE "RequestForm";
ALTER TABLE "new_RequestForm" RENAME TO "RequestForm";
CREATE UNIQUE INDEX "RequestForm_petId_key" ON "RequestForm"("petId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
