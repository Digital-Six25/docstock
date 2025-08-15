import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";

const featuredProducts = [
  {
    id: 1,
    name: "Bionet Cardio Q-Series ECG Machine",
    price: 2499,
    originalPrice: 2799,
    rating: 4.8,
    reviews: 24,
    image: "/placeholder-668tl.png",
    badge: "Best Seller",
    features: ["Large touchscreen", "Built-in printer", "PDF export"],
  },
  {
    id: 2,
    name: "Digital Blood Pressure Monitor",
    price: 189,
    originalPrice: null,
    rating: 4.9,
    reviews: 156,
    image: "/images/products/bp-monitor.png",
    badge: "New",
    features: ["Automatic inflation", "Memory storage", "Large display"],
  },
  {
    id: 3,
    name: "Professional Stethoscope",
    price: 299,
    originalPrice: 349,
    rating: 4.7,
    reviews: 89,
    image: "/professional-stethoscope.png",
    badge: "Sale",
    features: ["Dual head", "Noise reduction", "Comfortable earpieces"],
  },
  {
    id: 4,
    name: "Pulse Oximeter Pro",
    price: 149,
    originalPrice: null,
    rating: 4.6,
    reviews: 67,
    image: "/placeholder-flxem.png",
    badge: null,
    features: ["OLED display", "Alarm function", "Data logging"],
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto ">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
            Featured Medical Equipment
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and trusted medical devices, chosen by
            healthcare professionals worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
