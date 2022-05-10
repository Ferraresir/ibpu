import prisma from "../../../prisma";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import Image from "next/image";

export const getStaticPaths = async () => {
  const categorys = await prisma.category.findMany();
  const paths = categorys.map((category) => ({
    params: { catid: category.id.toString(), name: category.name },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  console.log(context.params);
  let id = parseInt(context.params.catid);
  const cursos = await prisma.curso.findMany({
    where: { categoryId: id, partner: false },
  });
  return { props: { cursos } };
};

export default function Category({ cursos }) {
  const router = useRouter();
  const catid = router.query.catid;
  return (
    <>
      <Head>
        <title>Ibpu - Cursos de la categoria {cursos.category}</title>
      </Head>
      <Layout>
        <div>
          <h1>Cursos de la categoria {catid}</h1>
          {cursos.map((curso) => (
            <div key={curso.id}>
              <Link passHref href={`/cat/${catid}/${curso.id}`}>
                <div>
                  <Image src={curso.image} height={40} width={40} alt="" />
                  <a>
                    <h4>{curso.name}</h4>
                    <p>{curso.description}...</p>
                  </a>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}
