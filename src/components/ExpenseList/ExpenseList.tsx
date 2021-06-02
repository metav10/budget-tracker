import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { ExpenseItem as ExpenseItemInterface } from '../../lib/interfaces'
import ExpenseItem from './ExpenseItem/ExpenseItem'
import * as S from './ExpenseList.styles'

const ExpenseList = () => {
    const {
        state: { expenses },
    } = useContext(AppContext)
    return (
        <S.ExpenseList>
            {expenses.length > 0 &&
                expenses.map(
                    (item: ExpenseItemInterface, itemIndex: React.Key) => (
                        <ExpenseItem key={itemIndex} item={item} />
                    )
                )}
        </S.ExpenseList>
    )
}
export default ExpenseList
