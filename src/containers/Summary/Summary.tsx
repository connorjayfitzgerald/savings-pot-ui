// ------------------------------- NODE MODULES -------------------------------

import React from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './Summary.module.scss';
import { SummaryTile, Direction } from './SummaryTile/SummaryTile';
import { Select } from '../../ui';
import { Target } from './Target/Target';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export const Summary = (): JSX.Element => {
    const total = 1234.5;

    return (
        <div className={classes.Summary}>
            <section>
                <Select>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Annually</option>
                </Select>
                <div className={classes.Tiles}>
                    <SummaryTile direction={Direction.UP} value={100.5} />
                    <SummaryTile direction={Direction.DOWN} value={50.5} />
                </div>
                <h2>Total: £{total.toFixed(2)}</h2>
                <h2 className={classes.Title}>Targets</h2>
                <Target target={2000} date={new Date('2019-12-31')} />
                <Target onTarget target={4000} date={new Date('2020-12-31')} />
                <Target onTarget target={6000} date={new Date('2021-12-31')} />
            </section>
        </div>
    );
};
