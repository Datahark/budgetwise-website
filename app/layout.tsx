import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.budgetwise.in'),
  title: { default: 'BudgetWise — Take Control of Every Rupee', template: '%s | BudgetWise' },
  description: 'BudgetWise is an INR-first personal finance app for accounts, transactions, budgets, goals, recurring money, reports, exports, backup and biometric app lock.',
  keywords: ['BudgetWise', 'expense tracker India', 'budget app India', 'personal finance app', 'money manager', 'savings goals', 'expense report', 'INR budget app'],
  authors: [{ name: 'BudgetWise' }],
  creator: 'BudgetWise',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'BudgetWise — Take Control of Every Rupee',
    description: 'Track accounts, transactions, budgets, goals and recurring money with clear INR-first reports.',
    url: 'https://www.budgetwise.in',
    siteName: 'BudgetWise',
    images: [{ url: '/brand/logo.png', width: 1024, height: 1024, alt: 'BudgetWise — Smart Spending. Better Living.' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'BudgetWise — Take Control of Every Rupee', description: 'An INR-first personal finance app, coming soon.', images: ['/brand/logo.png'] },
  icons: { icon: '/brand/app-icon.png', apple: '/brand/app-icon.png' },
}

export const viewport: Viewport = { colorScheme: 'light dark', themeColor: [{ media: '(prefers-color-scheme: light)', color: '#ffffff' }, { media: '(prefers-color-scheme: dark)', color: '#0B1220' }] }

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'BudgetWise',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Android',
  url: 'https://www.budgetwise.in',
  description: 'An INR-first personal finance app for accounts, transactions, budgets, goals, recurring money and reports.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/PreOrder' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN" className={`${inter.variable} bg-background`}><body className="font-sans antialiased"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
