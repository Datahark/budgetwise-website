import type { Metadata } from 'next'
import { LegalShell } from '@/components/landing/legal-shell'
export const metadata: Metadata = { title: 'Changelog' }
export default function Page() { return <LegalShell title="Changelog" description="Major product milestones as BudgetWise approaches its first public release."><h2>July 2026</h2><ul><li>Completed recurring transactions and recurring budgets.</li><li>Completed backup and restore workflows.</li><li>Improved account management and account action sheets.</li><li>Expanded reports, filtering, PDF and CSV export, printing and sharing.</li><li>Added app lock and biometric access controls.</li></ul><p>Detailed version notes will be published here after the public launch cycle begins.</p></LegalShell> }
