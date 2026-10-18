import React, { useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext'

const IncomeExpense = () => {
  const { transactions } = useContext(ExpenseContext)

  const income = transactions
    .filter((item) => item.type === 'income')
    .reduce((total, item) => total + Number(item.amount), 0)

  const expense = transactions
    .filter((item) => item.type === 'expense')
    .reduce((total, item) => total + Number(item.amount), 0)

  const total = income + expense
  const incomePercent = total === 0 ? 0 : Math.round((income / total) * 100)
  const expensePercent = total === 0 ? 0 : Math.round((expense / total) * 100)

  return (
    <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">

      {/* Income Card */}
      <div className="min-w-0 rounded-2xl border border-stone-800 bg-stone-900 p-5 shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-emerald-500/10 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm font-medium text-stone-400">
              Total Income
            </p>

            <h2 className="mt-3 break-words text-2xl font-extrabold tracking-tight text-emerald-400 sm:text-3xl">
              Rs. {income.toLocaleString('en-PK')}
            </h2>

            <p className="mt-2 text-xs text-stone-500">
              Money received
            </p>
          </div>

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-stone-800">
          <div
            className="h-full rounded-full bg-emerald-400 transition-all duration-500"
            style={{ width: `${incomePercent}%` }}
          />
        </div>
      </div>

      {/* Expense Card */}
      <div className="min-w-0 rounded-2xl border border-stone-800 bg-stone-900 p-5 shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-rose-500/40 hover:shadow-rose-500/10 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm font-medium text-stone-400">
              Total Expenses
            </p>

            <h2 className="mt-3 break-words text-2xl font-extrabold tracking-tight text-rose-400 sm:text-3xl">
              Rs. {expense.toLocaleString('en-PK')}
            </h2>

            <p className="mt-2 text-xs text-stone-500">
              Money spent
            </p>
          </div>

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-400 ring-1 ring-rose-500/20">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-stone-800">
          <div
            className="h-full rounded-full bg-rose-400 transition-all duration-500"
            style={{ width: `${expensePercent}%` }}
          />
        </div>
      </div>

    </div>
  )
}

export default IncomeExpense