import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";

const Project = observer(({ title, shortDescription, tags, children }) => {
    // const [actualProgress, setProgress] = useState(0);

    let slicePosition = 2;
    if (tags.length === 3) {
        slicePosition = 3;
    }
    const firstTagItems = tags.slice(0, slicePosition).map(tag => <div className="tag">{tag}</div>);
    const moreTagItems = tags.slice(slicePosition - 1, tags.length - 1).map(tag => <div className="tag tag-more">{tag}</div>);

    return (
        <div className="project-container">
            <h2>{title}</h2>
            <p>{shortDescription}</p>
            <div className="tag-container">
                {firstTagItems}
                {moreTagItems.length > 0 && <div className="tag tag-more">AND {moreTagItems.length} MORE</div>}
            </div>
            {children}
        </div>
    )
});

export default Project;
