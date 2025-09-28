import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="relative pt-18">
      <Image
        className="hidden md:block absolute top-0 left-0 mt-28 w-32 lg:w-64 xl:w-auto rounded-xl"
        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=400&fit=crop"
        alt="Legal consultation"
        width={300}
        height={400}
      />
      <Image
        className="hidden md:block absolute top-0 right-0 mt-20 w-32 lg:w-68 xl:w-auto rounded-xl"
        src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Legal books"
        width={350}
        height={400}
      />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-lg xl:max-w-xl mx-auto mb-12 lg:mb-0 text-center">
          <div className="flex mb-6 items-center justify-center w-full">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="12" height="12" rx="2" fill="#022C22" />
              <circle cx="6" cy="6" r="4" fill="#BEF264" />
            </svg>
            <span className="text-sm font-medium text-black">
              Defendiendo tus Derechos.
            </span>
          </div>
          <h2 className="text-black text-center font-heading text-5xl xs:text-7xl xl:text-7xl tracking-tight mb-8 font-semibold">
            Representacion Legal Experta.
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            BDP es un equipo especializado en resolver controversias complejas y
            brindar asesoría estratégica a entidades públicas y privadas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center">
            <a
              href="#"
              className="inline-flex py-4 px-6 mb-3 sm:mb-0 sm:mr-4 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200"
            >
              Nuestro Servicio Legal
            </a>
            <a
              href="#"
              className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
            >
              Agenda una Consulta
            </a>
          </div>
        </div>
        <div className="flex -mx-4 items-end relative">
          <div className="w-1/3 xs:w-1/2 lg:w-auto px-4">
            <Image
              className="block w-1/2 md:w-64 lg:w-auto ml-auto rounded-lg"
              src="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Lawyer in office"
              width={300}
              height={400}
            />
          </div>
          <div className="w-2/3 xs:w-1/2 lg:w-auto ml-auto px-4">
            <Image
              className="block w-1/2 md:w-64 lg:w-auto ml-auto rounded-lg"
              src="https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=300&h=400&fit=crop"
              alt="Legal team meeting"
              width={400}
              height={400}
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full py-32 bg-gradient-to-t from-orange-50 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};
