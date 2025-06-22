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
          <a href="https://www.instagram.com/therentalvogue/">
            <Button
              variant="outline"
              className="flex items-center gap-2 border-primary text-black hover:bg-primary hover:text-white"
            >
              <Instagram />
              Instagram
            </Button>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100093000000000">
            <Button
              variant="outline"
              className="flex items-center gap-2 border-primary text-black hover:bg-primary hover:text-white"  
            >
              <Facebook />
              Facebook
            </Button>
          </a>
        </div>
        <p className="text-gray-600 mb-4">Tag us with #TheRentalVogue to be featured!</p>
        

        {/* Contact Section with Map */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8">Visit Us</h2>
          <div className="mb-8 rounded-lg overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d77.7160969!3d12.9515106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1351a13cef43%3A0x9cf87b1a399ca760!2sThe%20Rental%20Vogue!5e0!3m2!1sen!2sin!4v1710400183044!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center max-w-4xl mx-auto">
            <div className="flex flex-col gap-2 items-center">
              <h3 className="font-serif text-lg font-bold text-gray-800">Contact</h3>
                <a 
                href="https://wa.me/918123770843" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-pink-700 hover:text-pink-800 underline"
                >
                WhatsApp: +91 8123770843
                </a>  
              <a 
                href="https://www.instagram.com/therentalvogue/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-pink-700 hover:text-pink-800"
              >
                Instagram: @therentalvogue
              </a>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <h3 className="font-serif text-lg font-bold text-gray-800">Location</h3>
              <div className="text-pink-600">
                <p>Ramesh Residency</p>
                <p>Near Asha Tiffins</p>
                <p>Silver Springs Layout</p>
                <p>Munnekollal, Bengaluru</p>
                <p>Karnataka 560066</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <h3 className="font-serif text-lg font-bold text-gray-800">Hours</h3>
              <p className="text-pink-600">Monday - Saturday</p>
              <p className="text-pink-600">10:00 AM - 8:00 PM</p>
              <p className="text-pink-600">Sunday: By Appointment</p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
  <a 
    href="https://wa.me/918123770843" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-primary text-pink-700 hover:text-white hover:bg-pink-700 px-6 py-3 rounded font-medium transition-colors duration-300"
  >
    Book Now on WhatsApp
  </a>
</div>

        {/* Original Footer */}
        <div className="mt-8 pt-8 border-t border-secondary/30 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>© 2025 The Rental Vogue. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
