import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function BrandStory() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="text-primary font-medium tracking-wider">ABOUT US</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-4 mb-6">
            Redefining Luxury,
            <br />
            One Rental at a Time.
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The Rental Vogue was born from a simple idea: why should luxury fashion be limited to those who can afford
            to buy? We believe everyone deserves to experience the confidence that comes with wearing a designer dress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/4.jpg?height=600&width=800"
              alt="Elegant dresses on display"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-gray-900">
              Sustainable Fashion,
              <br />
              Uncompromising Style
            </h3>
            <p className="text-gray-600 leading-relaxed">
              In a world of fast fashion, we stand for mindful consumption. By renting instead of buying, you're not
              just saving money – you're contributing to a more sustainable fashion ecosystem.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our collection features carefully curated pieces from renowned designers, ensuring you have access to the
              latest trends and timeless classics for any occasion – from galas and weddings to maternity photoshoots
              and pre-wedding celebrations.
            </p>
            <Button variant="outline" className="mt-4">
              Our Story
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">✨</span>
            </div>
            <h4 className="text-xl font-serif font-bold text-gray-900">Curated Collection</h4>
            <p className="text-gray-600">Handpicked designer pieces for every occasion and style preference</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">♻️</span>
            </div>
            <h4 className="text-xl font-serif font-bold text-gray-900">Sustainable Fashion</h4>
            <p className="text-gray-600">Reducing fashion waste through our circular rental model</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">🛍️</span>
            </div>
            <h4 className="text-xl font-serif font-bold text-gray-900">Accessible Luxury</h4>
            <p className="text-gray-600">Making high-end fashion accessible to everyone</p>
          </div>
        </div>
      </div>
    </section>
  )
}
