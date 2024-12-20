"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    })
    setEmail("")
  }

  return (
    <section className="bg-primary/5 py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-y-8 text-center">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl font-bold">Stay Updated</h2>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for exclusive deals, new arrivals, and more!
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter