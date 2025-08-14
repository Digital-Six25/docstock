"use client"

import { useWishlist } from "@/contexts/wishlist-context"
import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"
import Link from "next/link"

export default function WishlistPage() {
  const { items, removeFromWishlist, clearWishlist } = useWishlist()
  const { addToCart } = useCart()

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    })
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heart className="mx-auto h-12 w-12 text-gray-400" />
            <h1 className="mt-4 text-3xl font-bold text-gray-900">Your Wishlist is Empty</h1>
            <p className="mt-2 text-gray-600">Start adding items you love to your wishlist</p>
            <Button asChild className="mt-6">
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Wishlist ({items.length})</h1>
          <Button variant="outline" onClick={clearWishlist}>
            Clear All
          </Button>
        </div>

        <div className="grid gap-6">
          {items.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-2xl font-bold text-docstock-blue mt-2">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button onClick={() => handleAddToCart(item)} className="bg-docstock-blue hover:bg-blue-700">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeFromWishlist(item.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
