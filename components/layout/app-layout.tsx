"use client"

import type React from "react"

import { Header } from "./header"
import { BottomNav } from "./bottom-nav"
import { Toaster } from "@/components/ui/toaster"

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-md mx-auto pb-24">{children}</main>
      <BottomNav />
      <Toaster />
    </div>
  )
}
