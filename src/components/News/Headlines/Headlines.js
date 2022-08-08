import React from "react";
import Top from "./Top/Top";
import Featured from "./Featured/Featured";
import './Headlines.css'

function Headlines() {
    return (
        <div className="headlines ba">
            <Top />
            <Featured />
        </div>
    )
}

export default Headlines;