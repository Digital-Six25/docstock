import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function ProductShowcaseCards() {
  const showcaseProducts = [
    {
      id: 1,
      title: "Diagnostic Equipment",
      subtitle: "Professional Vitamin Kit",
      description: "Complete diagnostic solutions for medical professionals with advanced technology",
      image: "/medical-stethoscope.png",
      bgColor: "bg-gradient-to-br from-green-100 to-green-200",
      buttonColor: "bg-blue-600 hover:bg-blue-700 text-white",
      badge: "Top Sale 20% OFF",
      badgeColor: "bg-red-500",
    },
    {
      id: 2,
      title: 'Patient Monitoring',
      subtitle: "Young & Health",
      description: "Advanced monitoring systems for comprehensive patient care and health tracking",
      image: "/placeholder-xmz9d.png",
      bgColor: "bg-gradient-to-br from-blue-100 to-blue-200",
      buttonColor: "bg-blue-600 hover:bg-blue-700 text-white",
      badge: "New Arrival",
      badgeColor: "bg-blue-500",
    },
    {
      id: 3,
      title: "Free Shipping",
      subtitle: "40% OFF",
      description: "Get premium medical equipment with free delivery nationwide on orders over $200",
      image: "/placeholder-gk8y3.png",
      bgColor: "bg-gradient-to-br from-blue-900 to-blue-800",
      textColor: "text-white",
      buttonColor: "bg-white text-blue-900 hover:bg-gray-100",
      isPromo: true,
    },
    {
      id: 4,
      title: "Surgical Instruments",
      subtitle: "Pyridoxine Medical",
      description: "Professional surgical tools and instruments for precise medical procedures",
      image: "/placeholder-6ghg6.png",
      bgColor: "bg-gradient-to-br from-purple-100 to-purple-200",
      buttonColor: "bg-blue-600 hover:bg-blue-700 text-white",
      badge: "Best Selling",
      badgeColor: "bg-purple-500",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcaseProducts.map((product) => (
            <div
              key={product.id}
              className={`${product.bgColor} rounded-2xl p-6 relative overflow-hidden group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer`}
            >
              {product.badge && <Badge className={`${product.badgeColor} text-white mb-4`}>{product.badge}</Badge>}

              <div className={`space-y-4 ${product.textColor || "text-gray-900"}`}>
                <div>
                  <p className="text-sm font-medium opacity-80">{product.subtitle}</p>
                  <h3 className="text-xl font-bold">{product.title}</h3>
                  {product.isPromo && <div className="text-3xl font-bold mt-2">{product.subtitle}</div>}
                </div>

                <p className={`text-sm leading-relaxed ${product.textColor ? "opacity-80" : "text-gray-600"}`}>
                  {product.description}
                </p>

                <Button size="sm" className={`${product.buttonColor} font-medium`}>
                  Shop Now →
                </Button>
              </div>

              <div className="absolute -bottom-4 -right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={120}
                  height={120}
                  className="transform rotate-12"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
