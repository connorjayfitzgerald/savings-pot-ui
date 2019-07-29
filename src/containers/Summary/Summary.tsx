// ------------------------------- NODE MODULES -------------------------------

import React from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './Summary.module.scss';
import { SummaryTile, Direction } from './SummaryTile/SummaryTile';
import { Select } from '../../ui';
import { Target } from './Target/Target';
import { IOU } from './IOU/IOU';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export const Summary = (): JSX.Element => {
    const total = 1042.25;

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
                    <SummaryTile direction={Direction.UP} value={1550.5} />
                    <SummaryTile direction={Direction.DOWN} value={508.25} />
                </div>
                <h2>Total: £{total.toFixed(2)}</h2>
                <hr />
                <div className={classes.SummaryBox}>
                    <h2 className={classes.Title}>Targets</h2>
                    <Target target={2000} date={new Date('2019-12-31')} />
                    <Target onTarget target={4000} date={new Date('2020-12-31')} />
                    <Target onTarget target={6000} date={new Date('2021-12-31')} />
                </div>
                <hr />
                <div className={classes.SummaryBox}>
                    <h2 className={classes.Title}>IOUs</h2>
                    <IOU iOwe payee="Jack" value={25} />
                    <IOU payee="Jill" value={15} />
                </div>
            </section>
        </div>
    );
};
