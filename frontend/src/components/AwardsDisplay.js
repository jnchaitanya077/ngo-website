import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import AwardsCard from './AwardsCard';
import FullHeading from './FullHeading';
import Waypoint from './Waypoint';
import 'react-image-lightbox/style.css';


function AwardsDisplay({ element, title, awardDetails, info }) {
    const [photo, setPhoto] = useState({
        photoIndex: 0,
        isOpen: false
    })

    const onSelect = (photoIndex) => {
        setPhoto({ photoIndex: photoIndex, isOpen: true })

    }

    return (
        <div className="container odd">
            <Waypoint element={element} />
            <FullHeading title={title} />
            <div className="mb-3">
                {info}
            </div>
            <div className="row">
                {awardDetails.map((awardDetail) =>
                    <div className="col-md-6 mb-2">
                        <AwardsCard
                            id={awardDetail.id}
                            image={awardDetail.image}
                            name={awardDetail.name}
                            event={awardDetail.event}
                            amount={awardDetail.amount}
                            onSelect={onSelect}
                        />
                    </div>)}
                {photo.isOpen && <Lightbox
                    mainSrc={awardDetails[photo.photoIndex].image}
                    onCloseRequest={() => setPhoto({
                        ...photo,
                        isOpen: false
                    })}
                />}
            </div>

        </div>
    );
}

export default AwardsDisplay;