import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ShoppingCart } from "lucide-react"
import Link from "next/link"

const saleProducts = [
  {
    id: 1,
    name: "Digital Blood Pressure Monitor",
    originalPrice: 299,
    salePrice: 199,
    discount: 33,
    image: "/images/products/bp-monitor.png",
    rating: 4.8,
    reviews: 124,
    slug: "digital-blood-pressure-monitor",
  },
  {
    id: 2,
    name: "Professional Stethoscope",
    originalPrice: 189,
    salePrice: 149,
    discount: 21,
    image: "/professional-stethoscope.png",
    rating: 4.9,
    reviews: 89,
    slug: "professional-stethoscope",
  },
  {
    id: 3,
    name: "Pulse Oximeter",
    originalPrice: 79,
    salePrice: 59,
    discount: 25,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 156,
    slug: "pulse-oximeter",
  },
  {
    id: 4,
    name: "Digital Thermometer Set",
    originalPrice: 45,
    salePrice: 29,
    discount: 36,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 203,
    slug: "digital-thermometer-set",
  },
]

export function OnSaleProducts() {
  return (
    <section className="py-16 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge className="bg-red-600 text-white px-4 py-2 text-lg">Limited Time Offer</Badge>
          </div>
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">Medical Equipment On Sale</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Save big on premium medical equipment. Limited stock available - don't miss these incredible deals on
            professional healthcare products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {saleProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-red-600 text-white">-{product.discount}%</Badge>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-slate-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-slate-600 ml-1">({product.reviews})</span>
                  </div>

                  <h3 className="font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    <Link href={`/products/${product.slug}`}>{product.name}</Link>
                  </h3>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-red-600">${product.salePrice}</span>
                    <span className="text-lg text-slate-500 line-through">${product.originalPrice}</span>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent">
            View All Sale Items
          </Button>
        </div>
      </div>
    </section>
  )
}
