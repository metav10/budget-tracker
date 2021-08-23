import React from 'react'
import { FlattenSimpleInterpolation } from 'styled-components'
import * as S from './StatusBox.styles'

const StatusBox = ({
    title,
    content,
    theme,
}: {
    title: string
    content: string | number
    theme: FlattenSimpleInterpolation
}) => {
    return (
        <S.StatusBox theme={theme}>
            <S.Title>{title}</S.Title>
            <S.Content>{content}</S.Content>
        </S.StatusBox>
    )
}
export default StatusBox
