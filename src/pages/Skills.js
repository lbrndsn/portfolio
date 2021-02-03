import React, {useEffect, useRef} from "react";
import {useRouteStore} from "../stores/RouteStore";
import {observer} from "mobx-react-lite";
import SkillBar from "../components/SkillBar";


const skillsDesign = [
    { title: "Figma", progress: 80 },
    { title: "Sketch", progress: 70 },
    { title: "Adobe Indesign", progress: 60 },
    { title: "Adobe Photoshop", progress: 40 },
];

const skillsPrototyping = [
    { title: "Figma", progress: 70 },
    { title: "Adobe XD", progress: 70 },
    { title: "Protopie", progress: 70 },
];

const skillsProgramming = [
    { title: "HTML/CSS/SASS", progress: 60 },
    { title: "JavaScript", progress: 40 },
    { title: "React", progress: 35 },
    { title: "Arduino", progress: 35 },
];

const Skills = observer(({id}) => {
    const routeStore = useRouteStore();
    const ref = useRef(null);

    useEffect(() => {
        routeStore[id] = ref;
    }, []);

    const skillBarsDesign = skillsDesign.map((skill) => <SkillBar key={"design" + skill.title} {...skill} />);
    const skillBarsPrototyping = skillsPrototyping.map((skill) => <SkillBar key={"prototyping" + skill.title} {...skill} />);
    const skillBarsProgramming = skillsProgramming.map((skill) => <SkillBar key={"programming" + skill.title} {...skill} />);

    return (
        <div className="fixed page" ref={ref}>
            <div className="page-inner">
                <h1>Skills</h1>
                <h2>Soft skills 🍑</h2>
                <p>Familiar with different research and brainstorming methods which include but are not limited to
                    (service) design thinking, interviewing, co-creation, benchmark studies, customer journeys, empathy
                    maps, personas, cultural probes, a/b testing, field trials and usability testing, and continuously
                    working on developing new skills.</p>

                <h2>Design ✨</h2>
                <div className="skill-grid">
                    {skillBarsDesign}
                </div>

                <h2>Prototyping 🥧</h2>
                <div className="skill-grid">
                    {skillBarsPrototyping}
                </div>

                <h2>Programming 🤖</h2>
                <div className="skill-grid">
                    {skillBarsProgramming}
                </div>

                <h2>Goals 🥅</h2>
                <p>
                    At the moment I would like to:
                </p>
                <ul className="goals-list">
                    <li>
                        get better at programming
                    </li>
                    <li>
                        learn swift
                    </li>
                    <li>
                        learn node.js
                    </li>
                </ul>
            </div>
        </div>
    )
});

export default Skills;
