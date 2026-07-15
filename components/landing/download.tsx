import { QRCode } from './qr-code'
import { AppStoreBadge, GooglePlayBadge } from './store-badges'
import { Reveal } from './reveal'

export function Download() {
  return (
    <section id="download" className="px-5 py-24 sm:px-8">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-border/60 bg-card/60 px-6 py-16 text-center shadow-xl sm:px-16">
        {/* Soft animated gradient background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-10 top-0 size-72 rounded-full bg-primary/25 blur-3xl animate-blob" />
          <div className="absolute -right-10 bottom-0 size-72 rounded-full bg-accent/30 blur-3xl animate-blob [animation-delay:4s]" />
        </div>

        <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Start Managing Your Money Today
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Join thousands of people building better money habits with BudgetWise.
          Download the app and take control of every rupee.
        </p>

        <div className="mt-10 flex flex-col items-center gap-6">
          <div className="rounded-3xl border border-border bg-background p-4 shadow-lg">
            <QRCode className="size-40" />
            <p className="mt-3 text-sm font-semibold">Scan to Download</p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <GooglePlayBadge />
            <AppStoreBadge />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
