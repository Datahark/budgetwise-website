'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const faqs = [
  {
    q: 'Is BudgetWise free?',
    a: 'Yes. BudgetWise is free to download and includes unlimited transactions, budgets, and savings goals. An optional premium plan adds advanced reports and family sharing, but the core experience is completely free.',
  },
  {
    q: 'How secure is my data?',
    a: 'Your data is protected with bank-grade AES-256 encryption both in transit and at rest. You can lock the app with biometric authentication, and we never sell your financial information to third parties.',
  },
  {
    q: 'Can I backup my data?',
    a: 'Absolutely. BudgetWise automatically backs up your data to the cloud so you never lose your history. You can restore everything instantly when you switch or reset your phone.',
  },
  {
    q: 'Does it work offline?',
    a: 'Yes. You can add transactions, check budgets, and review goals without an internet connection. Everything syncs automatically the moment you are back online.',
  },
  {
    q: 'Can I use multiple accounts?',
    a: 'Definitely. Track multiple bank accounts, wallets, and cash in one place. BudgetWise consolidates everything into a single, clear view of your finances.',
  },
  {
    q: 'How do I export reports?',
    a: 'Head to the Reports screen and tap Export to download your data as a CSV or PDF. It is perfect for taxes, sharing with an advisor, or your own records.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="glass rounded-2xl border border-border/60">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-semibold">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary"
        >
          <Plus className="size-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 leading-relaxed text-muted-foreground">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Faq() {
  return (
    <section id="faq" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="Everything you need to know before getting started with BudgetWise."
        />
        <Reveal className="mt-14 space-y-4">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} {...faq} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
