import type { Metadata } from 'next'
import { LegalShell } from '@/components/landing/legal-shell'
export const metadata: Metadata = { title: 'Blog' }
export default function Page() { return <LegalShell title="BudgetWise Blog" description="Practical personal finance guides for Indian households are coming soon."><h2>Planned topics</h2><ul><li>How to create a monthly budget that works</li><li>Building an emergency fund step by step</li><li>Understanding spending categories</li><li>Using the 50/30/20 rule in India</li><li>Preparing expense records for tax season</li></ul><p>For launch updates, email <a href="mailto:contact@budgetwise.in">contact@budgetwise.in</a>.</p></LegalShell> }
