import { ExpenseItem } from '../../../lib/interfaces'
import * as S from './ExpenseItem.styles'

const ExpenseItemContent = ({
    item: { _id: id, name, cost },
    removeExpenseItem,
}: {
    item: ExpenseItem
    removeExpenseItem: (id: string) => void
}) => {
    return (
        <S.ExpenseItem>
            <S.Name>{name}</S.Name>
            <S.Side>
                <S.Cost>{cost}</S.Cost>
                <S.Close onClick={() => removeExpenseItem(id)} />
            </S.Side>
        </S.ExpenseItem>
    )
}
export default ExpenseItemContent
