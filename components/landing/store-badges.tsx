import { Apple, Clock3, Play } from 'lucide-react'
import { cn } from '@/lib/utils'

export function GooglePlayBadge({ className }: { className?: string }) {
  return (
    <div
      aria-label="BudgetWise for Android is coming soon"
      className={cn(
        'inline-flex cursor-default items-center gap-3 rounded-2xl bg-primary px-5 py-3 text-primary-foreground shadow-lg shadow-primary/25',
        className,
      )}
    >
      <Play className="size-6 fill-current" />
      <span className="flex flex-col text-left leading-tight">
        <span className="text-[0.65rem] font-medium opacity-90">ANDROID APP</span>
        <span className="text-base font-semibold">Coming Soon</span>
      </span>
    </div>
  )
}

export function AppStoreBadge({ className }: { className?: string }) {
  return (
    <div
      aria-label="BudgetWise for iPhone is planned"
      className={cn(
        'inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 text-foreground',
        className,
      )}
    >
      <Apple className="size-6" />
      <span className="flex flex-col text-left leading-tight">
        <span className="text-[0.65rem] font-medium text-muted-foreground">IOS APP</span>
        <span className="text-base font-semibold">Planned</span>
      </span>
    </div>
  )
}

export function LaunchStatus() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
      <Clock3 className="size-4" />
      Play Store launch in progress
    </span>
  )
}
