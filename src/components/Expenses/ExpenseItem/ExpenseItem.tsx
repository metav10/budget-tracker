import { useSelector, useDispatch } from 'react-redux'
import { deleteExpense } from '../../../lib/API'
import {
    ExpenseItem as ExpenseItemInterface,
    InitialState,
} from '../../../lib/interfaces'
import ExpenseItemContent from './ExpenseItemContent'
import { updateExpenses } from '../../../store/expenses'

const ExpenseItem = ({ item }: { item: ExpenseItemInterface }) => {
    const { user } = useSelector((state: InitialState) => state)
    const dispatch = useDispatch()

    // TODO: move this to openedItem page
    const removeExpenseItem = async (id: string) => {
        try {
            const newExpenses = await deleteExpense(id, user._id)
            dispatch(updateExpenses(newExpenses.data.expenses))
        } catch (err) {
            console.error(err)
        }
    }

    const openExpense = () => {}

    return <ExpenseItemContent item={item} openExpense={openExpense} />
}

export default ExpenseItem
