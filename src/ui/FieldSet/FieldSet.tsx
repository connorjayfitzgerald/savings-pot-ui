// ------------------------------- NODE MODULES -------------------------------

import React from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './FieldSet.module.css';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

interface FieldSetProps {
    invalid?: boolean;
    placeholder: string;
    type?: string;
}

export const FieldSet = (props: FieldSetProps): JSX.Element => {
    const appliedClasses = [classes.FieldSet];

    if (props.invalid) {
        appliedClasses.push(classes.Invalid);
    }

    return (
        <fieldset className={appliedClasses.join(' ')}>
            <input type={props.type}></input>
            <legend>{props.placeholder}</legend>
        </fieldset>
    );
};
