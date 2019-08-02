// ------------------------------- NODE MODULES -------------------------------

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './Navbar.module.scss';
import { Burger } from './Burger/Burger';
import { AppContext } from '../../contexts';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export const Navbar = (): JSX.Element => {
    const { toggleSideDrawer } = useContext(AppContext);

    return (
        <header className={classes.Navbar}>
            <nav>
                <Burger onClick={toggleSideDrawer} />
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
