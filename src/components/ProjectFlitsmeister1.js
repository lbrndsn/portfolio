import React from 'react';
import someImage from '../img/empathy-map.jpg';

const ProjectFlitsmeister1 = () => {
    return (
        <div className="project-contents">
            <p>
                This project took 4,5 months and was incredibly interesting to work on. I used the design thinking method which meant there were five phases I iterated through. These phases are: empathise, define, ideate, prototype and test.
                <br />
                <br />
                To start off my research I talked to users of the app, but also to people that don’t use the app at all, to find out more about their opinions on Flitsmeister. A lot of the people I spoke to were really positive about the app. All of them could agree that the app could be perceived as unsafe. Through these interviews, combined with a survey and other studies, I could form a picture of the aspects that could make the app feel unsafe. 
                <br />
                <br />
                With this knowledge I could move on to ideation. I did brainstorms with users and I did brainstorms with colleagues, I brainstormed alone and I sketched a lot. When I felt I had an interesting concept, I’d move on to prototyping and testing. I iterated a few times over these last three phases. This led to three final proposals which reduced distraction, the amount of actions users had to do while driving and as a result also reduced the time that people would have their eyes off the road.
                <br />
                <br />
            </p>
            <img src={someImage}/>
            <h3>June 2020</h3>
        </div>
    )
};

export default ProjectFlitsmeister1;
