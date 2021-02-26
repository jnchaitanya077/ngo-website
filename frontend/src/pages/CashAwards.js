import React, { useState, useEffect } from 'react';
import AwardsDisplay from '../components/AwardsDisplay';
import { uniqueId } from 'lodash';
import axios from 'axios';
import { useRouteMatch } from 'react-router-dom';
import Stats from '../components/Stats';
import News from '../components/News';
import ActionCards from '../components/ActionCards';

function CashAwards({ element }) {
    const match = useRouteMatch("/Awards/:category");
    const {
        params: { category }
    } = match

    const [data, setData] = useState()
    const [isLoading, Loading] = useState(true)
    const BASE_URL = 'http://localhost:6098/awards'

    useEffect(() => {
        axios.get(`${BASE_URL}/${category}`)
            .then(function (response) {
                setData(response.data)
                Loading(false)
            })
            .catch(err => console.log(err))
    }, [category])

    return (
        isLoading ? <div class="ui active centered inline loader"></div>
            : <>
                <div className="container mt-5 w-75">
                    <div className="row">
                        <div className="col-md-9">
                            <AwardsDisplay
                                key={uniqueId()}
                                element={element}
                                title={category}
                                info={info}
                                awardDetails={data}
                            />
                        </div>
                        <div className="col-md-3">
                            <News title="News & Events" />
                            <ActionCards
                                title="Volunteer With Us"
                                link="/Join"
                                btnName="Join us" />

                        </div>
                    </div>
                </div>
            </>
    );
}

export default CashAwards;


const info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

