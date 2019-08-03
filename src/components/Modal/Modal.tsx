// ------------------------------- NODE MODULES -------------------------------

import React from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './Modal.module.scss';
import { Overlay } from '../Overlay/Overlay';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

interface ModalProps {
    shown: boolean;
    toggle: () => void;
    children: any;
}

export const Modal = (props: ModalProps): JSX.Element | null => {
    const modalClasses = [classes.Modal];

    if (props.shown) modalClasses.push(classes.Shown);

    return (
        <>
            <div className={classes.Container}>
                <div className={modalClasses.join(' ')}>{props.children}</div>
                <Overlay shown={props.shown} toggle={props.toggle} fillScreen />
            </div>
        </>
    );
};
