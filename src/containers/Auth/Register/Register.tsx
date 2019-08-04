// ------------------------------- NODE MODULES -------------------------------

import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { isAlpha, isLength, isEmail } from 'validator';

// ------------------------------ CUSTOM MODULES ------------------------------

import { Button } from '../../../ui';
import classes from './Register.module.scss';
import { Form, FormState, FormFields } from '../../../ui/Form/Form';

// -------------------------------- VARIABLES ---------------------------------

const initialState: FormFields = {
    forename: {
        placeholder: 'Forename',
        validator: (prevState, newValue) => isAlpha(`${newValue}`),
    },
    surname: {
        placeholder: 'Surname',
        validator: (prevState, newValue) => isAlpha(`${newValue}`),
    },
    username: {
        placeholder: 'Username',
        validator: (prevState, newValue) => isLength(`${newValue}`, { min: 8, max: 25 }),
    },
    email: {
        placeholder: 'Email',
        validator: (prevState, newValue) => isEmail(`${newValue}`),
    },
    password: {
        placeholder: 'Password',
        validator: (prevState, newValue) => isLength(`${newValue}`, { min: 8 }),
        type: 'password',
        monitors: ['confirmPassword'],
    },
    confirmPassword: {
        placeholder: 'Confirm Password',
        validator: (prevState, newValue) => prevState.password.valid && prevState.password.value === newValue,
        type: 'password',
    },
};

// ----------------------------- FILE DEFINITION ------------------------------

export const Register = (): JSX.Element => {
    const attemptRegister = (): void => {};

    const [form, setForm] = useState({
        valid: false,
        fields: ({} as unknown) as FormState,
    });

    return (
        <Form
            className={classes.Register}
            onSubmit={attemptRegister}
            data={form}
            setter={setForm}
            fields={initialState}
        >
            <Button disabled={!form.valid}>Register</Button>
            <p>
                <Link to="/">Click here</Link> to go back
            </p>
        </Form>
    );
};
