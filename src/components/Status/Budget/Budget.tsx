import { useContext } from 'react'
import { AppContext } from '../../../context/AppContext'
import StatusBox from '../StatusBox/StatusBox'
import * as S from './Budget.styles'

const Budget = () => {
    const {
        state: {
            user: { budget },
        },
    } = useContext(AppContext)
    return <StatusBox title="Budget:" content={budget} theme={S.BudgetTheme} />
}
export default Budget
