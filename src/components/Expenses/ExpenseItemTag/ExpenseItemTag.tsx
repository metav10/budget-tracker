import * as S from './ExpenseItemTag.styles'

const ExpenseItemTag = ({ tagId }: { tagId: number }) => {
    enum tagsAndColors {
        'Food' = '#443322',
        'Entertament' = '#223344',
        'Going Out' = '#903441',
    }
    const enumByTagId = Object.entries(tagsAndColors)[tagId]
    return (
        <S.ExpenseItemTag color={enumByTagId[1]}>
            {enumByTagId[0]}
        </S.ExpenseItemTag>
    )
}
export default ExpenseItemTag
