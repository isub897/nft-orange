import React from "react";
import Story from "./Story/Story";
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured ba">
            <Story />
            <div className="gap"></div>
            <Story />
            <div className="gap"></div>
            <Story />
        </div>
    )
}

export default Featured;