"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { useCart } from "@/contexts/cart-context"
import { calculateCartTotals } from "@/lib/cart"
import type { ShippingAddress } from "@/lib/cart"
import { CreditCard, Truck, Shield, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const { items, clearCart, itemCount } = useCart()
  const totals = calculateCartTotals(items)
  const router = useRouter()

  const [step, setStep] = useState<"shipping" | "payment" | "review">("shipping")
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    firstName: "",
    lastName: "",
    company: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "Australia",
    phone: "",
  })
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [sameAsBilling, setSameAsBilling] = useState(true)

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-serif font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Add some medical equipment to your cart before checking out.</p>
            <Button asChild className="bg-yellow-700 hover:bg-yellow-800">
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </main>
    )
  }

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("payment")
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("review")
  }

  const handlePlaceOrder = async () => {
    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    clearCart()
    router.push("/order-confirmation")
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/cart" className="hover:text-yellow-700 flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Cart
          </Link>
          <span>/</span>
          <span className="text-gray-900">Checkout</span>
        </nav>

        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8">Checkout</h1>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center ${step === "shipping" ? "text-yellow-700" : "text-gray-400"}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step === "shipping" ? "bg-yellow-700 text-white" : "bg-gray-200"
                }`}
              >
                1
              </div>
              <span className="ml-2">Shipping</span>
            </div>
            <div className="w-8 h-px bg-gray-300"></div>
            <div className={`flex items-center ${step === "payment" ? "text-yellow-700" : "text-gray-400"}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step === "payment" ? "bg-yellow-700 text-white" : "bg-gray-200"
                }`}
              >
                2
              </div>
              <span className="ml-2">Payment</span>
            </div>
            <div className="w-8 h-px bg-gray-300"></div>
            <div className={`flex items-center ${step === "review" ? "text-yellow-700" : "text-gray-400"}`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step === "review" ? "bg-yellow-700 text-white" : "bg-gray-200"
                }`}
              >
                3
              </div>
              <span className="ml-2">Review</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === "shipping" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    Shipping Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleShippingSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          required
                          value={shippingAddress.firstName}
                          onChange={(e) => setShippingAddress({ ...shippingAddress, firstName: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          required
                          value={shippingAddress.lastName}
                          onChange={(e) => setShippingAddress({ ...shippingAddress, lastName: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input
                        id="company"
                        value={shippingAddress.company}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, company: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="address1">Address Line 1 *</Label>
                      <Input
                        id="address1"
                        required
                        value={shippingAddress.address1}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, address1: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="address2">Address Line 2 (Optional)</Label>
                      <Input
                        id="address2"
                        value={shippingAddress.address2}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, address2: e.target.value })}
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          required
                          value={shippingAddress.city}
                          onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Input
                          id="state"
                          required
                          value={shippingAddress.state}
                          onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="postalCode">Postal Code *</Label>
                        <Input
                          id="postalCode"
                          required
                          value={shippingAddress.postalCode}
                          onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={shippingAddress.phone}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value })}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-yellow-700 hover:bg-yellow-800">
                      Continue to Payment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}

            {step === "payment" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Payment Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePaymentSubmit} className="space-y-6">
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card">Credit/Debit Card</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal">PayPal</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bank" id="bank" />
                        <Label htmlFor="bank">Bank Transfer</Label>
                      </div>
                    </RadioGroup>

                    {paymentMethod === "card" && (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="cardNumber">Card Number *</Label>
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry">Expiry Date *</Label>
                            <Input id="expiry" placeholder="MM/YY" required />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV *</Label>
                            <Input id="cvv" placeholder="123" required />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="cardName">Name on Card *</Label>
                          <Input id="cardName" required />
                        </div>
                      </div>
                    )}

                    <div className="flex items-center space-x-2">
                      <Checkbox id="sameAsBilling" checked={sameAsBilling} onCheckedChange={setSameAsBilling} />
                      <Label htmlFor="sameAsBilling">Billing address same as shipping</Label>
                    </div>

                    <div className="flex gap-4">
                      <Button type="button" variant="outline" onClick={() => setStep("shipping")} className="flex-1">
                        Back to Shipping
                      </Button>
                      <Button type="submit" className="flex-1 bg-yellow-700 hover:bg-yellow-800">
                        Review Order
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {step === "review" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Review Your Order
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Order Items */}
                  <div>
                    <h3 className="font-semibold mb-4">Order Items</h3>
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                          </div>
                          <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div>
                    <h3 className="font-semibold mb-2">Shipping Address</h3>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p>
                        {shippingAddress.firstName} {shippingAddress.lastName}
                      </p>
                      {shippingAddress.company && <p>{shippingAddress.company}</p>}
                      <p>{shippingAddress.address1}</p>
                      {shippingAddress.address2 && <p>{shippingAddress.address2}</p>}
                      <p>
                        {shippingAddress.city}, {shippingAddress.state} {shippingAddress.postalCode}
                      </p>
                      <p>{shippingAddress.phone}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button type="button" variant="outline" onClick={() => setStep("payment")} className="flex-1">
                      Back to Payment
                    </Button>
                    <Button onClick={handlePlaceOrder} className="flex-1 bg-yellow-700 hover:bg-yellow-800">
                      Place Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal ({itemCount} items)</span>
                    <span>${totals.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>{totals.shipping === 0 ? "Free" : `$${totals.shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax (GST)</span>
                    <span>${totals.tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${totals.total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="pt-4 border-t space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Shield className="h-4 w-4" />
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Truck className="h-4 w-4" />
                    <span>Free shipping on orders over $200</span>
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
