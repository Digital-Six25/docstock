import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Eye } from "lucide-react"
import Link from "next/link"
import type { Product } from "@/lib/products"
import { AddToCartButton } from "@/components/add-to-cart-button"

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg mb-4">No products found</div>
        <p className="text-gray-400">Try adjusting your search or filter criteria</p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-0">
            <div className="relative">
              <Link href={`/products/${product.slug}`}>
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              {product.badge && (
                <Badge
                  className={`absolute top-3 left-3 ${
                    product.badge === "Sale"
                      ? "bg-red-500 hover:bg-red-500"
                      : product.badge === "New"
                        ? "bg-green-500 hover:bg-green-500"
                        : product.badge === "Critical Care"
                          ? "bg-red-600 hover:bg-red-600"
                          : "bg-yellow-600 hover:bg-yellow-600"
                  }`}
                >
                  {product.badge}
                </Badge>
              )}
              {!product.inStock && (
                <Badge className="absolute top-3 right-3 bg-gray-500 hover:bg-gray-500">Out of Stock</Badge>
              )}
            </div>

            <div className="p-6 space-y-4">
              <div>
                <Link href={`/products/${product.slug}`}>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-yellow-700 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>
                {product.inStock && product.stockCount <= 10 && (
                  <Badge variant="outline" className="text-orange-600 border-orange-600">
                    Only {product.stockCount} left
                  </Badge>
                )}
              </div>

              <div className="flex gap-2">
                <AddToCartButton product={product} className="flex-1" />
                <Button variant="outline" size="icon" asChild>
                  <Link href={`/products/${product.slug}`}>
                    <Eye className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
