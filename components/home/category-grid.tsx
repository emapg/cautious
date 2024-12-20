const CategoryGrid = () => {
  const categories = [
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&q=80",
      itemCount: 120
    },
    {
      name: "Fashion",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&q=80",
      itemCount: 250
    },
    {
      name: "Home & Living",
      image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=500&q=80",
      itemCount: 180
    },
    {
      name: "Sports",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&q=80",
      itemCount: 90
    }
  ]

  return (
    <section className="container px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold">Shop by Category</h2>
          <p className="text-muted-foreground">
            Browse our wide selection of categories
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <div className="aspect-square relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:opacity-70" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <h3 className="text-2xl font-bold text-center">{category.name}</h3>
                  <p className="mt-2">{category.itemCount} items</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryGrid