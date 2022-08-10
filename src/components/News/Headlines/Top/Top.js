import React from "react";
import './Top.css'

const Top = ({urlDirect, top}) => {

    return (
        <div
        onClick={()=> urlDirect(top.url)} 
        className="top">
            <img src={top.img} alt='top' height='340px' width='525px' />
            <div className="info-container">
                <h3>{top.title}</h3>
                <p>{top.source}</p>
            </div>
        </div>
    )
}

export default Top;