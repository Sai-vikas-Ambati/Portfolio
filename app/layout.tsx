import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Creative Developer',
  description: 'A modern portfolio showcasing creative development projects and skills',
  keywords: ['portfolio', 'developer', 'web development', 'react', 'next.js'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
          {children}
        </div>
      </body>
    </html>
  )
} 