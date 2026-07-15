'use client'

import { motion } from 'framer-motion'
import {
  CloudUpload,
  Fingerprint,
  PiggyBank,
  Receipt,
  Wallet,
  ChartColumnBig,
} from 'lucide-react'
import { SectionHeading } from './section-heading'

const features = [
  {
    icon: Receipt,
    title: 'Expense Tracking',
    description:
      'Log every transaction in seconds and watch your spending organise itself automatically by category.',
  },
  {
    icon: Wallet,
    title: 'Budget Planning',
    description:
      'Set monthly limits per category and get gentle nudges before you overspend—never blow the budget again.',
  },
  {
    icon: PiggyBank,
    title: 'Savings Goals',
    description:
      'Turn dreams into plans. Create goals, track progress, and celebrate every milestone you reach.',
  },
  {
    icon: ChartColumnBig,
    title: 'Financial Reports',
    description:
      'Understand where your money goes with clear, beautiful reports built for real decisions.',
  },
  {
    icon: CloudUpload,
    title: 'Cloud Backup',
    description:
      'Your data is safely synced to the cloud, so switching phones never means losing your history.',
  },
  {
    icon: Fingerprint,
    title: 'Secure Authentication',
    description:
      'Bank-grade encryption and biometric unlock keep your finances private and protected—always.',
  },
]

export function Features() {
  return (
    <section id="features" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Trusted Features"
          title="Everything you need to master your money"
          description="Powerful tools wrapped in a beautifully simple experience—designed to make managing money feel effortless."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass group rounded-3xl border border-border/60 p-7 shadow-sm transition-shadow hover:shadow-xl"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/12 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="size-7" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
