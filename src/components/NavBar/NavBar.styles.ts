import styled from 'styled-components'
import { Colors } from '../../style/CssVars'

export const NavBar = styled.div`
    height: 70px;
    background: ${Colors.White};
    display: flex;
    padding: 0 20px;
    align-items: center;
    box-shadow: 0px 15px 30px ${Colors.Black25};
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;
`

export const Icon = styled.div<{ isActive: boolean }>`
    padding: 20px;
    opacity: ${props => (props.isActive ? 1 : 0.5)};
    cursor: pointer;
`
