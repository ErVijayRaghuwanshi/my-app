import React from "react";
import './Navbar.css';
import logo from '../logo.png'

const Navbar = () => (
    <nav>
        <img src={logo} alt="Logo" title="Logo" className="nav--icon"/>
        <h3 className="nav--logo_text">ReactFacts</h3>
        <h3 className="nav--title">React Course - Pages 1</h3>
    </nav>
)

export default Navbar;