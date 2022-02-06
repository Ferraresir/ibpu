import Categories from "./Categories";
import Comments from "./Comments";

export default function Main(props) {
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
                  <br />
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
      <hr />
      <section className="py-16 bg-gray-100">
        <div id="nosotros" className="container max-w-6xl mx-auto">
          <h2 className="text-4xl pb-12 font-bold tracking-tight text-center">
            Nosotros
          </h2>
          <p className="mt-2 px-4 pb-6 text-lg text-center text-gray-600">
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
        </div>
      </section>
      <Categories {...props} />
      <Comments />
    </>
  );
}
