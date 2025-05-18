import { CheckCircle } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Browse & Select",
      description: "Explore our collection and choose your perfect dress",
      icon: "🔍",
    },
    {
      number: "02",
      title: "Book Your Dates",
      description: "Select your rental period and complete your booking",
      icon: "📅",
    },
    {
      number: "03",
      title: "Receive & Enjoy",
      description: "Your dress arrives perfectly prepared for your occasion",
      icon: "👗",
    },
    {
      number: "04",
      title: "Return",
      description: "Simply return using our prepaid packaging",
      icon: "📦",
    },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-pink-700 font-medium tracking-wider">HOW IT WORKS</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-4 mb-6">
            Simple, Elegant,
            <br />
            Hassle-free
          </h2>
          <p className="text-pink-700 leading-relaxed">
            Renting with The Rental Vogue is as easy as it is delightful. Follow these simple steps to experience luxury
            fashion without commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-white border border-secondary/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                {step.number}
              </div>
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 bg-secondary/20 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Our Rental Includes</h3>
              <ul className="space-y-4">
                {[
                  "Free delivery and returns",
                  "Professional dry cleaning",
                  "Sizing consultation",
                  "Backup size when available",
                  "Styling advice",
                  "Accessory recommendations",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-pink-700 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Rental Periods</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="font-bold text-gray-900">4-Day Rental</div>
                  <p className="text-gray-600 text-sm">Perfect for weekend events</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="font-bold text-gray-900">8-Day Rental</div>
                  <p className="text-gray-600 text-sm">Ideal for vacations or longer events</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="font-bold text-gray-900">Custom Period</div>
                  <p className="text-gray-600 text-sm">Contact us for special arrangements</p>
                </div>
              </div>
            </div>
          </div> 
        </div>*/}
      </div>
    </section>
  )
}
