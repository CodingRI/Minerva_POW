/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Client` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "reasoning" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Client_name_key" ON "Client"("name");
