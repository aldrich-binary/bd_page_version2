"use client";

import { useState } from "react";

export const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  return (
    <nav className="py-6 border-b">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between">
          <a href="/" className="inline-block">
            <div className="h-8 w-32 bg-teal-900 rounded flex items-center justify-center text-white font-bold">
              BDP
            </div>
          </a>
          <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex">
            <li className="mr-8">
              <a
                className="inline-block text-teal-900 hover:text-teal-700 font-medium"
                href="/services"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                className="inline-block text-teal-900 hover:text-teal-700 font-medium"
                href="/contact"
              >
                Contactanos
              </a>
            </li>
          </ul>
          <div className="flex items-center justify-end">
            <div className="hidden md:block">
              <a
                href="/consultation"
                className="inline-flex py-2.5 px-4 items-center justify-center text-sm font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
              >
                Consulta gratis
              </a>
            </div>
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="md:hidden navbar-burger text-teal-900 hover:text-teal-800"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.19995 23.2H26.7999"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.19995 16H26.7999"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.19995 8.79999H26.7999"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          mobileNavOpen ? "block" : "hidden"
        } fixed top-0 left-0 bottom-0 w-full xs:w-5/6 xs:max-w-md z-50`}
      >
        <div
          onClick={() => setMobileNavOpen(false)}
          className="fixed inset-0 bg-violet-900 opacity-20"
        ></div>
        <nav className="relative flex flex-col py-7 px-10 w-full h-full bg-white overflow-y-auto">
          <div className="flex items-center justify-between">
            <a href="#" className="inline-block">
              <div className="h-8 w-32 bg-teal-900 rounded flex items-center justify-center text-white font-bold">
                BDP
              </div>
            </a>
            <div className="flex items-center">
              <button onClick={() => setMobileNavOpen(false)}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.2 8.79999L8.80005 23.2M8.80005 8.79999L23.2 23.2"
                    stroke="#1D1F1E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="pt-20 pb-12 mb-auto">
            <ul className="flex-col">
              <li className="mb-6">
                <a
                  className="inline-block text-teal-900 hover:text-teal-700 font-medium"
                  href="/services"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  className="inline-block text-teal-900 hover:text-teal-700 font-medium"
                  href="/contact"
                >
                  Contactanos.
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </nav>
  );
};
