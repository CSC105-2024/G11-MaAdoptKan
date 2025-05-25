/*
  Warnings:

  - You are about to drop the column `houseUrl` on the `RequestForm` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RequestForm" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "houseEn" TEXT NOT NULL,
    "financial" TEXT NOT NULL,
    "pickup" TEXT NOT NULL,
    "houseImg" TEXT NOT NULL DEFAULT '',
    "addressRequest" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "petId" INTEGER NOT NULL,
    CONSTRAINT "RequestForm_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RequestForm_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_RequestForm" ("addressRequest", "financial", "houseEn", "id", "petId", "pickup", "userId") SELECT "addressRequest", "financial", "houseEn", "id", "petId", "pickup", "userId" FROM "RequestForm";
DROP TABLE "RequestForm";
ALTER TABLE "new_RequestForm" RENAME TO "RequestForm";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
