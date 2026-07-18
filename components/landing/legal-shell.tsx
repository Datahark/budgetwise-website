import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Footer } from './footer'

export function LegalShell({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return <><main className="min-h-screen px-5 py-10 sm:px-8"><div className="mx-auto max-w-3xl"><div className="flex items-center justify-between"><Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" />Back to home</Link><Image src="/brand/app-icon.png" alt="BudgetWise" width={42} height={42} className="rounded-xl" /></div><header className="mt-16 border-b border-border pb-10"><p className="text-sm font-semibold uppercase tracking-widest text-primary">BudgetWise</p><h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1><p className="mt-4 text-lg leading-relaxed text-muted-foreground">{description}</p></header><article className="legal-content py-10">{children}</article></div></main><Footer /></>
}
