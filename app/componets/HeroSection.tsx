import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="relative pt-18 min-h-[100vh] overflow-hidden">
      <Image
        className="hidden lg:block absolute top-0 left-0 mt-28 w-48 xl:w-64 2xl:w-auto rounded-xl animate__animated animate__fadeInLeft animate__delay-1s z-10"
        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=400&fit=crop"
        alt="Legal consultation"
        width={300}
        height={400}
      />
      <Image
        className="hidden lg:block absolute top-0 right-0 mt-20 w-48 xl:w-64 2xl:w-auto rounded-xl animate__animated animate__fadeInDown animate__delay-1s z-10"
        src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Legal books"
        width={350}
        height={400}
      />
      <div className="container mx-auto px-4 mt-10 relative">
        <div className="max-w-lg xl:max-w-xl mx-auto mb-12 lg:mb-0 text-center">
          <div className="flex mb-6 items-center justify-center w-full animate__animated animate__fadeInUp animate__delay-1s">
            <Badge variant="outline" className="gap-1.5">
              <span
                className="size-1.5 rounded-full bg-emerald-500"
                aria-hidden="true"
              ></span>
            </Badge>
            <span className="text-sm font-medium text-black ">
              Litigio y Consultoría en Derecho Público
            </span>
          </div>
          <h2 className="text-black text-center font-heading text-5xl xs:text-7xl xl:text-7xl tracking-tight mb-8 font-semibold animate__animated animate__fadeInUp ">
            Especialistas en Derecho Público
          </h2>
          <p className="text-lg text-gray-600 mb-10 animate__animated animate__fadeInUp">
            Firma especializada en litigio y consultoría multidisciplinaria en
            derecho público, con amplia trayectoria en ramas constitucional,
            administrativa, regulatoria y electoral. Orientados a la solución de
            problemas y la entrega de valor agregado a nuestros clientes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/services"
              className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200 shadow-lg hover:shadow-xl"
            >
              Nuestros Servicios
            </a>
            <a
              href="/contact"
              className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-black hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200 shadow-lg hover:shadow-xl"
            >
              Agenda una Consulta
            </a>
          </div>
        </div>
        <div className="flex -mx-4 items-end relative mt-8 lg:mt-0">
          <div className="w-1/2 lg:w-auto px-4">
            <Image
              className="block w-full max-w-xs lg:w-64 xl:w-auto ml-auto rounded-lg animate__animated animate__fadeInRight animate__delay-1s shadow-lg"
              src="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Lawyer in office"
              width={300}
              height={400}
            />
          </div>
          <div className="w-1/2 lg:w-auto px-4">
            <Image
              className="block w-full max-w-xs lg:w-64 xl:w-auto ml-auto rounded-lg animate__animated animate__fadeInDown animate__delay-1s shadow-lg"
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
