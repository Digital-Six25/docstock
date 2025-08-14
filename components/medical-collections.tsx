import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const collections = [
  {
    id: 1,
    title: "Aged Care",
    productCount: 156,
    description: "Specialized equipment for aged care facilities and elderly patient care",
    image: "/placeholder.svg?height=300&width=400",
    slug: "aged-care",
    featured: true,
  },
  {
    id: 2,
    title: "Dermatology Skin",
    productCount: 89,
    description: "Professional dermatology tools and skin examination equipment",
    image: "/placeholder.svg?height=300&width=400",
    slug: "dermatology-skin",
  },
  {
    id: 3,
    title: "Medical Center",
    productCount: 234,
    description: "Complete medical center equipment for general practice and clinics",
    image: "/placeholder.svg?height=300&width=400",
    slug: "medical-center",
    featured: true,
  },
  {
    id: 4,
    title: "Day Surgery",
    productCount: 127,
    description: "Surgical instruments and equipment for day surgery procedures",
    image: "/placeholder.svg?height=300&width=400",
    slug: "day-surgery",
  },
  {
    id: 5,
    title: "Medical Students",
    productCount: 78,
    description: "Educational medical equipment and training tools for students",
    image: "/placeholder.svg?height=300&width=400",
    slug: "medical-students",
  },
  {
    id: 6,
    title: "Home User",
    productCount: 145,
    description: "Home healthcare equipment for personal and family use",
    image: "/placeholder.svg?height=300&width=400",
    slug: "home-user",
    featured: true,
  },
]

export function MedicalCollections() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">Medical Equipment Collections</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover our specialized collections designed for different healthcare settings. From aged care to medical
            education, find the right equipment for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection, index) => {
            // Create mosaic layout with different sizes
            const isLarge = collection.featured
            const cardClass = isLarge ? "md:col-span-2 lg:col-span-1" : "col-span-1"

            return (
              <Card
                key={collection.id}
                className={`group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden ${cardClass}`}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.title}
                      className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                        isLarge ? "h-64" : "h-48"
                      }`}
                    />
                    {collection.featured && (
                      <Badge className="absolute top-4 left-4 bg-blue-600 text-white">Popular</Badge>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-serif text-xl font-bold mb-2">{collection.title}</h3>
                      <p className="text-sm opacity-90 mb-3">{collection.description}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          {collection.productCount} Products
                        </Badge>
                        <Link
                          href={`/collections/${collection.slug}`}
                          className="flex items-center gap-2 text-sm font-medium hover:text-blue-200 transition-colors"
                        >
                          Explore
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-slate-600 mb-6">
              Our medical equipment specialists can help you find the perfect products for your specific healthcare
              setting and requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Contact Our Experts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
