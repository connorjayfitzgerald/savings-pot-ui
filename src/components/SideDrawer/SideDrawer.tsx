// ------------------------------- NODE MODULES -------------------------------

import React, { Fragment, useContext } from 'react';
import { NavLink } from 'react-router-dom';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './SideDrawer.module.scss';
import { Button } from '../../ui';
import { AppContext } from '../../contexts';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export const SideDrawer = (): JSX.Element => {
    const { sideDrawerOpen, toggleSideDrawer } = useContext(AppContext);

    const siderawerClasses = [classes.SideDrawer];
    const overlayClasses = [classes.Overlay];

    if (sideDrawerOpen) {
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
                                <NavLink to={link.to} onClick={toggleSideDrawer}>
                                    {link.text}
                                </NavLink>
                                <hr />
                            </Fragment>
                        ),
                    )}
                </div>
                <Button>Log Out</Button>
            </div>
            <div onClick={toggleSideDrawer} className={overlayClasses.join(' ')} />
        </Fragment>
    );
};
