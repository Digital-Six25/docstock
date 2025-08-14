"use client"

import { useState, useEffect } from "react"

const brands = [
  { name: "3M", logo: "/generic-medical-logo.png" },
  { name: "Philips", logo: "/philips-healthcare-logo.png" },
  { name: "GE Healthcare", logo: "/ge-healthcare-logo.png" },
  { name: "Siemens", logo: "/siemens-healthineers-logo.png" },
  { name: "Medtronic", logo: "/medtronic-logo.png" },
  { name: "Johnson & Johnson", logo: "/generic-medical-logo.png" },
  { name: "Abbott", logo: "/generic-healthcare-logo.png" },
  { name: "Roche", logo: "/generic-medical-logo.png" },
  { name: "Baxter", logo: "/baxter-medical-logo.png" },
  { name: "BD", logo: "/bd-becton-dickinson-logo.png" },
  { name: "Stryker", logo: "/stryker-medical-logo.png" },
  { name: "Boston Scientific", logo: "/boston-scientific-logo.png" },
  { name: "Zimmer Biomet", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Cardinal Health", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Fresenius", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Olympus", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Mindray", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Draeger", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Masimo", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Nihon Kohden", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Spacelabs", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Welch Allyn", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Omron", logo: "/placeholder.svg?height=80&width=120" },
  { name: "ResMed", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Fisher & Paykel", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Covidien", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Hospira", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Carestream", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Hologic", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Varian", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Elekta", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Accuray", logo: "/placeholder.svg?height=80&width=120" },
]

export function BrandCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const itemsPerView = 8
  const maxIndex = Math.max(0, brands.length - itemsPerView)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [maxIndex])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">Trusted Medical Equipment Brands</h2>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {brands.map((brand, index) => (
              <div key={index} className="flex-shrink-0 px-3" style={{ width: `${100 / itemsPerView}%` }}>
                <div className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-lg hover:border-blue-200 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center justify-center h-16">
                    <img
                      src={brand.logo || "/placeholder.svg"}
                      alt={`${brand.name} logo`}
                      className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
