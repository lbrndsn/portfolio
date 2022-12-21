import React, {useEffect, useRef} from "react";
import {useRouteStore} from "../stores/RouteStore";
import {observer} from "mobx-react-lite";
import Project from "../components/Project";
import ProjectFlitsmeister1 from "../components/ProjectFlitsmeister1";
import ProjectFlitsmeister2 from "../components/ProjectFlitsmeister2";
import ProjectFriendOrFoe from "../components/ProjectFriendOrFoe";
import ProjectPirateHeijn from "../components/ProjectPirateHeijn";
import ProjectTheArtOfWaiting from "../components/ProjectTheArtOfWaiting";
import ProjectSpaceX from "../components/ProjectSpaceX";
import ProjectRobin1 from "../components/ProjectRobin1";
import ProjectRobin2 from "../components/ProjectRobin2";
import ProjectRobin3 from "../components/ProjectRobin3";
import ProjectRobin4 from "../components/ProjectRobin4";
import ProjectWeightables from "../components/ProjectWeightables";

const projects = [
    {
        title: 'Flitsmeister Safety Improvements 1',
        shortDescription: 'During my graduation internship at Flitsmeister I worked on a project individually for the first time. The goal was to “identify the aspects that cause people to perceive Flitsmeister as unsafe and create at least two different proposals that make Flitsmeister safer to use”.',
        tags: ['DESIGN THINKING', 'BENCHMARK STUDY', 'PEER REVIEW', 'CO-REFLECTION', 'PARTICIPANT OBSERVATION', '(EXPERT-)INTERVIEW', 'SURVEY', 'LITERATURE STUDY', 'REQUIREMENT LIST', 'EMPATHY MAP', 'CUSTOMER JOURNEY', 'SERVICE BLUEPRINT', 'DOT VOTING', 'SKETCHING', 'PROTOTYPING', 'THINKING ALOUD', 'FIELD TRIAL', 'USABILITY TESTING', 'WIZARD OF OZ', 'SCENARIOS', 'BRAINWRITING', '5 WHYS', 'MIND MAPPING', 'REVERSE BRAINSTORMING', 'FIGMA', 'TYPEFORM', 'SKYPE', 'DISCORD'],
        children: <ProjectFlitsmeister1/>
    },
    {
        title: 'Flitsmeister Safety Improvements 2',
        shortDescription: 'The second time I worked on a project individually at Flitsmeister, the goal was to “make clear in what way the service that Flitsmeister offers can give people a feeling of safety before, during and after their trip".',
        tags: ['SERVICE DESIGN THINKING', 'PERSONA', 'CO-REFLECTION', 'PEER REVIEW', 'CULTURAL PROBES', 'LITERATURE STUDY', 'INTERVIEW', 'INSPIRATION WALL', 'MOODBOARD', 'EMPATHY MAP', 'CUSTOMER JOURNEY', 'SKETCHING', 'PROTOTYPING', 'THINKING ALOUD', 'FIELD TRIAL', 'USABILITY TESTING', 'A/B TESTING', 'SCENARIOS', 'USER FLOWS', 'LOTUS BLOSSOM', 'CRAZY 8S', 'MIND MAPPING', 'FIGMA', 'SKYPE', 'DISCORD'],
        children: <ProjectFlitsmeister2/>
    },
    {
        title: 'Friend or Foe',
        shortDescription: 'For the minor “Scripting for Designers” I was working in a group of three people total and we had to make something with JavaScript. We chose to make a game.',
        tags: ['HTML/CSS', 'JAVASCRIPT', 'JQUERY'],
        children: <ProjectFriendOrFoe/>
    },
    {
        title: 'Pirate Heijn',
        shortDescription: 'The final project for the minor “Scripting for Designers” we had to do in groups of six. We wanted to work with React Native and we wanted to make an app. We won the ICA Presents “Courageous Coding” award, which is an event where a lot of students present their work for a judge.',
        tags: ['REACT NATIVE', 'JAVASCRIPT', 'FIREBASE'],
        children: <ProjectPirateHeijn/>
    },
    {
        title: 'The Art of Waiting',
        shortDescription: 'The concept “The Art of Waiting” enriches the waiting experience of a hospital visitor by distracting them in a positive manner. This is done by placing for example a swing or rocking chair in the room. These will be connected to the wall, where an interaction will take place when the visitor uses the swing or chair.',
        tags: ['FLY ON THE WALL', '(EXPERT-)INTERVIEW', 'BENCHMARK STUDY', 'LITERATURE STUDY', 'CULTURAL PROBES', 'SCAMPER', '5 WHYS', 'GAP FILLING', '6-3-5 BRAINWRITING'],
        children: <ProjectTheArtOfWaiting/>
    },
    {
        title: 'Space X',
        shortDescription: 'A school assignment to design a ‘landing page’ (pun intended) for a journey to space.',
        tags: ['DRAWING', 'ADOBE PHOTOSHOP'],
        children: <ProjectSpaceX/>
    },
    {
        title: 'Dashboard ROBIN 1st iteration',
        shortDescription: 'An assignment during my internship at ROBIN was to improve the current dashboard they used in the office. This dashboard showed data from their live chat, for example the average response time or the amount of active chats.',
        tags: ['(EXPERT-)INTERVIEW', 'LITERATURE STUDY', 'CARD SORTING', 'SKETCH'],
        children: <ProjectRobin1/>
    },
    {
        title: 'ROBIN Wintersport Revenue Goal',
        shortDescription: 'An assignment that I received during my internship at ROBIN. An infographic showing their revenue goal for the end of the year and the reward they would get (a team trip).',
        tags: ['DRAWING', 'ADOBE CAPTURE', 'ADOBE PHOTOSHOP', 'PEER REVIEW'],
        children: <ProjectRobin2/>
    },
    {
        title: 'ROBIN Final Dashboard',
        shortDescription: 'As you might have read in the description of the other dashboard, one of my assignments during my internship at ROBIN was to improve the dashboard they had in the office. The dashboard that you see here is the final result, formed through many iterations, based on the wishes of the employees and their corporate identity.',
        tags: ['(EXPERT-)INTERVIEW', 'CARD SORTING', 'LITERATURE STUDY', 'PEER REVIEW', 'FIELD TRIAL', 'THINKING ALOUD', 'SKETCH'],
        children: <ProjectRobin3/>
    },
    {
        title: 'ROBIN Infographic',
        shortDescription: 'An infographic for a blogpost by ROBIN.',
        tags: ['PEER REVIEW', 'ADOBE PHOTOSHOP'],
        children: <ProjectRobin4/>
    },
    {
        title: 'Weightables',
        shortDescription: 'Weightables is a concept that features a scale that can be used to determine your desired weight and quantities on a food market by means of substitute miniature products. The data is stored in disks that come out of the scale, these together form a bar. This can then be taken to the cash register to pay.',
        tags: ['FLY ON THE WALL', 'INTERVIEW', 'LITERATURE STUDY', 'BENCHMARK STUDY', 'LITTLEBITS'],
        children: <ProjectWeightables/>
    }

]

const Projects = observer(({id}) => {
    const routeStore = useRouteStore();
    const ref = useRef(null);

    useEffect(() => {
        routeStore[id] = ref;
    }, []);

    return (
        <div className="fixed page" ref={ref}>
            <div className="page-inner">
                <h1>Projects</h1>
                {projects.map(it => <Project {...it} />)}
            </div>
        </div>
    )
});

export default Projects;
