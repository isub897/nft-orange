import React from "react";
import './Stat.css';
import logo from './ens.png'
import eth from './ether.png'

const Logo = ({name}) => {
    return (
        <div className="stat-logo">
            <img src={logo} alt="logo" />
            <p>{name}</p>
        </div>
    )
}

const Floor = ({price}) => {
    return (
        <div className="stat-floor">
            <img alt="eth" src={eth} />
            <p>{price}</p>
        </div>
    )
}

const Stat = {
    Logo,
    Floor
};

export default Stat;