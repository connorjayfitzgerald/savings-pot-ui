// ------------------------------- NODE MODULES -------------------------------

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// ------------------------------ CUSTOM MODULES ------------------------------

import { Login } from './Login/Login';
import classes from './Auth.module.css';
import { Register } from './Register/Register';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export const Auth = (): JSX.Element => {
    return (
        <div className={classes.Auth}>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
};
