import React from 'react'
import { useState } from 'react'
import { ActivePage } from '../../lib/interfaces'
import AddExpense from '../AddExpense/AddExpense'
import AddExpenseButton from './AddExpenseButton/AddExpenseButton'
import * as S from './NavBar.styles'

const NavBarContent = ({ activePage }: { activePage: ActivePage }) => {
    const [statusAddExpense, toggleAddExpense] = useState(false)

    return (
        <S.NavBar>
            <AddExpenseButton
                buttonClick={() => toggleAddExpense(!statusAddExpense)}
            />
            <S.Content>
                <S.Icon isActive={activePage === 'home'}>home</S.Icon>
                <S.Icon isActive={activePage === 'stats'}>stats</S.Icon>
                <S.Icon isActive={activePage === 'user'}>user</S.Icon>
            </S.Content>
            {statusAddExpense && <AddExpense />}
        </S.NavBar>
    )
}

export default NavBarContent
