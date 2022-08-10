import React from "react";
import Top from "./Top/Top";
import Featured from "./Featured/Featured";
import './Headlines.css'

const Headlines = ({urlDirect, stories}) => {
    // const date = new Date();
    return (
        <div className="headlines ba">
            <Top urlDirect={urlDirect} top={stories[0]} />
            <Featured urlDirect={urlDirect} featured={stories.slice(1,4)} />
        </div>
    )
}

export default Headlines;

// const day = date.getDate();
// const month = date.toLocaleString("en-US", { month: "long" })
// const year = date.getFullYear();