import React from 'react';
import someImage from '../img/dashboard-1 sml.png';

const ProjectRobin1 = () => {
    return (
        <div className="project-contents">
            <p>
            Before I started designing, I researched which data the employees found most important. I also researched the corporate identity of ROBIN and various design trends that were circulating at that time.
            <br />
            <br />
            I designed the layout based on the wishes of the employees. I went through various iterations, which I always tested with the user. This design was made based on these tests, the research I did on the design trends and my own style.
            <br />
            <br />
            This is not the final result. I had to do more research on the corporate identity to make the dashboard fully fit the vision of the CEO and other employees. The final dashboard can be seen on this page as well.
            </p>
            <img src={someImage}/>
            <h3>October 2018</h3>
        </div>
    )
};

export default ProjectRobin1;

