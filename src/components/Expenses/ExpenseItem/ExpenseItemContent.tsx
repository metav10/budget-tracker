import { ExpenseItem } from '../../../lib/interfaces'
import { printMongoDBDate } from '../../../lib/utils'
import ExpenseItemTag from '../ExpenseItemTag/ExpenseItemTag'
import * as S from './ExpenseItem.styles'

const ExpenseItemContent = ({
    item: { _id: id, name, cost, createdAt },
    openExpense,
}: {
    item: ExpenseItem
    openExpense: () => void
}) => {
    return (
        <S.ExpenseItem>
            <S.Side>
                <S.Date>{createdAt ? printMongoDBDate(createdAt) : ''}</S.Date>
                <ExpenseItemTag tagId={2} />
            </S.Side>
            <S.Side>
                <S.Cost>{cost}</S.Cost>
            </S.Side>
        </S.ExpenseItem>
    )
}
export default ExpenseItemContent
