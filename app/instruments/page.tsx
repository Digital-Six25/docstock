"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { ProductFilters, type FilterState } from "@/components/product-filters"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { searchAllProducts, getProductsByCategory } from "@/lib/products"
import { Grid, List } from "lucide-react"

export default function InstrumentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    brands: [],
    priceRange: [0, 2000],
    inStockOnly: false,
    rating: 0,
  })
  const [sortBy, setSortBy] = useState<"name" | "price-low" | "price-high" | "rating">("name")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const instrumentProducts = useMemo(() => {
    return getProductsByCategory("instruments").concat(getProductsByCategory("surgical"))
  }, [])

  const filteredProducts = useMemo(() => {
    let result = searchQuery
      ? searchAllProducts(searchQuery).filter((p) => instrumentProducts.some((ip) => ip.id === p.id))
      : instrumentProducts

    // Apply filters (same logic as other pages)
    if (filters.categories.length > 0) {
      result = result.filter((product) => filters.categories.includes(product.category))
    }

    if (filters.brands.length > 0) {
      result = result.filter((product) => filters.brands.includes(product.brand))
    }

    if (filters.inStockOnly) {
      result = result.filter((product) => product.inStock)
    }

    if (filters.rating > 0) {
      result = result.filter((product) => product.rating >= filters.rating)
    }

    result = result.filter(
      (product) => product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1],
    )

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      case "name":
      default:
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
    }

    return result
  }, [searchQuery, filters, sortBy, instrumentProducts])

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Medical Instruments</h1>
          <p className="text-gray-600">Precision surgical and diagnostic instruments</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ProductFilters onFiltersChange={setFilters} onSearchChange={setSearchQuery} />
          </div>

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-600">
                Showing {filteredProducts.length} of {instrumentProducts.length} products
              </div>

              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>

                <div className="flex border border-gray-300 rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg mb-4">No products found</div>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
