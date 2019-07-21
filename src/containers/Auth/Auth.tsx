// ------------------------------- NODE MODULES -------------------------------

import React from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

import { Login } from './Login/Login';
import './Auth.css';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export const Auth = (): JSX.Element => {
    const registering = false;

    return <div className="Auth">{registering ? <p>Registering</p> : <Login />}</div>;
};
