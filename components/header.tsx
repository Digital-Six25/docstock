"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Heart, Menu, X, Phone, Mail, ChevronDown } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { useWishlist } from "@/contexts/wishlist-context"
import { useAuth } from "@/contexts/auth-context"
import { UserMenu } from "@/components/auth/user-menu"

const equipmentTypes = [
  "Audiometers",
  "Blood Pressure Monitors",
  "Capnographs",
  "Cryotherapy",
  "Defibrillators",
  "Dermatoscopes",
  "Diagnostic Analysis Testing",
  "Diagnostic Sets",
  "Dopplers",
  "Ear Irrigators",
  "ECG Machines",
  "Electrosurgery",
  "Examination Couches",
  "Lighting",
  "First Aid Kits",
  "First Aid Training",
  "Instrument Trolleys",
  "Ophthalmoscopes",
  "Laryngoscopes",
  "Otoscopes",
  "Patient Monitors",
  "Patient Scales",
  "Pulse Oximeters",
  "Reflex Hammers",
  "Resuscitation",
  "Sphygmomanometers",
  "Spirometers",
  "Stethoscopes",
  "Sterilisers",
  "Suction Pumps",
  "Surgical Loupes",
  "Thermometers",
  "Tuning Forks",
  "Vaccine Fridges",
  "Vision Screening",
  "X-Ray Viewers",
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isEquipmentOpen, setIsEquipmentOpen] = useState(false)
  const { toggleCart, itemCount } = useCart()
  const { itemCount: wishlistCount } = useWishlist()
  const { isAuthenticated, isLoading } = useAuth()

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-docstock-blue text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>1300 DOC STOCK</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@docstock.com.au</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>FREE SHIPPING ON ORDERS OVER $200</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <img src="/docstock-logo.png" alt="DocStock" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Equipment with Megamenu */}
            <div
              className="relative"
              onMouseEnter={() => setIsEquipmentOpen(true)}
              onMouseLeave={() => setIsEquipmentOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-docstock-blue font-medium">
                Equipment
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isEquipmentOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50 p-6">
                  <div className="flex gap-8">
                    {/* Equipment Types - Left side with 3 columns */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-4 text-lg">Medical Equipment</h3>
                      <div className="grid grid-cols-3 gap-x-6 gap-y-1">
                        {equipmentTypes.map((equipment, index) => (
                          <Link
                            key={index}
                            href={`/equipment/${equipment.toLowerCase().replace(/\s+/g, "-")}`}
                            className="text-sm text-gray-600 hover:text-docstock-blue py-1 transition-colors"
                          >
                            {equipment}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Featured Images - Right side with 4 tiles in 2x2 grid */}
                    <div className="w-64">
                      <h3 className="font-semibold text-gray-900 mb-4 text-lg">Featured Products</h3>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="relative group cursor-pointer rounded-lg overflow-hidden">
                          <img src="/ecg-machine.png" alt="ECG Machines" className="w-full h-24 object-cover" />
                          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <span className="text-white text-xs font-medium text-center px-2">ECG Machines</span>
                          </div>
                        </div>
                        <div className="relative group cursor-pointer rounded-lg overflow-hidden">
                          <img
                            src="/blood-pressure-monitor.png"
                            alt="BP Monitors"
                            className="w-full h-24 object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <span className="text-white text-xs font-medium text-center px-2">BP Monitors</span>
                          </div>
                        </div>
                        <div className="relative group cursor-pointer rounded-lg overflow-hidden">
                          <img src="/stethoscope.png" alt="Stethoscopes" className="w-full h-24 object-cover" />
                          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <span className="text-white text-xs font-medium text-center px-2">Stethoscopes</span>
                          </div>
                        </div>
                        <div className="relative group cursor-pointer rounded-lg overflow-hidden">
                          <img src="/defibrillator.png" alt="Defibrillators" className="w-full h-24 object-cover" />
                          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <span className="text-white text-xs font-medium text-center px-2">Defibrillators</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/accessories" className="text-gray-700 hover:text-docstock-blue font-medium">
              Accessories
            </Link>
            <Link href="/consumables" className="text-gray-700 hover:text-docstock-blue font-medium">
              Consumables
            </Link>
            <Link href="/instruments" className="text-gray-700 hover:text-docstock-blue font-medium">
              Instruments
            </Link>
            <Link href="/brands" className="text-gray-700 hover:text-docstock-blue font-medium">
              Brands
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-docstock-blue font-medium">
              News
            </Link>
            <Link href="/on-sale" className="text-gray-700 hover:text-docstock-blue font-medium text-red-600">
              On Sale
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative" asChild>
              <Link href="/wishlist">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-red-500">
                    {wishlistCount}
                  </Badge>
                )}
              </Link>
            </Button>

            <Button variant="ghost" size="sm" className="relative" onClick={toggleCart}>
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-docstock-blue">
                  {itemCount}
                </Badge>
              )}
            </Button>

            {!isLoading && (
              <>
                {isAuthenticated ? (
                  <div className="hidden md:block">
                    <UserMenu />
                  </div>
                ) : (
                  <Button variant="outline" size="sm" className="hidden md:inline-flex bg-transparent" asChild>
                    <Link href="/login">Login</Link>
                  </Button>
                )}
              </>
            )}

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/equipment" className="text-gray-700 hover:text-docstock-blue font-medium">
                Equipment
              </Link>
              <Link href="/accessories" className="text-gray-700 hover:text-docstock-blue font-medium">
                Accessories
              </Link>
              <Link href="/consumables" className="text-gray-700 hover:text-docstock-blue font-medium">
                Consumables
              </Link>
              <Link href="/instruments" className="text-gray-700 hover:text-docstock-blue font-medium">
                Instruments
              </Link>
              <Link href="/brands" className="text-gray-700 hover:text-docstock-blue font-medium">
                Brands
              </Link>
              <Link href="/news" className="text-gray-700 hover:text-docstock-blue font-medium">
                News
              </Link>
              <Link href="/on-sale" className="text-gray-700 hover:text-docstock-blue font-medium text-red-600">
                On Sale
              </Link>
              {!isLoading && (
                <>
                  {isAuthenticated ? (
                    <div className="pt-2 border-t border-gray-200">
                      <Link href="/account" className="text-gray-700 hover:text-docstock-blue font-medium block py-2">
                        My Account
                      </Link>
                      <Link
                        href="/account/orders"
                        className="text-gray-700 hover:text-docstock-blue font-medium block py-2"
                      >
                        Orders
                      </Link>
                    </div>
                  ) : (
                    <Button variant="outline" size="sm" className="w-fit bg-transparent" asChild>
                      <Link href="/login">Login</Link>
                    </Button>
                  )}
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
