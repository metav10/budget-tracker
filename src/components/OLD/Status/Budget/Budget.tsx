import { useSelector } from 'react-redux'
import { InitialState } from '../../../../lib/interfaces'
import StatusBox from '../StatusBox/StatusBox'
import * as S from './Budget.styles'

const Budget = () => {
    const {
        user: { budget },
    } = useSelector((state: InitialState) => state)
    return <StatusBox title="Budget:" content={budget} theme={S.BudgetTheme} />
}

export default Budget
