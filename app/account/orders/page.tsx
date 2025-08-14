"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Package, Calendar, DollarSign } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import Link from "next/link"
import { useRouter } from "next/navigation"

// Mock order data
const mockOrders = [
  {
    id: "DS001234567",
    date: new Date("2024-01-15"),
    status: "delivered" as const,
    total: 2499.0,
    items: [{ name: "Bionet Cardio Q-Series ECG Machine", quantity: 1, price: 2499.0 }],
  },
  {
    id: "DS001234568",
    date: new Date("2024-01-20"),
    status: "shipped" as const,
    total: 338.0,
    items: [
      { name: "Digital Blood Pressure Monitor Pro", quantity: 1, price: 189.0 },
      { name: "Pulse Oximeter Pro", quantity: 1, price: 149.0 },
    ],
  },
  {
    id: "DS001234569",
    date: new Date("2024-01-25"),
    status: "processing" as const,
    total: 299.0,
    items: [{ name: "Professional Cardiology Stethoscope", quantity: 1, price: 299.0 }],
  },
]

export default function OrdersPage() {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login?redirect=/account/orders")
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center py-16">
          <div className="text-center">Loading...</div>
        </div>
      </main>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800"
      case "shipped":
        return "bg-blue-100 text-blue-800"
      case "processing":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/account" className="hover:text-yellow-700 flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Account
          </Link>
          <span>/</span>
          <span className="text-gray-900">Orders</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Order History</h1>
          <p className="text-gray-600">View and track your medical equipment orders</p>
        </div>

        {mockOrders.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No orders yet</h3>
              <p className="text-gray-600 mb-6">You haven't placed any orders yet.</p>
              <Button asChild className="bg-yellow-700 hover:bg-yellow-800">
                <Link href="/products">Start Shopping</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {mockOrders.map((order) => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium">Order Date</p>
                        <p className="text-sm text-gray-600">
                          {order.date.toLocaleDateString("en-AU", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium">Total</p>
                        <p className="text-sm text-gray-600">${order.total.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium">Items</p>
                        <p className="text-sm text-gray-600">{order.items.length} item(s)</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-3">Order Items</h4>
                    <div className="space-y-2">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-2">
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                          </div>
                          <p className="font-medium">${item.price.toFixed(2)}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end pt-4 border-t">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
