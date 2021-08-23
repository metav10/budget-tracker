import { useSelector } from 'react-redux'
import { InitialState } from '../../../../lib/interfaces'
import { totalExpenses } from '../../../../lib/utils'
import StatusBox from '../StatusBox/StatusBox'
import * as S from './ExpenseTotal.styles'

const ExpenseTotal = () => {
    const { expenses } = useSelector((state: InitialState) => state)

    return (
        <StatusBox
            title="SPENT SO FAR:"
            content={totalExpenses(expenses)}
            theme={S.ExpenseTotalTheme}
        />
    )
}

export default ExpenseTotal
