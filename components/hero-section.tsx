import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Star } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100 text-sm px-3 py-1">
                Genuine 100% Organic Products
              </Badge>

              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Medical Products For
                  <br /> <span className="text-[#0088FF]"> Your Family</span>
                </h1>

                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  Australia's largest medical retailer, stocked with worldwide
                  trusted medical brands.
                </p>
              </div>

              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
              >
                Shop Now →
              </Button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Happy Customer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Medical Professional */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Main hero image - smaller and square */}
              <div className="relative z-10 w-100 h-100 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
                <Image
                  src="/medical-professional-package.png"
                  alt="Medical Professional"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>

              {/* Floating medical equipment shapes */}
              <div className="absolute -top-4 -left-4 z-20 opacity-80 animate-float">
                <div className="w-16 h-16 bg-blue-500 rounded-lg transform rotate-12 flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="absolute top-20 left-8 z-20 opacity-60 animate-float-delayed">
                <div className="w-8 h-8 bg-purple-500 rounded-lg transform rotate-12 shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="mt-16 grid lg:grid-cols-4 gap-6 items-end">
          {/* 900K stats card */}
          <div className="bg-blue-900 text-white rounded-2xl p-6 text-center h-full">
            <div className="text-3xl font-bold">900K+</div>
            <div className="text-blue-200 text-sm">Products Available</div>
          </div>
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Search Your Products
              </h3>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <Select>
                <SelectTrigger className="bg-gray-50">
                  <SelectValue placeholder="Category Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="diagnostic">
                    Diagnostic Equipment
                  </SelectItem>
                  <SelectItem value="surgical">Surgical Instruments</SelectItem>
                  <SelectItem value="monitoring">Patient Monitoring</SelectItem>
                  <SelectItem value="supplies">Medical Supplies</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="bg-gray-50">
                  <SelectValue placeholder="Brand Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="philips">Philips</SelectItem>
                  <SelectItem value="ge">GE Healthcare</SelectItem>
                  <SelectItem value="siemens">Siemens</SelectItem>
                  <SelectItem value="medtronic">Medtronic</SelectItem>
                </SelectContent>
              </Select>

              <Input placeholder="Price MIN" className="bg-gray-50" />

              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Search className="w-4 h-4 mr-2" />
                Search Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
