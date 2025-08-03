import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abhinandan Jain - Portfolio',
  description: 'Software Engineer | Cloud & Backend Developer | Tech Innovator',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
