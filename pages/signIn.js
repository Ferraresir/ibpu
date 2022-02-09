import React from "react";
import { getProviders, signIn } from "next-auth/react";

export const getServerSideProps = async ({ req, res }) => {
  const providers = await getProviders({ req, res });
  return { props: { providers } };
};

export default function ({ providers }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {Object.values(providers).map((provider) => (
        <button key={provider.name} onClick={() => signIn(provider.id)}>
          {provider.name}
        </button>
      ))}
    </div>
  );
}
