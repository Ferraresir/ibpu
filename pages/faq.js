import Layout from "../components/Layout";

export default function faq() {
  return (
    <Layout>
      <section className="relative bg-gray-100 py-16 min-w-screen animation-fade animation-delay">
        <div className="container  px-8 mx-auto sm:px-12 xl:px-5">
          <p className="text-xs text-center mb-8 font-bold  text-pink-500 uppercase sm:mx-6 sm:text-center sm:text-normal sm:font-bold">
            Tienes preguntas? Tenemos algunas respuestas
          </p>
          <h3 className="mt-1 text-2xl text-center font-bold  text-gray-800  sm:text-3xl md:text-4xl lg:text-5xl sm:text-center sm:mx-0">
            PREGUNTAS FRECUENTES
          </h3>
          <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">
              Como Funciona?
            </h3>
            <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
              Nuestro campus virtual en línea las 24 horas ofrece diferentes
              servicios académicos a través de una plataforma educativa de muy
              fácil manejo, a los cuales puede acceder de acuerdo a su
              disponibilidad horaria, utilizando un dispositivo móvil o
              computadora conectada a Internet.
            </p>
          </div>
          <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">
              Como veo mis cursos?
            </h3>
            <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
              Una vez logueado podra entrar a su perfil donde podra ver sus
              cursos, pagos, modificar sus datos entre otras cosas. <br />A su
              vez en cada curso podra ver sus calificaciones y devoluciones por
              parte del personal educativo
            </p>
          </div>
          <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">
              Como Puedo Pagar?
            </h3>
            <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
              Los cursos se pueden pagar por modulos, en grupos o completo.{" "}
              <br />
              Actualmente los medios de pagos son: <br />
              MercadoPago (acreditacion instantanea) <br />
              Transferencia (24Hs) <br />
              Proximamente Paypal
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
