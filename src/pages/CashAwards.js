import React, { useState } from 'react';
import AwardsCard from '../components/AwardsCard';
import FullHeading from '../components/FullHeading';
import Waypoint from '../components/Waypoint';
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';

// images
import AwardsImage from "../images/children.jpg"

function CashAwards({ element }) {
    // const [photo, setPhoto] = useState({
    //     photoIndex: 0,
    //     isOpen: false
    // })
    // function onSelect(params) {

    // }
    return (
        <div className="container odd">
            <Waypoint element={element} />
            <FullHeading title="Cash Awards" />
            <div className="row">
                {AwardImages.map((detail) =>
                    <div className="col-md-6 mb-2">
                        <AwardsCard
                            id={detail.id}
                            image={detail.image}
                            name={detail.name}
                            event={detail.event}
                            amount={detail.amount}
                        // onSelect={onSelect} 

                        />
                    </div>)}
            </div>
        </div>
    );
}

export default CashAwards;

const AwardImages = [
    { id: 0, image: AwardsImage, name: "Chaitanya", event: "Rural Talent Test", amount: 4000 },
    { id: 1, image: AwardsImage, name: "Krishna", event: "Rural Talent Test", amount: 5000 },
    { id: 2, image: AwardsImage, name: "Chandu", event: "Rural Talent Test", amount: 2000 },
    { id: 3, image: AwardsImage, name: "Srinivas", event: "Rural Talent Test", amount: 7000 },
    { id: 4, image: AwardsImage, name: "Basha", event: "Rural Talent Test", amount: 10000 },
    { id: 5, image: AwardsImage, name: "Vivek", event: "Rural Talent Test", amount: 15000 },]