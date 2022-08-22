import React from "react";
import './Story.css'

const Story = ({urlDirect, story}) => {
    return (
        <div
        onClick={()=> urlDirect(story.url)} 
        className="story">
            <img src={story.img} alt='story' />
            <div className="info-container">
                <p>{story.title}</p>
                <p>{story.source}</p>
            </div>
        </div>
    )
}

export default Story;