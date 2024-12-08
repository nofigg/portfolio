import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ClientLayout from '../components/ClientLayout'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Personal portfolio site'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <ClientLayout>
          <div className="flex-grow flex flex-col min-h-screen">
            <Header />
            <main className="container mx-auto max-w-2xl px-4 py-8 flex-grow">
              {children}
            </main>
            <Footer className="mt-auto" />
          </div>
        </ClientLayout>
      </body>
    </html>
  )
}
