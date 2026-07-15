'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PhoneMockup } from './phone-mockup'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const screens = [
  { src: '/screens/dashboard.png', label: 'Dashboard' },
  { src: '/screens/transactions.png', label: 'Transactions' },
  { src: '/screens/reports.png', label: 'Reports' },
  { src: '/screens/budgets.png', label: 'Budgets' },
  { src: '/screens/goals.png', label: 'Goals' },
  { src: '/screens/categories.png', label: 'Categories' },
]

export function Screenshots() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollBy = (dir: number) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * (el.clientWidth * 0.7), behavior: 'smooth' })
  }

  return (
    <section id="screenshots" className="overflow-hidden py-24">
      <div className="px-5 sm:px-8">
        <SectionHeading
          eyebrow="App Screenshots"
          title="Designed to feel effortless"
          description="A closer look at the screens you'll use every day—clean, fast, and delightful on any device."
        />
      </div>

      <Reveal className="relative mt-16">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-5 pb-6 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {screens.map((screen, i) => (
            <figure
              key={screen.label}
              className="w-48 shrink-0 snap-center sm:w-56"
            >
              <div className="transition-transform duration-300 hover:-translate-y-2">
                <PhoneMockup src={screen.src} alt={`BudgetWise ${screen.label} screen`} priority={i === 0} />
              </div>
              <figcaption className="mt-4 text-center text-sm font-semibold text-muted-foreground">
                {screen.label}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous screenshots"
            onClick={() => scrollBy(-1)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent/15"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next screenshots"
            onClick={() => scrollBy(1)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent/15"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </Reveal>
    </section>
  )
}
