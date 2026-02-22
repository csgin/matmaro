import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://matmaro.edu.pl'),
  title: 'Mateusz Maroszek - Profesjonalny Nauczyciel Angielskiego Online',
  description: 'Nauka angielskiego z doświadczonym nauczycielem. Lekcje online dopasowane do Twojego poziomu - biznesowy angielski, egzaminy, konwersacje. Umów pierwszą lekcję już dziś!',
  keywords: 'nauczyciel angielskiego, lekcje angielskiego online, angielski biznesowy, przygotowanie do egzaminów, korepetycje angielski, Mateusz Maroszek',
  authors: [{ name: 'Mateusz Maroszek' }],
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://matmaro.edu.pl',
    siteName: 'Mateusz Maroszek - Nauczyciel Angielskiego',
    title: 'Mateusz Maroszek - Profesjonalny Nauczyciel Angielskiego Online',
    description: 'Nauka angielskiego z doświadczonym nauczycielem. Lekcje online dopasowane do Twojego poziomu.',
    images: [{
      url: '/images/Mateusz.jpeg',
      width: 1200,
      height: 630,
      alt: 'Mateusz Maroszek - Nauczyciel Angielskiego',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mateusz Maroszek - Profesjonalny Nauczyciel Angielskiego',
    description: 'Nauka angielskiego online z doświadczonym nauczycielem',
    images: ['/images/Mateusz.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className="scroll-smooth" style={{ colorScheme: 'light' }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Mateusz Maroszek - Nauczyciel Angielskiego",
              "description": "Profesjonalny nauczyciel angielskiego oferujący lekcje online",
              "url": "https://matmaro.edu.pl",
              "serviceType": "English Language Teaching",
              "provider": {
                "@type": "Person",
                "name": "Mateusz Maroszek",
                "jobTitle": "Nauczyciel języka angielskiego",
                "email": "matmaro.edu@gmail.com",
                "telephone": "+48796988896"
              },
              "address": {
                "@type": "VirtualLocation",
                "description": "Lekcje online"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Polska"
              },
              "availableLanguage": ["pl", "en"],
              "priceRange": "$$"
            })
          }}
        />
      </head>
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
