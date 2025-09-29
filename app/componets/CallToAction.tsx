export const CallToAction = () => {
  return (
    <section className="py-12 lg:py-10 mx-auto container bg-orange-50  rounded-2xl ">
      <div className="px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="font-heading text-5xl mb-6 text-gray-600">
            ¿Listo para proteger tus derechos?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contáctanos hoy para una consulta gratuita y deja que nuestro equipo
            legal experimentado te guíe.
          </p>
          <a
            href="/contact"
            className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-white bg-teal-900 hover:bg-lime-500 hover:text-teal-900 rounded-full transition duration-200"
          >
            Obtén tu asesoría gratis
          </a>
        </div>
      </div>
    </section>
  );
};
