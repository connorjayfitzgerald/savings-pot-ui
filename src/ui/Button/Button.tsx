// ------------------------------- NODE MODULES -------------------------------

import React, { forwardRef, Ref } from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './Button.module.scss';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

interface ButtonProps {
    ref: Ref<HTMLButtonElement | HTMLInputElement>;
    disabled?: boolean;
    invert?: boolean;
    children: any;
    onClick?: () => void;
}

export const Button = forwardRef(
    (props: ButtonProps, ref: Ref<HTMLButtonElement | HTMLInputElement>): JSX.Element => {
        const buttonClasses = [classes.Button];

        if (props.invert) buttonClasses.push(classes.Invert);

        return (
            <div className={buttonClasses.join(' ')}>
                <button onClick={props.onClick} ref={ref as Ref<HTMLButtonElement>} disabled={props.disabled}>
                    {props.children}
                </button>
            </div>
        );
    },
);

Button.displayName = 'Button';
