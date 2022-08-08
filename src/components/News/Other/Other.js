import React from "react";
import Story from "./Story/Story";
import './Other.css'

function Other() {
    return (
        <div className="other ba">
            <Story />
            <div className="gap"></div>
            <Story />
            <div className="gap"></div>
            <Story />
            <div className="gap"></div>
        </div>
    )
}

export default Other;