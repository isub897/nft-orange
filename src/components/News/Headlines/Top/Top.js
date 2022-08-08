import React from "react";
import top from '../Images/Top.png'
import './Top.css'

function Top() {
    return (
        // the api returns title url source img
        <div className="top">
            <img src={top} alt='top' height='340px' width='525px' />
            <div className="info-container">
                <h3>Title</h3>
                <div className="about">
                    <div className="author-date">
                        <p>author</p>
                        <p>date</p>
                    </div>
                    <p>intro to the story and more...</p>
                </div>


            </div>
        </div>
    )
}

export default Top;

// image should be roughly about 525px x 340px