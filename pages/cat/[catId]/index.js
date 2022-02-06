import prisma from "../../../prisma";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";

export const getStaticPaths = async () => {
  const categorys = await prisma.category.findMany();
  const paths = categorys.map((category) => ({
    params: { catid: category.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  let id = parseInt(context.params.catid);
  const cursos = await prisma.curso.findMany({ where: { categoryId: id } });
  return { props: { cursos } };
};

export default function Category({ cursos }) {
  const router = useRouter();
  const catid = router.query.catid;
  return (
    <Layout>
      <div>
        {cursos.map((curso) => (
          <div key={curso.id}>
            <Link href={`/cat/${catid}/${curso.id}`}>
              <a>
                <h4>{curso.name}</h4>
                <p>{curso.content.slice(0, 100)}...</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}
