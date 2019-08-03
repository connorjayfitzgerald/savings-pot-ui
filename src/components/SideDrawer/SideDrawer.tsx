// ------------------------------- NODE MODULES -------------------------------

import React, { Fragment, useContext } from 'react';
import { NavLink } from 'react-router-dom';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './SideDrawer.module.scss';
import { AppContext, UserContext } from '../../contexts';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export const SideDrawer = (): JSX.Element => {
    const { sideDrawerOpen, toggleSideDrawer } = useContext(AppContext);
    const { setAuthenticated } = useContext(UserContext);

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
                    <NavLink
                        to="/"
                        onClick={() => {
                            setAuthenticated(false);
                            toggleSideDrawer();
                        }}
                    >
                        Log Out
                    </NavLink>
                </div>
            </div>
            <div onClick={toggleSideDrawer} className={overlayClasses.join(' ')} />
        </Fragment>
    );
};
