import React, { useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext'

const DeleteTransaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(ExpenseContext)

  const isIncome = transaction.type === 'income'

  return (
    <div
      className={`flex w-full min-w-0 flex-col gap-4 rounded-2xl border border-l-4 border-stone-800 bg-stone-950/60 p-4 transition hover:bg-stone-950 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:p-5 ${
        isIncome ? 'border-l-emerald-400' : 'border-l-rose-400'
      }`}
    >
      {/* Transaction Details */}
      <div className="flex min-w-0 items-center gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl font-bold ${
            isIncome
              ? 'bg-emerald-500/10 text-emerald-400'
              : 'bg-rose-500/10 text-rose-400'
          }`}
        >
          {isIncome ? '↑' : '↓'}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="break-words text-sm font-bold text-stone-100 sm:text-base">
            {transaction.title}
          </h3>

          <span
            className={`mt-1 inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${
              isIncome
                ? 'bg-emerald-500/10 text-emerald-400'
                : 'bg-rose-500/10 text-rose-400'
            }`}
          >
            {isIncome ? 'Income' : 'Expense'}
          </span>
        </div>
      </div>

      {/* Amount and Delete */}
      <div className="flex min-w-0 items-center justify-between gap-3 border-t border-stone-800 pt-3 sm:shrink-0 sm:justify-end sm:border-0 sm:pt-0">
        <p
          className={`min-w-0 break-words text-base font-extrabold sm:text-lg ${
            isIncome ? 'text-emerald-400' : 'text-rose-400'
          }`}
        >
          {isIncome ? '+' : '-'}Rs.{' '}
          {Number(transaction.amount).toLocaleString('en-PK')}
        </p>

        <button
          type="button"
          onClick={() => deleteTransaction(transaction.id)}
          aria-label={`Delete ${transaction.title}`}
          className="flex shrink-0 items-center justify-center gap-2 rounded-xl border border-rose-500/20 bg-rose-500/10 px-3 py-2.5 text-xs font-bold text-rose-400 transition hover:border-rose-500/40 hover:bg-rose-500/20 sm:text-sm"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M4 7h16M10 11v6M14 11v6M5 7l1 14h12l1-14M9 7V4h6v3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Delete
        </button>
      </div>
    </div>
  )
}

export default DeleteTransaction