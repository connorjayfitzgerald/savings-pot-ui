// ------------------------------- NODE MODULES -------------------------------

import React from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './IOU.module.scss';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

/* eslint-disable @typescript-eslint/interface-name-prefix */
interface IOUProps {
    payee: string;
    iOwe?: boolean;
    value: number;
}

export const IOU = (props: IOUProps): JSX.Element => {
    const targetClasses = [classes.IOU];

    if (props.iOwe) {
        targetClasses.push(classes.Debt);
    }

    const message = props.iOwe ? (
        <p>
            <strong>
                I owe {props.payee} £{props.value.toFixed(2)}
            </strong>
        </p>
    ) : (
        <p>
            <strong>
                {props.payee} owes me £{props.value.toFixed(2)}
            </strong>
        </p>
    );

    return (
        <div className={targetClasses.join(' ')}>
            <FontAwesomeIcon size="2x" icon={props.iOwe ? faArrowLeft : faArrowRight} />
            {message}
        </div>
    );
};
