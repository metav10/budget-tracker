import React from 'react'
import { ExpenseItem as ExpenseItemInterface } from '../../lib/interfaces'
import ExpenseItem from './ExpenseItem/ExpenseItem'
import * as S from './ExpenseList.styles'

const EXPENSES: ExpenseItemInterface[] = [
    { id: 12, name: 'shopping', cost: 40 },
    { id: 13, name: 'holiday', cost: 400 },
    { id: 14, name: 'car service', cost: 50 },
]

const ExpenseList = ({}: {}) => {
    return (
        <S.ExpenseList>
            {EXPENSES.length > 0 &&
                EXPENSES.map(
                    (item: ExpenseItemInterface, itemIndex: React.Key) => (
                        <ExpenseItem key={itemIndex} item={item} />
                    )
                )}
        </S.ExpenseList>
    )
}
export default ExpenseList
