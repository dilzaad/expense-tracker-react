import React, { useState, useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext'

const TransactionForm = () => {
  const { addTransaction } = useContext(ExpenseContext)

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('income')

  const submitHandler = (e) => {
    e.preventDefault()

    if (!title.trim() || !amount || Number(amount) <= 0) {
      alert('Please enter a title and a valid amount.')
      return
    }

    addTransaction({
      id: Date.now(),
      title: title.trim(),
      amount: Number(amount),
      type,
    })

    setTitle('')
    setAmount('')
    setType('income')
  }

  return (
    <div className="w-full min-w-0 rounded-3xl border border-stone-800 bg-stone-900 p-5 shadow-xl shadow-black/30 sm:p-7 lg:p-8">

      {/* Form Heading */}
      <div className="mb-7 flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </div>

        <div className="min-w-0">
          <h2 className="text-xl font-bold text-stone-50 sm:text-2xl">
            Add Transaction
          </h2>
          <p className="mt-1 text-sm text-stone-400">
            Enter the details of your income or expense.
          </p>
        </div>
      </div>

      <form onSubmit={submitHandler} className="flex w-full flex-col gap-5">

        {/* Transaction Title */}
        <div className="flex min-w-0 flex-col gap-2">
          <label
            htmlFor="transaction-title"
            className="text-sm font-semibold text-stone-300"
          >
            Transaction Title
          </label>

          <input
            id="transaction-title"
            type="text"
            placeholder="e.g. Salary, Groceries, Bills"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full min-w-0 rounded-xl border border-stone-700 bg-stone-950 px-4 py-3.5 text-sm text-stone-100 outline-none transition placeholder:text-stone-500 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20"
            required
          />
        </div>

        {/* Amount */}
        <div className="flex min-w-0 flex-col gap-2">
          <label
            htmlFor="transaction-amount"
            className="text-sm font-semibold text-stone-300"
          >
            Amount (Rs.)
          </label>

          <div className="flex w-full min-w-0 items-center overflow-hidden rounded-xl border border-stone-700 bg-stone-950 transition focus-within:border-amber-500 focus-within:ring-4 focus-within:ring-amber-500/20">
            <span className="shrink-0 border-r border-stone-700 px-4 py-3.5 text-sm font-bold text-stone-400">
              Rs.
            </span>

            <input
              id="transaction-amount"
              type="number"
              placeholder="0.00"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="block w-full min-w-0 bg-transparent px-4 py-3.5 text-sm text-stone-100 outline-none placeholder:text-stone-500"
              required
            />
          </div>
        </div>

        {/* Transaction Type */}
        <fieldset className="flex min-w-0 flex-col gap-2">
          <legend className="mb-3 text-sm font-semibold text-stone-300">
            Transaction Type
          </legend>

          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              aria-pressed={type === 'income'}
              onClick={() => setType('income')}
              className={`flex min-w-0 items-center justify-center gap-3 rounded-xl border px-4 py-3.5 text-sm font-semibold transition ${
                type === 'income'
                  ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400 ring-2 ring-emerald-500/20'
                  : 'border-stone-700 bg-stone-950 text-stone-400 hover:border-stone-600 hover:text-stone-200'
              }`}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-lg text-emerald-400">
                ↑
              </span>
              Income
            </button>

            <button
              type="button"
              aria-pressed={type === 'expense'}
              onClick={() => setType('expense')}
              className={`flex min-w-0 items-center justify-center gap-3 rounded-xl border px-4 py-3.5 text-sm font-semibold transition ${
                type === 'expense'
                  ? 'border-rose-500 bg-rose-500/10 text-rose-400 ring-2 ring-rose-500/20'
                  : 'border-stone-700 bg-stone-950 text-stone-400 hover:border-stone-600 hover:text-stone-200'
              }`}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-500/15 text-lg text-rose-400">
                ↓
              </span>
              Expense
            </button>
          </div>
        </fieldset>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-4 text-sm font-bold text-stone-900 shadow-lg shadow-amber-500/30 transition hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-xl active:translate-y-0"
        >
          <span className="text-xl leading-none">+</span>
          Add Transaction
        </button>

      </form>
    </div>
  )
}

export default TransactionForm