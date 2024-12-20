"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
}

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    // Simulated product data - in a real app, this would come from an API
    setProducts([
      {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
        category: "Electronics"
      },
      {
        id: 2,
        name: "Smart Watch Pro",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
        category: "Electronics"
      },
      {
        id: 3,
        name: "Leather Laptop Bag",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        category: "Accessories"
      },
      {
        id: 4,
        name: "Wireless Charging Pad",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=500&q=80",
        category: "Electronics"
      }
    ])
  }, [])

  return (
    <section className="container px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <p className="text-muted-foreground">
            Discover our handpicked selection of premium products
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                  <p className="mt-2 font-semibold">${product.price}</p>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full" size="sm">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts