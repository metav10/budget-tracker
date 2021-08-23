import styled from 'styled-components'
import { Colors } from '../../../style/CssVars'

export const AddExpenseButton = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: ${Colors.MainBlack};
    position: relative;
    top: -50%;
    cursor: pointer;
    box-shadow: 0px 0px 20px -5px ${Colors.Black25};
`
