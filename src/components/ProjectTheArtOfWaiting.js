
import React from 'react';
import someImage from '../img/the art of waiting.png';

const ProjectTheArtOfWaiting = () => {
    return (
        <div className="project-contents">
            <p>
            As soon as the user moves the object, a so-called <a href="https://youtu.be/P3i-L9TscZ8" target="_blank">‘continuous line drawing’</a> starts on the wall. Because it takes a while for the drawing to form, the user will be intrigued and distracted for a longer time period. When the drawing is finished, another drawing will start. This concept can be widely used, with multiple target users. Think offices, airports, train stations…
            <br />
            <br />
            This school assignment was given to us by Silo, a design agency based in The Hague. The goal was to investigate a way to use embedded media objects to contribute to a so-called “healing environment” within a healthcare institution.
            </p>
            <img src={someImage}/>
            <h3>June 2019</h3>
        </div>
    )
};

export default ProjectTheArtOfWaiting;

