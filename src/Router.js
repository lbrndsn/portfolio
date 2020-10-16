import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";

export default function Navigation() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/about">About me</Link>
                        </li>
                        <li>
                            <Link to="/projects">My projects</Link>
                        </li>
                        <li>
                            <Link to="/skills">Skills</Link>
                        </li>
                        <li>
                            <Link to="/contact">Find me</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/skills">
                        <Skills />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
