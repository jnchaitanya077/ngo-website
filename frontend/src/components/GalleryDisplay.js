import React, { useState, useEffect } from 'react';
import Waypoint from './Waypoint';
import Button from './Button'
import ReactImageVideoLightbox from "react-image-video-lightbox"; import { useRouteMatch } from "react-router-dom";
import GradientImage from './GradientImage';
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
            alert("he")
        }
    }, [albumPhotos, albumTitle])


    const onSelect = (photoIndex) => {
        setPhoto({ photoIndex: photoIndex, isOpen: true })
    }
    console.log(album[0])

    return (
        <div>
            <GradientImage title={albumTitle} image={album && album[0]} />
            <div className="container odd">
                <Waypoint element={element} />
                <div className="row">
                    {album.map((item) => <div
                        className="col-md-4 col-xl-3 mb-4"
                    >
                        <img src={item.url}
                            alt={item.altTag}
                            className="fluid-image shadow-lg "
                            width="100%"
                            height="auto"
                            style={{ border: "5px solid grey" }}
                            onClick={() => onSelect(album.findIndex(x => x.url === item.url))}
                        />
                    </div>)}

                    {photo.isOpen && <ReactImageVideoLightbox
                        data={album}
                        startIndex={photo.photoIndex}
                        showResourceCount={true}
                        onCloseCallback={() => setPhoto({ ...photo, isOpen: false })}
                    />}
                </div>
                <Button name="Back" style={cta} url="/Gallery" />
            </div>
        </div>
    );
}


export default GalleryDisplay;
