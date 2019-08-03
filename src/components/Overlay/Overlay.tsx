// ------------------------------- NODE MODULES -------------------------------

import React from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './Overlay.module.scss';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

interface OverlayProps {
    shown: boolean;
    toggle: () => void;
    fillScreen?: boolean;
}

export const Overlay = (props: OverlayProps): JSX.Element => {
    const overlayClasses = [classes.Overlay];

    if (props.shown) overlayClasses.push(classes.Shown);
    if (props.fillScreen) overlayClasses.push(classes.Fill);

    return <div onClick={props.toggle} className={overlayClasses.join(' ')} />;
};
