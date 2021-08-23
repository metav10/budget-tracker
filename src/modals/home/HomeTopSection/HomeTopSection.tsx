import { Colors } from '../../../style/CssVars'
import * as S from './HomeTopSection.styles'

const HomeTopSection = ({
    text,
    budget,
    spent,
}: {
    text: string
    budget: number
    spent: number
}) => {
    return (
        <S.HomeTopSection>
            <S.Text>{text}</S.Text>
            <S.Spent>{spent}</S.Spent>
            {budget ? (
                <S.StatusBar
                    percent={
                        spent > 0 && budget > 0 ? (spent / budget) * 100 : 0
                    }
                    strokeColor={Colors.White}
                    trailColor={Colors.Black20}
                />
            ) : (
                ''
            )}
        </S.HomeTopSection>
    )
}
export default HomeTopSection
