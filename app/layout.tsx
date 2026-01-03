import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Providers } from "@/components/providers"

/* ✅ Metadata (NO themeColor here) */
export const metadata: Metadata = {
  title: {
    default: "SPACEZ – Exclusive Bookings & Offers",
    template: "%s | SPACEZ",
  },
  description:
    "Discover premium stays, exclusive coupons, gift cards, and payment offers. Book directly with SPACEZ and save more.",

  applicationName: "SPACEZ",

  metadataBase: new URL("https://spacez-ui.vercel.app"),

  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },

  openGraph: {
    title: "SPACEZ – Exclusive Bookings & Offers",
    description:
      "Premium stays with exclusive coupons, gift cards, and rewards.",
    siteName: "SPACEZ",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "SPACEZ",
      },
    ],
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "SPACEZ – Exclusive Bookings & Offers",
    description:
      "Book premium stays and unlock exclusive rewards with SPACEZ.",
    images: ["/logo.jpg"],
  },
}

/* ✅ Viewport export (THIS fixes the warnings) */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  )
}
