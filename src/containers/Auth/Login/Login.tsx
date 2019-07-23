// ------------------------------- NODE MODULES -------------------------------

import React, { FormEvent, useState, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './Login.module.css';
import { Button, FieldSet } from '../../../ui';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export const Login = (): JSX.Element => {
    const attemptLogin = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
    };

    const [details] = useState({
        username: '',
        password: '',
    });

    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {};

    return (
        <form onSubmit={attemptLogin} className={classes.Login}>
            <FontAwesomeIcon size="6x" icon={faPiggyBank} />
            <FieldSet placeholder="Username" value={details.username} onChange={inputChangeHandler} />
            <FieldSet placeholder="Password" type="password" value={details.username} onChange={inputChangeHandler} />
            <Button>Log In</Button>
            <p>
                <Link to="/register">Click here</Link> to sign up
            </p>
        </form>
    );
};
