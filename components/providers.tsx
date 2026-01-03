"use client"

import type React from "react"

import { useEffect, useState } from "react"

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved dark mode preference
    const isDark = localStorage.getItem("darkMode") === "true"
    if (isDark) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  if (!mounted) return <>{children}</>

  return <>{children}</>
}
