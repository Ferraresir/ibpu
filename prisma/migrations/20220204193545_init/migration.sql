/*
  Warnings:

  - You are about to drop the column `description` on the `Curso` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Curso` table. All the data in the column will be lost.
  - Added the required column `certificado` to the `Curso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Curso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horas` to the `Curso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `target` to the `Curso` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Curso" DROP COLUMN "description",
DROP COLUMN "price",
ADD COLUMN     "certificado" TEXT NOT NULL,
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "horas" INTEGER NOT NULL,
ADD COLUMN     "target" TEXT NOT NULL;
