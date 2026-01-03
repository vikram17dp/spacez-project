export function HammerLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="24" rx="2" fill="#1a1a1a" />
      <text x="8" y="16" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="700" fill="white">
        HAMMER
      </text>
    </svg>
  )
}
