'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const faqs = [
  { q: 'When will BudgetWise be available?', a: 'The Android app is currently being prepared for launch. The website will be updated with the Google Play link when the listing is live.' },
  { q: 'What can I track?', a: 'BudgetWise supports accounts, income, expenses, investments, categories, budgets, savings goals and recurring financial plans.' },
  { q: 'Does BudgetWise support recurring transactions and budgets?', a: 'Yes. You can create recurring transactions and recurring budgets with repeat schedules and start or due dates.' },
  { q: 'Can I export my reports?', a: 'Yes. Reports can be exported to CSV and PDF, printed, or shared through supported apps.' },
  { q: 'Can I back up my data?', a: 'Yes. BudgetWise includes user-initiated backup and restore tools, including saving a backup to your device or sharing the backup file.' },
  { q: 'How can I protect access to the app?', a: 'BudgetWise includes an app-lock option using the biometric security available on your device.' },
  { q: 'Does it support multiple accounts?', a: 'Yes. You can manage multiple account types and choose a default account for faster transaction entry.' },
  { q: 'Is BudgetWise made for Indian users?', a: 'BudgetWise is designed with INR-first formatting and personal finance workflows relevant to users in India.' },
  { q: 'How do I contact support?', a: 'Email contact@budgetwise.in. Additional support channels will be added as the public launch approaches.' },
]

function Item({ q, a }: { q: string; a: string }) { const [open, setOpen] = useState(false); return <div className="glass rounded-2xl border border-border/60"><button type="button" onClick={() => setOpen(!open)} aria-expanded={open} className="flex w-full items-center justify-between gap-4 p-5 text-left"><span className="font-semibold">{q}</span><motion.span animate={{ rotate: open ? 45 : 0 }} className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary"><Plus className="size-4" /></motion.span></button><AnimatePresence initial={false}>{open && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><p className="px-5 pb-5 leading-relaxed text-muted-foreground">{a}</p></motion.div>}</AnimatePresence></div> }

export function Faq() { return <section id="faq" className="px-5 py-24 sm:px-8"><div className="mx-auto max-w-3xl"><SectionHeading eyebrow="FAQ" title="Questions, answered" description="Clear information based on the current BudgetWise build and launch plan." /><Reveal className="mt-14 space-y-4">{faqs.map((faq) => <Item key={faq.q} {...faq} />)}</Reveal></div></section> }
