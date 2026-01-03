"use client"

import Link from "next/link"
import { Bell, Menu } from "lucide-react"
import { useRouter } from "next/navigation"
import { SpacezLogo } from "../logos/spacez-logo"

export function Header() {
  const router = useRouter()

  return (
    <header className="sticky top-0 z-40 bg-background border-b border-border">
      <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/explore" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Menu className="w-5 h-5 text-primary-foreground" />
          </div>
          <SpacezLogo className="h-6 text-primary" />
        </Link>

        <button className="relative">
          <Bell className="w-6 h-6 text-muted-foreground" />
          <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
            1
          </span>
        </button>
      </div>
    </header>
  )
}
