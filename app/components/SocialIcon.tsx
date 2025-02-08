import type { LucideIcon } from "lucide-react"
import Link from "next/link"

interface SocialIconProps {
  href: string
  icon: LucideIcon
  label: string
}

export default function SocialIcon({ href, icon: Icon, label }: SocialIconProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-gray-300 transition-colors duration-200 ease-in-out"
      aria-label={label}
    >
      <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1} />
    </Link>
  )
}

