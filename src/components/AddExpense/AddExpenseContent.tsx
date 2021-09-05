import { tags } from '../../lib/interfaces'
import * as S from './AddExpense.styles'

const AddExpenseContent = ({
    cost,
    setCost,
    date,
    setDate,
    category,
    setCategoty,
    onSubmit,
}: {
    cost: number
    setCost: (cost: number) => void
    date: string
    setDate: (date: string) => void
    category: tags
    setCategoty: (category: tags) => void
    onSubmit: () => void
}) => {
    return (
        <S.AddExpense onFinish={onSubmit}>
            <S.Header>New Expense</S.Header>
            <S.Field>
                <S.Title>Cost</S.Title>
                <S.CostInput
                    type="number"
                    value={cost !== 0 ? cost : ''}
                    onChange={e => setCost(parseInt(e.target.value))}
                />
            </S.Field>
            <S.Field>
                <S.Title>Date</S.Title>
                {date === '' ? (
                    <S.DateButton
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                ) : (
                    <S.DateInput
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                )}
            </S.Field>
            <S.Field>
                <S.Title>Category</S.Title>
            </S.Field>
        </S.AddExpense>
    )
}
export default AddExpenseContent
