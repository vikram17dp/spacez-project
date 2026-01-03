"use client"

import { useState, useEffect } from "react"
import { LogOut, Mail, Phone, MapPin, Settings, Moon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { getUserData } from "@/lib/auth"

export default function ProfilePage() {
  const router = useRouter()
  const { toast } = useToast()
  const [darkMode, setDarkMode] = useState(false)
  const user = getUserData()

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true"
    setDarkMode(isDark)
  }, [])

  const handleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("darkMode", String(newDarkMode))

    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    toast({
      title: newDarkMode ? "Dark Mode On" : "Dark Mode Off",
      description: newDarkMode ? "Theme switched to dark mode" : "Theme switched to light mode",
    })
  }

const handleLogout = () => {
  document.cookie =
    "isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"

  toast({
    title: "Logged out",
    description: "You have been successfully logged out",
  })

  router.replace("/login")
}


  return (
    <div className="p-4 space-y-3">
      <h1 className="text-2xl font-bold">Profile</h1>

      {/* User Info Card */}
      <div className="spacez-card flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-2xl">
          {user.avatar}
        </div>
        <div>
          <h2 className="font-bold text-lg">{user.name}</h2>
          <p className="text-muted-foreground text-sm">{user.email}</p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="spacez-card flex items-center gap-3">
        <Mail className="w-5 h-5 text-muted-foreground" />
        <div>
          <p className="text-xs text-muted-foreground">Email</p>
          <p className="font-medium text-sm">{user.email}</p>
        </div>
      </div>

      <div className="spacez-card flex items-center gap-3">
        <Phone className="w-5 h-5 text-muted-foreground" />
        <div>
          <p className="text-xs text-muted-foreground">Phone</p>
          <p className="font-medium text-sm">{user.phone}</p>
        </div>
      </div>

      <div className="spacez-card flex items-center gap-3">
        <MapPin className="w-5 h-5 text-muted-foreground" />
        <div>
          <p className="text-xs text-muted-foreground">Location</p>
          <p className="font-medium text-sm">{user.location}</p>
        </div>
      </div>

      {/* Settings */}
      <div className="spacez-card flex items-center justify-between cursor-pointer">
        <div className="flex items-center gap-3">
          <Settings className="w-5 h-5 text-muted-foreground" />
          <span className="font-medium">Account Settings</span>
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <div className="spacez-card flex items-center justify-between cursor-pointer" onClick={handleDarkMode}>
        <div className="flex items-center gap-3">
          <Moon className="w-5 h-5 text-muted-foreground" />
          <span className="font-medium">Dark Mode</span>
        </div>
        <div className={`w-10 h-6 rounded-full transition-colors ${darkMode ? "bg-primary" : "bg-muted"}`}>
          <div
            className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${
              darkMode ? "translate-x-4.5" : "translate-x-0.5"
            }`}
          />
        </div>
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="w-full spacez-card flex items-center gap-3 text-destructive hover:bg-destructive/5 transition-colors"
      >
        <LogOut className="w-5 h-5" />
        <span className="font-medium">Logout</span>
      </button>
    </div>
  )
}
