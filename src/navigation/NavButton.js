import arrowDown from "../img/arrow-down.svg";
import React from "react";
import { routes } from "./Router";

const NavButton = () => {
    const act = () => {
        const nextRoute = getNextRoute();

        if (!nextRoute) {
            // history.push("/")
        } else {
            // Go to next
            // history.push(nextRoute.link);
        }
    };

    const getNextRoute = () => {
        const currentRouteIndex = routes.findIndex((route) => route.link === "");
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
};

export default NavButton;
