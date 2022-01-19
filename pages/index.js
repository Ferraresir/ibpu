import Head from "next/head";
import Layout from "../components/Layout";
import Main from "../components/Main";
import prisma from "../prisma/index";

export default function Component(props) {
  return (
    <>
      <Head>
        <title>Ibpu</title>
      </Head>
      <Layout children={<Main {...props}/>} />
    </>
  );
}

export async function getStaticProps() {
  const categories = await prisma.category.findMany();
  return { props: { categories } };
}
