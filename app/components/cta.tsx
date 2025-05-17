import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wider">READY TO SHINE?</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-4 mb-6">
              Find Your Perfect Dress
              <br />
              For Your Special Occasion
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of satisfied customers who have experienced luxury fashion without the commitment.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">First-Time Rental Offer</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-primary">15% OFF</span>
                  <span className="ml-2 text-gray-500">your first rental</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Access to all designer collections
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Free delivery and returns
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Styling consultation included
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Backup size when available
                  </li>
                </ul>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                  Browse Collection
                </Button>
                <p className="text-sm text-gray-500 mt-4 text-center">Use code: FIRSTGLOW at checkout</p>
              </div>
              <div className="relative hidden md:block">
                <Image src="/placeholder.svg?height=600&width=400" alt="Elegant dress" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute top-4 right-4 bg-primary text-white font-bold py-2 px-4 rounded-full text-lg animate-pulse">
                  Limited Time
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Join Our VIP Membership</h3>
            <p className="text-gray-600 mb-6">
              Get exclusive benefits with our VIP membership: priority access to new arrivals,
              <br />
              special discounts, and free style upgrades.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Learn About VIP Benefits
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
