/*
  Warnings:

  - You are about to drop the column `cursoId` on the `Pago` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pago" DROP CONSTRAINT "Pago_cursoId_fkey";

-- AlterTable
ALTER TABLE "Pago" DROP COLUMN "cursoId";
