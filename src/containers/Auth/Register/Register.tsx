// ------------------------------- NODE MODULES -------------------------------

import React, { FormEvent, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { isAlpha, isLength, isEmail } from 'validator';

// ------------------------------ CUSTOM MODULES ------------------------------

import { FieldSet, Button } from '../../../ui';
import classes from './Register.module.css';

// -------------------------------- VARIABLES ---------------------------------

interface FormItem {
    value: string;
    valid: boolean;
    validator: (prevState: FormState, newValue: string) => boolean;
    touched: boolean;
}

type FormState = Record<string, FormItem>;

const initialState: FormState = {
    forename: {
        value: '',
        valid: true,
        validator: (prevState: FormState, newValue: string) => isAlpha(newValue),
        touched: false,
    },
    surname: {
        value: '',
        valid: true,
        validator: (prevState: FormState, newValue: string) => isAlpha(newValue),
        touched: false,
    },
    username: {
        value: '',
        valid: true,
        validator: (prevState: FormState, newValue: string) => isLength(newValue, { min: 8, max: 25 }),
        touched: false,
    },
    email: {
        value: '',
        valid: true,
        validator: (prevState: FormState, newValue: string) => isEmail(newValue),
        touched: false,
    },
    password: {
        value: '',
        valid: true,
        validator: (prevState: FormState, newValue: string) => isLength(newValue, { min: 8 }),
        touched: false,
    },
    confirmPassword: {
        value: '',
        valid: true,
        validator: (prevState: FormState, newValue: string) => prevState.password.value === newValue,
        touched: false,
    },
};

// ----------------------------- FILE DEFINITION ------------------------------

export const Register = (): JSX.Element => {
    const attemptRegister = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
    };

    const [details, setDetails] = useState(initialState);

    const formIsValid = (): boolean => {
        return Reflect.ownKeys(details).every(key => {
            const formItem = details[String(key)];

            return formItem.touched && formItem.valid;
        });
    };

    const createChangeHandler = (key: string) => (event: ChangeEvent<HTMLInputElement>): void => {
        const newValue = event.currentTarget.value;

        setDetails(prevState => {
            const valid = prevState[key].validator(prevState, newValue);

            return {
                ...prevState,
                [key]: {
                    ...prevState[key],
                    valid,
                    value: newValue,
                    touched: true,
                },
            };
        });
    };

    return (
        <form onSubmit={attemptRegister} className={classes.Register}>
            <FieldSet
                invalid={!details.forename.valid}
                placeholder="Forename"
                value={details.forename.value}
                onChange={createChangeHandler('forename')}
            />
            <FieldSet
                placeholder="Surname"
                invalid={!details.surname.valid}
                value={details.surname.value}
                onChange={createChangeHandler('surname')}
            />
            <FieldSet
                placeholder="Username"
                invalid={!details.username.valid}
                value={details.username.value}
                onChange={createChangeHandler('username')}
            />
            <FieldSet
                placeholder="Email"
                invalid={!details.email.valid}
                type="email"
                value={details.email.value}
                onChange={createChangeHandler('email')}
            />
            <FieldSet
                placeholder="Password"
                invalid={!details.password.valid}
                type="password"
                value={details.password.value}
                onChange={createChangeHandler('password')}
            />
            <FieldSet
                placeholder="Confirm Password"
                invalid={!details.confirmPassword.valid}
                type="password"
                value={details.confirmPassword.value}
                onChange={createChangeHandler('confirmPassword')}
            />
            <Button disabled={!formIsValid()}>Register</Button>
            <p>
                <Link to="/">Click here</Link> to go back
            </p>
        </form>
    );
};
