import React, { useContext, useEffect } from 'react'
import { getExpenses } from './API'
import AddExpenses from './components/AddExpenses/AddExpenses'
import ExpenseList from './components/ExpenseList/ExpenseList'
import Status from './components/Status/Status'
import { AppContext } from './context/AppContext'
import { ActionsTypes, ExpenseItem } from './lib/interfaces'

function App() {
    const { dispatch } = useContext(AppContext)

    useEffect(() => {
        ;(async function fetchExpenses() {
            await getExpenses()
                .then(({ data: { expenses } }: ExpenseItem[] | any) =>
                    dispatch({
                        type: ActionsTypes.UPDATE_EXPENSES,
                        payload: expenses,
                    })
                )
                .catch((err: Error) => console.error(err))
        })()
    }, [])

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
