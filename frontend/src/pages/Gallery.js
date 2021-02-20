import React from 'react';
import { Link } from 'react-router-dom';
import FullHeading from '../components/FullHeading';
import Image from '../components/Image';
import Waypoint from '../components/Waypoint';

import image from "../images/education.jpg"
function Gallery({ element, onAblumSelectSendPhotos }) {
    const onAblumSelect = (photos) => {
        onAblumSelectSendPhotos(photos)
    }

    return (
        <div className="container mt-3">
            <Waypoint element={element} />
            <FullHeading title="Gallery" />
            <div className="mb-3">
                {info}
            </div>
            <div className="row">
                {albums.map((album) =>
                    <div key={album.albumId} className="col-12 col-md-4 col-xxl-3 mb-3"
                        onClick={() => onAblumSelect(album.photos)}>
                        <Image image={album.thumbnail} text={album.overlayText} />
                        <Link to={`/Gallery/${album.eventTitle}`}>
                            <h6 className="text-center">{album.eventTitle}</h6>
                        </Link>
                    </div>)}
            </div>
        </div>
    );
}

export default Gallery;
// to={`/Gallery/${album.eventTitle}`}

const albums = [
    {
        albumId: 1,
        eventTitle: "Sample Title",
        overlayText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        thumbnail: image,
        photos: [image, image, image, image, image]

    },
    {
        albumId: 2,
        eventTitle: "Sample Title",
        overlayText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        thumbnail: image,
        photos: [image, image, image, image, image]
    },
    {
        albumId: 3,
        eventTitle: "Sample Title",
        overlayText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        thumbnail: image,
        photos: [image, image, image, image, image]
    },
    {
        albumId: 4,
        eventTitle: "Sample Title",
        overlayText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        thumbnail: image,
        photos: [image, image, image, image, image]
    },
    {
        albumId: 5,
        eventTitle: "Sample Title",
        overlayText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        thumbnail: image,
        photos: [image, image, image, image, image]
    },
    {
        albumId: 6,
        eventTitle: "Sample Title",
        overlayText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        thumbnail: image,
        photos: [image, image, image, image, image]
    },

];

const info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"