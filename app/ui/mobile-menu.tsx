"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { basePath } from "../utils";

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section>

      <div className="relative">
      {/* Hamburger Button (Mobile) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 text-black absolute right-0"
        aria-label="Toggle navigation"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
    </div>

      {/* Mobile Menu */}
      <div className={`${menuOpen ? "max-h-96" : "max-h-0"} overflow-hidden lg:hidden bg-white`}>
        <ul className="py-4 space-y-4 text-center">
          <li>
            <Link
              href="/"
              className="text-black hover:text-menu hover:scale-105 transition-all text-lg font-josefin block"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-black hover:text-menu hover:scale-105 transition-all text-lg font-josefin block"
              onClick={() => setMenuOpen(false)}
            >
              Artworks
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-black hover:text-menu hover:scale-105 transition-all text-lg font-josefin block"
              onClick={() => setMenuOpen(false)}
            >
              Build
            </Link>
          </li>
          {/*<li className="flex justify-center space-x-4 pt-4">
            <a
              href="#"
              className="text-black p-2"
              aria-label="Instagram"
            >
              <Image
                src={basePath("images/instagram-logo.png")}
                alt="Lunar Orchid Jewelry Instagram"
                height={60}
                width={60}
                className="fab fa-instagram text-lg"
              />
            </a>
            <a
              href="#"
              className="text-black p-2"
              aria-label="Pinterest"
            >
              <Image
                src={basePath("images/pinterest-logo.png")}
                alt="Lunar Orchid Jewelry Pinterest"
                height={60}
                width={60}
                className="fab fa-pinterest text-lg"
              />
            </a>
          </li>*/}
        </ul>
      </div>

    </section>
  );
}
