import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn('mx-auto max-w-2xl text-center', className)}>
      <span className="inline-flex items-center rounded-full border border-border/70 bg-card/60 px-4 py-1.5 text-sm font-semibold text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </Reveal>
  )
}
