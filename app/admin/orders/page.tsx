"use client"

import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Eye } from "lucide-react"

const orders = [
  {
    id: "ORD-001",
    customer: "Dr. Sarah Mitchell",
    email: "sarah.mitchell@clinic.com",
    total: 1299,
    status: "completed",
    date: "2024-01-15",
    items: 3,
  },
  {
    id: "ORD-002",
    customer: "Mark Thompson",
    email: "mark@medicalpractice.com",
    total: 899,
    status: "processing",
    date: "2024-01-14",
    items: 2,
  },
  {
    id: "ORD-003",
    customer: "Dr. Jennifer Lee",
    email: "jennifer.lee@hospital.com",
    total: 2150,
    status: "shipped",
    date: "2024-01-13",
    items: 5,
  },
  {
    id: "ORD-004",
    customer: "Robert Chen",
    email: "robert@healthcenter.com",
    total: 750,
    status: "pending",
    date: "2024-01-12",
    items: 1,
  },
]

export default function AdminOrders() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    if (!isLoading && (!user || user.role !== "admin")) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  const filteredOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "default"
      case "processing":
        return "secondary"
      case "shipped":
        return "default"
      case "pending":
        return "destructive"
      default:
        return "secondary"
    }
  }

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
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">Orders</h2>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                  <Input
                    placeholder="Search orders..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Order ID</th>
                      <th className="text-left py-3 px-4">Customer</th>
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-left py-3 px-4">Items</th>
                      <th className="text-left py-3 px-4">Total</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.map((order) => (
                      <tr key={order.id} className="border-b hover:bg-slate-50">
                        <td className="py-3 px-4 font-medium">{order.id}</td>
                        <td className="py-3 px-4">
                          <div>
                            <div className="font-medium">{order.customer}</div>
                            <div className="text-sm text-slate-600">{order.email}</div>
                          </div>
                        </td>
                        <td className="py-3 px-4">{order.date}</td>
                        <td className="py-3 px-4">{order.items}</td>
                        <td className="py-3 px-4">${order.total}</td>
                        <td className="py-3 px-4">
                          <Badge variant={getStatusColor(order.status)}>{order.status}</Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
