"use client"

import { useState, useMemo } from "react"
import { Search, ArrowUpDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const brands = [
  { name: "3M Health Care", category: "Medical Supplies", image: "/brands/3m.png" },
  { name: "Abbott", category: "Diagnostics", image: "/brands/abbott.png" },
  { name: "Baxter", category: "Medical Devices", image: "/brands/baxter.png" },
  { name: "BD (Becton Dickinson)", category: "Medical Technology", image: "/brands/bd.png" },
  { name: "Boston Scientific", category: "Medical Devices", image: "/brands/boston-scientific.png" },
  { name: "Cardinal Health", category: "Healthcare Services", image: "/brands/cardinal-health.png" },
  { name: "Covidien", category: "Medical Devices", image: "/brands/covidien.png" },
  { name: "Danaher", category: "Life Sciences", image: "/brands/danaher.png" },
  { name: "Edwards Lifesciences", category: "Cardiovascular", image: "/brands/edwards.png" },
  { name: "GE Healthcare", category: "Medical Imaging", image: "/brands/ge-healthcare.png" },
  { name: "Hologic", category: "Women's Health", image: "/brands/hologic.png" },
  { name: "Johnson & Johnson", category: "Medical Devices", image: "/brands/jnj.png" },
  { name: "Medtronic", category: "Medical Technology", image: "/brands/medtronic.png" },
  { name: "Philips Healthcare", category: "Health Technology", image: "/brands/philips.png" },
  { name: "Siemens Healthineers", category: "Medical Technology", image: "/brands/siemens.png" },
  { name: "Stryker", category: "Medical Technology", image: "/brands/stryker.png" },
  { name: "Thermo Fisher Scientific", category: "Life Sciences", image: "/brands/thermo-fisher.png" },
  { name: "Zimmer Biomet", category: "Musculoskeletal", image: "/brands/zimmer.png" },
  { name: "Olympus", category: "Medical Systems", image: "/brands/olympus.png" },
  { name: "Mindray", category: "Medical Equipment", image: "/brands/mindray.png" },
  { name: "Draeger", category: "Medical Safety", image: "/brands/draeger.png" },
  { name: "Masimo", category: "Patient Monitoring", image: "/brands/masimo.png" },
  { name: "Nihon Kohden", category: "Medical Electronics", image: "/brands/nihon-kohden.png" },
  { name: "Spacelabs Healthcare", category: "Patient Monitoring", image: "/brands/spacelabs.png" },
  { name: "Welch Allyn", category: "Medical Devices", image: "/brands/welch-allyn.png" },
  { name: "Zoll Medical", category: "Resuscitation", image: "/brands/zoll.png" },
  { name: "Carestream Health", category: "Medical Imaging", image: "/brands/carestream.png" },
  { name: "Fujifilm Healthcare", category: "Medical Imaging", image: "/brands/fujifilm.png" },
  { name: "Hoya Corporation", category: "Medical Endoscopy", image: "/brands/hoya.png" },
  { name: "Karl Storz", category: "Endoscopy", image: "/brands/karl-storz.png" },
  { name: "Pentax Medical", category: "Endoscopy", image: "/brands/pentax.png" },
  { name: "Smith & Nephew", category: "Medical Technology", image: "/brands/smith-nephew.png" },
]

export default function BrandsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

  const filteredAndSortedBrands = useMemo(() => {
    const filtered = brands.filter(
      (brand) =>
        brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        brand.category.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    return filtered.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name)
      } else {
        return b.name.localeCompare(a.name)
      }
    })
  }, [searchTerm, sortOrder])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-docstock-blue text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-docstock-blue to-blue-700"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">Trusted Medical Brands</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Discover premium medical equipment from world-renowned manufacturers committed to healthcare excellence
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search brands or categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">{filteredAndSortedBrands.length} brands found</span>

              <Select value={sortOrder} onValueChange={(value: "asc" | "desc") => setSortOrder(value)}>
                <SelectTrigger className="w-48">
                  <ArrowUpDown className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asc">A to Z</SelectItem>
                  <SelectItem value="desc">Z to A</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredAndSortedBrands.map((brand, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105"
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src={brand.image || "/placeholder.svg"}
                    alt={brand.name}
                    className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>

                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white font-semibold text-lg mb-1">{brand.name}</h3>
                    <p className="text-gray-200 text-sm">{brand.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredAndSortedBrands.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No brands found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
