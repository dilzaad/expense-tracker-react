import React, { useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext'

const Navbar = () => {
  const { transactions } = useContext(ExpenseContext)

  return (
    <nav className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950/80 shadow-lg shadow-black/30 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500 text-xl font-bold text-stone-900 shadow-lg shadow-amber-500/30">
            ₹
          </div>

          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-stone-50 sm:text-2xl">
              Expense Tracker
            </h1>
            <p className="text-xs text-stone-400">
              Manage your money wisely
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-stone-700 bg-stone-900 px-3 py-2">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-sm font-medium text-stone-400">
            Transactions
          </span>
          <span className="rounded-lg bg-amber-500 px-2.5 py-1 text-sm font-bold text-stone-900">
            {transactions.length}
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar