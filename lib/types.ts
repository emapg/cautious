export interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  description?: string
  stock?: number
}

export interface CartItem extends Product {
  quantity: number
}

export interface User {
  id: number
  email: string
  name: string
  orders?: Order[]
}

export interface Order {
  id: number
  userId: number
  items: CartItem[]
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered'
  createdAt: string
}

export interface ShippingAddress {
  fullName: string
  address: string
  city: string
  country: string
  postalCode: string
}