import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { categories } from "@/lib/products"
import Link from "next/link"

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">Medical Equipment Categories</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our comprehensive range of medical equipment organized by specialty and application.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.slug}`}>
              <Card className="group hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 right-3 bg-yellow-600 hover:bg-yellow-600">
                      {category.productCount} Products
                    </Badge>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-yellow-700 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{category.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
