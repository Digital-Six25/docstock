import Link from "next/link"
import Image from "next/image"
import { Youtube, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const medicalEquipment = [
    "Audiometers",
    "Blood Pressure Monitors",
    "Capnographs",
    "Cryotherapy",
    "Defibrillators",
    "Dermatoscopes",
    "Diagnostic Analysis Testing",
    "Diagnostic Sets",
    "Dopplers",
    "ECG Machines",
    "Electrosurgery",
    "Examination Couches",
    "First Aid Kits",
    "First Aid Training",
    "Instrument Trolleys",
    "Laryngoscopes",
    "Lighting",
    "Ophthalmoscopes",
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
  ]

  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social Media */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image src="/docstock-logo.png" alt="DocStock" width={120} height={40} className="h-10 w-auto" />
            </Link>
            <div className="flex space-x-3">
              <Link href="#" className="text-white hover:text-blue-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* DocStock Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">DocStock</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/equipment" className="text-gray-300 hover:text-white transition-colors">
                  Devices
                </Link>
              </li>
              <li>
                <Link href="/accessories" className="text-gray-300 hover:text-white transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/consumables" className="text-gray-300 hover:text-white transition-colors">
                  Consumables
                </Link>
              </li>
              <li>
                <Link href="/brands" className="text-gray-300 hover:text-white transition-colors">
                  Brands
                </Link>
              </li>
              <li>
                <Link href="/on-sale" className="text-gray-300 hover:text-white transition-colors">
                  On Sale
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
                  Shop All
                </Link>
              </li>
            </ul>
          </div>

          {/* Store Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Store Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms & conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-white transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Sign up and save */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sign up and save!</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Register your account in the top <span className="font-medium">right hand corner of our site</span> and
              you'll be able to view previous orders, manage your addresses, be notified about new products and
              promotions, PLUS be eligible for additional discounts via our loyalty scheme!
            </p>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            <p className="text-gray-400 text-sm">© 2025 DocStock. Website by Alinga</p>
            <div className="text-gray-400 text-xs leading-relaxed max-w-4xl">
              <p className="flex flex-wrap gap-x-4 gap-y-1">
                {medicalEquipment.map((item, index) => (
                  <span key={index} className="hover:text-white transition-colors cursor-pointer">
                    {item}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
