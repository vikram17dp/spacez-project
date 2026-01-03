"use client"

import { Star, MapPin } from "lucide-react"

interface Property {
  id: number
  name: string
  location: string
  price: number
  rating: number
  image: string
}

export function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="bg-card rounded-xl overflow-hidden border border-border">
      <div className="relative w-full aspect-[4/3]">
        <img
          src={property.image}
          alt={property.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-3 space-y-1">
        <h3 className="text-sm font-semibold leading-tight">
          {property.name}
        </h3>

        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="w-3 h-3" />
          {property.location}
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-1 text-sm font-medium">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            {property.rating}
          </div>

          <span className="text-sm font-semibold text-primary">
            ₹{property.price.toLocaleString()}/night
          </span>
        </div>
      </div>
    </div>
  )
}
