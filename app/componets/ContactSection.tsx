"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import { Mail, MapPin, MoveRight, Phone } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  company: string;
  service: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    service: "Select service",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.service === "Select service") {
      alert("Please select a service.");
      return;
    }
    console.log("Form submitted:", formData);
    // Aquí puedes agregar la lógica para enviar el formulario
  };

  return (
    <>
      {/* Contact Form Section */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex mb-4 items-center">
            <svg
              width="8"
              height="8"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#022C22" />
            </svg>
            <span className="inline-block ml-2 text-sm font-medium text-teal-900">
              Contacto
            </span>
          </div>
          <div className="border-t pt-16">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                  <div className="max-w-lg py-7">
                    <h1 className="font-heading text-4xl sm:text-6xl tracking-sm mb-6">
                      Contactanos
                    </h1>
                    <p className="text-lg text-gray-700 mb-16">
                      Estamos aquí para ayudarte con tus asuntos legales y
                      proteger tus derechos.
                    </p>
                    <form onSubmit={handleSubmit}>
                      <label
                        htmlFor="fullName"
                        className="block pl-4 mb-1 text-sm font-medium"
                      >
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 mb-6 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full"
                        required
                      />

                      <label
                        htmlFor="email"
                        className="block pl-4 mb-1 text-sm font-medium"
                      >
                        Email:
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 mb-6 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full"
                        required
                      />

                      <label
                        htmlFor="company"
                        className="block pl-4 mb-1 text-sm font-medium"
                      >
                        <span>Empresa</span>{" "}
                        <span className="text-gray-700">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 mb-6 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full"
                      />

                      <label
                        htmlFor="service"
                        className="block pl-4 mb-1 text-sm font-medium"
                      >
                        Servicio
                      </label>
                      <div className="relative w-full mb-8 bg-white rounded-full">
                        <span className="absolute top-1/2 right-0 mr-4 transform -translate-y-1/2">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.3999 8.2L9.9999 11.8L13.5999 8.2"
                              stroke="#646A69"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 text-gray-600 border rounded-full appearance-none cursor-pointer outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 bg-transparent relative"
                        >
                          <option value="Select service">
                            Selecciona un servicio
                          </option>
                          <option value="Corporate Law">Corporate Law</option>
                          <option value="Family Law">Derecho Familiar</option>
                          <option value="Criminal Defense">
                            Defensa Criminal
                          </option>
                          <option value="Personal Injury">
                            Personal Injury
                          </option>
                          <option value="Real Estate">Real Estate</option>
                          <option value="Employment Law">Employment Law</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="flex w-full py-3 px-5 items-center justify-center font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200"
                      >
                        <span className="mr-2">Enviar</span>
                        <MoveRight />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                  <div className="lg:max-w-md lg:ml-auto h-full">
                    <Image
                      className="block w-full h-full rounded-lg object-cover"
                      src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=600&h=700&fit=crop"
                      alt="Legal consultation meeting"
                      width={600}
                      height={700}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto md:max-w-none">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-10 md:mb-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-center bg-[#BEF264] rounded-lg p-2 w-12 h-12">
                    <Mail className=" text-black rounded-full" size={40} />
                  </div>

                  <span className="block mt-8 mb-1 text-2xl font-medium">
                    Email:
                  </span>
                  <p className="text-gray-700 mb-auto">
                    Nos pondremos en contacto contigo dentro de 2 días hábiles
                  </p>
                  <p className="mt-8 text-lg font-medium">
                    contact@firmalegal.com
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-10 md:mb-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-center bg-[#BEF264] rounded-lg p-2 w-12 h-12">
                    <Phone className=" text-black rounded-full" size={45} />
                  </div>

                  <span className="block mt-8 mb-1 text-2xl font-medium">
                    Teléfono
                  </span>
                  <p className="text-gray-700">
                    Estamos disponibles de lunes a viernes
                  </p>
                  <p className="text-gray-700 mb-auto">from 8 AM until 6 PM</p>
                  <p className="mt-8 text-lg font-medium">(+57) 317 890 1234</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 px-4">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-center bg-[#BEF264] rounded-lg p-2 w-12 h-12">
                    <MapPin className=" text-black rounded-full" size={45} />
                  </div>
                  <span className="block mt-8 mb-1 text-2xl font-medium">
                    Oficina Legal
                  </span>
                  <p className="text-gray-700 mb-auto">
                    Visítanos en nuestra oficina
                  </p>
                  <p className="mt-8 text-lg font-medium">
                    123 Plaza Legal Drive
                  </p>
                  <p className="text-lg font-medium">
                    Lomas de Chapultepec, CDMX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
