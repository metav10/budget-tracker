import { useContext } from 'react'
import { AppContext } from '../../../context/AppContext'
import StatusBox from '../StatusBox/StatusBox'
import * as S from './ExpenseTotal.styles'

const ExpenseTotal = () => {
    const {
        state: { expenses },
    } = useContext(AppContext)
    const totalExpenses = expenses.reduce(
        (total, exp) => (total += exp.cost),
        0
    )

    return (
        <StatusBox
            title="SPENT SO FAR:"
            content={totalExpenses}
            theme={S.ExpenseTotalTheme}
        />
    )
}
export default ExpenseTotal
