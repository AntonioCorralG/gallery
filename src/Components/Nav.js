import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className = "main-nav">
            <ul>
                <li><NavLink to="/robots" onClick={this.props.navSelection}>Robots</NavLink></li>
                <li><NavLink to="/tacos" onClick={this.props.navSelection}>Tacos</NavLink></li>
                <li><NavLink to="/naruto" onClick={this.props.navSelection}>Naruto</NavLink></li>
            </ul>
        </nav>

        )
    }
}
export default Nav;