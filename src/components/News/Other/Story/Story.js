import React from "react";
import './Story.css';
import image from '../../Images/other.png'

const Story = () => {
    return (
        <div className="story-other">
            <img src={image} alt='other-story' width='209px' height='146px' />
            <div className="info-container">
                <h3>{`NATOVERSE INTRODUCTION – THE EVOLUTION OF GAMING`}</h3>
                <div className="editor-date">
                    <p>author</p>
                    <p>date</p>
                </div>

            </div>
        </div>
    )
}

export default Story;

// image size is about 209 x 146 px