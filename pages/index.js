import Head from "next/head";
import Layout from "../components/Layout";
import Main from "../components/Main";
import prisma from "../prisma/index";

export default function Component(props) {
  return (
    <>
      <Head>
        <title>Ibpu | Inicio</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="keywords" content="Universidad cursos estudia online" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Main {...props} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const categories = await prisma.category.findMany();
  return { props: { categories } };
}
