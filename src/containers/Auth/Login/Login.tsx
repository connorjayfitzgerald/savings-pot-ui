// ------------------------------- NODE MODULES -------------------------------

import React, { FormEvent, useState, ChangeEvent, useContext, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './Login.module.scss';
import { Button, FieldSet } from '../../../ui';
import { AppContext } from '../../../contexts';

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
    const appContext = useContext(AppContext);
    const loginButtonRef = useRef<HTMLButtonElement>(null);

    const attemptLogin = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if (loginButtonRef.current) {
            // To close mobile keyboard when submitting
            loginButtonRef.current.focus();
        }

        appContext.setLoading(true);

        setTimeout(() => {
            props.toggleAuth();
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
            appContext.setLoading(false);
        }, 1000);
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
            <FieldSet
                autoFocus
                placeholder="Username"
                value={details.username}
                onChange={createChangeHandler('username')}
            />
            <FieldSet
                placeholder="Password"
                type="password"
                value={details.password}
                onChange={createChangeHandler('password')}
            />
            <Button ref={loginButtonRef} disabled={!(details.username && details.password)}>
                Log In
            </Button>
            <p>
                <Link to="/register">Click here</Link> to sign up
            </p>
        </form>
    );
};
