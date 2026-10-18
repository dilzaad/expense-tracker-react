import React, { useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext'
import DeleteTransaction from './DeleteTransaction'

const TransactionList = () => {
  const { transactions } = useContext(ExpenseContext)

  return (
    <div className="w-full min-w-0 rounded-3xl border border-stone-800 bg-stone-900 p-5 shadow-xl shadow-black/30 sm:p-7">

      {/* Heading */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M7 3h10a2 2 0 0 1 2 2v16H5V5a2 2 0 0 1 2-2Z" />
              <path d="M8 8h8M8 12h8M8 16h5" strokeLinecap="round" />
            </svg>
          </div>

          <div className="min-w-0">
            <h2 className="text-lg font-bold text-stone-50 sm:text-xl">
              Transaction History
            </h2>
            <p className="mt-1 text-sm text-stone-400">
              Review your recent activity
            </p>
          </div>
        </div>

        <span className="shrink-0 rounded-full border border-stone-700 bg-stone-950 px-3 py-1.5 text-xs font-bold text-stone-300">
          {transactions.length} {transactions.length === 1 ? 'Transaction' : 'Transactions'}
        </span>
      </div>

      {/* Empty State */}
      {transactions.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-stone-700 bg-stone-950/50 px-4 py-10 text-center sm:py-14">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-stone-900 text-stone-500 ring-1 ring-stone-700">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-8 w-8"
              aria-hidden="true"
            >
              <path d="M7 3h10a2 2 0 0 1 2 2v16H5V5a2 2 0 0 1 2-2Z" />
              <path d="M8 8h8M8 12h8M8 16h4" strokeLinecap="round" />
            </svg>
          </div>

          <h3 className="text-base font-bold text-stone-200">
            No transactions yet
          </h3>

          <p className="mt-2 max-w-xs text-sm leading-6 text-stone-400">
            Your income and expenses will appear here when you add your first transaction.
          </p>
        </div>
      ) : (
        <div className="flex w-full min-w-0 flex-col gap-3">
          {transactions.map((item) => (
            <DeleteTransaction key={item.id} transaction={item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default TransactionList