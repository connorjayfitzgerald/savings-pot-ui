// ------------------------------- NODE MODULES -------------------------------

import React, { ChangeEvent } from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './FieldSet.module.scss';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

interface FieldSetProps {
    invalid?: boolean;
    autoFocus?: boolean;
    placeholder: string;
    type?: string;
    value: string | number;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const FieldSet = (props: FieldSetProps): JSX.Element => {
    const appliedClasses = [classes.FieldSet];

    if (props.invalid) {
        appliedClasses.push(classes.Invalid);
    }

    return (
        <fieldset className={appliedClasses.join(' ')}>
            <input autoFocus={props.autoFocus} type={props.type} value={props.value} onChange={props.onChange}></input>
            <legend>{props.placeholder}</legend>
        </fieldset>
    );
};
