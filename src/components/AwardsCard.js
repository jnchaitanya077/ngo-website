import React from 'react';


function AwardsCard({ image, name, event, amount }) {
    return (
        <div className="row">
            <div className="col-md-12 col-xl-6">
                <img src={image} alt="aboutUSImage" className="img-fluid" />
            </div>
            <div className="col-md-12 col-xl-6">
                <p className="mb-0"><em className="fw-bold">Name </em> : {name}</p>
                <p className="mb-0"><em className="fw-bold">Event </em>: {event}</p>
                <p className="mb-0"><em className="fw-bold">Cash Awarded </em>:{amount}</p>
            </div>
        </div>
    );
}

export default AwardsCard;