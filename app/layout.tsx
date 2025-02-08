import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"], weight: ["300", "400"] })

export const metadata: Metadata = {
  title: {
    default: "ztb.dev",
    template: "%s | ztb.dev",
  },
  description: "hi, i'm zach. i build things on the internet. let's chat.",
  openGraph: {
    type: "website",
    title: "ztb.dev",
    description: "hi, i'm zach. i build things on the internet. let's chat.",
    url: "https://ztb.dev",
    siteName: "ztb.dev",
    images: "/og.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@heyztb",
    creator: "@heyztb",
    title: "ztb.dev",
    description: "hi, i'm zach. i build things on the internet. let's chat.",
    images: "/og.png",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
