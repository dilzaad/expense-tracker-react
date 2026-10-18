import React, { useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext'

const Balance = () => {
  const { transactions } = useContext(ExpenseContext)

  const totalBalance = transactions.reduce((total, item) => {
    if (item.type === 'income') {
      return total + Number(item.amount)
    }

    return total - Number(item.amount)
  }, 0)

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-stone-700/60 bg-gradient-to-br from-amber-600 via-orange-700 to-stone-900 p-6 text-white shadow-2xl shadow-amber-900/30 sm:p-8">

      {/* Decorative glows */}
      <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-amber-300/25 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-20 right-24 h-36 w-36 rounded-full bg-orange-400/20 blur-2xl" />

      <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-xl">
              ₹
            </div>

            <div>
              <p className="text-sm font-medium text-amber-50">
                Your Total Balance
              </p>
              <p className="mt-1 text-xs text-amber-100/70">
                Income minus expenses
              </p>
            </div>
          </div>

          <h2
            className={`break-words text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${
              totalBalance < 0 ? 'text-rose-200' : 'text-white'
            }`}
          >
            Rs. {totalBalance.toLocaleString('en-PK')}
          </h2>

          <p className="mt-3 text-sm text-amber-50/80">
            Keep building better money habits.
          </p>
        </div>

        <div className="hidden h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-white/20 bg-white/10 sm:flex">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-10 w-10 text-amber-50"
            aria-hidden="true"
          >
            <rect x="3" y="6" width="18" height="14" rx="3" />
            <path d="M3 10h18M7 6V4h12v2M16 15h.01" strokeLinecap="round" />
          </svg>
        </div>

      </div>
    </div>
  )
}

export default Balance