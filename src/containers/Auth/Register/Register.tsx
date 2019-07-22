// ------------------------------- NODE MODULES -------------------------------

import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';

// ------------------------------ CUSTOM MODULES ------------------------------

import { FieldSet, Button } from '../../../ui';
import classes from './Register.module.css';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export const Register = (): JSX.Element => {
    const attemptRegister = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
    };

    return (
        <form onSubmit={attemptRegister} className={classes.Register}>
            <FieldSet invalid placeholder="Forename" />
            <FieldSet placeholder="Surname" />
            <FieldSet placeholder="Username" />
            <FieldSet placeholder="Email" type="email" />
            <FieldSet placeholder="Password" type="password" />
            <FieldSet placeholder="Confirm Password" type="password" />
            <Button>Register</Button>
            <p>
                <Link to="/">Click here</Link> to go back
            </p>
        </form>
    );
};
