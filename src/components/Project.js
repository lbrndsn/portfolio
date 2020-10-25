import React, {useEffect, useRef, useState} from "react";
import {observer} from "mobx-react-lite";
import {CSSTransition} from "react-transition-group";

const Project = observer(({ title, shortDescription, tags, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    let slicePosition = 2;
    if (tags.length === 3) {
        slicePosition = 3;
    }

    const toggle = () => {
        setIsOpen(!isOpen);
    };

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
            <h2 ref={ref}>{title}</h2>

            <div className="project-open-button-container">
                <div className="project-open-button" onClick={toggle}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down"
                         className="svg-inline--fa fa-chevron-down fa-w-14" role="img"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                        style={{ transform: `rotate(${isOpen ? '180deg' : '0deg' })` }}>
                        <path fill="currentColor"
                              d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                </div>
            </div>

            <p>{shortDescription}</p>

            <div className="project-open-button project-open-button-mobile" onClick={toggle}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down"
                     className="svg-inline--fa fa-chevron-down fa-w-14" role="img"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                     style={{ transform: `rotate(${isOpen ? '180deg' : '0deg' })` }}>
                    <path fill="currentColor"
                          d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                </svg>
            </div>

            <div className="tag-container">
                {isOpen ? allTags : notOpenTagView}
            </div>

            <CSSTransition
                in={isOpen}
                timeout={300}
                classNames="project-content"
                unmountOnExit
            >
                {children}
            </CSSTransition>

        </div>
    )
});

export default Project;
