'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from './section-heading'
import { Counter } from './counter'

const barData = [42, 58, 35, 72, 50, 88, 64]
const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J']

const donut = [
  { label: 'Food', value: 34, color: 'var(--chart-1)' },
  { label: 'Bills', value: 26, color: 'var(--chart-2)' },
  { label: 'Shopping', value: 22, color: 'var(--chart-3)' },
  { label: 'Other', value: 18, color: 'var(--chart-4)' },
]

function DonutChart() {
  const radius = 42
  const circumference = 2 * Math.PI * radius
  let offset = 0
  return (
    <div className="flex items-center gap-5">
      <svg viewBox="0 0 100 100" className="size-28 -rotate-90">
        {donut.map((d) => {
          const dash = (d.value / 100) * circumference
          const seg = (
            <motion.circle
              key={d.label}
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke={d.color}
              strokeWidth="12"
              strokeDasharray={`${dash} ${circumference - dash}`}
              strokeDashoffset={-offset}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          )
          offset += dash
          return seg
        })}
      </svg>
      <ul className="space-y-1.5">
        {donut.map((d) => (
          <li key={d.label} className="flex items-center gap-2 text-sm">
            <span
              className="size-2.5 rounded-full"
              style={{ backgroundColor: d.color }}
            />
            <span className="text-muted-foreground">{d.label}</span>
            <span className="ml-auto font-semibold">{d.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function BarChart() {
  return (
    <div className="flex h-36 items-end justify-between gap-2">
      {barData.map((v, i) => (
        <div
          key={i}
          className="flex h-full flex-1 flex-col items-center justify-end gap-2"
        >
          <div className="flex w-full flex-1 items-end">
            <motion.div
              className="w-full rounded-t-lg bg-primary/80"
              initial={{ height: '0%' }}
              whileInView={{ height: `${v}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: 'easeOut' }}
            />
          </div>
          <span className="text-xs text-muted-foreground">{months[i]}</span>
        </div>
      ))}
    </div>
  )
}

function AreaChart() {
  return (
    <svg viewBox="0 0 200 90" className="h-36 w-full">
      <defs>
        <linearGradient id="cashflow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0 70 L33 50 L66 58 L100 30 L133 40 L166 18 L200 26"
        fill="none"
        stroke="var(--primary)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: 'easeInOut' }}
      />
      <motion.path
        d="M0 70 L33 50 L66 58 L100 30 L133 40 L166 18 L200 26 L200 90 L0 90 Z"
        fill="url(#cashflow)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
      />
    </svg>
  )
}

function ProgressRing() {
  const radius = 42
  const circumference = 2 * Math.PI * radius
  const pct = 72
  return (
    <div className="relative flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="size-32 -rotate-90">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="var(--muted)"
          strokeWidth="10"
        />
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="var(--primary)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{
            strokeDashoffset: circumference - (pct / 100) * circumference,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </svg>
      <div className="absolute text-center">
        <Counter to={72} suffix="%" className="text-2xl font-bold" />
        <p className="text-xs text-muted-foreground">reached</p>
      </div>
    </div>
  )
}

export function Analytics() {
  return (
    <section id="analytics" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Powerful Analytics"
          title="See your money like never before"
          description="Turn everyday transactions into insights that help you make smarter financial decisions."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {/* Monthly spending */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl border border-border/60 p-7 lg:col-span-2"
          >
            <div className="mb-6 flex items-end justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Monthly Spending</p>
                <Counter
                  to={48250}
                  prefix="₹"
                  className="text-3xl font-bold"
                />
              </div>
              <span className="rounded-full bg-primary/12 px-3 py-1 text-xs font-semibold text-primary">
                -18% vs last month
              </span>
            </div>
            <BarChart />
          </motion.div>

          {/* Category breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-3xl border border-border/60 p-7"
          >
            <p className="mb-6 text-sm text-muted-foreground">
              Category Breakdown
            </p>
            <DonutChart />
          </motion.div>

          {/* Income vs Expense */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass rounded-3xl border border-border/60 p-7"
          >
            <p className="mb-6 text-sm text-muted-foreground">
              Income vs Expense
            </p>
            <div className="space-y-5">
              <div>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span className="text-muted-foreground">Income</span>
                  <span className="font-semibold">₹84,500</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-muted">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span className="text-muted-foreground">Expense</span>
                  <span className="font-semibold">₹48,250</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-muted">
                  <motion.div
                    className="h-full rounded-full bg-secondary"
                    initial={{ width: 0 }}
                    whileInView={{ width: '57%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>
              <div className="rounded-2xl bg-primary/10 p-4">
                <p className="text-sm text-muted-foreground">Net savings</p>
                <Counter
                  to={36250}
                  prefix="₹"
                  className="text-2xl font-bold text-primary"
                />
              </div>
            </div>
          </motion.div>

          {/* Cash flow */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-3xl border border-border/60 p-7"
          >
            <p className="mb-2 text-sm text-muted-foreground">Cash Flow</p>
            <p className="mb-4 text-sm font-semibold text-primary">
              Trending upward
            </p>
            <AreaChart />
          </motion.div>

          {/* Savings progress */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="glass flex flex-col items-center justify-center rounded-3xl border border-border/60 p-7 text-center"
          >
            <p className="mb-4 text-sm text-muted-foreground">
              Savings Progress
            </p>
            <ProgressRing />
            <p className="mt-4 text-sm text-muted-foreground">
              ₹1,08,000 of ₹1,50,000 goal
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
