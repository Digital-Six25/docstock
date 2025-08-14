"use client"

import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"
import { StatsCards } from "@/components/admin/stats-cards"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const recentOrders = [
  { id: "ORD-001", customer: "Dr. Sarah Mitchell", total: "$1,299", status: "completed" },
  { id: "ORD-002", customer: "Mark Thompson", total: "$899", status: "processing" },
  { id: "ORD-003", customer: "Dr. Jennifer Lee", total: "$2,150", status: "shipped" },
  { id: "ORD-004", customer: "Robert Chen", total: "$750", status: "pending" },
]

const lowStockProducts = [
  { name: "Digital Blood Pressure Monitor", stock: 5, threshold: 10 },
  { name: "Pulse Oximeter", stock: 3, threshold: 15 },
  { name: "ECG Machine", stock: 2, threshold: 5 },
  { name: "Stethoscope", stock: 8, threshold: 20 },
]

export default function AdminDashboard() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && (!user || user.role !== "admin")) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (!user || user.role !== "admin") {
    return null
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminSidebar />
      <AdminHeader />

      <main className="lg:ml-64 p-6">
        <div className="space-y-6">
          <StatsCards />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Orders */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{order.id}</div>
                        <div className="text-sm text-slate-600">{order.customer}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{order.total}</div>
                        <Badge variant={order.status === "completed" ? "default" : "secondary"} className="text-xs">
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Low Stock Alert */}
            <Card>
              <CardHeader>
                <CardTitle>Low Stock Alert</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {lowStockProducts.map((product) => (
                    <div key={product.name} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-slate-600">Threshold: {product.threshold}</div>
                      </div>
                      <Badge variant="destructive" className="text-xs">
                        {product.stock} left
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
