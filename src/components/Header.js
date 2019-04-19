import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <div id='header'>
        <header>
            <NavLink exact to='/'><h2>Inicio</h2></NavLink>
        </header>
    </div>
)

export default Header