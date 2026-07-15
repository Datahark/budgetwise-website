import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://budgetwise.app'),
  title: {
    default: 'BudgetWise — Spend Smarter. Save Better. Grow Wealthier.',
    template: '%s | BudgetWise',
  },
  description:
    'BudgetWise helps you take complete control of your finances — track expenses, plan budgets, hit savings goals, and understand your money with beautiful analytics, all in one app.',
  keywords: [
    'budget app',
    'expense tracker',
    'personal finance',
    'savings goals',
    'money management',
    'financial reports',
    'BudgetWise',
  ],
  authors: [{ name: 'BudgetWise' }],
  openGraph: {
    title: 'BudgetWise — Spend Smarter. Save Better. Grow Wealthier.',
    description:
      'Track expenses, create budgets, build savings goals, and understand your money with beautiful insights — all in one place.',
    url: 'https://budgetwise.app',
    siteName: 'BudgetWise',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BudgetWise — Take Control of Every Rupee',
    description:
      'Track expenses, create budgets, build savings goals, and understand your money with beautiful insights.',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0B1220' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
