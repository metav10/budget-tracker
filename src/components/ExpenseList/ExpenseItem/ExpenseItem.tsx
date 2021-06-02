import { useContext } from 'react'
import { AppContext } from '../../../context/AppContext'
import {
    ActionsTypes,
    ExpenseItem as ExpenseItemInterface,
} from '../../../lib/interfaces'
import ExpenseItemContent from './ExpenseItemContent'

const ExpenseItem = ({ item }: { item: ExpenseItemInterface }) => {
    const { dispatch } = useContext(AppContext)

    const removeExpenseItem = (id: string) => {
        dispatch({ type: ActionsTypes.REMOVE_EXPENSE, payload: { id } })
    }

    return (
        <ExpenseItemContent item={item} removeExpenseItem={removeExpenseItem} />
    )
}
export default ExpenseItem
