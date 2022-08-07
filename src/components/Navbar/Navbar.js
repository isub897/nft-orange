import './Navbar.css'
import logo from './Images/logo.png';
import React from "react";

function Navbar() {
    return (
        <div className="navbar shadow-5">
            <img alt='logo' src={logo} height='60px' width='auto'/>
            <a href="#home">About</a>
            <a href="#home">Stats</a>
            <a href="#news">News</a>
            <a href="#contact">Sign In</a>
        </div>
    )
}

export default Navbar;

// add the sticky part tp this navbar at some point 
// https://www.w3schools.com/howto/howto_js_navbar_sticky.asp