"use client";

import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  return (
    <nav className="py-6 border-b">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between">
          <Link href="/" className="inline-block">
            <div className="h-8 w-32 bg-teal-900 rounded flex items-center justify-center text-white font-bold">
              BDP
            </div>
          </Link>
          <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex">
            <li className="mr-8">
              <Link
                className="inline-block text-teal-900 hover:text-teal-700 font-medium transition-colors"
                href="/services"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                className="inline-block text-teal-900 hover:text-teal-700 font-medium transition-colors"
                href="/contact"
              >
                Contacto
              </Link>
            </li>
          </ul>
          <div className="flex items-center justify-end">
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="inline-flex py-2.5 px-4 items-center justify-center text-sm font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
              >
                Consulta gratis
              </Link>
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
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        ></div>
        <nav className="relative flex flex-col py-7 px-6 w-full h-full bg-white overflow-y-auto shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/"
              onClick={() => setMobileNavOpen(false)}
              className="inline-block"
            >
              <div className="h-8 w-32 bg-teal-900 rounded flex items-center justify-center text-white font-bold">
                BDP
              </div>
            </Link>
            <div className="flex items-center">
              <button
                onClick={() => setMobileNavOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
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

          <div className="flex-1">
            <ul className="space-y-6">
              <li>
                <Link
                  className="block text-lg text-teal-900 hover:text-teal-700 font-medium py-3 px-4 rounded-lg hover:bg-teal-50 transition-colors"
                  href="/services"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  className="block text-lg text-teal-900 hover:text-teal-700 font-medium py-3 px-4 rounded-lg hover:bg-teal-50 transition-colors"
                  href="/contact"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Contacto
                </Link>
              </li>
            </ul>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <Link
                href="/contact"
                onClick={() => setMobileNavOpen(false)}
                className="block w-full py-3 px-6 text-center text-sm font-medium text-white bg-teal-900 hover:bg-teal-800 rounded-full transition-colors"
              >
                Consulta gratis
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
};
