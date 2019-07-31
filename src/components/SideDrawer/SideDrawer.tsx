// ------------------------------- NODE MODULES -------------------------------

import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

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

    const links = [
        {
            to: '/',
            text: 'Summary',
        },
        {
            to: '/savings',
            text: 'Savings',
        },
        {
            to: '/incomings',
            text: 'Incomings',
        },
        {
            to: '/outgoings',
            text: 'Outgoings',
        },
        {
            to: '/ious',
            text: 'IOUs',
        },
        {
            to: '/settings',
            text: 'Settings',
        },
    ];

    return (
        <Fragment>
            <div className={siderawerClasses.join(' ')}>
                <div className={classes.SideDrawerLinks}>
                    {links.map(
                        (link, index): JSX.Element => (
                            <Fragment key={index}>
                                <NavLink to={link.to} onClick={props.toggle}>
                                    {link.text}
                                </NavLink>
                                <hr />
                            </Fragment>
                        ),
                    )}
                </div>
                <Button>Log Out</Button>
            </div>
            <div onClick={props.toggle} className={overlayClasses.join(' ')} />
        </Fragment>
    );
};
