-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "tel" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Pet" (
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
    "vaccine" TEXT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Pet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
