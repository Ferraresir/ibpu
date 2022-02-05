import prisma from "../../../prisma";
import Link from "next/link";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const categorys = await prisma.category.findMany();
  const paths = categorys.map((category) => ({
    params: { catid: category.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  console.log(context);
  let id = parseInt(context.params.catid);
  const cursos = await prisma.curso.findMany({ where: { categoryId: id } });
  return { props: { cursos } };
};

export default function Category({ cursos }) {
  const router = useRouter();
  const id = router.query.catid;
  return (
    <div>
    </div>
  );
}
