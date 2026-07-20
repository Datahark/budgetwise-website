import type { Metadata } from 'next'

import { LegalShell } from '@/components/landing/legal-shell'

export const metadata: Metadata = {
  title: 'Delete Account',
  description:
    'Learn how to request permanent deletion of your BudgetWise account and associated data.',
  alternates: {
    canonical: '/delete-account',
  },
}

const deletedData = [
  'Account information',
  'Financial accounts',
  'Transactions',
  'Budgets',
  'Goals',
  'Recurring transactions and recurring budgets',
  'Backup files stored on BudgetWise servers, if applicable',
]

export default function DeleteAccountPage() {
  return (
    <LegalShell
      title="Delete your BudgetWise Account"
      description="You can request permanent deletion of your BudgetWise account and associated data at any time."
    >
      <section>
        <h2>Request deletion from the app</h2>
        <p>
          When account deletion is available in your installed version of
          BudgetWise:
        </p>
        <ol>
          <li>Open BudgetWise.</li>
          <li>Go to Profile.</li>
          <li>Tap Delete Account.</li>
          <li>Review the information shown and confirm deletion.</li>
        </ol>
      </section>

      <section>
        <h2>Request deletion by email</h2>
        <p>
          If the in-app deletion option is not available, email us using the
          same email address registered with your BudgetWise account.
        </p>

        <p>
          Email:{' '}
          <a
            href="mailto:contact@budgetwise.in?subject=Delete%20My%20Account"
            className="font-semibold text-primary underline underline-offset-4"
          >
            contact@budgetwise.in
          </a>
        </p>

        <p>
          Use the subject: <strong>Delete My Account</strong>
        </p>

        <p>
          For account security, we may ask you to verify ownership of the
          registered email address before processing the request. Never send
          your password, OTP, complete transaction history, or backup file by
          email.
        </p>
      </section>

      <section>
        <h2>What gets deleted</h2>
        <p>
          After your request is verified, the following data associated with
          your account will be scheduled for permanent deletion:
        </p>
        <ul>
          {deletedData.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Data stored on your device</h2>
        <p>
          Files you downloaded, exported, shared, or saved to your device are
          not automatically removed when your BudgetWise account is deleted.
          This includes CSV reports, PDF reports, and backup files. You must
          delete those files separately from your device, cloud storage, email,
          or any app where you shared them.
        </p>
      </section>

      <section>
        <h2>Retention and deletion timeline</h2>
        <p>
          Verified deletion requests are processed without unnecessary delay.
          Account data is permanently removed from active systems within 30
          days, unless a longer period is required for security, fraud
          prevention, legal compliance, dispute resolution, or enforcement of
          applicable agreements.
        </p>
        <p>
          Residual copies may remain temporarily in protected system backups
          until those backups are securely overwritten through the normal
          backup lifecycle. They are not used for normal product operations.
        </p>
      </section>

      <section>
        <h2>Partial data deletion</h2>
        <p>
          BudgetWise does not currently provide a separate external process for
          requesting deletion of selected categories of stored data while
          keeping the account active.
        </p>
        <p>
          You may still delete supported records through the normal controls
          available inside the app.
        </p>
      </section>

      <section>
        <h2>Additional information</h2>
        <p>
          BudgetWise is a personal finance management app. It is not a UPI
          payment app, bank, lender, payment processor, or cryptocurrency
          exchange.
        </p>
        <p>
          BudgetWise has not currently completed an independent third-party
          security review or UPI payments verification.
        </p>
      </section>

      <section>
        <h2>Need help?</h2>
        <p>
          Contact{' '}
          <a
            href="mailto:contact@budgetwise.in"
            className="font-semibold text-primary underline underline-offset-4"
          >
            contact@budgetwise.in
          </a>{' '}
          for questions about account deletion.
        </p>
      </section>
    </LegalShell>
  )
}
