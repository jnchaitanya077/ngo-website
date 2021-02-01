import React from 'react';
import GradientImage from '../components/GradientImage';
import TeamCard from '../components/TeamCard';
import Waypoint from '../components/Waypoint';
import Image from "../images/original/army.jpg"
function Team({ element }) {
    return (
        <>
            <GradientImage title="Our Team" image={Image} />
            <Waypoint element={element} />
            <div className="container">
                <div className="row mt-4 mb-4">
                    {data.map((eachTeam) => <TeamCard
                        key={eachTeam.id}
                        title={eachTeam.title}
                        content={eachTeam.content}
                        url={eachTeam.url + "Team/" + eachTeam.title}
                        buttonName={eachTeam.buttonName}
                        type={eachTeam.type}
                    />)}
                </div>
            </div>
        </>
    );
}

export default Team;



const data = [
    { id: 0, title: "Board Members", url: "/", content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney", buttonName: "Know More", type: "btn-sm" },
    { id: 1, title: "Mentors", url: "/", content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney", buttonName: "Know More", type: "btn-sm" },
    { id: 2, title: "Development Team", url: "/", content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney", buttonName: "Know More", type: "btn-sm" },
    { id: 3, title: "Communications", url: "/", content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney", buttonName: "Know More", type: "btn-sm" },
    { id: 4, title: "Human Resources", url: "/", content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney", buttonName: "Know More", type: "btn-sm" },
    { id: 5, title: "Volunteers", url: "/", content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney", buttonName: "Know More", type: "btn-sm" }
];