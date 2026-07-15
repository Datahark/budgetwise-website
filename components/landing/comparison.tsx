import { Check, Minus, Wallet } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const rows = [
  'Easy to Use',
  'Modern Interface',
  'Savings Goals',
  'Beautiful Analytics',
  'Cloud Sync',
  'Fast Performance',
  'Minimal Ads',
  'Privacy First',
]

export function Comparison() {
  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Why BudgetWise"
          title="A clear upgrade over traditional expense apps"
          description="See how BudgetWise compares to the clunky, ad-heavy budgeting apps you've tried before."
        />

        <Reveal className="mt-14 overflow-hidden rounded-3xl border border-border/60 shadow-sm">
          {/* Header */}
          <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-card/60">
            <div className="p-5 text-sm font-semibold text-muted-foreground">
              Feature
            </div>
            <div className="flex items-center justify-center gap-2 bg-primary/10 p-5">
              <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Wallet className="size-4" />
              </span>
              <span className="text-sm font-bold">BudgetWise</span>
            </div>
            <div className="p-5 text-center text-sm font-semibold text-muted-foreground">
              Traditional Apps
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={row}
              className={`grid grid-cols-[1.4fr_1fr_1fr] items-center border-t border-border/60 ${
                i % 2 === 1 ? 'bg-card/30' : ''
              }`}
            >
              <div className="p-5 text-sm font-medium">{row}</div>
              <div className="flex justify-center bg-primary/[0.06] p-5">
                <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-4" strokeWidth={3} />
                </span>
              </div>
              <div className="flex justify-center p-5">
                <span className="flex size-7 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  <Minus className="size-4" />
                </span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
