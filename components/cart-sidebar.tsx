"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Plus, Minus, X, Truck } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { calculateCartTotals } from "@/lib/cart"
import Link from "next/link"

export function CartSidebar() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, itemCount } = useCart()
  const totals = calculateCartTotals(items)

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Shopping Cart ({itemCount})
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingCart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Your cart is empty</p>
                <Button onClick={closeCart} asChild>
                  <Link href="/products">Continue Shopping</Link>
                </Button>
              </div>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto py-6">
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 truncate">{item.name}</h3>
                        <p className="text-sm text-gray-600">${item.price}</p>

                        <div className="flex items-center gap-2 mt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            disabled={item.quantity >= item.maxQuantity}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cart Summary */}
              <div className="border-t pt-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${totals.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>{totals.shipping === 0 ? "Free" : `$${totals.shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>${totals.tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
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

                <div className="space-y-2">
                  <Button asChild className="w-full bg-yellow-700 hover:bg-yellow-800">
                    <Link href="/checkout" onClick={closeCart}>
                      Proceed to Checkout
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full bg-transparent">
                    <Link href="/cart" onClick={closeCart}>
                      View Cart
                    </Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
