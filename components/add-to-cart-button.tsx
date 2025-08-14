"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import type { Product } from "@/lib/products"
import { cn } from "@/lib/utils"

interface AddToCartButtonProps {
  product: Product
  className?: string
  size?: "sm" | "default" | "lg"
}

export function AddToCartButton({ product, className, size = "default" }: AddToCartButtonProps) {
  const { addItem, openCart } = useCart()

  const handleAddToCart = () => {
    addItem(product)
    openCart()
  }

  return (
    <Button
      onClick={handleAddToCart}
      disabled={!product.inStock}
      className={cn("bg-yellow-700 hover:bg-yellow-800", className)}
      size={size}
    >
      <ShoppingCart className="h-4 w-4 mr-2" />
      {product.inStock ? "Add to Cart" : "Out of Stock"}
    </Button>
  )
}
