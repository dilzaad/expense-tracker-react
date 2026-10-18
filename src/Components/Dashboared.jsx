import React from 'react'
import Balance from './Balance'
import IncomeExpense from './IncomeExpense'
import TransactionForm from './TransactionForm'
import TransactionList from './TransactionList'

const Dashboared = () => {
  return (
    <div className="w-full py-4 sm:py-6">

      {/* Dashboard Heading */}
      <header className="mb-8 sm:mb-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1.5">
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Personal Finance
          </span>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-stone-50 sm:text-4xl lg:text-5xl">
          Dashboard<span className="text-amber-500">.</span>
        </h1>

        <p className="mt-3 max-w-xl text-sm leading-6 text-stone-400 sm:text-base">
          Manage your income and expenses in one place.
          Keep track of your money and stay in control.
        </p>
      </header>

      {/* Balance and Income/Expense */}
      <section className="mb-6 grid w-full gap-6">
        <Balance />
        <IncomeExpense />
      </section>

      {/* Form and History side by side on large screens */}
      <section className="grid w-full items-start gap-6 lg:grid-cols-5">
        <div className="lg:col-span-2 lg:sticky lg:top-24">
          <TransactionForm />
        </div>

        <div className="lg:col-span-3">
          <TransactionList />
        </div>
      </section>

    </div>
  )
}

export default Dashboared