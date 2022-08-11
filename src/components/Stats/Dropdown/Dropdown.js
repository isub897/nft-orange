import React from "react";
import './Dropdown.css'

const Dropdown = () => {

    const myFunction = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    }
      
      // Close the dropdown if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }

    return (
        <div className="dropdown">
            <button 
            onClick={()=> myFunction()} 
            className="dropbtn">Dropdown</button>
            <div id="myDropdown" className="dropdown-content">
                <a href="#24hr">Last 24 hours</a>
                <a href="#7d">Last 7 days</a>
                <a href="#30d">Last 30 days</a>
            </div>
        </div>
    )
}

export default Dropdown;