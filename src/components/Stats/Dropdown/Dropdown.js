import React from "react";
import './Dropdown.css'

const Dropdown = ({selection, onSelectionChange}) => {

    const myFunction = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    const apiCall = async (request, selector) => {
        const response = await fetch(`http://localhost:3000/${request}`)
        const data = await response.json();
        onSelectionChange(data, selector);

        // const response = await fetch('http://localhost:3000');
        // const data = await response.json();
        // console.log(data);
        
    }
    
    window.onclick = (event) => {
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

      // Close the dropdown if the user clicks outside of it
     
    
    return (
        <div 
        // onClick={this.onClickChange}
        className="dropdown">
            <button 
            onClick={()=> myFunction()} 
            className="dropbtn">Last {selection}</button>
            <div id="myDropdown" className="dropdown-content">
            <a 
                onClick={()=> apiCall("1d", "24 hours")}
                href="#1d">Last 24 hours</a>
                <a 
                onClick={()=> apiCall("7d", "7 days")}
                href="#7d">Last 7 days</a>
                <a 
                onClick={()=> apiCall("30d", "30 days")}
                href="#30d">Last 30 days</a>
            </div>
        </div>
    )
    
    
}

export default Dropdown;