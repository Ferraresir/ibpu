import Head from "next/head";
import Layout from "../components/Layout";
import Main from "../components/Main";

export default function Component() {
  return (
    <>
      <Head>
        <title>Ibpu</title>
      </Head>
      <Layout children={<Main />} />
    </>
  );
}
