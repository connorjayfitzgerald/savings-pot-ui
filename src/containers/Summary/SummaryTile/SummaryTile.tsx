// ------------------------------- NODE MODULES -------------------------------

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './SummaryTile.module.scss';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export enum Direction {
    UP = 'UP',
    DOWN = 'DOWN',
}

interface SummaryTileProps {
    direction: Direction;
    value: number;
}

export const SummaryTile = (props: SummaryTileProps): JSX.Element => {
    const Icon = <FontAwesomeIcon size="6x" icon={props.direction === Direction.UP ? faArrowUp : faArrowDown} />;

    const tileClasses = [classes.SummaryTile];

    if (props.direction === Direction.DOWN) {
        tileClasses.push(classes.Down);
    }

    return (
        <div className={tileClasses.join(' ')}>
            {Icon}
            <h3>£{props.value.toFixed(2)}</h3>
        </div>
    );
};
