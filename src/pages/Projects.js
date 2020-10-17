import React, {useRef} from "react";

const Projects = () => {
    const pageEl = useRef(null);

    return (
        <div className="fixed page" ref={pageEl}>
            <div className="page-inner">
                <h1>Projects</h1>
            </div>
        </div>
    )
};

export default Projects;
