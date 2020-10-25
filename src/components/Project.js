import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";

const Project = observer(({ title, shortDescription, tags, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    let slicePosition = 2;
    if (tags.length === 3) {
        slicePosition = 3;
    }

    const toggle = () => setIsOpen(!isOpen);

    const firstTagItems = tags.slice(0, slicePosition).map(tag => <div className="tag" onClick={toggle}>{tag}</div>);
    const moreTagItems = tags.slice(slicePosition - 1, tags.length - 1).map(tag => <div className="tag tag-more">{tag}</div>);
    const allTags = tags.map(tag => <div className="tag tag-more">{tag}</div>);

    const notOpenTagView = (
        <>
            {firstTagItems}
            {moreTagItems.length > 0 && <div className="tag tag-more" onClick={toggle}>AND {moreTagItems.length} MORE</div>}
        </>
    );

    return (
        <div className="project-container">
            <h2>{title}</h2>

            <div className="project-open-button-container">
                <div className="project-open-button" onClick={toggle}>
                    {isOpen ? "Collapse" : "Expand"}
                </div>
            </div>

            <p>{shortDescription}</p>

            <div className="tag-container">
                {isOpen ? allTags : notOpenTagView}
            </div>

            {isOpen && children}
        </div>
    )
});

export default Project;
