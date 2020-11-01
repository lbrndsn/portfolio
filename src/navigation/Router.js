import React, {useEffect} from "react";
import Contact from "../pages/Contact";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Splash from "../pages/Splash";
import NavButton from "./NavButton";
import Navbar from "./Navbar";
import {observer} from "mobx-react-lite";
import {useRouteStore} from "../stores/RouteStore";

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
    const routeStore = useRouteStore();

    const isInViewPort = (element, offset = 0) => {
        const top = element.getBoundingClientRect().top;
        return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
    };

    const onScroll = () => {
        // routes.forEach((route) => {
        //     const ref = routeStore[route.link];
        //     if (!ref || !ref.current) return;
        //     if (isInViewPort(ref.current)) {
        //         routeStore.activeRoute = route.link;
        //     }
        // })
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <Navbar/>
            <NavButton/>

            <Splash/>
            {routes.map(route => (
                route.renderComponent(route.link)
            ))}
        </>
    );
});

export default Navigation;
