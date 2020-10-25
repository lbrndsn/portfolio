import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";

const Project = observer(({ title, shortDescription, tags, children }) => {
    // const [actualProgress, setProgress] = useState(0);

    const firstTagItems = tags.slice(0, 2).map(tag => <div className="tag">{tag}</div>);
    const moreTagItems = tags.slice(2, tags.length - 1).map(tag => <div className="tag tag-more">{tag}</div>);

    return (
        <div className="project-container">
            <h2>{title}</h2>
            <p>{shortDescription}</p>
            <div className="tag-container">
                {firstTagItems}
                <div className="tag tag-more">{moreTagItems.length} MORE</div>
            </div>
        </div>
    )
});

export default Project;
