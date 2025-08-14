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
import { Search, Edit, Trash2 } from "lucide-react"

const users = [
  {
    id: 1,
    firstName: "Sarah",
    lastName: "Mitchell",
    email: "sarah.mitchell@clinic.com",
    role: "customer",
    company: "Mitchell Medical Clinic",
    joinDate: "2023-06-15",
    orders: 12,
    status: "active",
  },
  {
    id: 2,
    firstName: "Mark",
    lastName: "Thompson",
    email: "mark@medicalpractice.com",
    role: "customer",
    company: "Thompson Practice",
    joinDate: "2023-08-22",
    orders: 8,
    status: "active",
  },
  {
    id: 3,
    firstName: "Jennifer",
    lastName: "Lee",
    email: "jennifer.lee@hospital.com",
    role: "customer",
    company: "City Hospital",
    joinDate: "2023-03-10",
    orders: 25,
    status: "active",
  },
  {
    id: 4,
    firstName: "Admin",
    lastName: "User",
    email: "admin@docstock.com",
    role: "admin",
    company: "DocStock",
    joinDate: "2023-01-01",
    orders: 0,
    status: "active",
  },
]

export default function AdminUsers() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    if (!isLoading && (!user || user.role !== "admin")) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  const filteredUsers = users.filter(
    (u) =>
      u.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.company?.toLowerCase().includes(searchTerm.toLowerCase()),
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
            <h2 className="text-2xl font-bold text-slate-900">Users</h2>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                  <Input
                    placeholder="Search users..."
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
                      <th className="text-left py-3 px-4">User</th>
                      <th className="text-left py-3 px-4">Company</th>
                      <th className="text-left py-3 px-4">Role</th>
                      <th className="text-left py-3 px-4">Join Date</th>
                      <th className="text-left py-3 px-4">Orders</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((u) => (
                      <tr key={u.id} className="border-b hover:bg-slate-50">
                        <td className="py-3 px-4">
                          <div>
                            <div className="font-medium">
                              {u.firstName} {u.lastName}
                            </div>
                            <div className="text-sm text-slate-600">{u.email}</div>
                          </div>
                        </td>
                        <td className="py-3 px-4">{u.company}</td>
                        <td className="py-3 px-4">
                          <Badge variant={u.role === "admin" ? "default" : "secondary"}>{u.role}</Badge>
                        </td>
                        <td className="py-3 px-4">{u.joinDate}</td>
                        <td className="py-3 px-4">{u.orders}</td>
                        <td className="py-3 px-4">
                          <Badge variant="default">{u.status}</Badge>
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
