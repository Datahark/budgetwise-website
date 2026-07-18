'use client'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PhoneMockup } from './phone-mockup'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const screens = [
  { src: '/screens/reports-overview.jpg', label: 'Reports overview' },
  { src: '/screens/add-transaction-expense.jpg', label: 'Add transaction' },
  { src: '/screens/add-account.jpg', label: 'Add account' },
  { src: '/screens/categories-live.jpg', label: 'Categories' },
  { src: '/screens/recurring-transaction.jpg', label: 'Recurring transaction' },
  { src: '/screens/recurring-budget.jpg', label: 'Recurring budget' },
  { src: '/screens/report-filters.jpg', label: 'Report filters' },
  { src: '/screens/report-export.jpg', label: 'Export reports' },
  { src: '/screens/profile-settings.jpg', label: 'Settings & security' },
]

export function Screenshots() {
  const trackRef = useRef<HTMLDivElement>(null)
  const scrollBy = (direction: number) => trackRef.current?.scrollBy({ left: direction * 520, behavior: 'smooth' })
  return <section id="screenshots" className="overflow-hidden py-24"><div className="px-5 sm:px-8"><SectionHeading eyebrow="Real app screens" title="See BudgetWise in action" description="These screenshots are captured from the current Android build—not concept mockups." /></div><Reveal className="relative mt-16"><div ref={trackRef} className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-6 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{screens.map((screen, index) => <figure key={screen.label} className="w-48 shrink-0 snap-center sm:w-56"><div className="transition-transform duration-300 hover:-translate-y-2"><PhoneMockup src={screen.src} alt={`BudgetWise ${screen.label} screen`} priority={index === 0} /></div><figcaption className="mt-4 text-center text-sm font-semibold text-muted-foreground">{screen.label}</figcaption></figure>)}</div><div className="mt-4 flex justify-center gap-3"><button type="button" aria-label="Previous screenshots" onClick={() => scrollBy(-1)} className="round-button"><ChevronLeft className="size-5" /></button><button type="button" aria-label="Next screenshots" onClick={() => scrollBy(1)} className="round-button"><ChevronRight className="size-5" /></button></div></Reveal></section>
}
