import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SessionProvider } from 'next-auth/react'
import AuthProvider from './providers/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Habib & Associates - Expert Legal Services in Pakistan',
  description: 'Providing comprehensive legal solutions with integrity, expertise, and dedication to justice. Specialized in Criminal Law, Family Law, Corporate Law, and more.',
  keywords: 'lawyer, legal services, Pakistan, criminal law, family law, corporate law, civil litigation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-16 lg:pt-20">
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
