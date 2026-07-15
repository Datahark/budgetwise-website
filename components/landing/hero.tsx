'use client'

import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, PiggyBank, TrendingUp } from 'lucide-react'
import { PhoneMockup } from './phone-mockup'
import { QRCode } from './qr-code'
import { GooglePlayBadge } from './store-badges'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-40"
    >
      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-10 size-[26rem] rounded-full bg-primary/25 blur-3xl animate-blob" />
        <div className="absolute right-0 top-24 size-[22rem] rounded-full bg-accent/30 blur-3xl animate-blob [animation-delay:3s]" />
        <div className="absolute bottom-0 left-1/3 size-[24rem] rounded-full bg-secondary/20 blur-3xl animate-blob [animation-delay:6s]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur">
            <span className="size-2 rounded-full bg-primary" />
            Spend Smarter. Save Better. Grow Wealthier.
          </span>

          <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Take Control of <span className="text-gradient">Every Rupee.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
            Track expenses, create budgets, build savings goals, and understand
            your money with beautiful insights—all in one place.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <GooglePlayBadge />
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-6 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-accent/15"
            >
              View Features
              <ArrowDown className="size-4" />
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4 lg:justify-start">
            <div className="rounded-2xl border border-border bg-card p-2.5 shadow-sm">
              <QRCode className="size-24" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold">Scan to Download</p>
              <p className="max-w-[12rem] text-sm text-muted-foreground">
                Point your camera to get BudgetWise on your phone.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right column — floating phone */}
        <div className="relative mx-auto w-full max-w-sm">
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 mx-auto w-64 sm:w-72"
          >
            <PhoneMockup
              src="/screens/dashboard.png"
              alt="BudgetWise dashboard showing balance, spending chart and recent transactions"
              priority
            />
          </motion.div>

          {/* Floating card: income */}
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="glass-strong absolute -left-2 top-16 z-20 flex items-center gap-3 rounded-2xl border border-border/60 p-3 shadow-xl sm:-left-6"
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <TrendingUp className="size-5" />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">Income this month</p>
              <p className="text-sm font-bold">₹84,500</p>
            </div>
          </motion.div>

          {/* Floating card: savings */}
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="glass-strong absolute -right-1 bottom-24 z-20 flex items-center gap-3 rounded-2xl border border-border/60 p-3 shadow-xl sm:-right-6"
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
              <PiggyBank className="size-5" />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">Savings goal</p>
              <p className="text-sm font-bold">72% reached</p>
            </div>
          </motion.div>

          {/* Floating chip */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="glass-strong absolute -bottom-2 left-6 z-20 flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 shadow-xl"
          >
            <ArrowUpRight className="size-4 text-primary" />
            <span className="text-xs font-semibold">Spending down 18%</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
