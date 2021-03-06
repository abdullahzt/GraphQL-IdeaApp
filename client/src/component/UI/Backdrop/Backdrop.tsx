import React from 'react';

import { CSSTransition } from 'react-transition-group';

import classes from './Backdrop.module.css';

const animationClasses = {
    enter: classes["fade-enter"],
    enterDone: classes["fade-enter-active"],
    exit: classes["fade-exit"],
    exitDone: classes["fade-exit-active"]
}

const animationTiming = {
    enter: 0,
    exit: 300
}

interface BackdropProps {
    show: boolean
    clicked: (event: React.FormEvent) => void
}

const Backdrop: React.FC<BackdropProps> = (props) => {

    const nodeRef = React.createRef<HTMLDivElement>();

    return (
    <CSSTransition in={props.show} nodeRef={nodeRef} unmountOnExit timeout={animationTiming} classNames={animationClasses} >
        <div ref={nodeRef} onClick={props.clicked} className={classes.Backdrop} ></div>
    </CSSTransition>)
};

export default Backdrop;