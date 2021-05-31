import React from 'react'
import { Budget } from './Budget/Budget.styles'
import { ExpenseTotal } from './ExpenseTotal/ExpenseTotal.styles'
import { Remaining } from './Remaining/Remaining.styles'
import * as S from './Status.styles'

const Status = ({}: {}) => {
    return (
        <S.Status>
            <Budget />
            <ExpenseTotal />
            <Remaining />
        </S.Status>
    )
}
export default Status
