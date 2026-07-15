'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState<boolean | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('bw-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = stored ? stored === 'dark' : prefersDark
    setDark(isDark)
  }, [])

  useEffect(() => {
    if (dark === null) return
    const root = document.documentElement
    root.classList.toggle('dark', dark)
    root.classList.toggle('light', !dark)
    localStorage.setItem('bw-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setDark((d) => !d)}
      className="inline-flex size-10 items-center justify-center rounded-full border border-border/70 bg-card/60 text-foreground transition-colors hover:bg-accent/20"
    >
      {dark ? <Moon className="size-5" /> : <Sun className="size-5" />}
    </button>
  )
}
