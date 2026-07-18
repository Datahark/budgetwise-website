import type { Metadata } from 'next'
import { LegalShell } from '@/components/landing/legal-shell'
export const metadata: Metadata = { title: 'Contact' }
export default function Page() { return <LegalShell title="Contact BudgetWise" description="Questions, feedback, partnerships or early-access interest are welcome."><h2>Email</h2><p><a href="mailto:contact@budgetwise.in">contact@budgetwise.in</a></p><h2>What to include</h2><ul><li>A clear subject line.</li><li>Your app version and device model for support requests.</li><li>Screenshots or error text when relevant, with sensitive financial details hidden.</li></ul><p>Social pages are planned and will be linked from the website when available.</p></LegalShell> }
