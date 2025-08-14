"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"

export function OnSaleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const onSaleProducts = products.filter((product) => product.originalPrice && product.originalPrice > product.price)

  const itemsPerView = 4
  const maxIndex = Math.max(0, onSaleProducts.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">On Sale Products</h2>
            <p className="text-gray-600">Limited time offers on quality medical equipment</p>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="h-10 w-10 rounded-full border-2 hover:bg-blue-50 hover:border-blue-500 disabled:opacity-50 bg-transparent"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="h-10 w-10 rounded-full border-2 hover:bg-blue-50 hover:border-blue-500 disabled:opacity-50"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {onSaleProducts.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-1/4">
                <ProductCard product={product} />
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
