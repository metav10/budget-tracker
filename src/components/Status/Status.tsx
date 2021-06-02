import React from 'react'
import Budget from './Budget/Budget'
import ExpenseTotal from './ExpenseTotal/ExpenseTotal'
import Remaining from './Remaining/Remaining'
import * as S from './Status.styles'

const Status = ({}: {}) => {
    return (
        <S.Status>
            <Budget />
            <Remaining />
            <ExpenseTotal />
        </S.Status>
    )
}
export default Status
