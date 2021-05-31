import React from 'react'
import { ExpenseItem as ExpenseItemInterface } from '../../../lib/interfaces'
import * as S from './ExpenseItem.styles'

const ExpenseItem = ({ item: { id, name, cost } }: { item: ExpenseItemInterface }) => {
    return (
        <S.ExpenseItem>
            <S.Name>{name}</S.Name>
            <S.Side>
                <S.Cost>{cost}</S.Cost>
                <S.Close />
            </S.Side>
        </S.ExpenseItem>
    )
}
export default ExpenseItem
