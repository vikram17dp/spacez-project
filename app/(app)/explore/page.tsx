"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { PropertyCard } from "@/components/properties/property-card"

const properties = [
  {
    id: 1,
    name: "Luxury Suite Mumbai",
    location: "Bandra West, Mumbai",
    price: 3500,
    rating: 4.8,
    image: "/luxury-suite-mumbai.jpg",
  },
  {
    id: 2,
    name: "Cozy Studio Bangalore",
    location: "Koramangala, Bangalore",
    price: 2800,
    rating: 4.6,
    image: "/cozy-studio.png",
  },
  {
    id: 3,
    name: "Beach Villa Goa",
    location: "Candolim, Goa",
    price: 5200,
    rating: 4.9,
    image: "/beach-villa-goa.jpg",
  },
  {
    id: 4,
    name: "Mountain Retreat Manali",
    location: "Old Manali",
    price: 4000,
    rating: 4.7,
    image: "/secluded-mountain-cabin.png",
  },
]

export default function ExplorePage() {
  const [search, setSearch] = useState("")

  const filteredProperties = properties.filter((property) =>
    `${property.name} ${property.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (
    <div className="p-4 pb-20 space-y-4">
      <h1 className="text-2xl font-bold">Explore</h1>

      <div className="relative">
        <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search properties..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {filteredProperties.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <Search className="w-10 h-10 text-muted-foreground mb-2" />
          <p className="text-sm font-medium">No properties found</p>
          <p className="text-xs text-muted-foreground">
            Try searching with a different city or location
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  )
}
