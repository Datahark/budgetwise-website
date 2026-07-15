import Image from 'next/image'
import { cn } from '@/lib/utils'

type PhoneMockupProps = {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export function PhoneMockup({ src, alt, className, priority }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        'relative aspect-[9/19] w-full overflow-hidden rounded-[2.5rem] border-[6px] border-foreground/85 bg-foreground/85 shadow-2xl',
        className,
      )}
    >
      {/* Notch */}
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-foreground/90" />
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-card">
        <Image
          src={src || '/placeholder.svg'}
          alt={alt}
          fill
          sizes="(max-width: 768px) 70vw, 320px"
          className="object-cover object-top"
          priority={priority}
        />
      </div>
    </div>
  )
}
