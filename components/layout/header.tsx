"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Bell, Moon, Sun } from "lucide-react"
import { SpacezLogo } from "../logos/spacez-logo"

export function Header() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true"
    setDarkMode(isDark)

    if (isDark) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem("darkMode", String(newMode))

    if (newMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <header className="sticky top-0 z-40 bg-background border-b border-border">
      <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/explore" className="flex items-center">
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

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">
          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* NOTIFICATION */}
          <button className="relative cursor-pointer">
            <Bell className="w-6 h-6 text-muted-foreground" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
              1
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
