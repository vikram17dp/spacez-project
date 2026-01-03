"use client"

import { Copy } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface Coupon {
  id: number
  code: string
  badge: string
  badgeColor: string
  brand: string
  description: string
}

interface CouponCardProps {
  coupon: Coupon
  onCopy: () => void
  showCollect?: boolean
  logoComponent?: React.ReactNode
}

export default function CouponCard({
  coupon,
  onCopy,
  showCollect = false,
  logoComponent,
}: CouponCardProps) {
  const handleReadMore = () => {
    toast({
      title: "Terms & Conditions",
      description: `Showing details for ${coupon.code} coupon`,
    })
  }

  return (
    <div className="flex bg-card rounded-lg overflow-hidden border border-border shadow-sm">
      {/* LEFT BADGE */}
      <div
        className={`w-14 flex items-center justify-center ${coupon.badgeColor}`}
      >
        <span className="coupon-badge text-white font-bold text-sm px-2">
          {coupon.badge}
        </span>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-3">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            {logoComponent}
            <span className="font-semibold text-foreground text-sm">
              {coupon.brand}
            </span>
          </div>

          {showCollect ? (
            <button className="text-primary text-xs font-medium">
              Collect
            </button>
          ) : (
            <button
              onClick={onCopy}
              className="flex items-center gap-1 text-primary text-xs font-medium"
            >
              <Copy className="h-3 w-3" />
              Copy
            </button>
          )}
        </div>

        <p className="text-muted-foreground text-xs mb-2">
          {coupon.description}
        </p>

        <button
          onClick={handleReadMore}
          className="text-xs font-medium underline"
        >
          Read more
        </button>
      </div>
    </div>
  )
}
