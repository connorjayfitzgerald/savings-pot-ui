// ------------------------------- NODE MODULES -------------------------------

import React, { FormEvent, useState, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './Login.module.scss';
import { Button, FieldSet } from '../../../ui';

// -------------------------------- VARIABLES ---------------------------------

const initialState: Record<string, string> = {
    username: '',
    password: '',
};

// ----------------------------- FILE DEFINITION ------------------------------

interface LoginProps {
    toggleAuth: () => void;
}

export const Login = (props: LoginProps): JSX.Element => {
    const attemptLogin = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        props.toggleAuth();
    };

    const [details, setDetails] = useState(initialState);

    const createChangeHandler = (key: string) => (event: ChangeEvent<HTMLInputElement>): void => {
        const newValue = event.currentTarget.value;

        setDetails(prevState => {
            return {
                ...prevState,
                [key]: newValue,
            };
        });
    };

    return (
        <form onSubmit={attemptLogin} className={classes.Login}>
            <FontAwesomeIcon size="6x" icon={faPiggyBank} />
            <FieldSet placeholder="Username" value={details.username} onChange={createChangeHandler('username')} />
            <FieldSet
                placeholder="Password"
                type="password"
                value={details.password}
                onChange={createChangeHandler('password')}
            />
            <Button disabled={!(details.username && details.password)}>Log In</Button>
            <p>
                <Link to="/register">Click here</Link> to sign up
            </p>
        </form>
    );
};
