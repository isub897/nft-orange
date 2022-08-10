import React from "react";
import './Storylist.css'
import Story from "./Story/Story";

const Storylist = ({urlDirect, stories}) => {
    return (
        <div className="storylist ba">
            {
                stories.map((item, index)=> {
                    return(
                        <div key={index}>
                            <Story urlDirect={urlDirect} story={item} />
                            <div className="gap"></div> 
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Storylist;

            