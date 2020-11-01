import React from 'react';
import someImage from '../img/me.jpg';

const ProjectFriendOrFoe = () => {
    return (
        <div className="project-contents">
            <p>
            Watch the play through <a href="https://www.youtube.com/watch?v=8VZF--Ot4q8 " target="_blank">here</a>.
            </p>
            <img src={someImage}/>
            <h3>October 2019</h3>
        </div>
    )
};

export default ProjectFriendOrFoe;

