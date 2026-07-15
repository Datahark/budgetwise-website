'use client'

import { motion } from 'framer-motion'
import {
  Boxes,
  CalendarRange,
  DatabaseBackup,
  Infinity as InfinityIcon,
  LayoutDashboard,
  MoonStar,
  Search,
  Tags,
  Target,
  WifiOff,
} from 'lucide-react'
import { SectionHeading } from './section-heading'

const items = [
  { icon: InfinityIcon, title: 'Unlimited Transactions' },
  { icon: Boxes, title: 'Multiple Accounts' },
  { icon: Tags, title: 'Category Management' },
  { icon: CalendarRange, title: 'Monthly Reports' },
  { icon: Target, title: 'Goal Tracking' },
  { icon: MoonStar, title: 'Dark Mode' },
  { icon: WifiOff, title: 'Offline Support' },
  { icon: DatabaseBackup, title: 'Backup & Restore' },
  { icon: Search, title: 'Fast Search' },
  { icon: LayoutDashboard, title: 'Beautiful Dashboard' },
]

export function SmartFeatures() {
  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Smart Features"
          title="Loaded with everything, cluttered with nothing"
          description="A complete financial toolkit that stays out of your way and works exactly how you expect."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.06 }}
              whileHover={{ y: -5 }}
              className="glass flex flex-col items-center gap-3 rounded-2xl border border-border/60 p-6 text-center shadow-sm transition-shadow hover:shadow-lg"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-accent/20 text-secondary">
                <item.icon className="size-6" />
              </span>
              <span className="text-sm font-semibold leading-tight">
                {item.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
