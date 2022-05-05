import Image from "next/image";
import { AiOutlineBell, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/#nosotros" },
  { name: "Cursos", href: "/#cat" },
  { name: "Preguntas Frecuentes", href: "/faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { data: session, status } = useSession();

  return (
    <nav className="shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <AiOutlineClose
                className={isOpen ? "block" : "hidden"}
                size={24}
              />
              <AiOutlineMenu
                className={isOpen ? "hidden" : "block"}
                size={24}
              />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:justify-start">
            <div className="flex-shrink-0 flex justify-center">
              <Link href="/">
                <a className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none">
                  <Image
                    className="ml-2"
                    src="/logo.png"
                    alt="Ibpu logo"
                    width={40}
                    height={40}
                  />
                  IBPU
                </a>
              </Link>
            </div>
            <div className="hidden sm:block mx-auto">
              <div className="flex space-x-4 h-16">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                {navigation.map((nav, index) => (
                  <Link key={index} href={nav.href}>
                    <a className=" px-3 py-2 text-sm font-medium flex items-center border-b-2 border-purple-600 transition duration-300">
                      {nav.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {status === "authenticated" ? (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View notifications</span>
                <AiOutlineBell size={24} />
              </button>

              {/* <!-- Profile dropdown --> */}
              <div
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="ml-3 relative"
              >
                <div>
                  <button
                    className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <Image
                      className="rounded-full"
                      src={session.user.image}
                      alt=""
                      width={32}
                      height={32}
                    />
                  </button>
                </div>
                {/* <!--
              Profile dropdown panel, show/hide based on dropdown state.
              
              Entering: "transition ease-out duration-100"
              To: "transform opacity-100 scale-100"
              From: "transform opacity-0 scale-95"
              Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
            --> */}
                <div
                  className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 ${
                    isProfileOpen ? "block" : "hidden"
                  }`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <Link href="/profile">
                    <a
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Perfil
                    </a>
                  </Link>
                  <Link href="/Dashboard">
                    <a
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Cursos
                    </a>
                  </Link>
                  <Link href="/api/auth/signout">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        signOut();
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Cerrar Sesion
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <Link href="/signin">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Ingresar
              </a>
            </Link>
          )}
        </div>
      </div>

      {/* <!--
        Mobile menu, toggle classNamees based on menu state.
        
        Menu open: "block", Menu closed: "hidden"
      --> */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`sm:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          {navigation.map((nav, index) => (
            <Link key={index} href={nav.href}>
              <a className=" block px-3 py-2 rounded-md text-base font-medium">
                {nav.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
