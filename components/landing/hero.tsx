'use client'

import { motion } from 'framer-motion'
import { ArrowDown, FileText, Fingerprint, Repeat2 } from 'lucide-react'
import { PhoneMockup } from './phone-mockup'
import { GooglePlayBadge, LaunchStatus } from './store-badges'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"><div className="absolute -left-24 top-10 size-[26rem] rounded-full bg-primary/25 blur-3xl animate-blob" /><div className="absolute right-0 top-24 size-[22rem] rounded-full bg-accent/30 blur-3xl animate-blob [animation-delay:3s]" /><div className="absolute bottom-0 left-1/3 size-[24rem] rounded-full bg-secondary/20 blur-3xl animate-blob [animation-delay:6s]" /></div>
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center lg:text-left">
          <LaunchStatus />
          <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">Take control of <span className="text-gradient">every rupee.</span></h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">BudgetWise brings accounts, transactions, budgets, goals, recurring money and clear reports into one thoughtfully designed personal finance app.</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"><GooglePlayBadge /><a href="#features" className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-6 py-3.5 text-base font-semibold hover:bg-accent/15">Explore Features <ArrowDown className="size-4" /></a></div>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-muted-foreground lg:justify-start"><span className="feature-pill"><Fingerprint className="size-4" />Biometric app lock</span><span className="feature-pill"><Repeat2 className="size-4" />Recurring plans</span><span className="feature-pill"><FileText className="size-4" />PDF & CSV reports</span></div>
        </motion.div>
        <div className="relative mx-auto w-full max-w-sm">
          <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 6, repeat: Infinity }} className="relative z-10 mx-auto w-64 sm:w-72"><PhoneMockup src="/screens/reports-overview.jpg" alt="BudgetWise reports overview showing income, expense, investments, savings and net worth" priority /></motion.div>
          <div className="glass-strong absolute -left-4 top-20 z-20 rounded-2xl border border-border/60 p-4 shadow-xl"><p className="text-xs text-muted-foreground">Built for India</p><p className="mt-1 font-bold">₹ INR-first experience</p></div>
          <div className="glass-strong absolute -right-4 bottom-20 z-20 rounded-2xl border border-border/60 p-4 shadow-xl"><p className="text-xs text-muted-foreground">Your data</p><p className="mt-1 font-bold">Backup & restore</p></div>
        </div>
      </div>
    </section>
  )
}
