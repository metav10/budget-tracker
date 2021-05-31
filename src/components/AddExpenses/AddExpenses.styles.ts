import styled, { css } from 'styled-components'
import { Colors } from '../../style/CssVars'

export const AddExpenses = styled.form`
    display: flex;
    padding: 0 20px 20px;
`

export const Line = styled.div`
    display: flex;
    flex-direction: column;
    margin-inline-end: 12px;

    :last-child {
        margin-inline-end: none;
    }
`

export const Label = styled.label`
    font-size: 12px;
    font-weight: 100;
    height: 20px;
    display: flex;
    align-items: flex-start;
    text-transform: uppercase;
`

const InputStyle = css`
    height: 40px;
    display: flex;
    align-items: center;
    outline: none;
    border-radius: 4px;
`

export const Input = styled.input`
    ${InputStyle}
    border: 1px solid ${Colors.Gray};
    justify-content: flex-start;
    padding: 0 12px;
    text-transform: capitalize;

    :focus {
        border-color: ${Colors.Blue};
    }
`

export const Submit = styled.input`
    ${InputStyle}
    border: 1px solid ${Colors.Blue};
    padding: 0 30px;
    justify-content: center;
    background-color: ${Colors.Blue};
    color: ${Colors.White};
    cursor: pointer;

    :focus {
        border-color: ${Colors.Gray};
    }
`
