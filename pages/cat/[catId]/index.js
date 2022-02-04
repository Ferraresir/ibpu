import { useRouter } from "next/router";
import prisma from '../../../prisma'


export const getStaticPaths = async () => {
    const cursos = await prisma.category.findMany();
    const paths = cursos.map(curso => ({
        params: { id: curso.id.toString() }
    }));
    return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
    let id = parseInt(context.params.id);
    const cursos = await prisma.curso.findMany({where:{categoryId:id}});
    return { props: { cursos }};
}

export default function Category({cursos}) {
  return (
    <div>
      <h1>{cursos[0].name}</h1>
    </div>
  );
}
