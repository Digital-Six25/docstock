"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface WishlistItem {
  id: string
  name: string
  price: number
  image: string
  slug: string
}

interface WishlistContextType {
  items: WishlistItem[]
  addToWishlist: (item: WishlistItem) => void
  removeFromWishlist: (id: string) => void
  isInWishlist: (id: string) => boolean
  itemCount: number
  clearWishlist: () => void
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([])

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem("docstock-wishlist")
    if (savedWishlist) {
      setItems(JSON.parse(savedWishlist))
    }
  }, [])

  // Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("docstock-wishlist", JSON.stringify(items))
  }, [items])

  const addToWishlist = (item: WishlistItem) => {
    setItems((prev) => {
      if (prev.find((i) => i.id === item.id)) return prev
      return [...prev, item]
    })
  }

  const removeFromWishlist = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const isInWishlist = (id: string) => {
    return items.some((item) => item.id === id)
  }

  const clearWishlist = () => {
    setItems([])
  }

  return (
    <WishlistContext.Provider
      value={{
        items,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        itemCount: items.length,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}
