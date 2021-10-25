import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <div className='menu_style'>
            <NavLink exact activeClassName='active_class' to="/">About</NavLink>
            <NavLink exact activeClassName='active_class' to="/service">Service</NavLink>
            <NavLink exact activeClassName='active_class' to="/user">User</NavLink>
            <NavLink exact activeClassName='active_class' to="/contact">Contact Us</NavLink>
        </div>
    )
}

export default Menu
