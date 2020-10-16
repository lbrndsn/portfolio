import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useLocation,
    withRouter
} from "react-router-dom";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import arrowDown from "./img/arrow-down.svg";

const routes = [
    {
        link: "/about",
        title: "About me",
    },
    {
        link: "/projects",
        title: "My projects",
    },
    {
        link: "/skills",
        title: "Skills",
    },
    {
        link: "/contact",
        title: "Find me",
    }
];

const Navbar = withRouter(() => {
    const location = useLocation();
    console.log(location);

    const routeLinks = routes.map((route) => (
        <li>
            <NavLink to={route.link} activeClassName="selected">{route.title}</NavLink>
        </li>
    ));

    return (
        <div className="nav-container">
            <nav className="nav">
                <ul>
                    { routeLinks }
                </ul>
            </nav>
        </div>
    )
});

const Navigation = () => {

    return (
        <Router>
            <div>
                <Navbar/>

                <div className="round-button">
                    <img src={arrowDown}/>
                </div>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/skills">
                        <Skills/>
                    </Route>
                    <Route path="/projects">
                        <Projects/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default Navigation;
