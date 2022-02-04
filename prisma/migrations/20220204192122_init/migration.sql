-- DropForeignKey
ALTER TABLE "Modulo" DROP CONSTRAINT "Modulo_cursoId_fkey";

-- AddForeignKey
ALTER TABLE "Modulo" ADD CONSTRAINT "Modulo_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "Curso"("id") ON DELETE CASCADE ON UPDATE CASCADE;
