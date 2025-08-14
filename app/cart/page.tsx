"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Plus, Minus, X, ShoppingCart, Truck } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { calculateCartTotals } from "@/lib/cart"
import Link from "next/link"

export default function CartPage() {
  const { items, updateQuantity, removeItem, itemCount } = useCart()
  const totals = calculateCartTotals(items)

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-6" />
            <h1 className="text-2xl font-serif font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Looks like you haven't added any medical equipment to your cart yet.</p>
            <Button asChild className="bg-yellow-700 hover:bg-yellow-800">
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8">Shopping Cart ({itemCount} items)</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <Link href={`/products/${item.slug}`}>
                          <h3 className="font-semibold text-gray-900 hover:text-yellow-700 transition-colors">
                            {item.name}
                          </h3>
                        </Link>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-gray-600 mb-4">${item.price} each</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            disabled={item.quantity >= item.maxQuantity}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                          <span className="text-sm text-gray-500 ml-2">(Max: {item.maxQuantity})</span>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal ({itemCount} items)</span>
                    <span>${totals.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{totals.shipping === 0 ? "Free" : `$${totals.shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (GST)</span>
                    <span>${totals.tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${totals.total.toFixed(2)}</span>
                  </div>
                </div>

                {totals.subtotal < 200 && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-sm text-yellow-800">
                      <Truck className="h-4 w-4" />
                      <span>Add ${(200 - totals.subtotal).toFixed(2)} more for free shipping!</span>
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  <Button asChild className="w-full bg-yellow-700 hover:bg-yellow-800" size="lg">
                    <Link href="/checkout">Proceed to Checkout</Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full bg-transparent">
                    <Link href="/products">Continue Shopping</Link>
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="pt-4 border-t space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Truck className="h-4 w-4" />
                    <span>Free shipping on orders over $200</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>🔒</span>
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>↩️</span>
                    <span>30-day return policy</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
