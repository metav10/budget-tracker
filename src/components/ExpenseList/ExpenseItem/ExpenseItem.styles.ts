import styled from 'styled-components'
import { Close as CloseIcon } from '@styled-icons/material-rounded/Close'

const height = '18px'

export const ExpenseItem = styled.div`
    display: flex;
    padding: 20px 20px;
    border-bottom: 1px solid #eee;
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

export const Name = styled.span`
    text-transform: capitalize;
`

export const Cost = styled.span`
    display: flex;
    align-items: center;
    border-radius: 40px;
    padding: 0 14px;
    background-color: #047bfe;
    color: #fff;
    font-weight: 600;
    width: fit-content;
    height: ${height};
    margin-inline-end: 20px;
`

export const Close = styled(CloseIcon)`
    height: ${height};
    cursor: pointer;
    color: #23292f;
`