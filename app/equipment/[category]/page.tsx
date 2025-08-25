"use client"

import { useState, useMemo } from "react"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { ProductFilters, type FilterState } from "@/components/product-filters"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { searchAllProducts, getProductsByEquipmentType } from "@/lib/products"
import { Grid, List } from "lucide-react"

const equipmentTypes = [
  "audiometers",
  "blood-pressure-monitors",
  "capnographs",
  "cryotherapy",
  "defibrillators",
  "dermatoscopes",
  "diagnostic-analysis-testing",
  "diagnostic-sets",
  "dopplers",
  "ear-irrigators",
  "ecg-machines",
  "electrosurgery",
  "examination-couches",
  "lighting",
  "first-aid-kits",
  "first-aid-training",
  "instrument-trolleys",
  "ophthalmoscopes",
  "laryngoscopes",
  "otoscopes",
  "patient-monitors",
  "patient-scales",
  "pulse-oximeters",
  "reflex-hammers",
  "resuscitation",
  "sphygmomanometers",
  "spirometers",
  "stethoscopes",
  "sterilisers",
  "suction-pumps",
  "surgical-loupes",
  "thermometers",
  "tuning-forks",
  "vaccine-fridges",
  "vision-screening",
  "x-ray-viewers",
]

const equipmentTypeNames: Record<string, string> = {
  audiometers: "Audiometers",
  "blood-pressure-monitors": "Blood Pressure Monitors",
  capnographs: "Capnographs",
  cryotherapy: "Cryotherapy",
  defibrillators: "Defibrillators",
  dermatoscopes: "Dermatoscopes",
  "diagnostic-analysis-testing": "Diagnostic Analysis Testing",
  "diagnostic-sets": "Diagnostic Sets",
  dopplers: "Dopplers",
  "ear-irrigators": "Ear Irrigators",
  "ecg-machines": "ECG Machines",
  electrosurgery: "Electrosurgery",
  "examination-couches": "Examination Couches",
  lighting: "Lighting",
  "first-aid-kits": "First Aid Kits",
  "first-aid-training": "First Aid Training",
  "instrument-trolleys": "Instrument Trolleys",
  ophthalmoscopes: "Ophthalmoscopes",
  laryngoscopes: "Laryngoscopes",
  otoscopes: "Otoscopes",
  "patient-monitors": "Patient Monitors",
  "patient-scales": "Patient Scales",
  "pulse-oximeters": "Pulse Oximeters",
  "reflex-hammers": "Reflex Hammers",
  resuscitation: "Resuscitation",
  sphygmomanometers: "Sphygmomanometers",
  spirometers: "Spirometers",
  stethoscopes: "Stethoscopes",
  sterilisers: "Sterilisers",
  "suction-pumps": "Suction Pumps",
  "surgical-loupes": "Surgical Loupes",
  thermometers: "Thermometers",
  "tuning-forks": "Tuning Forks",
  "vaccine-fridges": "Vaccine Fridges",
  "vision-screening": "Vision Screening",
  "x-ray-viewers": "X-Ray Viewers",
}

interface EquipmentPageProps {
  params: {
    category: string
  }
}

export default function EquipmentPage({ params }: EquipmentPageProps) {
  const { category } = params

  // Check if the category is valid
  if (!equipmentTypes.includes(category)) {
    notFound()
  }

  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    brands: [],
    priceRange: [0, 10000],
    inStockOnly: false,
    rating: 0,
  })
  const [sortBy, setSortBy] = useState<"name" | "price-low" | "price-high" | "rating">("name")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const equipmentProducts = useMemo(() => {
    return getProductsByEquipmentType(category)
  }, [category])

  const filteredProducts = useMemo(() => {
    let result = searchQuery
      ? searchAllProducts(searchQuery).filter((p) => equipmentProducts.some((ep) => ep.id === p.id))
      : equipmentProducts

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
  }, [searchQuery, filters, sortBy, equipmentProducts])

  const categoryName = equipmentTypeNames[category] || category
  const categoryDescription = `Professional ${categoryName.toLowerCase()} for medical and healthcare applications`

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">{categoryName}</h1>
          <p className="text-gray-600">{categoryDescription}</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ProductFilters onFiltersChange={setFilters} onSearchChange={setSearchQuery} />
          </div>

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-600">
                Showing {filteredProducts.length} of {equipmentProducts.length} products
              </div>

              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-docstock-blue"
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
