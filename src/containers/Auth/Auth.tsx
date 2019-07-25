// ------------------------------- NODE MODULES -------------------------------

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// ------------------------------ CUSTOM MODULES ------------------------------

import { Login } from './Login/Login';
import classes from './Auth.module.css';
import { Register } from './Register/Register';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

interface AuthProps {
    toggleAuth: () => void;
}

export const Auth = (props: AuthProps): JSX.Element => {
    return (
        <div className={classes.Auth}>
            <Switch>
                <Route path="/" exact render={() => <Login toggleAuth={props.toggleAuth} />} />
                <Route path="/register" exact component={Register} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
};
