// ------------------------------- NODE MODULES -------------------------------

import React from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './Loading.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

interface LoadingProps {
    show: boolean;
}

export const Loading = (props: LoadingProps): JSX.Element => {
    return (
        <div className={`${classes.Loading}${props.show ? '' : ` ${classes.Hide}`}`}>
            <FontAwesomeIcon size={'6x'} icon={faCircleNotch} spin className={props.show ? '' : ` ${classes.Hide}`} />
        </div>
    );
};
