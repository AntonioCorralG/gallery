import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className = "main-nav">
        <ul>
            <li><NavLink to="/robots">Robots</NavLink></li>
            <li><NavLink to="/tacos">Tacos</NavLink></li>
            <li><NavLink to="/naruto">Naruto</NavLink></li>
        </ul>
    </nav>

    )
}
export default Nav;