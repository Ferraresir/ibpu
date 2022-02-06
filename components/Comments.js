import Image from "next/image";

export default function comments() {
  return (
    <section className="flex items-center justify-center py-16 bg-gray-100 w-screen">
      <div className="max-w-6xl px-12 mx-auto bg-gray-100 md:px-16 xl:px-10">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="flex flex-col items-center justify-center w-full h-full mx-auto pr-8 mb-10 lg:mb-0 lg:w-1/2">
            <p className="mb-2 text-base font-medium tracking-tight text-indigo-500 uppercase">
              Our customers love our product
            </p>
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
              Testimonials
            </h2>
            <p className="my-6 text-lg text-gray-600">
              Don&apos;t just take our word for it, read from our extensive list of
              case studies and customer testimonials.
            </p>
            <a
              href="#_"
              className="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10"
            >
              View Case Studies
            </a>
          </div>
          <div className="w-screen lg:w-1/2">
            <blockquote className="flex items-center justify-between w-11/12 mx-auto col-span-1 p-6 mt-4 bg-white rounded-lg shadow">
              <div className="flex flex-col pr-3">
                <div className="relative pl-3">
                  <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
                    I can&apos;t express enough, how amazing this service has been
                    for my company.
                  </p>
                </div>
                <h3 className="pl-3 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm   ">
                  John Doe
                  <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                    - CEO SomeCompany
                  </span>
                </h3>
              </div>
              <div className="flex-shrink-0 relative w-20 h-20 rounded-full">
                <Image
                  className="flex-shrink-0 relative bg-gray-300 rounded-full"
                  src="/logo2.png"
                  alt=""
                  layout="fill"
                />
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
