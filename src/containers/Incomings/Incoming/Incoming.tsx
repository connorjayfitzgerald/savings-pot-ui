// ------------------------------- NODE MODULES -------------------------------

import React from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './Incoming.module.scss';
import { formatDate } from '../../../utils';

// -------------------------------- VARIABLES ---------------------------------

interface IncomingProps {
    id: number;
    userId: number;
    amount: number;
    frequency: string;
    description: string;
    salary: boolean;
    startDate: Date;
    endDate?: Date;
    createdAt: Date;
    updatedAt: Date;
}

// ----------------------------- FILE DEFINITION ------------------------------

export const Incoming = (props: IncomingProps): JSX.Element => {
    return (
        <div className={classes.Incoming}>
            <h3>£{props.amount.toFixed(2)}</h3>
            <p className={classes.Capitalise}>{props.frequency}</p>
            <p>{props.description}</p>
            <p>
                {formatDate(props.startDate)} until {props.endDate ? formatDate(props.endDate) : 'further notice'}
            </p>
        </div>
    );
};
