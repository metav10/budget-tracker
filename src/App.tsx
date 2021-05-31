import React from 'react'
import AddExpenses from './components/AddExpenses/AddExpenses'
import ExpenseList from './components/ExpenseList/ExpenseList'
import Status from './components/Status/Status'

function App() {
    return (
        <>
            <div>
                <h1>Budget Tracker</h1>
                <Status />
                <h2>Add Expense</h2>
                <AddExpenses />
                <h2>Expenses</h2>
                <ExpenseList />
            </div>
        </>
    )
}

export default App
