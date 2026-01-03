"use client"

import { toast } from "@/hooks/use-toast"

interface PaymentOfferCardProps {
  bank: string
  description: string
  color: string
  logo?: React.ReactNode
}

const PaymentOfferCard = ({
  bank,
  description,
  color,
  logo,
}: PaymentOfferCardProps) => {
  const handleReadMore = () => {
    toast({
      title: "Payment Offer Details",
      description: `Showing details for ${bank} offer`,
    })
  }

  return (
    <div className="flex bg-card rounded-lg overflow-hidden border border-border shadow-sm">
      {/* LEFT BADGE */}
      <div className={`w-14 flex items-center justify-center ${color}`}>
        <span className="coupon-badge text-white font-bold text-xs whitespace-nowrap px-1">
          10% OFF
        </span>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-3">
        <div className="flex items-center gap-2 mb-1">
          {logo}
          <span className="font-semibold text-foreground text-sm">
            {bank}
          </span>
        </div>

        <p className="text-muted-foreground text-xs leading-relaxed mb-2">
          {description}
        </p>

        <button
          onClick={handleReadMore}
          className="text-foreground text-xs font-medium underline hover:opacity-80 transition-opacity"
        >
          Read more
        </button>
      </div>
    </div>
  )
}

export default PaymentOfferCard
