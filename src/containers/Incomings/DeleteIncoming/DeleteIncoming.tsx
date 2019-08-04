// ------------------------------- NODE MODULES -------------------------------

import React, { FormEvent, MouseEvent, useContext } from 'react';

// ------------------------------ CUSTOM MODULES ------------------------------

import classes from './DeleteIncoming.module.scss';
import { AppContext } from '../../../contexts';
import { Button } from '../../../ui';
import { Modal } from '../../../components';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

interface DeleteIncomingProps {
    shown: boolean;
    toggle: () => void;
}

export const DeleteIncoming = (props: DeleteIncomingProps): JSX.Element => {
    const { setLoading } = useContext(AppContext);

    const submitDeleteIncoming = (event?: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
        if (event) event.preventDefault();

        setLoading(true);

        setTimeout(() => {
            props.toggle();
            setLoading(false);
        }, 1000);
    };

    return (
        <Modal shown={props.shown} toggle={props.toggle}>
            <div className={classes.DeleteIncoming}>
                <p>Are you sure you would like to remove this incoming?</p>
                <div className={classes.ButtonRow}>
                    <Button onClick={submitDeleteIncoming} invert>
                        Yes
                    </Button>
                    <Button onClick={props.toggle} invert>
                        No
                    </Button>
                </div>
            </div>
        </Modal>
    );
};
