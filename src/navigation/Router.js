import React from "react";
import Contact from "../pages/Contact";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import About from "../pages/About";
import NavButton from "./NavButton";
import Navbar from "./Navbar";
import {observer} from "mobx-react-lite";

export const routes = [
    {
        link: "/about",
        title: "About me",
        renderComponent: (id) => <About key={id} id={id}/>
    },
    {
        link: "/projects",
        title: "My projects",
        renderComponent: (id) => <Projects key={id} id={id}/>
    },
    {
        link: "/skills",
        title: "Skills",
        renderComponent: (id) => <Skills key={id} id={id}/>
    },
    {
        link: "/contact",
        title: "Find me",
        renderComponent: (id) => <Contact key={id} id={id}/>
    }
];


const Navigation = observer(() => {
    return (
        <>
            <Navbar/>
            <NavButton/>

            {routes.map(route => (
                route.renderComponent(route.link)
            ))}
        </>
    );
});

export default Navigation;
