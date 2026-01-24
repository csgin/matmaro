import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'English Teacher - Professional English Lessons',
  description: 'Learn English with an experienced professional teacher. Personalized lessons for all levels.',
  keywords: 'English teacher, English lessons, language learning, professional tutoring',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className="scroll-smooth" style={{ colorScheme: 'light' }}>
      <body className={inter.variable} style={{ colorScheme: 'light' }}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
