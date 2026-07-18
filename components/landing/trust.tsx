import { DatabaseBackup, FileCheck2, LockKeyhole, UserRoundCheck } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const items = [
  { icon: LockKeyhole, title: 'Device-level app lock', text: 'Use the biometric security available on your phone to restrict access to BudgetWise.' },
  { icon: DatabaseBackup, title: 'User-controlled backups', text: 'Create, save, share and restore your BudgetWise backup file when needed.' },
  { icon: UserRoundCheck, title: 'Account-based access', text: 'BudgetWise uses authenticated accounts to keep each user’s financial records separated.' },
  { icon: FileCheck2, title: 'Transparent controls', text: 'Privacy, permissions, open-source licences and support information are available from the app.' },
]

export function Trust() {
  return <section className="px-5 py-24 sm:px-8"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="Privacy & control" title="Your money deserves thoughtful protection" description="We describe only the controls that are available in the current BudgetWise build—without vague security promises." /><Reveal className="mt-14 grid gap-5 sm:grid-cols-2">{items.map((item) => <article key={item.title} className="rounded-3xl border border-border/60 bg-card p-7 shadow-sm"><item.icon className="size-7 text-primary" /><h3 className="mt-5 text-xl font-semibold">{item.title}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{item.text}</p></article>)}</Reveal></div></section>
}
