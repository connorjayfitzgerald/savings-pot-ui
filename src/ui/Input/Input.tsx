// ------------------------------- NODE MODULES -------------------------------

import React, { DetailedHTMLProps } from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './Input.module.css';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export const Input = (
    props: DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
): JSX.Element => {
    return <input className={classes.Input} {...props} />;
};
