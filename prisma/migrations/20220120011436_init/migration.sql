/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Category` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_cursoId_fkey";

-- DropForeignKey
ALTER TABLE "Pago" DROP CONSTRAINT "Pago_moduleid_fkey";

-- AlterTable
ALTER TABLE "Category" DROP CONSTRAINT "Category_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Curso" ADD COLUMN     "categoryId" INTEGER;

-- CreateTable
CREATE TABLE "_ModuloToPago" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ModuloToPago_AB_unique" ON "_ModuloToPago"("A", "B");

-- CreateIndex
CREATE INDEX "_ModuloToPago_B_index" ON "_ModuloToPago"("B");

-- AddForeignKey
ALTER TABLE "Curso" ADD CONSTRAINT "Curso_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ModuloToPago" ADD FOREIGN KEY ("A") REFERENCES "Modulo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ModuloToPago" ADD FOREIGN KEY ("B") REFERENCES "Pago"("id") ON DELETE CASCADE ON UPDATE CASCADE;
