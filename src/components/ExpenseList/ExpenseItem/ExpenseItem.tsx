import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo } from '../../../lib/API'
import {
    ExpenseItem as ExpenseItemInterface,
    InitialState,
} from '../../../lib/interfaces'
import ExpenseItemContent from './ExpenseItemContent'
import { updateExpenses } from '../../../store/expenses'

const ExpenseItem = ({ item }: { item: ExpenseItemInterface }) => {
    const { user } = useSelector((state: InitialState) => state)
    const dispatch = useDispatch()

    const removeExpenseItem = async (id: string) => {
        try {
            const newExpenses = await deleteTodo(id, user._id)
            dispatch(updateExpenses(newExpenses.data.expenses))
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <ExpenseItemContent item={item} removeExpenseItem={removeExpenseItem} />
    )
}

export default ExpenseItem
