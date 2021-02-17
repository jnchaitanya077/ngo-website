import React from 'react';
import { Link } from 'react-router-dom';
import FullHeading from '../components/FullHeading';
import Image from '../components/Image';
import Waypoint from '../components/Waypoint';


function Gallery({ element }) {
    return (
        <div className="container mt-3">
            <Waypoint element={element} />
            <FullHeading title="Gallery" />
            <div className="mb-3">
                {info}
            </div>
            <div className="row">
                <div className="col-12 col-md-4 col-xxl-3 mb-3 ">
                    <Image text="simple text" />
                    <Link>
                        <h6 className="text-center">Hello</h6>
                    </Link>
                </div>
                <div className="col-12 col-md-4 col-xxl-3 mb-3">
                    <Image text="simple text" />
                    <Link>
                        <h6 className="text-center">Hello</h6>
                    </Link>
                </div>
                <div className="col-12 col-md-4 col-xxl-3 mb-3">
                    <Image text="simple text" />
                    <Link>
                        <h6 className="text-center">Hello</h6>
                    </Link>
                </div>
                <div className="col-12 col-md-4 col-xxl-3 mb-3">
                    <Image text="simple text" />
                    <Link>
                        <h6 className="text-center">Hello</h6>
                    </Link>
                </div>
                <div className="col-12 col-md-4 col-xxl-3 mb-3">
                    <Image text="simple text" />
                    <Link>
                        <h6 className="text-center">Hello</h6>
                    </Link>
                </div>
                <div className="col-12 col-md-4 col-xxl-3 mb-3">
                    <Image text="simple text" />
                    <Link>
                        <h6 className="text-center">Hello</h6>
                    </Link>
                </div>
                <div className="col-12 col-md-4 col-xxl-3 mb-3">
                    <Image text="simple text" />
                    <Link>
                        <h6 className="text-center">Hello</h6>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Gallery;

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

const info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"