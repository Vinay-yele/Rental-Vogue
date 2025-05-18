"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/1.jpg?height=800&width=600",
      title: "Designer Gowns",
      description: "Exquisite designer pieces for your special occasions",
    },
    {
      image: "/2.jpg?height=800&width=600",
      title: "Elegant Dresses",
      description: "Timeless elegance for every celebration",
    },
    {
      image: "/3.jpg?height=800&width=600",
      title: "Maternity Wear",
      description: "Beautiful baby bump gowns for your precious moments",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <section className="min-h-screen pt-24 relative overflow-hidden bg-white">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-transparent" /> */}

      <div className="container mx-auto px-4 pt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 space-y-8">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
              <span className="text-pink-700 font-medium tracking-wider text-sm">Premium Dress Rental Service</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900">
              <span className="block">Elegance for</span>
              <span className="block text-pink-700">Every Occasion,</span>
              <span className="block">Without Commitment.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Experience luxury fashion without the hefty price tag. Rent designer dresses for your special moments and
              return when done.
              <span className="block mt-2 font-medium">Rent. Reveal. Return.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 rounded-full">
                Browse Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-pink-700 hover:bg-primary hover:text-white rounded-full"
              >
                How It Works
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-pink-700 mb-2">200+</div>
                <p className="text-sm text-gray-600 leading-snug">Designer Dresses</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-700 mb-2">98%</div>
                <p className="text-sm text-gray-600 leading-snug">Happy Customers</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-700 mb-2">24h</div>
                <p className="text-sm text-gray-600 leading-snug">Delivery</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentSlide === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-white font-serif text-2xl">{slide.title}</h3>
                    <p className="text-white/80 text-sm">{slide.description}</p>
                  </div>
                </div>
              ))}

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-2 rounded-full hover:bg-white/50 transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-2 rounded-full hover:bg-white/50 transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 -right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -left-1/4 w-72 h-72 bg-secondary/30 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-600">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  )
}
