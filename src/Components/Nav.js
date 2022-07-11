import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className = "main-nav">
            <ul>
                <li><NavLink to="/robots" >Robots</NavLink></li>
                <li><NavLink to="/tacos" >Tacos</NavLink></li>
                <li><NavLink to="/naruto" >Naruto</NavLink></li>
            </ul>
        </nav>

        )
    }
}
export default Nav;