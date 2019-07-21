// ------------------------------- NODE MODULES -------------------------------

import React, { FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './Login.module.css';
import { Button, FieldSet } from '../../../ui';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export const Login = (): JSX.Element => {
    const attemptLogin = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
    };

    return (
        <form onSubmit={attemptLogin} className={classes.Login}>
            <FontAwesomeIcon size="6x" icon={faPiggyBank} />
            <FieldSet placeholder="Username" />
            <FieldSet placeholder="Password" type="password" />
            <Button>Log In</Button>
            <p>
                <a href="/register">Click here</a> to sign up
            </p>
        </form>
    );
};
