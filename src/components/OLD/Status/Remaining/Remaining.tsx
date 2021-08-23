import { useSelector } from 'react-redux'
import { InitialState } from '../../../../lib/interfaces'
import { totalExpenses } from '../../../../lib/utils'
import StatusBox from '../StatusBox/StatusBox'
import * as S from './Remaining.styles'

const Remaining = () => {
    const {
        expenses,
        user: { budget },
    } = useSelector((state: InitialState) => state)

    const remaining = budget - totalExpenses(expenses)

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
