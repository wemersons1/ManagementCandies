/*
  Warnings:

  - Added the required column `category_id` to the `candies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `candies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `candies` ADD COLUMN `category_id` INTEGER NOT NULL,
    ADD COLUMN `quantity` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `candies` ADD CONSTRAINT `candies_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `candies_category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
