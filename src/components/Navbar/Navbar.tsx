// ------------------------------- NODE MODULES -------------------------------

import React from 'react';
import { NavLink } from 'react-router-dom';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './Navbar.module.scss';
import { Burger } from './Burger/Burger';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

interface NavbarProps {
    toggleDrawer: () => void;
}

export const Navbar = (props: NavbarProps): JSX.Element => {
    return (
        <header className={classes.Navbar}>
            <nav>
                <Burger onClick={props.toggleDrawer} />
                <ul>
                    <NavLink activeClassName={classes.Active} exact to="/">
                        Summary
                    </NavLink>
                    <NavLink activeClassName={classes.Active} to="/incomings">
                        Incomings
                    </NavLink>
                    <NavLink activeClassName={classes.Active} to="/something-else">
                        Something Else
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
};
