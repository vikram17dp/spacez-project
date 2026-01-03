"use client"

import { Star, Heart, MapPin } from "lucide-react"
import { useState } from "react"

interface PropertyCardProps {
  property: {
    id: number
    name: string
    location: string
    price: number
    rating: number
    image: string
  }
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <div className="spacez-card overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
      <div className="relative w-full h-32 bg-muted rounded-lg overflow-hidden mb-2">
        <img src={property.image || "/placeholder.svg"} alt={property.name} className="w-full h-full object-cover" />
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-2 right-2 bg-background rounded-full p-1.5 shadow"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? "fill-accent text-accent" : "text-muted-foreground"}`} />
        </button>
      </div>

      <h3 className="font-semibold text-sm line-clamp-1">{property.name}</h3>
      <div className="flex items-center gap-1 text-muted-foreground text-xs mt-1">
        <MapPin className="w-3 h-3" />
        <span className="line-clamp-1">{property.location}</span>
      </div>

      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-medium">{property.rating}</span>
        </div>
        <span className="text-sm font-bold text-primary">₹{property.price}/night</span>
      </div>
    </div>
  )
}
