import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useLocation,
    withRouter,
    useHistory
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

const NavButton = withRouter(() => {
    const location = useLocation();
    const history = useHistory();

    const act = () => {
        const nextRoute = getNextRoute();

        if (!nextRoute) {
            history.push("/")
        } else {
            // Go to next
            history.push(nextRoute.link);
        }
    };

    const getNextRoute = () => {
        const currentRouteIndex = routes.findIndex((route) => route.link === location.pathname);
        if (currentRouteIndex === null) {
            return null;
        }

        const nextRouteIndex = currentRouteIndex + 1;
        return routes[nextRouteIndex];
    };

    const isLastPage = () => {
        const nextPage = getNextRoute();
        console.log(nextPage);
        return !nextPage;
    };

    return (
        <div className="round-button" onClick={act}>
            <img src={arrowDown} className={isLastPage() && "rotated-180"} />
        </div>
    );
});

const Navigation = () => {

    return (
        <Router>
            <div>
                <Navbar/>
                <NavButton/>

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
