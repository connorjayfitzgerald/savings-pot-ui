// ------------------------------- NODE MODULES -------------------------------

import React, { Fragment, useContext } from 'react';
import { NavLink } from 'react-router-dom';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './SideDrawer.module.scss';
import { AppContext, UserContext } from '../../contexts';
import { Overlay } from '../Overlay/Overlay';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export const SideDrawer = (): JSX.Element => {
    const { sideDrawerOpen, toggleSideDrawer } = useContext(AppContext);
    const { setAuthenticated } = useContext(UserContext);

    const sideDrawerClasses = [classes.SideDrawer];

    if (sideDrawerOpen) sideDrawerClasses.push(classes.Shown);

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
        <>
            <div className={sideDrawerClasses.join(' ')}>
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
            <Overlay shown={sideDrawerOpen} toggle={toggleSideDrawer} />
        </>
    );
};
