"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Mail, Phone, Building, Calendar, ShoppingBag, Settings } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function AccountPage() {
  const { user, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login?redirect=/account")
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

  if (!user) {
    return null
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">My Account</h1>
          <p className="text-gray-600">Manage your account settings and view your order history</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-gray-700">First Name</label>
                    <p className="mt-1 text-gray-900">{user.firstName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                    <p className="mt-1 text-gray-900">{user.lastName}</p>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Address
                  </label>
                  <p className="mt-1 text-gray-900">{user.email}</p>
                </div>

                {user.company && (
                  <div>
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      Company
                    </label>
                    <p className="mt-1 text-gray-900">{user.company}</p>
                  </div>
                )}

                {user.phone && (
                  <div>
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone Number
                    </label>
                    <p className="mt-1 text-gray-900">{user.phone}</p>
                  </div>
                )}

                <div>
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Member Since
                  </label>
                  <p className="mt-1 text-gray-900">
                    {new Date(user.createdAt).toLocaleDateString("en-AU", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant={user.role === "admin" ? "default" : "secondary"}>
                    {user.role === "admin" ? "Administrator" : "Customer"}
                  </Badge>
                </div>

                <Button asChild className="bg-yellow-700 hover:bg-yellow-800">
                  <Link href="/account/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/account/orders">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    View Orders
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/account/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    Account Settings
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/products">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {user.role === "admin" && (
              <Card>
                <CardHeader>
                  <CardTitle>Admin Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-yellow-700 hover:bg-yellow-800" asChild>
                    <Link href="/admin">Admin Dashboard</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
