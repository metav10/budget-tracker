import { useSelector } from 'react-redux'
import {
    ExpenseItem as ExpenseItemInterface,
    InitialState,
} from '../../lib/interfaces'
import ExpenseItem from './ExpenseItem/ExpenseItem'
import * as S from './ExpenseList.styles'

const ExpenseList = () => {
    const { expenses } = useSelector((state: InitialState) => state)

    return (
        <S.ExpenseList>
            {expenses.length > 0 &&
                expenses.map((item: ExpenseItemInterface) => (
                    <ExpenseItem key={item._id} item={item} />
                ))}
        </S.ExpenseList>
    )
}

export default ExpenseList
