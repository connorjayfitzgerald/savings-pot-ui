// ------------------------------- NODE MODULES -------------------------------

import React, { Fragment } from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './SideDrawer.module.scss';
import { Button } from '../../ui';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

interface SideDrawerProps {
    shown: boolean;
    toggle: () => void;
}

export const SideDrawer = (props: SideDrawerProps): JSX.Element => {
    const siderawerClasses = [classes.SideDrawer];
    const overlayClasses = [classes.Overlay];

    if (props.shown) {
        siderawerClasses.push(classes.Shown);
        overlayClasses.push(classes.Shown);
    } else {
        siderawerClasses.push(classes.Hidden);
        overlayClasses.push(classes.Hidden);
    }

    return (
        <Fragment>
            <div className={siderawerClasses.join(' ')}>
                <div className={classes.SideDrawerLinks} />
                <Button>Log Out</Button>
            </div>
            <div onClick={props.toggle} className={overlayClasses.join(' ')} />
        </Fragment>
    );
};
