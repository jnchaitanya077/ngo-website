import React from "react";
import DynamicButton from "./DynamicButton";
import "../css/Image.css";

function FullImage({ schemeDetails }) {
  // console.log(schemeDetails);
  return (
    <div className="col">
      <div className="card card-image shadow-sm bg-white rounded">
        <img
          src={schemeDetails.image}
          className="image img-fluid"
          alt="cause"
        />
        <div className="overlay">
          <div className="text cssanimation moveFromLeft fw-light">
            {schemeDetails.overlayText}
            <div className="mt-2">
              <DynamicButton
                className="mt-4"
                name="Know more"
                schemeDetails={schemeDetails}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h5 className="card-title">{schemeDetails.title}</h5>
        <p className="mt-0 text-muted">{schemeDetails.subTitle}</p>
      </div>
    </div>
  );
}

export default FullImage;
