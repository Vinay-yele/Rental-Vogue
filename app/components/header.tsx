"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm backdrop-blur-md transition-all duration-500">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="font-serif text-2xl font-bold text-pink-700 inline-flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="logo"
              width={70}
              height={70}
              priority
            />The Rental Vogue
          </div>

          <nav
            className={`
              fixed md:relative top-0 right-0 h-screen md:h-auto w-full md:w-auto
              bg-white md:bg-transparent transform transition-transform duration-300 ease-in-out
              ${isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
              md:flex md:items-center md:space-x-8
            `}
          >
            <button className="md:hidden absolute top-6 right-6 text-gray-800" onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6" />
            </button>
            <div className="flex flex-col md:flex-row items-center justify-center h-full md:h-auto space-y-8 md:space-y-0 md:space-x-8">
              <a
                href="#about"
                className="text-gray-800 hover:text-primary transition-colors duration-300 font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#categories"
                className="text-gray-800 hover:text-primary transition-colors duration-300 font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                Collections
              </a>
              <a
                href="#how-it-works"
                className="text-gray-800 hover:text-primary transition-colors duration-300 font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-gray-800 hover:text-primary transition-colors duration-300 font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
             <a
  onClick={() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
    setIsMenuOpen(false)
  }}
  className="bg-primary hover:bg-primary/90 text-pink-700 px-4 py-2 rounded font-medium transition-colors duration-300 text-center cursor-pointer"
>
  Book Now
</a>
              </div>
            </div>
          </nav>

          <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  )
}
