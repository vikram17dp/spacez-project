"use client"

import { Calendar, MapPin } from "lucide-react"

const bookings = [
  {
    id: 1,
    name: "Luxury Suite Mumbai",
    location: "Bandra West, Mumbai",
    checkIn: "Jan 15, 2026",
    checkOut: "Jan 18, 2026",
    amount: "₹10,500",
    status: "Upcoming",
  },
  {
    id: 2,
    name: "Beach Villa Goa",
    location: "Candolim, Goa",
    checkIn: "Dec 20, 2025",
    checkOut: "Dec 25, 2025",
    amount: "₹26,000",
    status: "Completed",
  },
  {
    id: 3,
    name: "Cozy Studio Bangalore",
    location: "Koramangala, Bangalore",
    checkIn: "Nov 10, 2025",
    checkOut: "Nov 12, 2025",
    amount: "₹5,600",
    status: "Completed",
  },
]

export default function BookingsPage() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">My Bookings</h1>

      <div className="space-y-3">
        {bookings.map((booking) => (
          <div key={booking.id} className="spacez-card">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold">{booking.name}</h3>
                <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                  <MapPin className="w-4 h-4" />
                  {booking.location}
                </div>
              </div>
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded ${
                  booking.status === "Upcoming" ? "bg-green-50 text-green-700" : "bg-gray-50 text-gray-700"
                }`}
              >
                {booking.status}
              </span>
            </div>

            <div className="flex gap-4 text-sm mb-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span>{booking.checkIn}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span>{booking.checkOut}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-border flex justify-between items-center">
              <span className="text-muted-foreground text-sm">Total Amount</span>
              <span className="font-bold text-primary">{booking.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
