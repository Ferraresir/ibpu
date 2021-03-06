import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const UserMenu = () => {
    if (status === "authenticated") {
      return (
        <div className="inline-flex justify-center flex-nowrap p-2 gap-4  rounded-xl h-8 bg-red-300 ">
          <p>{session.user.name}</p>
          <div className="relative rounded-full">
            <Image src={session.user.image} alt="" layout="fill" />
          </div>
        </div>
        // <span className="inline-flex rounded-md shadow-sm">
        //   <Link href="/api/auth/signout">
        //     <a
        //       onClick={(e) => {
        //         e.preventDefault();
        //         signOut();
        //       }}
        //       className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        //     >
        //       Cerrar Sesion
        //     </a>
        //   </Link>
        // </span>
      );
    }
    return (
      <Link href="/singin">
        <a
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
          className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
        >
          Login
        </a>
      </Link>
    );
  };

  return (
    <header className="relative w-full px-8 text-gray-700 bg-white">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <Link href="/">
          <a className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none">
            <Image
              alt=""
              className="ml-2"
              src="/logo.png"
              width={40}
              height={40}
            />
            Ibpu
          </a>
        </Link>
        <nav className="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
          <Link href="/">
            <a
              className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
              x-data="{ hover: false }"
            >
              <span className="block">Inicio</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
                <span
                  x-show="hover"
                  className="absolute inset-0 inline-block w-full h-full transform bg-gray-900"
                ></span>
              </span>
            </a>
          </Link>
          <Link href="/#nosotros">
            <a
              className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
              x-data="{ hover: false }"
            >
              <span className="block">Nosotros</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
                <span
                  x-show="hover"
                  className="absolute inset-0 inline-block w-full h-full transform bg-gray-900"
                ></span>
              </span>
            </a>
          </Link>
          <Link href="/#cat">
            <a
              className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
              x-data="{ hover: false }"
            >
              <span className="block">Cursos</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
                <span
                  x-show="hover"
                  className="absolute inset-0 inline-block w-full h-full transform bg-gray-900"
                ></span>
              </span>
            </a>
          </Link>
          <Link href="/faq">
            <a
              className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
              x-data="{ hover: false }"
            >
              <span className="block">Preguntas Frecuentes</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
                <span
                  x-show="hover"
                  className="absolute inset-0 inline-block w-full h-full transform bg-gray-900"
                ></span>
              </span>
            </a>
          </Link>
        </nav>
        <div className="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
