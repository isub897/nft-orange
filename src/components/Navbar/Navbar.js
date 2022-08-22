import './Navbar.css'
import logo from './Images/logo.png';
import dropImage from './Images/dropdown.webp'
import React from "react";

const Navbar = ({user, signedin, route, routeChange}) => {

    const myFunction = () => {
        document.getElementById("nav-content").classList.toggle("show-nav");
    }

    window.onclick = (event) => {

        if (!event.target.matches('.dropbtn-nav > img')) {
            var dropdowns = document.getElementsByClassName("dropdown-nav-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show-nav')) {
                    openDropdown.classList.remove('show-nav');
                }
            }
        }
    }

    return (
        <div className="navbar shadow-5">
            {signedin
                ?<img onClick={()=> routeChange("dashboard")} alt='logo' src={logo} height='60px' width='auto'/>
                :<img onClick={()=> routeChange("news")} alt='logo' src={logo} height='60px' width='auto'/>
            }
            <div className="dropdown-nav">
                <button className="dropbtn-nav">
                    <img 
                        onClick={()=> myFunction()}
                        src={dropImage} alt='dropdown'/>
                </button>
                <div className="dropdown-nav-content" id='nav-content'>
                    {signedin
                        ?<a onClick={()=> routeChange("dashboard")}
                            href="#dashboard">Dashboard</a>
                        :<a onClick={()=> routeChange("signin")}
                            href="#signin">Sign In</a>
                    }
                    <a  onClick={()=> routeChange("news")}
                        href="#news">News</a>
                    <a  onClick={()=> routeChange("stats")}
                        href="#stats">Stats</a>
                    <a  onClick={()=> routeChange("about")}
                        href="#about">About</a>
                </div>
            </div>
            {route === "about"
                ? <a 
                    className='selected'
                    onClick={()=> routeChange("about")}
                    href="#about">About</a>
                : <a 
                    onClick={()=> routeChange("about")}
                    href="#about">About</a>
            }
            {route === "stats"
                ? <a 
                    className='selected'
                    onClick={()=> routeChange("stats")}
                    href="#stats">Stats</a>
                : <a 
                    onClick={()=> routeChange("stats")}
                    href="#stats">Stats</a>
            }
            {route === "news"
                ? <a 
                    className='selected'
                    onClick={()=> routeChange("news")}
                    href="#news">News</a>
                : <a
                    onClick={()=> routeChange("news")}
                    href="#news">News</a>
            }
            {signedin
                ?(route === "dashboard"
                ? <a 
                    className='selected'
                    onClick={()=> routeChange("dashboard")}
                    href="#dashboard">{user}</a>
                : <a 
                    onClick={()=> routeChange("dashboard")}
                    href="#dashboard">{user}</a>
                )
                :(route === "signin"
                ? <a 
                    className='selected'
                    onClick={()=> routeChange("signin")}
                    href="#signin">Sign In</a>
                : <a 
                    onClick={()=> routeChange("signin")}
                    href="#signin">Sign In</a>
                )
            }

        </div>
    )
}

export default Navbar;

// add the sticky part tp this navbar at some point 
// https://www.w3schools.com/howto/howto_js_navbar_sticky.asp