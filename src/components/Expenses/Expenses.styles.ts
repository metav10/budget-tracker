import styled from 'styled-components'
import { Colors } from '../../style/CssVars'

export const Expenses = styled.div`
    background: ${Colors.White};
    border-radius: 40px 40px 0 0;
    min-height: 60%;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 25px 30px ${Colors.Black25};
`

export const Header = styled.h2`
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    margin: 20px 0 50px;
`
