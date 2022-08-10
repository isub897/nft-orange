import React from "react";
import './Other.css'
import Storylist from "./Storylist/Storylist";

function Other({urlDirect, stories}) {
    return (
        <div className="other ba">
            <Storylist urlDirect={urlDirect} stories={stories} />
        </div>
    )
}

export default Other;



