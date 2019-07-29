// ------------------------------- NODE MODULES -------------------------------

import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';

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
                <FontAwesomeIcon size="6x" icon={faPiggyBank} />
                <div className={classes.SideDrawerLinks}>
                    <NavLink to="/">Summary</NavLink>
                    <NavLink to="/incomings">Incomings</NavLink>
                    <NavLink to="/outgoings">Outgoings</NavLink>
                    <NavLink to="/ious">IOUs</NavLink>
                    <NavLink to="/settings">Settings</NavLink>
                    <Button>Log Out</Button>
                </div>
            </div>
            <div onClick={props.toggle} className={overlayClasses.join(' ')} />
        </Fragment>
    );
};
