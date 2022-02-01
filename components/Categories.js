import { MdOutlineTransitEnterexit } from "react-icons/md";
import Image from "next/image";

export default function Categories({ categories }) {
  const categoryList = categories.map((category) => {
    return (
      <div
        key={category.id}
        className="w-3/4 sm:w-full mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <Image
          className="rounded-t-lg"
          src={category.image}
          width={338}
          height={225}
          layout="responsive"
          alt={`imagen descriptiva del ${category.name}`}
        />
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {category.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {category.description}
          </p>
          <a
            href="#"
            className="flex items-center justify-center w-1/3 mx-auto  py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Ver
            <MdOutlineTransitEnterexit className="ml-2 text-lg" />
          </a>
        </div>
      </div>
    );
  });

  return (
    <section className="py-12 bg-white">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-center pb-6">
          Areas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 py-8">
          {categoryList}
        </div>
      </div>
    </section>
  );
}
