import { Navbar } from '@/components/landing/navbar'
import { Hero } from '@/components/landing/hero'
import { Features } from '@/components/landing/features'
import { Screenshots } from '@/components/landing/screenshots'
import { Comparison } from '@/components/landing/comparison'
import { Analytics } from '@/components/landing/analytics'
import { SmartFeatures } from '@/components/landing/smart-features'
import { Testimonials } from '@/components/landing/testimonials'
import { Faq } from '@/components/landing/faq'
import { Download } from '@/components/landing/download'
import { Footer } from '@/components/landing/footer'

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <Screenshots />
      <Comparison />
      <Analytics />
      <SmartFeatures />
      <Testimonials />
      <Faq />
      <Download />
      <Footer />
    </main>
  )
}
