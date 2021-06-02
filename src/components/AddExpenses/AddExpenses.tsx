import React, { useContext, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { AppContext } from '../../context/AppContext'
import { ActionsTypes, ExpenseItem } from '../../lib/interfaces'
import AddExpensesContent from './AddExpensesContent'

const AddExpenses = () => {
    const { dispatch } = useContext(AppContext)
    const [name, setName] = useState<string>('')
    const [cost, setCost] = useState<string>('')

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const expenseItem = {
            id: uuid(),
            name,
            cost: parseInt(cost),
        } as ExpenseItem

        dispatch({ type: ActionsTypes.ADD_EXPENSE, payload: expenseItem })
        setName('')
        setCost('')
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
