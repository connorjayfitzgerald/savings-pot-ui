// ------------------------------- NODE MODULES -------------------------------

import React, { DetailedHTMLProps } from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './Button.module.css';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export const Button = (
    props: DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
): JSX.Element => {
    return (
        <button className={classes.Button} {...props}>
            {props.children}
        </button>
    );
};
