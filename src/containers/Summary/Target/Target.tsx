// ------------------------------- NODE MODULES -------------------------------

import React from 'react';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './Target.module.scss';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

interface TargetProps {
    onTarget?: boolean;
    target: number;
    date: Date;
}

const formatDate = (date: Date) => {
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
};

export const Target = (props: TargetProps): JSX.Element => {
    const targetClasses = [classes.Target];

    if (props.onTarget) {
        targetClasses.push(classes.OnTarget);
    }

    return (
        <div className={targetClasses.join(' ')}>
            <FontAwesomeIcon size="2x" icon={faBullseye} />
            <p>
                <strong>£{props.target.toFixed(2)}</strong> by <strong>{formatDate(props.date)}</strong>
            </p>
        </div>
    );
};
