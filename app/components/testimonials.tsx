import Image from "next/image"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-secondary/10 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium tracking-wider">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-4 mb-6">
            Hear From Our
            <br />
            Satisfied Customers
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Don't just take our word for it. See what our customers have to say about their experience with The Rental
            Vogue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Customer wearing a rented gown"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-xl text-gray-900 font-medium italic">
              "I rented a gorgeous Vera Wang for my best friend's wedding. The dress fit perfectly, and I received so
              many compliments! The entire process was seamless, from selection to return. I'll definitely be using The
              Rental Vogue again!"
            </blockquote>
            <div>
              <p className="font-bold text-gray-900">Emily Johnson</p>
              <p className="text-gray-600">Event Planner / Rented for a Wedding</p>
            </div>
          </div>
        </div>

        {/* Additional reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              comment: "My maternity photoshoot dress was absolutely perfect. I felt beautiful and comfortable.",
              name: "Sarah Williams",
              role: "Teacher",
              event: "Maternity Photoshoot",
            },
            {
              comment: "The pre-wedding shoot dresses were stunning. The styling advice was incredibly helpful!",
              name: "Jessica Chen",
              role: "Marketing Executive",
              event: "Pre-wedding Shoot",
            },
            {
              comment: "Rented a gown for a charity gala. Saved money and still looked like a million dollars!",
              name: "Olivia Parker",
              role: "Non-profit Director",
              event: "Charity Gala",
            },
          ].map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"{review.comment}"</p>
              <div>
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-600">
                  {review.role} / {review.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
