import React from "react";
import './Story.css';

const Story = ({urlDirect, story}) => {
    return (
        <div 
        onClick={()=> urlDirect(story.url)}
        className="story-other">
            <img src={story.img} alt='other-story' width='209px' height='146px' />
            <div className="info-container">
                <h3>{story.title}</h3>
                <p>{story.source}</p>
            </div>
        </div>
    )
}

export default Story;

// image size is about 209 x 146 px