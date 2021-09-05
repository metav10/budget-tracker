import { tagsAndColors } from '../../../lib/interfaces'
import * as S from './ExpenseItemTag.styles'

const ExpenseItemTag = ({ tagId }: { tagId: number }) => {
    const enumByTagId = Object.entries(tagsAndColors)[tagId]
    return (
        <S.ExpenseItemTag color={enumByTagId[1]}>
            {enumByTagId[0]}
        </S.ExpenseItemTag>
    )
}
export default ExpenseItemTag
