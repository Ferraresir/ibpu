import Layout from "../../../components/Layout";
import prisma from "../../../prisma";
import Image from "next/image";

export const getStaticPaths = async () => {
  const cursos = await prisma.curso.findMany();
  const paths = cursos.map((curso) => ({
    params: {
      catid: curso.categoryId.toString(),
      cursoid: curso.id.toString(),
    },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  let id = context.params.cursoid;
  const curso = await prisma.curso.findUnique({ where: { id: id } });
  return { props: { curso } };
};

export default function Curso({ curso }) {
  return (
    <Layout>
      <section className="w-full mt-16 bg-gray-100 pt-7 md:pt-20 md:pb-24">
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
          <div className="box-border relative w-80 h-80 skew-x-12 px-4 mt-5 mb-4 -ml-5 text-center mr-16 md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <Image alt="" src={curso.image} layout="fill" />
          </div>
          <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              {curso.name}
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
              {curso.description}
            </p>
            <p className="underline">Orientado a:</p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              {curso.target.split("*").map((target,i) => (
                <li
                  key={i}
                  className="box-border relative py-2 pl-0 text-left text-gray-500 border-solid"
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  {target}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="mt-16 mx-20" />
      </section>
    </Layout>
  );
}
