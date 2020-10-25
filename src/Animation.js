import {Transition} from "react-transition-group";
import React from "react";

const defaultAnimationDurationInMs = 300;
const defaultAnimationCurve = 'ease-in-out';

const baseStyle = (from, durationInMs = defaultAnimationDurationInMs, curve = defaultAnimationCurve) => ({
    display: 'table',
    transition: `all ${durationInMs}ms ${curve}`,
    transform: from,
});

const transitionStyles = (enter, exit) => ({
    entering: enter,
    entered: enter,
    exiting: exit,
    exited: exit,
});

const animationTypes = {
    scale: {
        enter: {transform: 'scale(1)'},
        exit: {transform: 'scale(0)'}
    }
};

const Animation = ({in: inProp, type, style, children, ...rest}) => {
    let animationProperties = type;
    if (type in animationTypes) {
        animationProperties = animationTypes[type];
    }

    const {
        durationInMs, enter, exit, curve
    } = animationProperties;

    return (
        <Transition in={inProp} timeout={durationInMs} {...rest} unmountOnExit mountOnEnter>
            {state => (
                <div style={{
                    ...baseStyle(exit, durationInMs, curve),
                    ...transitionStyles(enter, exit)[state],
                    ...style
                }}
                >
                    {children}
                </div>
            )}
        </Transition>
    );
};

export default Animation;
