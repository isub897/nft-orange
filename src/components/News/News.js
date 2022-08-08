import React from "react";
import './News.css'
import Other from "./Other/Other"
import Headlines from "./Headlines/Headlines"

function News() {
    return (
        <div className="news ba">
            <h3>These are the latest headlines</h3>
            <Headlines />
            <Other />
        </div>
    )
}

export default News;

// to do
// -- ensure that the text and images are responsive and can't be squished together
// -- ensure that the top and featured have an equal 50/50 space and that neither can squish each other if a lot of text or images come through