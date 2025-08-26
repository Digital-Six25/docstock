"use client";

import { useState, useMemo } from "react";
import { Search, ArrowUpDown, Star, Users, Award } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";

const brands = [
  {
    name: "Acuderm",
    category: "Medical Supplies",
    image: "/brands/acuderm.png",
    featured: false,
    products: 150,
    rating: 4.8,
  },
  {
    name: "Ambu",
    category: "Diagnostics",
    image: "/brands/ambu.png",
    featured: false,
    products: 200,
    rating: 4.9,
  },
  {
    name: "A&D",
    category: "Medical Technology",
    image: "/brands/and.png",
    featured: true,
    products: 300,
    rating: 4.9,
  },
  {
    name: "Bionet",
    category: "Health Technology",
    image: "/brands/bionet.png",
    featured: false,
    products: 250,
    rating: 4.7,
  },
  {
    name: "Bovie",
    category: "Medical Devices",
    image: "/brands/bovie.webp",
    featured: false,
    products: 180,
    rating: 4.6,
  },
  {
    name: "Brymill",
    category: "Medical Technology",
    image: "/brands/brymill.jpeg",
    featured: false,
    products: 220,
    rating: 4.8,
  },
  {
    name: "Clever Clogger",
    category: "Medical Devices",
    image: "/brands/clever.webp",
    featured: false,
    products: 190,
    rating: 4.7,
  },
  {
    name: "Coinfy Care",
    category: "Healthcare Services",
    image: "/brands/coinfy.webp",
    featured: false,
    products: 160,
    rating: 4.5,
  },
  {
    name: "Cortex",
    category: "Medical Devices",
    image: "/brands/cortex.jpg",
    featured: false,
    products: 140,
    rating: 4.6,
  },
  {
    name: "Defib Tech",
    category: "Life Sciences",
    image: "/brands/defib.jpg",
    featured: false,
    products: 210,
    rating: 4.8,
  },
  {
    name: "Dermlite",
    category: "Cardiovascular",
    image: "/brands/dermlite.avif",
    featured: false,
    products: 120,
    rating: 4.9,
  },
  {
    name: "Freezpen",
    category: "Medical Imaging",
    image: "/brands/freezpen.png",
    featured: true,
    products: 280,
    rating: 4.8,
  },
  {
    name: "Hadeco",
    category: "Women's Health",
    image: "/brands/hadeco.png",
    featured: false,
    products: 170,
    rating: 4.7,
  },
  {
    name: "HealthTec",
    category: "Medical Devices",
    image: "/brands/healthtec.png",
    featured: false,
    products: 230,
    rating: 4.6,
  },
  {
    name: "HeartSine",
    category: "Medical Technology",
    image: "/brands/heartsine.jpg",
    featured: false,
    products: 190,
    rating: 4.8,
  },
  {
    name: "ICS Pacific",
    category: "Medical Technology",
    image: "/brands/ics.png",
    featured: false,
    products: 210,
    rating: 4.9,
  },
  {
    name: "LogTag",
    category: "Life Sciences",
    image: "/brands/logtag.png",
    featured: false,
    products: 200,
    rating: 4.7,
  },
  {
    name: "Maggy Lamp",
    category: "Musculoskeletal",
    image: "/brands/maggylamp.png",
    featured: false,
    products: 180,
    rating: 4.6,
  },
  {
    name: "Nonin",
    category: "Medical Equipment",
    image: "/brands/nonin.jpg",
    featured: false,
    products: 160,
    rating: 4.7,
  },
  {
    name: "Meditroll",
    category: "Medical Systems",
    image: "/brands/meditroll.avif",
    featured: false,
    products: 170,
    rating: 4.8,
  },
  {
    name: "Physio Control",
    category: "Medical Safety",
    image: "/brands/physio.jpg",
    featured: false,
    products: 150,
    rating: 4.6,
  },
  {
    name: "Prestan",
    category: "Patient Monitoring",
    image: "/brands/prestan.png",
    featured: false,
    products: 140,
    rating: 4.8,
  },
  {
    name: "Riester",
    category: "Medical Electronics",
    image: "/brands/riester.jpg",
    featured: false,
    products: 130,
    rating: 4.7,
  },
  {
    name: "Roche",
    category: "Patient Monitoring",
    image: "/brands/roche.png",
    featured: false,
    products: 120,
    rating: 4.9,
  },
  {
    name: "Rose Micro Solutions",
    category: "Medical Devices",
    image: "/brands/rose.png",
    featured: false,
    products: 110,
    rating: 4.8,
  },
  {
    name: "Seca Precision Medicine",
    category: "Resuscitation",
    image: "/brands/seca.png",
    featured: false,
    products: 100,
    rating: 4.7,
  },
  {
    name: "Theia Eye Block",
    category: "Medical Imaging",
    image: "/brands/theia.png",
    featured: false,
    products: 90,
    rating: 4.6,
  },
  {
    name: "Vitalograph",
    category: "Medical Imaging",
    image: "/brands/vitalograph.png",
    featured: false,
    products: 80,
    rating: 4.8,
  },
  {
    name: "Welch Allyn",
    category: "Medical Endoscopy",
    image: "/brands/welch.jpg",
    featured: false,
    products: 70,
    rating: 4.7,
  },
  {
    name: "Zoll",
    category: "Endoscopy",
    image: "/brands/zoll.png",
    featured: false,
    products: 60,
    rating: 4.6,
  },
];

export default function BrandsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const brandsPerPage = 12;

  const filteredAndSortedBrands = useMemo(() => {
    const filtered = brands.filter(
      (brand) =>
        brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        brand.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }, [searchTerm, sortOrder]);

  const totalPages = Math.ceil(filteredAndSortedBrands.length / brandsPerPage);
  const startIndex = (currentPage - 1) * brandsPerPage;
  const currentBrands = filteredAndSortedBrands.slice(
    startIndex,
    startIndex + brandsPerPage
  );

  useMemo(() => {
    setCurrentPage(1);
  }, [searchTerm, sortOrder]);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-docstock-blue text-white py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-docstock-blue to-blue-700"></div>
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">
              Trusted Medical Brands
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Discover premium medical equipment from world-renowned
              manufacturers committed to healthcare excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-docstock-blue hover:bg-gray-100"
              >
                <Award className="mr-2 h-5 w-5" />
                View Featured Brands
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-docstock-blue bg-transparent"
              >
                <Users className="mr-2 h-5 w-5" />
                Become a Partner
              </Button>
            </div>
          </div>
        </section>

        {/* Stats CTA Section */}
        <section className="bg-white py-12 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-docstock-blue">32+</div>
                <div className="text-gray-600">Trusted Brands</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-docstock-blue">
                  5000+
                </div>
                <div className="text-gray-600">Medical Products</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-docstock-blue">98%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="bg-white border-b border-gray-200 py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search brands or categories..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  {filteredAndSortedBrands.length} brands found
                </span>

                <Select
                  value={sortOrder}
                  onValueChange={(value: "asc" | "desc") => setSortOrder(value)}
                >
                  <SelectTrigger className="w-48">
                    <ArrowUpDown className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asc">A to Z</SelectItem>
                    <SelectItem value="desc">Z to A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Mosaic Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {currentBrands.length > 0 ? (
              <div className="grid grid-cols-4 grid-rows-3 gap-6 h-[800px] mb-12">
                {currentBrands[0] && (
                  <div className="col-span-2 row-span-2 group cursor-pointer">
                    <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                      <div className="relative h-full">
                        <Image
                          src={currentBrands[0].image || "/placeholder.svg"}
                          alt={currentBrands[0].name}
                          fill
                          className="object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4">
                          <div className="bg-docstock-blue text-white px-4 py-2 rounded-full text-sm font-medium">
                            Featured Brand
                          </div>
                        </div>
                        <div className="absolute bottom-6 left-6 text-white">
                          <h3 className="text-2xl font-bold mb-2">
                            {currentBrands[0].name}
                          </h3>
                          <p className="text-sm opacity-90 mb-2">
                            {currentBrands[0].category}
                          </p>
                          <div className="flex items-center gap-4 text-xs">
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span>{currentBrands[0].rating}</span>
                            </div>
                            <span>{currentBrands[0].products}+ Products</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentBrands.slice(1, 7).map((brand, index) => (
                  <div
                    key={brand.name}
                    className="col-span-1 row-span-1 group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 h-full">
                      <div className="relative h-full">
                        <Image
                          src={brand.image || "/placeholder.svg"}
                          alt={brand.name}
                          fill
                          className="object-contain p-6 group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-lg font-bold mb-1">
                            {brand.name}
                          </h3>
                          <p className="text-xs opacity-90 mb-1">
                            {brand.category}
                          </p>
                          <div className="flex items-center gap-2 text-xs">
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span>{brand.rating}</span>
                            </div>
                            <span>{brand.products}+</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {currentBrands[7] && (
                  <div className="col-span-2 row-span-1 group cursor-pointer">
                    <div className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 h-full">
                      <div className="relative h-full">
                        <Image
                          src={currentBrands[7].image || "/placeholder.svg"}
                          alt={currentBrands[7].name}
                          fill
                          className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-xl font-bold mb-1">
                            {currentBrands[7].name}
                          </h3>
                          <p className="text-sm opacity-90 mb-2">
                            {currentBrands[7].category}
                          </p>
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span>{currentBrands[7].rating}</span>
                            </div>
                            <span>{currentBrands[7].products}+ Products</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No brands found matching your search criteria.
                </p>
              </div>
            )}

            {currentBrands.length > 8 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {currentBrands.slice(8).map((brand) => (
                  <div
                    key={brand.name}
                    className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105"
                  >
                    <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100">
                      <Image
                        src={brand.image || "/placeholder.svg"}
                        alt={brand.name}
                        fill
                        className="object-contain p-6 group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <h3 className="text-white font-semibold text-lg mb-1">
                          {brand.name}
                        </h3>
                        <p className="text-gray-200 text-sm mb-2">
                          {brand.category}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-gray-300">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span>{brand.rating}</span>
                          </div>
                          <span>{brand.products}+ Products</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <Button
                  variant="outline"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      onClick={() => setCurrentPage(page)}
                      className={
                        currentPage === page
                          ? "bg-docstock-blue hover:bg-docstock-blue/90"
                          : ""
                      }
                    >
                      {page}
                    </Button>
                  )
                )}

                <Button
                  variant="outline"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Banner Section */}
        <section className="bg-gradient-to-r from-docstock-blue to-blue-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Partner with Leading Medical Brands
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of healthcare professionals who trust DocStock for
              premium medical equipment from world-class manufacturers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-docstock-blue hover:bg-gray-100"
              >
                Request Catalog
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-docstock-blue bg-transparent"
              >
                Contact Sales Team
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
