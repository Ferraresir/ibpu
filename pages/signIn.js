import React from "react";
import { getProviders, signIn } from "next-auth/react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineGithub, AiOutlineEye } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

export const getServerSideProps = async () => {
  const providers = await getProviders();
  return { props: { providers } };
};

const logos = {
  google: <FcGoogle size={20} />,
  facebook: <FaFacebook size={20} />,
  github: <AiOutlineGithub size={20} />,
};

export default function Login({ providers }) {
  return (
    <div className="h-screen bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-4 px-4">
      <div className="flex flex-col items-center justify-center">
        <Image src="/logo.png" width={80} height={80} alt="Ibpu logo" />

        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full py-8 px-10 mt-10">
          <p className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">
            Ingresa con tu cuenta
          </p>
          <p className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">
            No tienes una cuenta?{" "}
            <a className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer">
              {" "}
              Registrate
            </a>
          </p>

          <div>
            <label
              id="email"
              className="text-sm font-medium leading-none text-gray-800"
            >
              Email
            </label>
            <input
              aria-labelledby="email"
              type="email"
              className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
          <div className="mt-6  w-full">
            <label
              htmlFor="pass"
              className="text-sm font-medium leading-none text-gray-800"
            >
              Contraseña
            </label>
            <div className="relative flex items-center justify-center">
              <input
                id="pass"
                type="password"
                className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
              <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                <AiOutlineEye size={16} />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <button
              role="button"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
            >
              Crear mi cuenta
            </button>
            <div className="w-full flex items-center justify-between py-5">
              <hr className="w-full bg-gray-400" />
              <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
                O
              </p>
              <hr className="w-full bg-gray-400  " />
            </div>
            <div className="flex gap-2">
              {Object.values(providers).map((provider) => (
                <button
                  key={provider.name}
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                  role="button"
                  className="shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3 px-3 border rounded-lg border-gray-700 flex justify-center w-full mt-1"
                >
                  {logos[`${provider.id}`]}
                </button>
              ))}
            </div>
            <Link href="/" passHref>
              <button
                role="button"
                className="mt-6 mx-auto w-1/3 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 "
              >
                Volver
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
