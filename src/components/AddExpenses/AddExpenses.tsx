import React, { useContext, useState } from 'react'
import { addExpense } from '../../API'
import { AppContext } from '../../context/AppContext'
import { ActionsTypes, ExpenseItem } from '../../lib/interfaces'
import AddExpensesContent from './AddExpensesContent'

const AddExpenses = () => {
    const {
        dispatch,
        state: { user },
    } = useContext(AppContext)
    const [name, setName] = useState<string>('')
    const [cost, setCost] = useState<string>('')

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const expenseItem = {
            name,
            cost: parseInt(cost),
        } as Omit<ExpenseItem, '_id'>

        try {
            const newExpenses = await addExpense(expenseItem, user._id)
            dispatch({
                type: ActionsTypes.UPDATE_EXPENSES,
                payload: newExpenses.data.expenses,
            })
            setName('')
            setCost('')
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <AddExpensesContent
            name={name}
            setName={setName}
            cost={cost}
            setCost={setCost}
            onSubmit={onSubmit}
        />
    )
}
export default AddExpenses
