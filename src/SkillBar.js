import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";

const SkillBar = observer(({ title, progress }) => {
    const [actualProgress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(progress);
    }, []);
    return (
        <div className="skill-bar-container">
            <div className="skill-bar-title">{title}</div>
            <div className="skill-bar-outer">
                <div className="skill-bar-inner" style={{ width: actualProgress + "%" }}/>
            </div>
        </div>
    )
});

export default SkillBar;
