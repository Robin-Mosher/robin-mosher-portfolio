"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* === NAVBAR === */}
      <nav className="sticky z-30 bg-black top-0 justify-center mx-auto px-10 rounded-md py-0">
        <div className="bg-secondary rounded-md max-w-7xl mx-auto px-4 transition-all">
          <div className="flex items-center justify-between gap-5 h-16">
            {/* Logo */}
            <div className="">
              <Link href="/">
                <div className="h-15 w-15 bg-slate-500">
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center text-center space-x-6 px-5">
              <Link
                href="/"
                className="text-white text-sm font-cinzel hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white text-sm font-cinzel hover:text-primary transition-colors"
              >
                About              </Link>
              <Link
                href="/resume"
                className="text-white text-sm font-cinzel hover:text-primary transition-colors"
              >
                Resume
              </Link>
              <Link
                href="/art-design"
                className="text-white text-sm font-cinzel hover:text-primary transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/jewelry"
                className="text-white text-sm font-cinzel hover:text-primary transition-colors"
              >
                Jewelry Shop
              </Link>
              <Link
                href="/flow-arts"
                className="text-white text-sm font-cinzel hover:text-primary transition-colors"
              >
                Flow Arts
              </Link>
              <Link
                href="/digital-sketchbook"
                className="text-white text-sm font-cinzel hover:text-primary transition-colors"
              >
                Sketchbook
              </Link>
            </div>

            {/* Social Icons (Desktop) */}
            <div className="hidden lg:flex items-center gap-1">
              <a
                href="https://www.instagram.com/lunarorchidjewelry"
                className="text-white hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <div className="h-15 w-15 bg-amber-600">
                </div>
              </a>
              <a
                href="https://www.pinterest.com/lunarorchidjewelry/"
                className="text-white hover:text-primary transition-colors"
                aria-label="Pinterest"
              >
                <div className="h-15 w-15 bg-amber-600">
                </div>
              </a>
            </div>

            {/* Shopping Cart
            <div className="relative cursor-pointer">
              <Link href='/cart'>
                <div>
                  <Image
                    src={basePath("images/instagram-logo.png")}
                    alt="Lunar Orchid Jewelry Instagram"
                    height={50}
                    width={50}
                    className="fab fa-instagram text-lg"
                  />
                  <span className="absolute -top-2 -right-2 text-lg  bg-red-600 h-5 w-5 rounded-full grid place-items-center text-white">0
                  </span>
                </div>
              </Link>



              </div>

*/}


            {/* Hamburger Button (Mobile) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 text-white"
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
          <div
            className={`${menuOpen ? "max-h-96" : "max-h-0"} transition-all duration-300 overflow-hidden lg:hidden bg-secondary`}
          >
            <ul className="py-4 space-y-4 text-center">
              <li>
                <Link
                  href="/"
                  className="text-white text-lg font-josefin hover:text-primary transition-colors block"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog/all"
                  className="text-white text-lg font-josefin hover:text-primary transition-colors block"
                  onClick={() => setMenuOpen(false)}
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog/necklaces"
                  className="text-white text-lg font-josefin hover:text-primary transition-colors block"
                  onClick={() => setMenuOpen(false)}
                >
                  Necklaces
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog/bracelets"
                  className="text-white text-lg font-josefin hover:text-primary transition-colors block"
                  onClick={() => setMenuOpen(false)}
                >
                  Bracelets
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog/rings"
                  className="text-white text-lg font-josefin hover:text-primary transition-colors block"
                  onClick={() => setMenuOpen(false)}
                >
                  Rings
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog/earrings"
                  className="text-white text-lg font-josefin hover:text-primary transition-colors block"
                  onClick={() => setMenuOpen(false)}
                >
                  Earrings
                </Link>
              </li>
              <li className="flex justify-center space-x-4 pt-4">
                <a
                  href="#"
                  className="text-white p-2 hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <div className="h-20 w-20 bg-amber-600">
                  </div>
                </a>
                <a
                  href="#"
                  className="text-white p-2 hover:text-primary transition-colors"
                  aria-label="Pinterest"
                >
                  <div className="h-20 w-20 bg-amber-600">
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
