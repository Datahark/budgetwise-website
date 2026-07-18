import { Check, ShieldCheck, Sparkles } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const points = [
  ['Made for Indian users', 'INR-first amounts and familiar account workflows.'],
  ['Connected money management', 'Accounts, budgets, goals, recurring plans and reports work together.'],
  ['Useful exports', 'CSV, PDF, printing and sharing are available from reports.'],
  ['Privacy controls', 'Biometric app lock plus user-controlled backup and restore.'],
]

export function Comparison() {
  return <section id="why-budgetwise" className="px-5 py-24 sm:px-8"><div className="mx-auto max-w-5xl"><SectionHeading eyebrow="Why BudgetWise" title="Designed around clarity, not complexity" description="BudgetWise focuses on the workflows people actually need to understand and improve their money." /><Reveal className="mt-14 grid gap-5 md:grid-cols-2">{points.map(([title, description], index) => <article key={title} className="glass rounded-3xl border border-border/60 p-7"><span className="flex size-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">{index === 3 ? <ShieldCheck className="size-5" /> : index === 1 ? <Sparkles className="size-5" /> : <Check className="size-5" />}</span><h3 className="mt-5 text-xl font-semibold">{title}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{description}</p></article>)}</Reveal><p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted-foreground">Product capabilities shown here are based on the current BudgetWise Android build. Availability may change as the app moves toward public release.</p></div></section>
}
