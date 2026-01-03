"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Zap, Calendar, Heart, User } from "lucide-react"

export function BottomNav() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const navItems = [
    { href: "/explore", label: "Explore", icon: Search },
    { href: "/offers", label: "Offers", icon: Zap },
    { href: "/bookings", label: "Bookings", icon: Calendar },
    { href: "/wishlist", label: "Wishlist", icon: Heart },
    { href: "/profile", label: "Profile", icon: User },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border max-w-md mx-auto">
      <div className="flex items-center justify-around">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex-1 flex flex-col items-center justify-center py-3 gap-1 transition-colors ${
              isActive(href) ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs font-medium">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
