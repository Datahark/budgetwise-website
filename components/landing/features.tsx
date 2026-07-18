'use client'
import { motion } from 'framer-motion'
import { ChartColumnBig, FileDown, Fingerprint, Goal, Repeat2, RotateCcw, Tags, WalletCards } from 'lucide-react'
import { SectionHeading } from './section-heading'

const features = [
  { icon: WalletCards, title: 'Accounts & Transactions', description: 'Track cash, bank, card, wallet and investment accounts with fast income, expense and investment entries.' },
  { icon: Tags, title: 'Budgets & Categories', description: 'Create category-based budgets and understand exactly where your money is going.' },
  { icon: Goal, title: 'Savings Goals', description: 'Create goals, add contributions and follow progress toward the things that matter.' },
  { icon: Repeat2, title: 'Recurring Money', description: 'Plan recurring transactions and recurring budgets for salaries, EMIs, subscriptions and monthly limits.' },
  { icon: ChartColumnBig, title: 'Detailed Reports', description: 'Review spending, income, investments, budgets, goals, trends, savings and net worth.' },
  { icon: FileDown, title: 'Export & Share', description: 'Export CSV or PDF reports, print them, or share them by email and other supported apps.' },
  { icon: RotateCcw, title: 'Backup & Restore', description: 'Create portable backups, save them to your device, share them and restore your BudgetWise data.' },
  { icon: Fingerprint, title: 'App Lock', description: 'Protect access to the app using the biometric security supported by your device.' },
]

export function Features() {
  return <section id="features" className="px-5 py-24 sm:px-8"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Built for everyday money" title="A complete personal finance toolkit" description="From a quick transaction to a detailed report, every core money workflow stays connected." /><div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{features.map((feature, index) => <motion.article key={feature.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.05 }} whileHover={{ y: -6 }} className="glass group rounded-3xl border border-border/60 p-6 shadow-sm hover:shadow-xl"><span className="flex size-13 items-center justify-center rounded-2xl bg-primary/12 text-primary group-hover:bg-primary group-hover:text-primary-foreground"><feature.icon className="size-6" /></span><h3 className="mt-5 text-lg font-semibold">{feature.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p></motion.article>)}</div></div></section>
}
