"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { content } from "../data";
import Image from "next/image";

export function ServicesSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto ">
      <div className="mb-12 animate__animated animate__fadeInUp ">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance text-center ">
          Nuestros Servicios Legales
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center text-pretty">
          Ofrecemos una amplia gama de servicios legales especializados para
          proteger sus intereses y brindar asesoría estratégica en las áreas más
          complejas del derecho.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {content.map((service) => (
          <Card
            key={service.id}
            className="group animate__animated animate__fadeInUp relative overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="aspect-[4/3] relative rounded-t-2xl overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                width={400}
                height={300}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-semibold text-foreground mb-2 text-balance">
                {service.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground text-base font-medium">
                {service.subtitle}
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty line-clamp-6">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to action */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-teal-50 to-lime-50 rounded-2xl p-8 border border-teal-100">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            ¿Necesitas asesoría legal especializada?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para brindarte la mejor
            defensa y asesoría en cualquiera de nuestras áreas de
            especialización.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex py-3 px-8 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200"
            >
              Agenda una Consulta
            </a>
            <a
              href="tel:+525512345678"
              className="inline-flex py-3 px-8 items-center justify-center text-lg font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
            >
              Llamar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
