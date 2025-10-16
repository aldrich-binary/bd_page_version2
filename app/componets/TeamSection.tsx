"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { teamMembers } from "../team-data";

export function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Adjust items per view based on screen size
  React.useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, teamMembers.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Conoce a nuestro equipo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
            Nuestro equipo de profesionales del derecho cuenta con una amplia
            trayectoria en la práctica del derecho público y disciplinas
            relacionadas, orientados a la solución de problemas y la entrega de
            valor agregado a nuestros clientes.
          </p>
        </div>

        <div className="hidden md:flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="h-10 w-10 rounded-full bg-transparent"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Anterior miembros del equipo</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="h-10 w-10 rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Siguiente miembros del equipo</span>
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out gap-6"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            width: `${(teamMembers.length / itemsPerView) * 100}%`,
          }}
        >
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex-shrink-0"
              style={{ width: `${100 / teamMembers.length}%` }}
            >
              <Card className="group relative overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[3/4] relative rounded-2xl">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`${member.name} - ${member.title}`}
                    className="w-full h-full object-cover rounded-2xl"
                    width={500}
                    height={500}
                  />
                  <div className="absolute inset-0 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={cn(
                            "px-2 py-1 rounded-full text-xs font-medium",
                            member.category === "socio" &&
                              "bg-teal-500 text-white",
                            member.category === "abogado" &&
                              "bg-blue-500 text-white",
                            member.category === "pasante" &&
                              "bg-gray-500 text-white"
                          )}
                        >
                          {member.category === "socio"
                            ? "Socio"
                            : member.category === "abogado"
                            ? "Abogado"
                            : "Asociado"}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-1 text-balance">
                        {member.name}
                      </h3>
                      <p className="text-sm text-white/90 text-pretty">
                        {member.title}
                      </p>
                      <p className="text-xs text-white/80 text-pretty mt-2 line-clamp-3">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="flex md:hidden justify-center gap-2 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="h-10 w-10 rounded-full bg-transparent"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Anterior miembros del equipo</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          disabled={currentIndex >= maxIndex}
          className="h-10 w-10 rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Siguiente miembros del equipo</span>
        </Button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-colors duration-200",
              currentIndex === index ? "bg-primary" : "bg-muted"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
