// ------------------------------- NODE MODULES -------------------------------

import React, { useState } from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './Incoming.module.scss';
import { formatDate } from '../../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { DeleteIncoming } from '../DeleteIncoming/DeleteIncoming';

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
    const [deletingIncoming, setDeletingIncoming] = useState(false);
    const toggleDeletingIncoming = () => setDeletingIncoming(prevState => !prevState);

    return (
        <>
            <DeleteIncoming shown={deletingIncoming} toggle={toggleDeletingIncoming} />
            <div className={classes.Incoming}>
                <div className={classes.Header}>
                    <div className={classes.Icon} onClick={toggleDeletingIncoming}>
                        <FontAwesomeIcon size="1x" icon={faPencilAlt} />
                    </div>

                    <h3>£{props.amount.toFixed(2)}</h3>

                    <div className={classes.Icon} onClick={toggleDeletingIncoming}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </div>
                </div>
                <p className={classes.Capitalise}>{props.frequency}</p>
                <p>{props.description}</p>
                <p>
                    {formatDate(props.startDate)} until {props.endDate ? formatDate(props.endDate) : 'further notice'}
                </p>
            </div>
        </>
    );
};
