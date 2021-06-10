import { useContext } from 'react'
import { deleteTodo } from '../../../API'
import { AppContext } from '../../../context/AppContext'
import {
    ActionsTypes,
    ExpenseItem as ExpenseItemInterface,
} from '../../../lib/interfaces'
import ExpenseItemContent from './ExpenseItemContent'

const ExpenseItem = ({ item }: { item: ExpenseItemInterface }) => {
    const { dispatch } = useContext(AppContext)

    const removeExpenseItem = async (id: string) => {
        try {
            const newExpenses = await deleteTodo(id)
            dispatch({
                type: ActionsTypes.UPDATE_EXPENSES,
                payload: newExpenses.data.expenses,
            })
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <ExpenseItemContent item={item} removeExpenseItem={removeExpenseItem} />
    )
}
export default ExpenseItem
