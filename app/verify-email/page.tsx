import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Email Verified | BudgetWise",
  description: "Your BudgetWise email address has been verified successfully.",
}

export default function VerifyEmailPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-12 text-white">
      <div
        aria-hidden="true"
        className="absolute left-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-blue-600/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-10rem] right-[-7rem] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
      />

      <section className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.07] p-7 text-center shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-lg font-bold tracking-tight text-white"
          aria-label="Go to BudgetWise home page"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-black shadow-lg shadow-blue-600/30">
            BW
          </span>
          BudgetWise
        </Link>

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/15 shadow-lg shadow-emerald-500/10">
          <Check className="h-10 w-10 text-emerald-400" strokeWidth={3} />
        </div>

        <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Email verified successfully!
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-300">
          Your account is now active.
        </p>

        <a
          href="budgetwise://"
          className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          Open BudgetWise
          <ArrowRight className="h-5 w-5" />
        </a>

        <p className="mt-5 text-sm leading-6 text-slate-400">
          If the app does not open, make sure BudgetWise is installed on this device.
        </p>
      </section>
    </main>
  )
}
