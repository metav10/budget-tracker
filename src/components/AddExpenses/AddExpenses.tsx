import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addExpense } from '../../lib/API'
import { ExpenseItem, InitialState } from '../../lib/interfaces'
import AddExpensesContent from './AddExpensesContent'
import { updateExpenses } from '../../store/expenses'

const AddExpenses = () => {
    const { user } = useSelector((state: InitialState) => state)
    const dispatch = useDispatch()
    const [name, setName] = useState<string>('')
    const [cost, setCost] = useState<string>('')

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (name === '' || cost === '') return

        const expenseItem = {
            name,
            cost: parseInt(cost),
        } as Omit<ExpenseItem, '_id'>

        try {
            const newExpenses = await addExpense(expenseItem, user._id)
            dispatch(updateExpenses(newExpenses.data.expenses))
            setName('')
            setCost('')
        } catch (err) {
            console.error(err)
        } finally {
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
