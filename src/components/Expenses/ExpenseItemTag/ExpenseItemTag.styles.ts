import styled from 'styled-components'
import { Colors } from '../../../style/CssVars'
const height = '24px'

export const ExpenseItemTag = styled.div<{ color: string }>`
    display: flex;
    align-items: center;
    border-radius: 40px;
    padding: 4px 20px;
    background-color: ${props => props.color};
    color: ${Colors.Black50};
    line-height: 19px;
    width: fit-content;
    height: ${height};
    margin-inline-end: 20px;
`
