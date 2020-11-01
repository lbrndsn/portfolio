import React, {useEffect, useRef} from "react";
import {useRouteStore} from "../stores/RouteStore";
import {observer} from "mobx-react-lite";

const Splash = observer(() => {
    return (
        <div className="fixed page">
            <div className="page-inner">
                <h4>Hi!</h4>
            </div>
        </div>
    )
});

export default Splash;
