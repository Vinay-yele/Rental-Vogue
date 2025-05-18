import Image from "next/image"
import { Button } from "@/components/ui/button"
import { memo } from "react"

const CategoryCard = memo(({ category, index }: { category: any; index: number }) => (
  <div
    className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
  >
    <div className="aspect-[3/4] relative">
      <Image
        src={category.image || "/placeholder.svg"}
        alt={category.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        priority={index < 4}
        loading={index < 4 ? "eager" : "lazy"}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-serif font-bold mb-2">{category.title}</h3>
        <p className="text-white/80 text-sm mb-4">{category.description}</p>
      </div>
    </div>
  </div>
))
CategoryCard.displayName = "CategoryCard"

export default function Categories() {
  const categories = [
    {
      title: "Green Gown",
      description: "Exquisite pieces from renowned designers",
      image: "/1.jpg?height=600&width=400",
    },
    {
      title: "Purple Gown",
      description: "Timeless elegance for every celebration",
      image: "/2.jpg?height=600&width=400",
    },
    {
      title: "Red Gown",
      description: "Beautiful baby bump gowns",
      image: "/7.jpg?height=600&width=400",
    },
    {
      title: "Pink Gown",
      description: "Exquisite pieces from renowned designers",
      image: "/6.jpg?height=600&width=400",
    },
    
    {
      title: "Pre-wedding Attire",
      description: "Perfect for engagement shoots",
      image: "/4.jpg?height=600&width=400",
    },
    
    {
      title: "Wedding Lehenga",
      description: "Timeless elegance for every celebration",
      image: "/3.jpg?height=600&width=400",
    },
    {
      title: "Maternity Wear",
      description: "Beautiful baby bump gowns",
      image: "/maternal-1.jpg?height=600&width=400",
    },
    
    {
      title: "Maternity ball gown",
      description: "Perfect for engagement shoots",
      image: "/8.jpg?height=600&width=400",
    },
    {
      title: "Maroon Gown",
      description: "Exquisite pieces from renowned designers",
      image: "/9.jpg?height=600&width=400",
    },
    {
      title: "Green Lehenga",
      description: "Timeless elegance for every celebration",
      image: "/10.jpg?height=600&width=400",
    },
    {
      title: "Pink Dress",
      description: "Beautiful baby bump gowns",
      image: "11.png?height=600&width=400",
    },
    {
      title: "Kid's Pink Dress",
      description: "Perfect for engagement shoots",
      image: "/12.jpg?height=600&width=400",
    }
  ]

  return (
    <section id="categories" className="py-24 bg-gradient-to-b from-white to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-pink-700 font-medium tracking-wider">COLLECTIONS</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-4 mb-6">
            Discover Our
            <br />
            Curated Collections
          </h2>
          <p className="text-pink-700 leading-relaxed">
            From red carpet-worthy gowns to elegant maternity wear, we have the perfect dress for every occasion. Browse
            our collections and find your perfect match.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90 text-black">View All Collections</Button>
        </div> */}
      </div>
    </section>
  )
}
