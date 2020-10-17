import React, {useEffect, useRef} from "react";
import {useRouteStore} from "../stores/RouteStore";
import {observer} from "mobx-react-lite";

const Contact = observer(({ id }) => {
    const routeStore = useRouteStore();
    const ref = useRef(null);

    useEffect(() => {
        routeStore.setClosure(id, () => {
            ref.current.scrollIntoView({ behavior: "smooth" });
        });
    }, []);

    return (
        <div className="fixed page" ref={ref}>
            <div className="page-inner">
                <h1>Contact</h1>
            </div>
        </div>
    )
});

export default Contact;
