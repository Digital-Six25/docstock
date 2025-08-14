import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"
import Link from "next/link"

interface ProductCardProps {
  product: {
    id: number
    name: string
    price: number
    originalPrice?: number | null
    rating: number
    reviews: number
    image: string
    badge?: string | null
    features: string[]
    slug?: string // Added slug property for routing
  }
  className?: string
}

export function ProductCard({ product, className = "" }: ProductCardProps) {
  const productSlug =
    product.slug ||
    product.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")

  return (
    <Card className={`group hover:scale-105 hover:shadow-xl transition-all duration-300 overflow-hidden ${className}`}>
      <Link href={`/products/${productSlug}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-300"
          />
          {product.badge && (
            <Badge
              className={`absolute top-3 left-3 ${
                product.badge === "Sale"
                  ? "bg-red-500 hover:bg-red-500"
                  : product.badge === "New"
                    ? "bg-green-500 hover:bg-green-500"
                    : "bg-blue-600 hover:bg-blue-600"
              }`}
            >
              {product.badge}
            </Badge>
          )}
        </div>

        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium ml-1">{product.rating}</span>
              </div>
              <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
              )}
            </div>
          </div>
        </div>
      </Link>

      <div className="px-4 pb-4">
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </Card>
  )
}
