import React from 'react'
import * as S from './AddExpenses.styles'

const AddExpensesContent = ({
    name,
    setName,
    cost,
    setCost,
    onSubmit,
}: {
    name: string
    setName: (value: string) => void
    cost: string
    setCost: (value: string) => void
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}) => {
    return (
        <S.AddExpenses onSubmit={onSubmit}>
            <S.Line>
                <S.Label htmlFor="name">Expense</S.Label>
                <S.Input
                    type="text"
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    autoFocus
                />
            </S.Line>
            <S.Line>
                <S.Label htmlFor="cost">Cost</S.Label>
                <S.Input
                    type="number"
                    id="cost"
                    value={cost}
                    onChange={e => setCost(e.target.value)}
                    required
                />
            </S.Line>
            <S.Line>
                <S.Label />
                <S.Submit type="submit" value="Add" />
            </S.Line>
        </S.AddExpenses>
    )
}
export default AddExpensesContent
