import React, { useState } from 'react';

function Collapse({ question, answer, id }) {
    const [isClicked, setClick] = useState(false);
    console.log(id);
    return (
        <>
            <div className="w-100 mt-3 mb-3" style={{ backgroundColor: "#ace6ac" }}>
                <div className="row">
                    <div className="col-10">
                        <h5 >{question}</h5>
                    </div>
                    <div className="col-2">
                        <button
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${id}`}
                            className="btn float-end "
                            style={{ backgroundColor: "#CF63CF" }}
                            aria-expanded="false"
                            aria-controls="collapseExample"
                            onClick={() => {
                                setClick(!isClicked);
                            }}
                        >
                            {isClicked ? "-" : "+"}
                        </button>
                    </div>
                </div>
                <div class="collapse" id={`${id}`}>
                    <div class="w-100 mt-3">
                        {answer}
                    </div>
                </div>

            </div>

        </>
    );
}

export default Collapse;