import Image from "next/image";

export default function Categories({ categories }) {
  return (
    <section className="py-20">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl pb-12 font-bold tracking-tight text-center">
          Nosotros
        </h2>
        <p className="mt-2 px-4 pb-12 text-lg text-center text-gray-600">
          *Brindamos capacitación y formación a todos aquellos que buscan una
          preparación acorde a las exigencias del mercado laboral actual .
          *Ofrecemos a nuestros alumnos opciones educativas en la modalidad a
          distancia en línea a través de su aula virtual. *Podes estudiar desde
          cualquier lugar del mundo utilizando un dispositivo conectado a
          internet. Inscribirse hoy mismo es aprender de la mejor manera, de
          modo simple y sin moverte de tu casa. No dejes pasar la oportunidad de
          aprender mucho más sobre eso que en verdad te interesa. ¡Hace click y
          potencia tu futuro profesional!
        </p>
        <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
          <div className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
            {/* <div className="p-3 text-white bg-blue-500 rounded-full"></div> */}
            <Image src={categories[0].image} width="100" height="50" />
            <h4 className="text-xl font-medium text-gray-700">
              {categories[0].name}
            </h4>
            <p className="text-base text-center text-gray-500">
              {categories[0].description}
            </p>
          </div>

          <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
            <div className="p-3 text-white bg-blue-500 rounded-full"></div>
            <h4 className="text-xl font-medium text-gray-700">Notifications</h4>
            <p className="text-base text-center text-gray-500">
              Send out notifications to all your customers to keep them engaged.
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
              The right kind of building blocks to take your company to the next
              level.
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
  );
}
