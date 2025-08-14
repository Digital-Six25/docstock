"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Loader2 } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function AccountSettingsPage() {
  const { user, isAuthenticated, isLoading, updateProfile } = useAuth()
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
  })
  const [isUpdating, setIsUpdating] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login?redirect=/account/settings")
    }
  }, [isAuthenticated, isLoading, router])

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName,
        lastName: user.lastName,
        company: user.company || "",
        phone: user.phone || "",
      })
    }
  }, [user])

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsUpdating(true)
    setMessage(null)

    const result = await updateProfile({
      firstName: formData.firstName,
      lastName: formData.lastName,
      company: formData.company || undefined,
      phone: formData.phone || undefined,
    })

    setIsUpdating(false)

    if (result.success) {
      setMessage({ type: "success", text: "Profile updated successfully!" })
    } else {
      setMessage({ type: "error", text: result.error || "Failed to update profile" })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/account" className="hover:text-yellow-700 flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Account
          </Link>
          <span>/</span>
          <span className="text-gray-900">Settings</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Account Settings</h1>
          <p className="text-gray-600">Update your profile information</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {message && (
                <Alert variant={message.type === "error" ? "destructive" : "default"}>
                  <AlertDescription>{message.text}</AlertDescription>
                </Alert>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" required value={formData.firstName} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" required value={formData.lastName} onChange={handleChange} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company/Organization</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Optional"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Optional"
                />
              </div>

              <div className="space-y-2">
                <Label>Email Address</Label>
                <Input value={user.email} disabled className="bg-gray-50" />
                <p className="text-sm text-gray-500">Email address cannot be changed</p>
              </div>

              <div className="flex gap-4">
                <Button type="submit" className="bg-yellow-700 hover:bg-yellow-800" disabled={isUpdating}>
                  {isUpdating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Updating...
                    </>
                  ) : (
                    "Update Profile"
                  )}
                </Button>
                <Button type="button" variant="outline" asChild>
                  <Link href="/account">Cancel</Link>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
