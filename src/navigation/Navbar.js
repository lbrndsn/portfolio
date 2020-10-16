import React from "react";
import {
    withRouter,
    NavLink
} from "react-router-dom";
import { routes } from "./Router";

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

export default Navbar;
