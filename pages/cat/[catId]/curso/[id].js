import prisma from "../../../../prisma";

export const getStaticPaths = async () => {
  const cursos = await prisma.curso.findMany();
  const paths = cursos.map((curso) => ({
    params: { id: curso.id.toString() },
  }));
  console.log(paths);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  let id = parseInt(context.params.id);
  const curso = await prisma.curso.findMany({ where: { id: id } });
  return { props: { curso } };
};

export default function Curso() {
  return <div>chori</div>;
}
