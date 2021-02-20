import React, { useState, useEffect } from 'react';
import Waypoint from './Waypoint';
import Button from './Button'
import Lightbox from 'react-image-lightbox';
import { useRouteMatch } from "react-router-dom";
import GradientImage from './GradientImage';
import 'react-image-lightbox/style.css';
import { cta } from '../data/Styles'

function GalleryDisplay({ element, albumPhotos }) {
    const match = useRouteMatch("/Gallery/:albumTitle");
    const {
        params: { albumTitle }
    } = match;

    // set the fetched album to the state.
    const [album, setAlbum] = useState([])

    // for light box to navigate
    const [photo, setPhoto] = useState({
        photoIndex: 0,
        isOpen: false
    })

    useEffect(() => {
        //fetch album data and set the state based on title
        console.log("inside")
        if (albumPhotos.length !== 0) {
            setAlbum(albumPhotos)

        } else {
            console.log("else")
        }
    }, [])


    const onSelect = (photoIndex) => {
        setPhoto({ photoIndex: photoIndex, isOpen: true })
    }

    return (
        <div>
            <GradientImage title={albumTitle} image={album && album[0]} />
            <div className="container odd">
                <Waypoint element={element} />
                <div className="row">
                    {album.map((image) => <div
                        className="col-md-4 col-xl-3 mb-4"
                    >
                        <img src={image}
                            alt="pic"
                            className="fluid-image shadow-lg "
                            width="100%"
                            height="auto"
                            style={{ border: "5px solid grey" }}
                            onClick={() => onSelect(album.indexOf(image))}
                        />
                    </div>)}

                    {photo.isOpen && <Lightbox
                        mainSrc={album[photo.photoIndex]}
                        nextSrc={album[(photo.photoIndex + 1) % album.length]}
                        prevSrc={album[(photo.photoIndex + album.length - 1) % album.length]}
                        onMovePrevRequest={() => setPhoto({
                            ...photo,
                            photoIndex: (photo.photoIndex + album.length - 1) % album.length,
                        })}
                        onMoveNextRequest={() => setPhoto({
                            ...photo,
                            photoIndex: (photo.photoIndex + 1) % album.length,
                        })}
                        onCloseRequest={() => setPhoto({
                            ...photo,
                            isOpen: false
                        })}
                    />}
                </div>
                <Button name="Back" style={cta} url="/Gallery" />
            </div>
        </div>
    );
}


export default GalleryDisplay;

const photos = [
    {
        albumId: 1,
        albumName: "",
        photos: []
    },
    {
        albumId: 1,
        albumName: "",
        photos: []
    },

]