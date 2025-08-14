"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Filter, X } from "lucide-react"
import { categories } from "@/lib/products"

interface ProductFiltersProps {
  onFiltersChange: (filters: FilterState) => void
  onSearchChange: (query: string) => void
}

export interface FilterState {
  categories: string[]
  brands: string[]
  priceRange: [number, number]
  inStockOnly: boolean
  rating: number
}

const brands = ["Bionet", "MedTech", "CardioMax", "OxyTech", "LifeSaver", "TempCheck"]

export function ProductFilters({ onFiltersChange, onSearchChange }: ProductFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(true)
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    brands: [],
    priceRange: [0, 3000],
    inStockOnly: false,
    rating: 0,
  })

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    onSearchChange(value)
  }

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters }
    setFilters(updatedFilters)
    onFiltersChange(updatedFilters)
  }

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    const newCategories = checked
      ? [...filters.categories, categoryId]
      : filters.categories.filter((id) => id !== categoryId)
    handleFilterChange({ categories: newCategories })
  }

  const handleBrandChange = (brand: string, checked: boolean) => {
    const newBrands = checked ? [...filters.brands, brand] : filters.brands.filter((b) => b !== brand)
    handleFilterChange({ brands: newBrands })
  }

  const clearFilters = () => {
    const clearedFilters: FilterState = {
      categories: [],
      brands: [],
      priceRange: [0, 3000],
      inStockOnly: false,
      rating: 0,
    }
    setFilters(clearedFilters)
    onFiltersChange(clearedFilters)
  }

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search medical equipment..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
        {(filters.categories.length > 0 || filters.brands.length > 0 || filters.inStockOnly || filters.rating > 0) && (
          <Button variant="ghost" onClick={clearFilters} className="text-sm">
            <X className="h-4 w-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          {/* Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={category.id}
                    checked={filters.categories.includes(category.id)}
                    onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
                  />
                  <Label htmlFor={category.id} className="text-sm font-normal">
                    {category.name} ({category.productCount})
                  </Label>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Brands */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Brands</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={brand}
                    checked={filters.brands.includes(brand)}
                    onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
                  />
                  <Label htmlFor={brand} className="text-sm font-normal">
                    {brand}
                  </Label>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Price Range */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Price Range</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Slider
                value={filters.priceRange}
                onValueChange={(value) => handleFilterChange({ priceRange: value as [number, number] })}
                max={3000}
                min={0}
                step={50}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>${filters.priceRange[0]}</span>
                <span>${filters.priceRange[1]}</span>
              </div>
            </CardContent>
          </Card>

          {/* Additional Filters */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Additional Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="inStock"
                  checked={filters.inStockOnly}
                  onCheckedChange={(checked) => handleFilterChange({ inStockOnly: checked as boolean })}
                />
                <Label htmlFor="inStock" className="text-sm font-normal">
                  In Stock Only
                </Label>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Minimum Rating</Label>
                <Slider
                  value={[filters.rating]}
                  onValueChange={(value) => handleFilterChange({ rating: value[0] })}
                  max={5}
                  min={0}
                  step={0.5}
                  className="w-full"
                />
                <div className="text-sm text-gray-600">{filters.rating} stars and above</div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
