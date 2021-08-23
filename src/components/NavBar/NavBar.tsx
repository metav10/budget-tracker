import React from 'react'
import { ActivePage } from '../../lib/interfaces'
import NavBarContent from './NavBarContent'

const NavBar = ({ activePage }: { activePage: ActivePage }) => {
    return <NavBarContent activePage={activePage} />
}
export default NavBar
