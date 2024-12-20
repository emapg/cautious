import { Button } from "@/components/ui/button"
import FeaturedProducts from "@/components/home/featured-products"
import CategoryGrid from "@/components/home/category-grid"
import Newsletter from "@/components/home/newsletter"

export default function Home() {
  return (
    <div className="flex flex-col gap-y-20 pb-20">
      {/* Hero Section */}
      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Shop the Future
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Experience seamless shopping with cryptocurrency payments and traditional methods.
            Discover our curated collection of premium products.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">
              Shop Now
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <CategoryGrid />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Newsletter */}
      <Newsletter />
    </div>
  )
}