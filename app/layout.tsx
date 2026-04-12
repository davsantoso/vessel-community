import type { Metadata } from 'next'
import { Newsreader, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Vessel Community',
  description:
    'Vessel Community — komunitas gereja pemuda GSRI Jemaat Bekasi. Ibadah setiap Sabtu, 17:00 WIB.',
  openGraph: {
    title: 'Vessel Community',
    description:
      'Vessel Community — komunitas gereja pemuda GSRI Jemaat Bekasi. Ibadah setiap Sabtu, 17:00 WIB.',
    url: 'https://vessel-community.vercel.app',
    siteName: 'Vessel Community',
    images: [
      {
        url: 'https://res.cloudinary.com/drxqokest/image/upload/v1775743502/29-03-2026_1_xp1ufm.png',
        width: 1200,
        height: 630,
        alt: 'Vessel Community — Ibadah bersama',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vessel Community',
    description:
      'Vessel Community — komunitas gereja pemuda GSRI Jemaat Bekasi. Ibadah setiap Sabtu, 17:00 WIB.',
    images: ['https://res.cloudinary.com/drxqokest/image/upload/v1775743502/29-03-2026_1_xp1ufm.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="id"
      className={`${newsreader.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-surface text-on-surface font-body">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
