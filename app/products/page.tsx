"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { ProductFilters, type FilterState } from "@/components/product-filters"
import { ProductGrid } from "@/components/product-grid"
import { Button } from "@/components/ui/button"
import { products, searchProducts } from "@/lib/products"
import { Grid, List } from "lucide-react"

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    brands: [],
    priceRange: [0, 3000],
    inStockOnly: false,
    rating: 0,
  })
  const [sortBy, setSortBy] = useState<"name" | "price-low" | "price-high" | "rating">("name")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredProducts = useMemo(() => {
    let result = searchQuery ? searchProducts(searchQuery) : products

    // Apply filters
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

    // Apply sorting
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
  }, [searchQuery, filters, sortBy])

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Medical Equipment</h1>
          <p className="text-gray-600">Discover our comprehensive range of professional medical equipment</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <ProductFilters onFiltersChange={setFilters} onSearchChange={setSearchQuery} />
          </div>

          {/* Products Area */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </div>

              <div className="flex items-center gap-4">
                {/* Sort Options */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>

                {/* View Mode Toggle */}
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

            {/* Products Grid */}
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </main>
  )
}
