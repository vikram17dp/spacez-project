"use client"

import { toast } from "@/hooks/use-toast"

interface GiftCardProps {
  logo: React.ReactNode
  brandName: string
  description: string
  amount: string
  color?: string
}

const GiftCard = ({
  logo,
  brandName,
  description,
  amount,
  color = "bg-primary", // ✅ default color
}: GiftCardProps) => {
  const handleCollect = () => {
    toast({
      title: "Gift Card Collected!",
      description: `You've collected the ${brandName} gift voucher worth ${amount}`,
    })
  }

  const handleReadMore = () => {
    toast({
      title: "Gift Card Details",
      description: `Showing details for ${brandName} gift voucher`,
    })
  }

  return (
    <div className="flex bg-card rounded-lg overflow-hidden border border-border shadow-sm">
      {/* LEFT BADGE */}
      <div className={`w-14 flex items-center justify-center ${color}`}>
        <span className="coupon-badge text-white font-bold text-sm px-2">
          {amount}
        </span>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-3">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            {logo}
            <span className="font-semibold text-foreground text-sm">
              {brandName}
            </span>
          </div>

          <button
            onClick={handleCollect}
            className="text-primary text-xs font-medium hover:opacity-80"
          >
            Collect
          </button>
        </div>

        <p className="text-muted-foreground text-xs mb-2">
          {description}
        </p>

        <button
          onClick={handleReadMore}
          className="text-foreground text-xs font-medium underline"
        >
          Read more
        </button>
      </div>
    </div>
  )
}

export default GiftCard
