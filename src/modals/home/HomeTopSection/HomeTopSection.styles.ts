import styled from 'styled-components'
import { Line } from 'rc-progress'
import { Colors, Currency } from '../../../style/CssVars'

export const HomeTopSection = styled.div`
    height: 40%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${Colors.White};
    flex-direction: column;
    padding-bottom: 40px;
`

export const Text = styled.span`
    font-size: 12px;
    color: ${Colors.Black60};
    text-transform: uppercase;
`

export const Spent = styled.span`
    font-weight: bold;
    font-size: 30px;
    color: ${Colors.White};
    line-height: 36px;
    margin-top: 2px;

    ${Currency('$')}
`

export const StatusBar = styled(Line)`
    margin-top: 18px;
    width: 240px;
    height: 6px;
    border-radius: 20px;
`
