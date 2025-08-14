import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { ProductGrid } from "@/components/product-grid"
import { getCategoryBySlug, getProductsByCategory } from "@/lib/products"
import Link from "next/link"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.slug)
  const products = getProductsByCategory(params.slug)

  if (!category) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-yellow-700">
            Home
          </Link>
          <span>/</span>
          <Link href="/categories" className="hover:text-yellow-700">
            Categories
          </Link>
          <span>/</span>
          <span className="text-gray-900">{category.name}</span>
        </nav>

        {/* Category Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">{category.name}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">{category.description}</p>
          <div className="text-gray-500">Showing {products.length} products in this category</div>
        </div>

        {/* Products */}
        <ProductGrid products={products} />
      </div>
    </main>
  )
}
