import HomeTopSection from './HomeTopSection/HomeTopSection'
import Expenses from '../../components/Expenses/Expenses'
import * as S from './Home.styles'
import { useSelector } from 'react-redux'
import { InitialState } from '../../lib/interfaces'
import { Colors } from '../../style/CssVars'
import { totalExpenses } from '../../lib/utils'
import NavBar from '../../components/NavBar/NavBar'

const Home = () => {
    const {
        user: { budget },
        expenses,
    } = useSelector((store: InitialState) => store)

    const spent = totalExpenses(expenses)
    const color =
        spent > budget
            ? Colors.Red
            : spent < budget
            ? Colors.Green
            : Colors.Yellow

    return (
        <S.Home color={color}>
            <HomeTopSection
                text={'Spent this week'}
                budget={budget}
                spent={spent}
            />
            <Expenses />
        </S.Home>
    )
}
export default Home
