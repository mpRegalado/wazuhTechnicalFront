import React from 'react'
import {
    EuiHeaderLink,
    EuiHeaderLinks,
    EuiHeader,
    EuiHeaderLogo
} from '@elastic/eui'

import useLink from '../../hooks/useLink'

const Header = props => {
    const {linkTo} = useLink()
    const pages = {
        'Home':'/',
        'Alerts':'/alerts',
        'Agents':'/agents',
        'Rules':'/rules'
    }
    const navLinks = Object.keys(pages).map((tabName) => (
        <EuiHeaderLink key={pages[tabName]} {...linkTo(pages[tabName],true)}>{tabName}</EuiHeaderLink>
    ))
    return (
        <EuiHeader position="fixed">
            <EuiHeaderLogo/>
            <EuiHeaderLinks>
                {navLinks}
            </EuiHeaderLinks>
        </EuiHeader>
    )
}

export default Header