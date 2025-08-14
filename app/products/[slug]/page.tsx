import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react"
import { getProductBySlug, products } from "@/lib/products"
import Link from "next/link"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { SpecialProductsCarousel } from "@/components/special-products-carousel"
import { ProductCard } from "@/components/product-card"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-white">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden bg-white border-2 border-transparent hover:border-blue-600 cursor-pointer transition-colors"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              {product.badge && (
                <Badge
                  className={`mb-2 ${
                    product.badge === "Sale"
                      ? "bg-red-500 hover:bg-red-500"
                      : product.badge === "New"
                        ? "bg-green-500 hover:bg-green-500"
                        : product.badge === "Critical Care"
                          ? "bg-red-600 hover:bg-red-600"
                          : "bg-blue-600 hover:bg-blue-600"
                  }`}
                >
                  {product.badge}
                </Badge>
              )}
              <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-4">by {product.brand}</p>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-lg font-medium">{product.rating}</span>
                </div>
                <span className="text-gray-500">({product.reviews} reviews)</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-500 line-through">${product.originalPrice}</span>
                )}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

              {/* Key Features */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock ? (
                  <div className="flex items-center text-green-600">
                    <span className="font-medium">In Stock</span>
                    {product.stockCount <= 10 && (
                      <span className="ml-2 text-orange-600">(Only {product.stockCount} left)</span>
                    )}
                  </div>
                ) : (
                  <span className="text-red-600 font-medium">Out of Stock</span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                <AddToCartButton product={product} size="lg" className="flex-1 bg-blue-600 hover:bg-blue-700" />
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-blue-600" />
                  <div className="text-sm">
                    <div className="font-medium">Free Shipping</div>
                    <div className="text-gray-600">Orders over $200</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <div className="text-sm">
                    <div className="font-medium">Warranty</div>
                    <div className="text-gray-600">2 Year Coverage</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="h-5 w-5 text-blue-600" />
                  <div className="text-sm">
                    <div className="font-medium">Returns</div>
                    <div className="text-gray-600">30 Day Policy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="mb-16">
          <CardContent className="p-0">
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-blue-50">
                <TabsTrigger
                  value="specifications"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Specifications
                </TabsTrigger>
                <TabsTrigger value="reviews" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  Reviews
                </TabsTrigger>
                <TabsTrigger
                  value="shipping"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Shipping & Returns
                </TabsTrigger>
              </TabsList>

              <TabsContent value="specifications" className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-900">{key}:</span>
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="p-6">
                <div className="text-center py-8">
                  <p className="text-gray-600">Customer reviews will be displayed here.</p>
                </div>
              </TabsContent>

              <TabsContent value="shipping" className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Shipping Information</h4>
                    <p className="text-gray-700">
                      Free shipping on orders over $200. Standard delivery takes 3-5 business days.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Return Policy</h4>
                    <p className="text-gray-700">30-day return policy for unused items in original packaging.</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <SpecialProductsCarousel />
    </main>
  )
}
