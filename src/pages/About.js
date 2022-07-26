import React, {useEffect, useRef} from "react";
import me from "../img/me.jpg";
import {useRouteStore} from "../stores/RouteStore";
import {observer} from "mobx-react-lite";

const About = observer(({ id }) => {
    const routeStore = useRouteStore();
    const ref = useRef(null);

    useEffect(() => {
        routeStore[id] = ref;
    }, []);

    return (
        <div className="fixed page" ref={ref}>
            <div className="page-inner">
                <h1>about me</h1>
                <p>
                    I’m Loïs. I'm an interaction designer living in Arnhem. In my spare time I have a couple of hobbies which include writing, drawing, traveling and cooking. I enjoy nature and being outside. I aspire to find a job in which I can use my creativity in different ways.
                </p>
                <h2>This is me 👇</h2>
                <img src={me} alt="Picture of me" className="portrait-picture"/>
            </div>
        </div>
    )
});

export default About;
