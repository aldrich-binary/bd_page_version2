"use client";
import { useQuery } from "@tanstack/react-query";
import { getNasaImage } from "../actions/nasa/actions";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const NasaPage = () => {
  const [currentIndexImage, setCurrentIndexImage] = useState<number>(0);
  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["nasa", currentIndexImage],
    queryFn: getNasaImage,
    staleTime: Infinity, // Nunca obsoleto
    refetchOnWindowFocus: false,
    gcTime: 10 * 60 * 1000, // Mantener en cache 10 minutos
  });

  const handleNextImage = () => {
    setCurrentIndexImage((prev) => prev + 1);
  };
  const handlePrevImage = () => {
    setCurrentIndexImage((prev) => prev - 1);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center h-screen">
          <Loader2 className="w-10 h-10 animate-spin text-primary" />
        </div>
      </div>
    );
  }
  if (isError) return <div>Error</div>;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-12 text-center">
          Imagen de la NASA
        </h1>
        <div className="flex gap-2">
          <Button
            disabled={isFetching}
            variant="default"
            size="default"
            onClick={handlePrevImage}
            className="cursor-pointer"
          >
            Anterior
          </Button>
          <Button
            disabled={isFetching}
            variant="default"
            size="default"
            onClick={handleNextImage}
            className="cursor-pointer"
          >
            Siguiente
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.data.map((item: { id: number; hdurl: string }) => (
          <div key={item.id} className="rounded-2xl overflow-hidden">
            <Image
              loading="lazy"
              src={item.hdurl}
              alt={"imagen"}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NasaPage;
