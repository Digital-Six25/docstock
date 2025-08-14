"use client"

import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Plus, Search, Edit, Trash2 } from "lucide-react"
import { products } from "@/lib/products"

export default function AdminProducts() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    if (!isLoading && (!user || user.role !== "admin")) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

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
            <h2 className="text-2xl font-bold text-slate-900">Products</h2>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                  <Input
                    placeholder="Search products..."
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
                      <th className="text-left py-3 px-4">Product</th>
                      <th className="text-left py-3 px-4">Category</th>
                      <th className="text-left py-3 px-4">Price</th>
                      <th className="text-left py-3 px-4">Stock</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map((product) => (
                      <tr key={product.id} className="border-b hover:bg-slate-50">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={product.images[0] || "/placeholder.svg"}
                              alt={product.name}
                              className="w-10 h-10 rounded object-cover"
                            />
                            <div>
                              <div className="font-medium">{product.name}</div>
                              <div className="text-sm text-slate-600">{product.brand}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">{product.category}</td>
                        <td className="py-3 px-4">${product.price}</td>
                        <td className="py-3 px-4">
                          <Badge variant={product.inStock ? "default" : "destructive"}>
                            {product.inStock ? "In Stock" : "Out of Stock"}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Badge variant="default">Active</Badge>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
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
