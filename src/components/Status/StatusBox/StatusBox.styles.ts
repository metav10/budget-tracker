import styled, { FlattenSimpleInterpolation } from 'styled-components'

export const StatusBox = styled.div<{ theme: FlattenSimpleInterpolation }>`
    ${props => props.theme}
    padding: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
`

export const Title = styled.span`
    font-size: 12px;
    font-weight: 100;
    text-transform: uppercase;
`

export const Content = styled.span`
    font-size: 22px;
    font-weight: 600;
`
