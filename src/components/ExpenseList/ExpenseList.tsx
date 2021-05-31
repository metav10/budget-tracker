import React from 'react'
import { EXPENSES } from '../../lib/constants'
import ExpenseItem from './ExpenseItem/ExpenseItem'
import * as S from './ExpenseList.styles'

const ExpenseList = ({}: {}) => {
    return (
        <S.ExpenseList>
            {EXPENSES.length > 0 &&
                EXPENSES.map((item, itemIndex) => <ExpenseItem key={itemIndex} item={item} />)}
        </S.ExpenseList>
    )
}
export default ExpenseList
