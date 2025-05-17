import { Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialMedia() {
  return (
    <section className="py-16 bg-white border-t border-secondary/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">Join Our Community</h2>
        <p className="text-xl text-gray-600 mb-8">
          Follow us for style inspiration, new arrivals, and exclusive offers
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant="outline"
            className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-white"
          >
            <Instagram />
            Instagram
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-white"
          >
            <Facebook />
            Facebook
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-white"
          >
            <Twitter />
            Twitter
          </Button>
        </div>
        <p className="text-gray-600 mb-4">Tag us with #TheRentalVogue to be featured!</p>
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-primary hover:bg-primary/90 text-white">Subscribe to Newsletter</Button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Subscribe to receive updates on new arrivals, special offers and our promotions.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-secondary/30 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>© 2025 The Rental Vogue. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
