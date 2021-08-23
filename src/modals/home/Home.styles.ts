import styled from 'styled-components'
import { PageTheme } from '../../style/CssVars'

export const Home = styled.div<{ color: string }>`
    height: 100%;
    background: ${props => props.color};

    ${PageTheme}
`
