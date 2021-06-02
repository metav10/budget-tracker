import React, { useContext } from 'react'
import { AppContext } from '../../../context/AppContext'
import StatusBox from '../StatusBox/StatusBox'
import * as S from './Remaining.styles'

const Remaining = () => {
    const {
        state: { expenses, budget },
    } = useContext(AppContext)

    const totalExpenses = expenses.reduce(
        (total, exp) => (total += exp.cost),
        0
    )
    const remaining = budget - totalExpenses

    return (
        <StatusBox
            title="REMAINING:"
            content={remaining}
            theme={
                remaining >= 0
                    ? S.RemainingPositiveTheme
                    : S.RemainingNegativeTheme
            }
        />
    )
}
export default Remaining
