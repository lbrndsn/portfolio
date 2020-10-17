import React from "react";
import {routes} from "./Router";
import {useRouteStore} from "../stores/RouteStore";
import {observer} from "mobx-react-lite";

const Navbar = observer(() => {
    const routeStore = useRouteStore();

    const routeLinks = routes.map((route) => (
        <li key={route.link}>
            <a onClick={() => routeStore.setActive(route.link)} className={routeStore.activeRoute === route.link ? "selected" : null}>{route.title}</a>
        </li>
    ));

    return (
        <div className="nav-container">
            <nav className="nav">
                <ul>
                    {routeLinks}
                </ul>
            </nav>
        </div>
    )
});

export default Navbar;
