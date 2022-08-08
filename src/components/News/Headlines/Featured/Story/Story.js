import React from "react";
import './Story.css'
import image from '../../../Images/feat1.jpg'

const Story = () => {
    return (
        <div className="story">
            <img src={image} alt='story' height='138px' width='185px' />
            <div className="info-container">
                <p>{`Top 10 Questions about Crypto and Metaverse explained`}</p>
                <p>{'August 20th 2020'}</p>
            </div>
        </div>
    )
}

export default Story;

// 125px x 95px is the image size for featured images