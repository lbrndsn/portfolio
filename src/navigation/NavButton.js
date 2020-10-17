import arrowDown from "../img/arrow-down.svg";
import React from "react";
import { routes } from "./Router";
import {observer} from "mobx-react-lite";
import {useRouteStore} from "../stores/RouteStore";

const NavButton = observer(() => {
    const routeStore = useRouteStore();

    const act = () => {
        const nextRoute = getNextRoute();

        if (!nextRoute) {
            // Last achieved
            routeStore.setActive(routes[0].link)
        } else {
            // Go to next
            routeStore.setActive(nextRoute.link)
        }
    };

    const getNextRoute = () => {
        const currentRouteIndex = routes.findIndex((route) => route.link === routeStore.activeRoute);
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
