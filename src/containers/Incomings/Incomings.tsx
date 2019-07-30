// ------------------------------- NODE MODULES -------------------------------

import React from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './Incomings.module.scss';
import { Incoming } from './Incoming/Incoming';

// -------------------------------- VARIABLES ---------------------------------

const exampleData = [
    {
        id: 1,
        userId: 1,
        amount: 1000.0,
        frequency: 'monthly',
        description: 'Salary',
        salary: false,
        startDate: new Date('2019-05-27T16:42:02.000Z'),
        createdAt: new Date('2019-05-27T16:43:35.000Z'),
        updatedAt: new Date('2019-05-27T16:43:35.000Z'),
    },
    {
        id: 2,
        userId: 1,
        amount: 550.5,
        frequency: 'monthly',
        description: 'Side job',
        salary: false,
        startDate: new Date('2019-05-27T16:42:02.000Z'),
        endDate: new Date('2020-05-27T16:42:02.000Z'),
        createdAt: new Date('2019-05-27T16:43:35.000Z'),
        updatedAt: new Date('2019-05-27T16:43:35.000Z'),
    },
];

// ----------------------------- FILE DEFINITION ------------------------------

export const Incomings = (): JSX.Element => {
    return (
        <div className={classes.Incomings}>
            {exampleData.map(incoming => (
                <Incoming key={incoming.id} {...incoming} />
            ))}
        </div>
    );
};
