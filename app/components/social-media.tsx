import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialMedia() {
  return (
    <section className="py-16 bg-white border-t border-secondary/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">Join Our Community</h2>
        <p className="text-xl text-pink-700 mb-8">
          Follow us for style inspiration, new arrivals, and exclusive offers
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <a href="https://www.instagram.com/therentalvogue/">
            <Button
              variant="outline"
              className="flex items-center gap-2 border-primary text-pink-700 hover:bg-primary hover:text-white"
            >
              <Instagram />
              Instagram
            </Button>
          </a>

          <a href="https://wa.me/918123770843" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="flex items-center gap-2 border-primary text-pink-700 hover:bg-primary hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12.004 2.003a9.995 9.995 0 0 0-8.65 15.13l-1.32 4.04a1 1 0 0 0 1.26 1.26l4.04-1.32a9.995 9.995 0 1 0 4.67-19.11zm0 2a8 8 0 1 1-3.54 15.23 1 1 0 0 0-.7-.06l-3.13 1.02 1.02-3.13a1 1 0 0 0-.06-.7A8 8 0 0 1 12.004 4.003zm-3.13 5.13c-.21-.47-.44-.48-.65-.49-.17-.01-.37-.01-.57-.01a1.13 1.13 0 0 0-.81.38c-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.16 1.72 2.75 4.24 3.75.59.23 1.05.37 1.41.47.59.16 1.13.14 1.56.09.48-.06 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28-.25-.12-1.48-.73-1.71-.82-.23-.09-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.3.19-.55.07-.25-.12-1.05-.39-2-1.25-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.39.11-.51.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.13-.61-1.5-.86-2.05z"
                />
              </svg>
              WhatsApp
            </Button>
          </a>
        </div>

        <p className="text-pink-700 mb-4">Tag us with #TheRentalVogue to be featured!</p>

        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-primary hover:bg-primary/90 text-white">Subscribe to Newsletter</Button>
          </div>
          <p className="text-sm text-pink-700 mt-2">
            Subscribe to receive updates on new arrivals, special offers and our promotions.
          </p>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-16 mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Visit Us</h3>
          <div className="w-full h-[350px] rounded-xl overflow-hidden border border-secondary/30">
            <iframe
              title="The Rental Vogue Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3177088764623!2d77.71352197507612!3d12.951510587361996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1351a13cef43%3A0x9cf87b1a399ca760!2sThe%20Rental%20Vogue!5e0!3m2!1sen!2sin!4v1747586006759!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-secondary/30 text-sm text-pink-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>© 2025 The Rental Vogue. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-pink-700">Privacy Policy</a>
              <a href="#" className="hover:text-pink-700">Terms of Service</a>
              <a href="#" className="hover:text-pink-700">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
