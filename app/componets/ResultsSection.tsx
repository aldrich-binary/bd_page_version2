import AnimatedContent from "@/components/AnimatedContent";

export const ResultSections = () => {
  return (
    <section className="py-12 lg:py-24 bg-teal-900">
      <div className="container mx-auto px-4">
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={true}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0}
        >
          <div className="text-center mb-20">
            <h2 className="font-heading text-6xl text-white mb-6 animate__animated animate__fadeInUp animate__delay-1s">
              Nuestros Resultados
            </h2>
            <p className="text-lg text-white opacity-80">
              Estamos comprometidos contigo.
            </p>
          </div>
        </AnimatedContent>
        <div className="max-w-md mx-auto lg:max-w-none">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
              <div className="h-full py-10 px-5 xs:px-10 bg-white rounded-2xl shadow-md">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
                    fill="#BEF264"
                  />
                  <rect
                    x="23"
                    y="8"
                    width="2"
                    height="12"
                    rx="1"
                    fill="#022C22"
                  />
                  <rect
                    x="23"
                    y="28"
                    width="2"
                    height="12"
                    rx="1"
                    fill="#022C22"
                  />
                  <rect
                    x="34.6066"
                    y="11.9792"
                    width="2"
                    height="12"
                    rx="1"
                    transform="rotate(45 34.6066 11.9792)"
                    fill="#022C22"
                  />
                  <rect
                    x="20.4645"
                    y="26.1213"
                    width="2"
                    height="12"
                    rx="1"
                    transform="rotate(45 20.4645 26.1213)"
                    fill="#022C22"
                  />
                  <rect
                    x="28"
                    y="25"
                    width="2"
                    height="12"
                    rx="1"
                    transform="rotate(-90 28 25)"
                    fill="#022C22"
                  />
                  <rect
                    x="8"
                    y="25"
                    width="2"
                    height="12"
                    rx="1"
                    transform="rotate(-90 8 25)"
                    fill="#022C22"
                  />
                  <rect
                    x="26.1213"
                    y="27.5356"
                    width="2"
                    height="12"
                    rx="1"
                    transform="rotate(-45 26.1213 27.5356)"
                    fill="#022C22"
                  />
                  <rect
                    x="11.9792"
                    y="13.3936"
                    width="2"
                    height="12"
                    rx="1"
                    transform="rotate(-45 11.9792 13.3936)"
                    fill="#022C22"
                  />
                </svg>
                <h5 className="text-gray-600 text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mt-6 mb-4">
                  500+
                </h5>
                <span className="text-gray-600 block mb-6 text-base lg:text-xl font-medium">
                  Casos ganados
                </span>
                <p className="text-gray-700">
                  En nuestro despacho jurídico, más de 500 casos ganados
                  reflejan nuestra dedicación, experiencia y compromiso en la
                  defensa de los derechos de nuestros clientes.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
              <div className="h-full py-10 px-5 xs:px-10 bg-white rounded-2xl shadow-md">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
                    fill="#BEF264"
                  />
                  <path
                    d="M24 10.6667C20.6863 10.6667 18 13.353 18 16.6667C18 19.9805 20.6863 22.6667 24 22.6667C27.3137 22.6667 30 19.9805 30 16.6667C30 13.353 27.3137 10.6667 24 10.6667Z"
                    fill="#022C22"
                  />
                  <path
                    d="M24 24.0001C17.6563 24.0001 13.2222 28.6949 12.6725 34.542C12.6374 34.9156 12.7613 35.2868 13.014 35.5644C13.2667 35.8419 13.6246 36.0001 14 36.0001H34C34.3753 36.0001 34.7332 35.8419 34.9859 35.5644C35.2386 35.2868 35.3626 34.9156 35.3274 34.542C34.7778 28.6949 30.3437 24.0001 24 24.0001Z"
                    fill="#022C22"
                  />
                </svg>
                <h5 className="text-gray-600 text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mt-6 mb-4">
                  2,000+
                </h5>
                <span className="text-gray-600 block mb-6 text-base lg:text-xl font-medium">
                  Clientes Atendidos
                </span>
                <p className="text-gray-700">
                  Con gratitud, celebramos la confianza de más de 2,000 clientes
                  satisfechos. Su confianza impulsa nuestra dedicación para
                  brindar un servicio legal excepcional y forjar relaciones
                  duraderas.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/3 px-4">
              <div className="h-full py-10 px-5 xs:px-10 bg-white rounded-2xl shadow-md">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
                    fill="#BEF264"
                  />
                  <path
                    d="M13.3333 12C12.597 12 12 12.597 12 13.3333V14.6667C12 20.5577 16.7756 25.3333 22.6667 25.3333V34.6667C22.6667 35.403 23.2636 36 24 36C24.7364 36 25.3333 35.403 25.3333 34.6667V29.3333C31.2244 29.3333 36 24.5577 36 18.6667V17.3333C36 16.597 35.403 16 34.6667 16H33.3333C29.961 16 26.9541 17.565 24.9994 20.0084C23.8183 15.4035 19.6399 12 14.6667 12H13.3333Z"
                    fill="#022C22"
                  />
                </svg>
                <h5 className="text-gray-600 text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mt-6 mb-4">
                  95%
                </h5>
                <span className="text-gray-600 block mb-6 text-base lg:text-xl font-medium">
                  Tasa de Éxito
                </span>
                <p className="text-gray-700">
                  Este hito refleja nuestro compromiso continuo con el objetivo
                  de lograr los mejores resultados posibles para nuestros
                  clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
