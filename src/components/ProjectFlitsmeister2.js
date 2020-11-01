import React from 'react';
import someImage from '../img/cultural-probes.png';
import anotherImage from '../img/persona-michel.png';

const ProjectFlitsmeister2 = () => {
    return (
        <div className="project-contents">
            <p>
                This project took two months. This time I used the service design method and iterated through three phases: explore, create and reflect.
                <br />
                <br />
                This time I didn’t focus on the app, but on the feeling of safety in general. It’s really interesting how different the results were. This project resulted in proposals for complete new additions to the app, which support users in times where they do not feel safe outside (i.e. in the dark), and/of help users avoid situations in which they might feel unsafe.
            </p>
            <img src={someImage}/>
            <p></p>
            <img src={anotherImage}/>
            <h3>August 2020</h3>
        </div>
    )
};

export default ProjectFlitsmeister2;

