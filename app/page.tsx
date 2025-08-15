import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductShowcaseCards } from "@/components/product-showcase-cards"
import { OnSaleCarousel } from "@/components/on-sale-carousel"
import { PopularCategories } from "@/components/popular-categories"
import { BrandCarousel } from "@/components/brand-carousel"
import { FeaturedProducts } from "@/components/featured-products"
import { Testimonials } from "@/components/testimonials"
import { BrandsCTASection } from "@/components/brands-cta-section"
import { FAQSection } from "@/components/faq-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductShowcaseCards />
      <OnSaleCarousel />
      <PopularCategories />
      <BrandCarousel />
      <FeaturedProducts />
      <BrandsCTASection />
      <Testimonials />
      <FAQSection />
    </main>
  )
}
