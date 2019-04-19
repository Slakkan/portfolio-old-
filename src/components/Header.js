import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <div id='header'>
        <header>
            <NavLink exact to='/'><h3>Inicio</h3></NavLink>
        </header>
    </div>
)

export default Header