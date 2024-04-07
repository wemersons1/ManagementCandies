/*
  Warnings:

  - Added the required column `price` to the `candies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `candies` ADD COLUMN `price` DOUBLE NOT NULL;
