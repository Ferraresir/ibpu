/*
  Warnings:

  - Made the column `categoryId` on table `Curso` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cursoId` on table `Modulo` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Curso" DROP CONSTRAINT "Curso_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Modulo" DROP CONSTRAINT "Modulo_cursoId_fkey";

-- AlterTable
ALTER TABLE "Curso" ALTER COLUMN "categoryId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Modulo" ALTER COLUMN "cursoId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Curso" ADD CONSTRAINT "Curso_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Modulo" ADD CONSTRAINT "Modulo_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "Curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
