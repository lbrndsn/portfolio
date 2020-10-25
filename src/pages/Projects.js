import React, {useEffect, useRef} from "react";
import {useRouteStore} from "../stores/RouteStore";
import {observer} from "mobx-react-lite";
import Project from "../components/Project";
import ProjectFlitsmeister1 from "../components/ProjectFlitsmeister1";

const projects = [
    {
        title: 'Flitsmeister Safety Improvements 1 🚙',
        shortDescription: 'During my graduation internship at Flitsmeister I worked on a project individually for the first time. The goal was to “identify the aspects that cause people to perceive Flitsmeister as unsafe and create at least two different proposals that make Flitsmeister safer to use”.',
        tags: ['DESIGN THINKING', 'BRAINSTORMING', 'CO-REFLECTION', 'D;MKFHLJT'],
        children: <ProjectFlitsmeister1/>
    },
    {
        title: 'Flitsmeister Safety Improvements 2 🚗',
        shortDescription: 'During my graduation internship at Flitsmeister I worked on a project individually for the first time. The goal was to “identify the aspects that cause people to perceive Flitsmeister as unsafe and create at least two different proposals that make Flitsmeister safer to use”.',
        tags: ['DESIGN THINKING', 'BEEP BOOP', 'CO-REFLECTION'],
        children: (
            <h1>something else</h1>
        )
    },
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
