"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { MyntraLogo } from "@/components/logos/myntra-logo"
import { HammerLogo } from "@/components/logos/hammer-logo"
import CouponCard from "@/components/offers/coupon-card"
import PaymentOfferCard from "@/components/offers/payment-offer-card"
import GiftCard from "@/components/offers/gift-card"


export default function OffersPage() {
  const [activeTab, setActiveTab] = useState("coupons")
  const { toast } = useToast()

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code)
    toast({
      title: "Copied!",
      description: `Coupon code "${code}" copied`,
    })
  }

  return (
    <div className="p-4 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Offers</h1>
        <p className="text-muted-foreground text-sm">
          Book directly with us to get exclusive benefits
        </p>
      </div>

      {/* TABS */}
      <div className="flex gap-6 border-b">
        {["coupons", "giftcards", "payment"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm font-medium ${
              activeTab === tab
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground"
            }`}
          >
            {tab === "coupons" && "Coupons"}
            {tab === "giftcards" && "Giftcards"}
            {tab === "payment" && "Payment Offers"}
          </button>
        ))}
      </div>
{/* SITEWIDE COUPONS — ALWAYS VISIBLE */}
<div className="space-y-3">
  <h2 className="font-semibold">Sitewide coupons:</h2>

  <CouponCard
    coupon={{
      id: 1,
      code: "LONGSTAY",
      badge: "₹1,500",
      badgeColor: "bg-[#B8652F]",
      brand: "LONGSTAY",
      description:
        "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
    }}
    onCopy={() => handleCopy("LONGSTAY")}
  />

  <CouponCard
    coupon={{
      id: 2,
      code: "EARLYBIRD",
      badge: "₹3,000",
      badgeColor: "bg-[#D4A135]",
      brand: "EARLYBIRD",
      description:
        "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
    }}
    onCopy={() => handleCopy("EARLYBIRD")}
  />

  <CouponCard
    coupon={{
      id: 3,
      code: "RUSHDEAL",
      badge: "Flat 10%",
      badgeColor: "bg-[#FF6B4A]",
      brand: "RUSHDEAL",
      description:
        "15% off when you book for 5 days or more and 20% off when you book for 30 days or more.",
    }}
    onCopy={() => handleCopy("RUSHDEAL")}
  />
</div>

    {activeTab === "giftcards" && (
  <div className="space-y-4">
    <h2 className="font-semibold">Bonus gift cards:</h2>

    {/* ASSURED VOUCHERS BANNER */}
    <div className="spacez-card">
      <p className="text-sm text-muted-foreground">
        Assured vouchers up to
      </p>
      <p className="text-2xl font-bold text-primary">₹1000</p>
      <p className="text-xs text-muted-foreground">
        of trending brands
      </p>

      <div className="flex gap-2 mt-3">
        <div className="px-3 py-1 rounded bg-[#B8652F] text-white text-sm">
          ₹400
        </div>
        <div className="px-3 py-1 rounded border text-sm">
          ₹500 Gift Card
        </div>
      </div>

      <button className="w-full spacez-button-primary mt-4">
        Claim gift cards »
      </button>
    </div>
<div className="space-y-4">
    <h2 className="font-semibold">Payment Offers:</h2>
 {/* GIFT CARDS */}
    <GiftCard
      logo={<MyntraLogo />}
      brandName="MYNTRA"
      color="bg-[#E64C73]"
      amount="₹500"
      description="Get this gift voucher on booking above ₹2000"
    />

    <GiftCard
      logo={<HammerLogo />}
      brandName="HAMMER"
        color="bg-[#B8652F]"
      amount="₹1000"
      description="Get this gift voucher on booking above ₹1500"
    />
</div>
   
  </div>
)}


      {/* PAYMENT */}
      {activeTab === "payment" && (
        <div className="space-y-3">
          <h2 className="font-semibold">Payment offers:</h2>
          <PaymentOfferCard
            bank="HDFC BANK"
            description="Get 10% off on booking above ₹1500"
            color="bg-[#004C8F]"
          />
           <PaymentOfferCard
      bank="MYNTRA"
      description="Extra savings on payments via Myntra wallet"
      color="bg-[#E64C73]"
      logo={<MyntraLogo />}
    />

    <PaymentOfferCard
      bank="HAMMER"
      description="Flat discount using Hammer payment offers"
      color="bg-[#B8652F]"
      logo={<HammerLogo />}
    />
        </div>
      )}
    </div>
  )
}
