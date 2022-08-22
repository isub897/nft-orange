import React from "react";
import Story from "./Story/Story";
import './Featured.css'

const Featured = ({urlDirect, featured}) => {

    return (
        <div className="featured">
            {
                featured.map((item, index) => {
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

export default Featured;