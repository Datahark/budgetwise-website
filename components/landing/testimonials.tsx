'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { SectionHeading } from './section-heading'

const testimonials = [
  {
    quote:
      'BudgetWise finally made budgeting feel simple. I set up my categories in five minutes and I actually stuck with it. I saved ₹40,000 in my first three months.',
    name: 'Ananya Sharma',
    role: 'Product Designer',
    avatar: '/avatars/avatar-1.png',
  },
  {
    quote:
      'The analytics are gorgeous and genuinely useful. Seeing my spending broken down by category changed how I shop. It is the only finance app that has stayed on my home screen.',
    name: 'Rohan Mehta',
    role: 'Software Engineer',
    avatar: '/avatars/avatar-2.png',
  },
  {
    quote:
      'I have tried at least six budgeting apps and this is the first one my whole family uses. Cloud sync across our phones is flawless and there are no annoying ads.',
    name: 'Priya Nair',
    role: 'Small Business Owner',
    avatar: '/avatars/avatar-3.png',
  },
]

export function Testimonials() {
  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why People Love BudgetWise"
          title="Loved by thousands of savers"
          description="Real people, real results. Here's what the BudgetWise community has to say."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass flex flex-col rounded-3xl border border-border/60 p-7 shadow-sm"
            >
              <Quote className="size-8 text-primary/40" />
              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className="size-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Image
                  src={t.avatar || '/placeholder.svg'}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="size-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
