import React from 'react'
import ExpenseProvider from './context/ExpenseContext'
import Navbar from './components/Navbar'
import Dashboared from './components/Dashboared'

const App = () => {
  return (
    <ExpenseProvider>
      <div className="min-h-screen w-full overflow-x-hidden bg-stone-950 text-stone-100">
        <Navbar />

        <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Dashboared />
        </main>

        <footer className="mt-12 border-t border-stone-800 bg-stone-950 px-4 py-5 text-center">
          <p className="text-sm text-stone-400">
            Expense Tracker · Manage your money smarter
          </p>
        </footer>
      </div>
    </ExpenseProvider>
  )
}

export default App