import React from 'react'
import * as S from './AddExpenses.styles'

const AddExpenses = ({}: {}) => {
    return (
        <S.AddExpenses>
            <S.Line>
                <S.Label htmlFor="expense">Expense</S.Label>
                <S.Input type="text" id="expense" required autoFocus/>
            </S.Line>
            <S.Line>
                <S.Label htmlFor="cost">Cost</S.Label>
                <S.Input type="number" id="cost" required />
            </S.Line>
            <S.Line>
                <S.Label />
                <S.Submit type="submit" value="Add" />
            </S.Line>
        </S.AddExpenses>
    )
}
export default AddExpenses
