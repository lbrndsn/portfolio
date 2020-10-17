import React from "react";
import me from "../img/me.jpg";
import {useRouteStore} from "../stores/RouteStore";
import {observer} from "mobx-react-lite";

const About = observer(({ id }) => {
    const routeStore = useRouteStore();

    return (
        <div className="fixed page">
            <div className="page-inner">
                <h1>about me</h1>
                <p>I’m Loïs. I'm an interaction designer living in Arnhem. In my spare time I have a couple of hobbies
                    which
                    include playing the guitar, cooking and fitness/weightlifting. I enjoy programming and I'm working
                    on
                    getting more skilled in that area. I aspire to find a job in which I can combine interaction design
                    and
                    programming. I also love dogs. 🐕</p>

                <h2>This is me 👇</h2>
                <img src={me} alt="Picture of me" className="portrait-picture"/>
            </div>
        </div>
    )
});

export default About;
