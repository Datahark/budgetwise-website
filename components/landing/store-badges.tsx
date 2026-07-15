import { Apple, Play } from 'lucide-react'
import { cn } from '@/lib/utils'

export function GooglePlayBadge({ className }: { className?: string }) {
  return (
    <a
      href="#download"
      className={cn(
        'inline-flex items-center gap-3 rounded-2xl bg-primary px-5 py-3 text-primary-foreground shadow-lg shadow-primary/25 transition-transform duration-200 hover:-translate-y-0.5',
        className,
      )}
    >
      <Play className="size-6 fill-current" />
      <span className="flex flex-col text-left leading-tight">
        <span className="text-[0.65rem] font-medium opacity-90">GET IT ON</span>
        <span className="text-base font-semibold">Google Play</span>
      </span>
    </a>
  )
}

export function AppStoreBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 text-foreground',
        className,
      )}
    >
      <Apple className="size-6" />
      <span className="flex flex-col text-left leading-tight">
        <span className="text-[0.65rem] font-medium text-muted-foreground">
          COMING SOON ON
        </span>
        <span className="text-base font-semibold">App Store</span>
      </span>
    </div>
  )
}
