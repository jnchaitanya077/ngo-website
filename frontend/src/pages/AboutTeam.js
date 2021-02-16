import React, { useState } from 'react';
import _ from "lodash";
import { useRouteMatch } from 'react-router-dom';
import { teamData } from "../data/TeamData";
import GradientImage from '../components/GradientImage';
import Person from '../components/Person';
import Waypoint from '../components/Waypoint';

function AboutTeam({ element }) {
    var teamName = useRouteMatch("/Team/:TeamId");
    const {
        params: { TeamId },
    } = teamName;

    const [loading, isloaded] = useState(false);
    const [data, setData] = useState();

    useState(() => {
        const data = _.camelCase(TeamId);
        const d = teamData[data];
        setData(d);
        isloaded(!loading);
    }, [TeamId]);

    return (
        <>{loading ? <>
            <GradientImage title={TeamId} />
            <Waypoint element={element} />
            <div className="container">
                <div className="row d-flex mt-3">
                    {data.map((eachPerson) =>
                        <Person image={"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg"}
                            name={eachPerson.name}
                            position={eachPerson.position}
                            content={eachPerson.content}
                        />
                    )}
                </div>
            </div>
        </> : <h3 className="text-center">Loading</h3>}
        </>
    );
}

export default AboutTeam;


