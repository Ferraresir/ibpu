import prisma from "../../../prisma";

export const getStaticPaths = async () => {
  const categorys = await prisma.category.findMany({include: {curso: true}});
  console.log(categorys);
  const paths = categorys.map((category) => ({
    params: { catid: category.id.toString()},
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  console.log(context);
};

export default function Curso() {
  return <div></div>;
}
