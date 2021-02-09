import React, { useState } from 'react';
import AwardsCard from '../components/AwardsCard';
import FullHeading from '../components/FullHeading';
import Waypoint from '../components/Waypoint';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

// images
import AwardsImage from "../images/children.jpg";
import AwardImage2 from "../images/original/army.jpg"

function CashAwards({ element }) {
    const [photo, setPhoto] = useState({
        photoIndex: 0,
        isOpen: false
    })
    function onSelect(photoIndex) {
        setPhoto({ photoIndex: photoIndex, isOpen: true });
        console.log(photo)

    }
    return (
        <div className="container odd">
            <Waypoint element={element} />
            <FullHeading title="Cash Awards" />
            <div className="mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="row">
                {AwardImages.map((detail) =>
                    <div className="col-md-6 mb-2">
                        <AwardsCard
                            id={detail.id}
                            image={detail.image}
                            name={detail.name}
                            event={detail.event}
                            amount={detail.amount}
                            onSelect={onSelect}
                        />
                    </div>)}

                {photo.isOpen && <Lightbox
                    mainSrc={AwardImages[photo.photoIndex].image}
                    nextSrc={AwardImages[(photo.photoIndex + 1) % AwardImages.length].image
                    }
                    prevSrc={AwardImages[(photo.photoIndex + AwardImages.length - 1) % AwardImages.length].image}
                    onMovePrevRequest={() => setPhoto({
                        ...photo,
                        photoIndex: (photo.photoIndex + AwardImages.length - 1) % images.length,
                    })
                    }
                    onCloseRequest={() => setPhoto({ ...photo, isOpen: false })}
                />}
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