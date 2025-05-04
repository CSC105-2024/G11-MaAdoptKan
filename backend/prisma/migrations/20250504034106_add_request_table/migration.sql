/*
  Warnings:

  - Added the required column `address` to the `Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `financial` to the `Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `houseEn` to the `Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pickup` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Request" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "houseEn" TEXT NOT NULL,
    "financial" TEXT NOT NULL,
    "pickup" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "petId" INTEGER NOT NULL,
    CONSTRAINT "Request_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Request_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Request" ("id", "petId", "userId") SELECT "id", "petId", "userId" FROM "Request";
DROP TABLE "Request";
ALTER TABLE "new_Request" RENAME TO "Request";
CREATE UNIQUE INDEX "Request_petId_key" ON "Request"("petId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
