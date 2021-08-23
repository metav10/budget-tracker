import { useSelector } from 'react-redux'
import * as S from './Expenses.styles'
import ExpenseItem from './ExpenseItem/ExpenseItem'
import {
    InitialState,
    ExpenseItem as ExpenseItemInterface,
} from '../../lib/interfaces'

const Expenses = () => {
    const { expenses } = useSelector((state: InitialState) => state)
    return (
        <S.Expenses>
            <S.Header>Expenses</S.Header>
            {expenses.length > 0 &&
                expenses.map((item: ExpenseItemInterface) => (
                    <ExpenseItem key={item._id} item={item} />
                ))}
        </S.Expenses>
    )
}
export default Expenses
