import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Package, Truck, Mail } from "lucide-react"
import Link from "next/link"

export default function OrderConfirmationPage() {
  const orderNumber = "DS" + Math.random().toString(36).substr(2, 9).toUpperCase()

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-xl text-gray-600 mb-2">Thank you for your purchase</p>
          <p className="text-gray-600">
            Your order <span className="font-medium">#{orderNumber}</span> has been received and is being processed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Package className="h-8 w-8 text-yellow-700 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Order Processing</h3>
              <p className="text-sm text-gray-600">Your order is being prepared for shipment</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Truck className="h-8 w-8 text-yellow-700 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Fast Shipping</h3>
              <p className="text-sm text-gray-600">Expected delivery in 3-5 business days</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Mail className="h-8 w-8 text-yellow-700 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Email Updates</h3>
              <p className="text-sm text-gray-600">We'll send tracking information to your email</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center space-y-4">
          <p className="text-gray-600">
            A confirmation email has been sent to your email address with order details and tracking information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-yellow-700 hover:bg-yellow-800">
              <Link href="/products">Continue Shopping</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
