"use client"

import Link from "next/link"
import Image from "next/image"
import { Bell } from "lucide-react"
import { SpacezLogo } from "../logos/spacez-logo"

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background border-b border-border">
      <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/explore" className="flex items-center gap-0">
          <Image
            src="/logo.jpg"
            alt="Spacez"
            width={28}
            height={28}
            className="rounded"
            priority
          />
          <SpacezLogo className="h-6 text-amber-800 -ml-3" />
        </Link>

        {/* NOTIFICATION */}
        <button className="relative">
          <Bell className="w-6 h-6 text-muted-foreground" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
            1
          </span>
        </button>
      </div>
    </header>
  )
}
