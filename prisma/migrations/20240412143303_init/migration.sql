/*
  Warnings:

  - You are about to drop the column `posithion` on the `Company` table. All the data in the column will be lost.
  - Added the required column `position` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Company" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "detail" TEXT NOT NULL
);
INSERT INTO "new_Company" ("detail", "id", "img", "name") SELECT "detail", "id", "img", "name" FROM "Company";
DROP TABLE "Company";
ALTER TABLE "new_Company" RENAME TO "Company";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
