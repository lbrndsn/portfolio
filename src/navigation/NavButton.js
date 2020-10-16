import arrowDown from "../img/arrow-down.svg";
import React from "react";
import {
    useLocation,
    withRouter,
    useHistory
} from "react-router-dom";
import { routes } from "./Router";

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

    const isLastPage = () => !getNextRoute();

    return (
        <div className="round-button" onClick={act}>
            <img src={arrowDown} className={isLastPage() && "rotated-180"} />
        </div>
    );
});

export default NavButton;
