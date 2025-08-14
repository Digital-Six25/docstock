export interface CartItem {
  id: number
  name: string
  slug: string
  price: number
  image: string
  quantity: number
  maxQuantity: number
}

export interface ShippingAddress {
  firstName: string
  lastName: string
  company?: string
  address1: string
  address2?: string
  city: string
  state: string
  postalCode: string
  country: string
  phone: string
}

export interface Order {
  id: string
  items: CartItem[]
  subtotal: number
  shipping: number
  tax: number
  total: number
  shippingAddress: ShippingAddress
  status: "pending" | "processing" | "shipped" | "delivered"
  createdAt: Date
}

export const calculateCartTotals = (items: CartItem[]) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal >= 200 ? 0 : 25 // Free shipping over $200
  const tax = subtotal * 0.1 // 10% tax
  const total = subtotal + shipping + tax

  return {
    subtotal: Math.round(subtotal * 100) / 100,
    shipping: Math.round(shipping * 100) / 100,
    tax: Math.round(tax * 100) / 100,
    total: Math.round(total * 100) / 100,
  }
}
