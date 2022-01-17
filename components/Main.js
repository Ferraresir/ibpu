import Layout from "./Layout";

export default function Main() {
  return (
    <>
      <section className="px-2 py-32 md:px-0 bg-gray-100">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">
                    Instituto de la biblioteca popular 
                  </span>
                  <br/>
                  <span className="block text-indigo-600 xl:inline">
                    Universitaria
                  </span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  Mas de 25 años en la Educación a Distancia , capacitando y
                  formando para el acceso y desarrollo laboral de la gente.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <img src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl pb-12 font-bold tracking-tight text-center">
            Nosotros
          </h2>
          <p className="mt-2 px-4 pb-12 text-lg text-center text-gray-600">
            *Brindamos capacitación y formación a todos aquellos que buscan una
            preparación acorde a las exigencias del mercado laboral actual .
            *Ofrecemos a nuestros alumnos opciones educativas en la modalidad a
            distancia en línea a través de su aula virtual. *Podes estudiar
            desde cualquier lugar del mundo utilizando un dispositivo conectado
            a internet. Inscribirse hoy mismo es aprender de la mejor manera, de
            modo simple y sin moverte de tu casa. No dejes pasar la oportunidad
            de aprender mucho más sobre eso que en verdad te interesa. ¡Hace
            click y potencia tu futuro profesional!
          </p>
          <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
            <div className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
              <div className="p-3 text-white bg-blue-500 rounded-full"></div>
              <h4 className="text-xl font-medium text-gray-700">
                Certifications
              </h4>
              <p className="text-base text-center text-gray-500">
                Each of our plan will provide you and your team with
                certifications.
              </p>
            </div>

            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
              <div className="p-3 text-white bg-blue-500 rounded-full"></div>
              <h4 className="text-xl font-medium text-gray-700">
                Notifications
              </h4>
              <p className="text-base text-center text-gray-500">
                Send out notifications to all your customers to keep them
                engaged.
              </p>
            </div>

            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
              <div className="p-3 text-white bg-blue-500 rounded-full"></div>
              <h4 className="text-xl font-medium text-gray-700">Bundles</h4>
              <p className="text-base text-center text-gray-500">
                High-quality bundles of awesome tools to help you out.
              </p>
            </div>

            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
              <div className="p-3 text-white bg-blue-500 rounded-full"></div>
              <h4 className="text-xl font-medium text-gray-700">
                Developer Tools
              </h4>
              <p className="text-base text-center text-gray-500">
                Developer tools to help grow your application and keep it
                up-to-date.
              </p>
            </div>

            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
              <div className="p-3 text-white bg-blue-500 rounded-full"></div>
              <h4 className="text-xl font-medium text-gray-700">
                Building Blocks
              </h4>
              <p className="text-base text-center text-gray-500">
                The right kind of building blocks to take your company to the
                next level.
              </p>
            </div>

            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
              <div className="p-3 text-white bg-blue-500 rounded-full"></div>
              <h4 className="text-xl font-medium text-gray-700">Coupons</h4>
              <p className="text-base text-center text-gray-500">
                Coupons system to provide special offers and discounts for your
                app.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center py-16 bg-gray-100 min-w-screen">
        <div className="max-w-6xl px-12 mx-auto bg-gray-100 md:px-16 xl:px-10">
          <div className="flex flex-col items-center lg:flex-row">
            <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
              <p className="mb-2 text-base font-medium tracking-tight text-indigo-500 uppercase">
                Our customers love our product
              </p>
              <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                Testimonials
              </h2>
              <p className="my-6 text-lg text-gray-600">
                Don't just take our word for it, read from our extensive list of
                case studies and customer testimonials.
              </p>
              <a
                href="#_"
                className="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10"
              >
                View Case Studies
              </a>
            </div>
            <div className="w-full lg:w-1/2">
              <blockquote className="flex items-center justify-between w-full col-span-1 p-6 bg-white rounded-lg shadow">
                <div className="flex flex-col pr-8">
                  <div className="relative pl-12">
                    <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
                      Awesome product! And the customer service is exceptionally
                      well.
                    </p>
                  </div>

                  <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
                    Jane Cooper
                    <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                      - CEO SomeCompany
                    </span>
                  </h3>
                </div>
                <img
                  className="flex-shrink-0 w-20 h-20 bg-gray-300 rounded-full xl:w-24 xl:h-24"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                  alt=""
                />
              </blockquote>
              <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white rounded-lg shadow">
                <div className="flex flex-col pr-10">
                  <div className="relative pl-12">
                    <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
                      I can't express enough, how amazing this service has been
                      for my company.
                    </p>
                  </div>
                  <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
                    John Doe
                    <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                      - CEO SomeCompany
                    </span>
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                </div>
                <img
                  className="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full"
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;aauto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                  alt=""
                />
              </blockquote>
              <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white rounded-lg shadow">
                <div className="flex flex-col pr-10">
                  <div className="relative pl-12">
                    <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
                      I can't express enough, how amazing this service has been
                      for my company.
                    </p>
                  </div>

                  <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
                    John Smith
                    <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                      - CEO SomeCompany
                    </span>
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                </div>
                <img
                  className="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full"
                  src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rrb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;aauto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                  alt=""
                />
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
