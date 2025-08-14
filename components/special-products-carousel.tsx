"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"

export function SpecialProductsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Filter for special products (on sale, new, or featured)
  const specialProducts = products
    .filter((product) => product.badge === "Sale" || product.badge === "New" || product.originalPrice > product.price)
    .slice(0, 8)

  const itemsPerView = 4
  const maxIndex = Math.max(0, specialProducts.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  if (specialProducts.length === 0) return null

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Current Special Products</h2>
            <p className="text-gray-600">Limited time offers on premium medical equipment</p>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {specialProducts.map((product) => (
              <div key={product.id} className="flex-shrink-0" style={{ width: `${100 / itemsPerView}%` }}>
                <div className="pr-6">
                  <ProductCard product={product} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
