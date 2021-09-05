import styled, { css } from 'styled-components'
import { Colors } from '../../style/CssVars'
import { DatePicker, Form, InputNumber } from 'antd'

export const AddExpense = styled(Form)`
    background: ${Colors.White};
    border-radius: 40px 40px 0 0;
    min-height: 60%;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 25px 30px ${Colors.Black25};
    position: absolute;
`

export const Header = styled.h2`
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    margin: 20px 0 50px;
`

export const Field = styled(Form.Item)`
    display: flex;
    flex-direction: column;
`

export const Title = styled.span``

const InputTheme = css``

export const CostInput = styled(InputNumber)`
    ${InputTheme}
`

export const DateInput = styled(DatePicker)`
    ${InputTheme}
`

export const DateButton = styled.button``
