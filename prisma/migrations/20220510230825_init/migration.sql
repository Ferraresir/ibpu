/*
  Warnings:

  - Added the required column `partner` to the `Curso` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Curso" ADD COLUMN     "partner" BOOLEAN NOT NULL;
