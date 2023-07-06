/*
  Warnings:

  - You are about to drop the column `Highlights` on the `Trip` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "Highlights",
ADD COLUMN     "highlights" TEXT[];
