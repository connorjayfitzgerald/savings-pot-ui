// ------------------------------- NODE MODULES -------------------------------

import React from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

import { Login } from './Login/Login';
import classes from './Auth.module.css';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export const Auth = (): JSX.Element => {
    const registering = false;

    return <div className={classes.Auth}>{registering ? <p>Registering</p> : <Login />}</div>;
};
