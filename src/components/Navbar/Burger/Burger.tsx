// ------------------------------- NODE MODULES -------------------------------

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './Burger.module.scss';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

interface BurgerProps {
    onClick: () => void;
}

export const Burger = (props: BurgerProps): JSX.Element => {
    return (
        <div onClick={props.onClick} className={classes.Burger}>
            <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
    );
};
