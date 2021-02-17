import React from 'react';
import "../css/GalleryImage.css"

import image from "../images/education.jpg"


function Image({ text }) {
    const uri = image;

    return (
        <div className="container-relative-img shadow-lg">
            <img src={uri} alt="Avatar" className="gallery-image rounded" />
            <div className="gallery-image-overlay">
                <div className="gallery-text">{text}</div>
            </div>
        </div>
    );
}


export default Image;