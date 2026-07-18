import Image from 'next/image'
import { Facebook, Instagram, Linkedin, MessageCircle, Youtube } from 'lucide-react'
import { XIcon } from './social-icons'

const columns = [
  { title: 'Product', links: [{ label: 'Features', href: '/#features' }, { label: 'Screenshots', href: '/#screenshots' }, { label: 'Roadmap', href: '/roadmap' }, { label: 'Changelog', href: '/changelog' }] },
  { title: 'Company', links: [{ label: 'About', href: '/about' }, { label: 'Blog', href: '/blog' }, { label: 'Contact', href: '/contact' }, { label: 'Support', href: '/support' }] },
  { title: 'Legal', links: [{ label: 'Privacy Policy', href: '/privacy' }, { label: 'Terms & Conditions', href: '/terms' }] },
]

const socials = [
  { label: 'Facebook', Icon: Facebook }, { label: 'WhatsApp', Icon: MessageCircle }, { label: 'Instagram', Icon: Instagram }, { label: 'Twitter / X', Icon: XIcon }, { label: 'LinkedIn', Icon: Linkedin }, { label: 'YouTube', Icon: Youtube }, { label: 'Threads', Icon: MessageCircle },
]

export function Footer() {
  return <footer className="border-t border-border/60 px-5 pb-10 pt-16 sm:px-8"><div className="mx-auto max-w-7xl"><div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]"><div><a href="/#home" className="flex items-center gap-3"><Image src="/brand/app-icon.png" alt="" width={42} height={42} className="size-11 rounded-xl" /><span className="text-lg font-bold">BudgetWise</span></a><p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">Smart spending. Better living. A personal finance app designed to help you understand every rupee.</p><div className="mt-6 flex flex-wrap gap-3">{socials.map(({ label, Icon }) => <span key={label} title={`${label} page coming soon`} aria-label={`${label} page coming soon`} className="inline-flex size-10 cursor-not-allowed items-center justify-center rounded-full border border-border/70 bg-card text-muted-foreground opacity-70"><Icon className="size-4" /></span>)}</div><p className="mt-3 text-xs text-muted-foreground">Social pages coming soon.</p></div>{columns.map((column) => <div key={column.title}><h3 className="text-sm font-semibold">{column.title}</h3><ul className="mt-4 space-y-3">{column.links.map((link) => <li key={link.label}><a href={link.href} className="text-sm text-muted-foreground hover:text-foreground">{link.label}</a></li>)}</ul></div>)}</div><div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-sm text-muted-foreground sm:flex-row"><p>Copyright © {new Date().getFullYear()} BudgetWise. All rights reserved.</p><a href="mailto:contact@budgetwise.in" className="hover:text-foreground">contact@budgetwise.in</a></div></div></footer>
}
