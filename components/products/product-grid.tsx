"use client"

import { useEffect, useState } from "react"
import { Product } from "@/lib/types"
import ProductCard from "./product-card"

interface ProductGridProps {
  searchQuery: string
}

export default function ProductGrid({ searchQuery }: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulated API call - replace with actual API integration
    const fetchProducts = async () => {
      setLoading(true)
      // Simulated delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setProducts([
        {
          id: 1,
          name: "Premium Wireless Headphones",
          price: 299.99,
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
          category: "Electronics",
          description: "High-quality wireless headphones with noise cancellation."
        },
        // Add more products...
      ])
      setLoading(false)
    }

    fetchProducts()
  }, [])

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-[400px] rounded-lg bg-muted animate-pulse"
          />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}