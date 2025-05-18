import Image from "next/image"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-secondary/10 to-white">
      <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-pink-700 font-extrabold text-4xl tracking-wider">Happy Customers</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-4 mb-6">
            Hear From Our
            <br />
            Satisfied Customers
          </h2>
          <p className="text-pink-600 leading-relaxed">
            Don't just take our word for it. See what our customers have to say about their experience with The Rental
            Vogue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/customer.jpg?height=600&width=800"
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
             "I recently rented gowns for my pre wedding shoot it was so comfortable and measurements were perfect, gowns were in good condition and quality of materials are great. Thank you so much Arthi for your truly remarkable work"

            </blockquote>
            <div>
              <p className="font-bold text-gray-900">Srushti</p>
            </div>
          </div>
        </div>

        {/* Additional reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              comment: " We took a gown on rent from this shop and we had a good experience with renting out. Shop owner interaction is good and helps getting the gown resized to our needs. Got a proper response whenever we called. The gown quality and colour was good and we have choosen from a set of gown collection. I suggest this shop to be a good choice of you want to rent out gown.photoshoot dress was absolutely perfect. I felt beautiful and comfortable.",
              name: "Keertiraj Halli",
              
            },
            {
              comment: "Nice costumes with reasonable prices.i took 2 costumes very good and they are providing adjustments also at a time.they are giving gowns for 2days it is very good. I am happy. with their communication pre-wedding shoot dresses were stunning. The styling advice was incredibly helpful!",
              name: "Jkambhampati jyothi",
          
            },
            {
              comment: " have rented gown for my pre wedding shoot and it has given me a really good look to my pictures and collections are good at rental vouge.. and the person arathi who is handling this is a really very helpful and good person i have met,,, iam happy with renting dress from here and you all beautiful womens...just go for it. This will be your good choice!! You can create your own memories with beautiful dresses. Iam happy and satisfied with The Rental Vogue👍😊",
              name: "Sandhya Sanu",
             
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
              
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
