import React from 'react';
import someImage from '../img/me.jpg';

const ProjectWeightables = () => {
    return (
        <div className="project-contents">
            <p>
                In this case we went on to investigate how embedded media can contribute to enriching the experience people have when visiting a public space, such as a market.
            </p>
            <img src={someImage}/>
            <h3>March 2019</h3>
        </div>
    )
};

export default ProjectWeightables;

