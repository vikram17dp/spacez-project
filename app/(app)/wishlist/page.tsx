"use client"

import { Heart, Trash2, MapPin, Star } from "lucide-react"
import { useState } from "react"

const initialWishlist = [
  {
    id: 1,
    name: "Luxury Suite Mumbai",
    location: "Bandra West, Mumbai",
    price: 3500,
    rating: 4.8,
    image: "/luxury-suite.png",
  },
  {
    id: 2,
    name: "Beach Villa Goa",
    location: "Candolim, Goa",
    price: 5200,
    rating: 4.9,
    image: "/tropical-beach-villa.png",
  },
]

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState(initialWishlist)

  const handleRemove = (id: number) => {
    setWishlist(wishlist.filter((item) => item.id !== id))
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-50" />
          <p className="text-muted-foreground">No items in your wishlist yet</p>
        </div>
      ) : (
        <div className="space-y-3">
          {wishlist.map((item) => (
            <div key={item.id} className="spacez-card flex gap-3">
              <div className="w-24 h-24 bg-muted rounded-lg flex-shrink-0 overflow-hidden">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-sm">{item.name}</h3>
                <div className="flex items-center gap-1 text-muted-foreground text-xs mt-1">
                  <MapPin className="w-3 h-3" />
                  {item.location}
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-0.5">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                  <span className="text-sm text-primary">₹{item.price}/night</span>
                </div>
              </div>

              <button
                onClick={() => handleRemove(item.id)}
                className="text-destructive hover:text-destructive/80 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
