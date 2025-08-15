import Image from "next/image";

export function PopularCategories() {
  const categories = [
    {
      id: 1,
      title: "Personal Care",
      image: "/medical-personal-care.png",
      description: "Personal medical care products and equipment",
    },
    {
      id: 2,
      title: "Women Care",
      image: "/women-healthcare-consultation.png",
      description: "Specialized women's healthcare equipment",
    },
    {
      id: 3,
      title: "Baby & Mom",
      image: "/baby-mother-healthcare.png",
      description: "Maternal and pediatric medical equipment",
      featured: true,
    },
    {
      id: 4,
      title: "Diabetic Care",
      image: "/images/diabetic-care.jpg",
      description: "Diabetes management and monitoring equipment",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Most Popular Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most sought-after medical equipment categories trusted
            by healthcare professionals
          </p>
        </div>

        <div className="grid grid-cols-4 grid-rows-2 gap-6 h-[600px]">
          {/* Card 1: 1 col x 1 row (top-left) */}
          <div className="col-span-1 row-span-1 group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 h-full hover:shadow-lg transition-all duration-300">
              <Image
                src={categories[0].image || "/placeholder.svg"}
                alt={categories[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold mb-1">
                  {categories[0].title}
                </h3>
                <p className="text-xs opacity-90 line-clamp-2">
                  {categories[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: 1 col x 1 row (top-center) */}
          <div className="col-span-1 row-span-1 group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 h-full hover:shadow-lg transition-all duration-300">
              <Image
                src={categories[1].image || "/placeholder.svg"}
                alt={categories[1].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold mb-1">
                  {categories[1].title}
                </h3>
                <p className="text-xs opacity-90 line-clamp-2">
                  {categories[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: 2 cols x 2 rows (right side, featured) */}
          <div className="col-span-2 row-span-2 group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 h-full hover:shadow-lg transition-all duration-300">
              <Image
                src={categories[2].image || "/placeholder.svg"}
                alt={categories[2].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {categories[2].title}
                </h3>
                <p className="text-sm opacity-90 line-clamp-3">
                  {categories[2].description}
                </p>
              </div>
              <div className="absolute top-6 left-6">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Featured
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: 2 cols x 1 row (bottom-left, spans under cards 1 & 2) */}
          <div className="col-span-2 row-span-1 group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 h-full hover:shadow-lg transition-all duration-300">
              <Image
                src={categories[3].image || "/placeholder.svg"}
                alt={categories[3].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-1">
                  {categories[3].title}
                </h3>
                <p className="text-sm opacity-90 line-clamp-2">
                  {categories[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
