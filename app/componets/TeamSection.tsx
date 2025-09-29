"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Jenny Wilson",
    title: "Senior Sustainability Consultant",
    image:
      "https://images.unsplash.com/photo-1662104935883-e9dd0619eaba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Cameron Williamson",
    title: "Senior Sustainability Consultant",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Courtney Henry",
    title: "Energy Analyst",
    image:
      "https://images.unsplash.com/photo-1637689810282-4692c7677feb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Dianne Russell",
    title: "Senior Renewable Energy Engineer",
    image:
      "https://images.unsplash.com/photo-1557763686-f6109142f4a6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Jenny Wilson",
    title: "Senior Sustainability Consultant",
    image:
      "https://images.unsplash.com/photo-1647985070631-ec6a2707b2f7?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;
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
            Nuestro equipo es experto en resolver controversias complejas y
            brindar asesoría estratégica a entidades públicas y privadas.
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
                    <h3 className="text-xl font-semibold mb-1 text-balance">
                      {member.name}
                    </h3>
                    <p className="text-sm text-white/90 text-pretty">
                      {member.title}
                    </p>
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
