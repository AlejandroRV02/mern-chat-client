import React from 'react'

const SignedInMenu = ({logout}) => {
    return (
        <li onClick={logout}><a href="#">Log out</a></li>
    )
}

export default SignedInMenu
