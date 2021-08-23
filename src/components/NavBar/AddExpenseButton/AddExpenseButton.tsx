import React from 'react'
import * as S from './AddExpenseButton.styles'

const AddExpenseButton = ({ buttonClick }: { buttonClick: () => void }) => {
    return <S.AddExpenseButton onClick={buttonClick}></S.AddExpenseButton>
}
export default AddExpenseButton
