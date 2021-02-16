import React from 'react';
import Button from './Button';
import { cta } from "../data/Styles"

function TeamCard({ buttonName, url, type, title, content }) {
    return (
        <div className=" col-xl-4 d-flex mb-3 ">
            <div className="card p-4 align-self-stretch ">
                <h5 className="text-center">{title}</h5>
                <p className="text-center">
                    {content}
                </p>
                <div
                    className="d-flex justify-content-center align-items-end"
                    style={{ height: "100%" }}
                >
                    <Button name={buttonName} url={url} style={cta} type={type} />
                </div>
            </div>
        </div>
    );
}

export default TeamCard;