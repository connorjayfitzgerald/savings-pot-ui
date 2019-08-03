// ------------------------------- NODE MODULES -------------------------------

import React, { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef, Ref } from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './Button.module.scss';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export const Button = forwardRef(
    (
        props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
        ref: Ref<HTMLButtonElement>,
    ): JSX.Element => (
        <button ref={ref} className={classes.Button} {...props}>
            {props.children}
        </button>
    ),
);

Button.displayName = 'Button';
