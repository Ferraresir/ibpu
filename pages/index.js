import Head from "next/head";
import { useSession, signOut, signIn } from "next-auth/react";
import Login from "../Components/Login";

export default function Component() {
  return (
    <>
      <Head>
        <title>Next.js + NextAuth</title>
      </Head>
      <div className="">
        <header className=""></header>
        <main>
          <Login />
          <button onClick={() => signOut()}>Logout</button>
        </main>
        <footer></footer>
      </div>
    </>
  );
}
