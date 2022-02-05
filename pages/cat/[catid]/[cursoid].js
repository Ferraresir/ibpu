import prisma from "../../../prisma";

export const getStaticPaths = async () => {
  const cursos = await prisma.curso.findMany();
  const paths = cursos.map((curso) => ({
    params: {
      catid: curso.categoryId.toString(),
      cursoid: curso.id.toString(),
    },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  let id = context.params.cursoid;
  const curso = await prisma.curso.findUnique({ where: { id: id } });
  return { props: { curso } };
};

export default function Curso({ curso }) {
  return (
    <div>
      <h1>{curso.name}</h1>
    </div>
  );
}
