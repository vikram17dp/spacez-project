export function SpacezLogo({ className = "h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4L12 4L12 8L4 8L4 4Z" fill="currentColor" />
      <path d="M4 10L12 10L12 14L4 14L4 10Z" fill="currentColor" />
      <path d="M4 16L12 16L12 20L4 20L4 16Z" fill="currentColor" />
      <text x="18" y="17" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" fill="currentColor">
        SPACEZ
      </text>
    </svg>
  )
}
