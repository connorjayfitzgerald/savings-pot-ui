// ------------------------------- NODE MODULES -------------------------------

import React, { DetailedHTMLProps } from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './FieldSet.module.css';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export const FieldSet = (
    props: DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
): JSX.Element => {
    return (
        <fieldset className={classes.FieldSet}>
            <input {...props}></input>
            <legend>{props.placeholder}</legend>
        </fieldset>
    );
};
