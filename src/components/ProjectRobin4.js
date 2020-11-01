import React from 'react';
import someImage from '../img/infographic-robin.png';

const ProjectRobin4 = () => {
    return (
        <div className="project-contents">
            <p>
            You can find the <a href="https://www.robinhq.com/nl/blog/foto-konijnenberg-roosterwijziging" target="_blank">blogpost</a> here.
            </p>
            <img src={someImage}/>
            <h3>November 2018</h3>
        </div>
    )
};

export default ProjectRobin4;

