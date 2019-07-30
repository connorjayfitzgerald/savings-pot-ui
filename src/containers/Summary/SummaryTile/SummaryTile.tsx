// ------------------------------- NODE MODULES -------------------------------

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { RouteComponentProps, withRouter } from 'react-router-dom';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './SummaryTile.module.scss';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export enum Direction {
    UP = 'UP',
    DOWN = 'DOWN',
}

interface SummaryTileProps extends RouteComponentProps {
    direction: Direction;
    value: number;
}

const SummaryTileBase = (props: SummaryTileProps): JSX.Element => {
    const Icon = <FontAwesomeIcon size="5x" icon={props.direction === Direction.UP ? faArrowUp : faArrowDown} />;

    const tileClasses = [classes.SummaryTile];

    if (props.direction === Direction.DOWN) {
        tileClasses.push(classes.Down);
    }

    return (
        <div
            onClick={() => props.history.push(props.direction === Direction.UP ? '/incomings' : '/outgoings')}
            className={tileClasses.join(' ')}
        >
            {Icon}
            <h3>£{props.value.toFixed(2)}</h3>
        </div>
    );
};

export const SummaryTile = withRouter(SummaryTileBase);
