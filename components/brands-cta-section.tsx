import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BrandsCTASection() {
  return (
    <section className="relative w-full h-96 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/surgical-instruments.png')",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Discover Trusted Medical Brands
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Explore our comprehensive collection of premium medical equipment
            from world-renowned manufacturers
          </p>
          <Link href="/brands">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Explore All Brands
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
