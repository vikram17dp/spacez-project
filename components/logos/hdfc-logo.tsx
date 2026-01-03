export function HDFCLogo({ className = "h-10 w-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="40" rx="4" fill="#004C8F" />
      <rect x="4" y="4" width="12" height="32" fill="#ED1C24" />
      <text x="20" y="18" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="700" fill="white">
        HDFC
      </text>
      <text x="20" y="28" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="700" fill="white">
        BANK
      </text>
    </svg>
  )
}
