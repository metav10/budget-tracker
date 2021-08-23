import styled from 'styled-components'
import { Close as CloseIcon } from '@styled-icons/material-rounded/Close'
import { Colors, Currency } from '../../../style/CssVars'

export const ExpenseItem = styled.div`
    display: flex;
    padding: 20px 20px;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;

    :last-child {
        border-bottom: none;
    }
`

export const Side = styled.div`
    display: flex;
    align-items: center;
`

export const Date = styled.span`
    margin-inline-end: 10px;
    font-size: 14px;
    color: ${Colors.Black50};
`

export const Cost = styled.span`
    display: flex;
    align-items: flex-end;
    color: ${Colors.MainBlack};
    width: fit-content;

    ${Currency('$')}
`
