import { Wallet } from 'lucide-react'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from './social-icons'

const columns = [
  {
    title: 'Product',
    links: ['Features', 'Screenshots', 'Analytics', 'Download'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms & Conditions', 'Contact', 'Support'],
  },
]

const socials = [
  { label: 'LinkedIn', Icon: LinkedInIcon, href: '#' },
  { label: 'GitHub', Icon: GitHubIcon, href: '#' },
  { label: 'Instagram', Icon: InstagramIcon, href: '#' },
  { label: 'X', Icon: XIcon, href: '#' },
]

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-5 pb-10 pt-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Wallet className="size-5" />
              </span>
              <span className="text-lg font-bold tracking-tight">
                BudgetWise
              </span>
            </a>
            <p className="mt-4 max-w-xs text-pretty leading-relaxed text-muted-foreground">
              Spend smarter, save better, and grow wealthier—all from one
              beautifully simple app.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border/70 bg-card text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>Copyright &copy; {new Date().getFullYear()} BudgetWise. All rights reserved.</p>
          <p>Version 2.4.0</p>
        </div>
      </div>
    </footer>
  )
}
