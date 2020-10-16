import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import arrowDown from "./img/arrow-down.svg";

export default function Navigation() {
    return (
        <Router>
            <div>
                <div className="nav-container">
                    <nav className="nav">
                        <ul>
                            <li>
                                <NavLink to="/about" activeClassName="selected">About me</NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects" activeClassName="selected">My projects</NavLink>
                            </li>
                            <li>
                                <NavLink to="/skills" activeClassName="selected">Skills</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" activeClassName="selected">Find me</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

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
}
